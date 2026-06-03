import { NextResponse } from "next/server";
import Stripe from "stripe";
import { getProductsByIds } from "@/lib/products";

type CheckoutRequestBody = {
  items: Array<{ productId: string; quantity: number }>;
};

type CheckoutLineItem = NonNullable<
  Stripe.Checkout.SessionCreateParams["line_items"]
>[number];
type AllowedShippingCountry = NonNullable<
  NonNullable<
    Stripe.Checkout.SessionCreateParams["shipping_address_collection"]
  >["allowed_countries"]
>[number];

const DEFAULT_ALLOWED_SHIPPING_COUNTRIES = ["US"];

function getStripeClient() {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    return null;
  }

  return new Stripe(secretKey);
}

function getSiteUrl() {
  return (
    process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.NEXT_PUBLIC_BASE_URL ??
    "http://localhost:3000"
  ).replace(/\/$/, "");
}

function getAllowedShippingCountries() {
  const configuredCountries = process.env.STRIPE_SHIPPING_COUNTRIES?.split(",")
    .map((country) => country.trim().toUpperCase())
    .filter(Boolean);

  return configuredCountries?.length
    ? configuredCountries
    : DEFAULT_ALLOWED_SHIPPING_COUNTRIES;
}

function shouldAllowPromotionCodes() {
  return process.env.STRIPE_ALLOW_PROMOTION_CODES !== "false";
}

function shouldEnableAutomaticTax() {
  return process.env.STRIPE_ENABLE_AUTOMATIC_TAX === "true";
}

export async function POST(request: Request) {
  try {
    const stripe = getStripeClient();
    if (!stripe) {
      return NextResponse.json(
        {
          error:
            "Stripe is not configured yet. Add STRIPE_SECRET_KEY and NEXT_PUBLIC_SITE_URL environment variables.",
        },
        { status: 503 },
      );
    }

    const body = (await request.json()) as CheckoutRequestBody;
    const requestedItems = Array.isArray(body?.items) ? body.items : [];

    if (requestedItems.length === 0) {
      return NextResponse.json({ error: "Cart is empty." }, { status: 400 });
    }

    const itemQuantities = new Map<string, number>();
    for (const item of requestedItems) {
      const productId = String(item.productId ?? "").trim();
      const quantity = Math.min(Math.floor(Number(item.quantity)), 99);

      if (!productId || quantity <= 0) {
        continue;
      }

      itemQuantities.set(
        productId,
        (itemQuantities.get(productId) ?? 0) + quantity,
      );
    }

    const positiveItems = Array.from(itemQuantities.entries()).map(
      ([productId, quantity]) => ({ productId, quantity }),
    );

    if (positiveItems.length === 0) {
      return NextResponse.json(
        { error: "No valid line items were provided." },
        { status: 400 },
      );
    }

    const products = getProductsByIds(
      positiveItems.map((item) => item.productId),
    );
    if (products.length === 0) {
      return NextResponse.json(
        { error: "No matching products were found." },
        { status: 400 },
      );
    }

    const lineItems = positiveItems
      .map((item): CheckoutLineItem | null => {
        const product = products.find((p) => p.id === item.productId);
        if (!product) {
          return null;
        }

        return {
          quantity: item.quantity,
          price_data: {
            currency: "usd",
            unit_amount: product.priceCents,
            product_data: {
              name: product.name,
              description: product.note,
              metadata: {
                product_id: product.id,
                category: product.category,
              },
            },
          },
        } satisfies CheckoutLineItem;
      })
      .filter((lineItem): lineItem is CheckoutLineItem => Boolean(lineItem));

    if (lineItems.length === 0) {
      return NextResponse.json(
        { error: "No valid products were found for checkout." },
        { status: 400 },
      );
    }

    const siteUrl = getSiteUrl();
    const successUrl =
      process.env.STRIPE_SUCCESS_URL ??
      `${siteUrl}/cart?checkout=success&session_id={CHECKOUT_SESSION_ID}`;
    const cancelUrl =
      process.env.STRIPE_CANCEL_URL ?? `${siteUrl}/cart?checkout=cancelled`;
    const cartSummary = positiveItems
      .map((item) => `${item.productId}:${item.quantity}`)
      .join(",");

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: lineItems,
      success_url: successUrl,
      cancel_url: cancelUrl,
      allow_promotion_codes: shouldAllowPromotionCodes(),
      automatic_tax: {
        enabled: shouldEnableAutomaticTax(),
      },
      billing_address_collection: "auto",
      shipping_address_collection: {
        allowed_countries:
          getAllowedShippingCountries() as AllowedShippingCountry[],
      },
      metadata: {
        source: "blissfulburn-web",
        cart: cartSummary,
      },
      payment_intent_data: {
        metadata: {
          source: "blissfulburn-web",
          cart: cartSummary,
        },
      },
    });

    if (!session.url) {
      return NextResponse.json(
        { error: "Stripe did not return a checkout URL." },
        { status: 500 },
      );
    }

    return NextResponse.json({ url: session.url });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Unexpected checkout session error.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
