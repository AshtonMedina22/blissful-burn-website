import { NextResponse } from "next/server";
import Stripe from "stripe";
import { getProductsByIds } from "@/lib/products";

type CheckoutRequestBody = {
  items: Array<{ productId: string; quantity: number }>;
};

function getStripeClient() {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    return null;
  }
  return new Stripe(secretKey);
}

export async function POST(request: Request) {
  try {
    const stripe = getStripeClient();
    if (!stripe) {
      return NextResponse.json(
        {
          error:
            "Stripe is not configured yet. Add STRIPE_SECRET_KEY, NEXT_PUBLIC_SITE_URL, STRIPE_SUCCESS_URL, and STRIPE_CANCEL_URL environment variables.",
        },
        { status: 503 },
      );
    }

    const body = (await request.json()) as CheckoutRequestBody;
    const requestedItems = Array.isArray(body?.items) ? body.items : [];

    if (requestedItems.length === 0) {
      return NextResponse.json(
        { error: "Cart is empty." },
        { status: 400 },
      );
    }

    const positiveItems = requestedItems
      .map((item) => ({
        productId: item.productId,
        quantity: Number(item.quantity),
      }))
      .filter((item) => item.productId && item.quantity > 0);

    if (positiveItems.length === 0) {
      return NextResponse.json(
        { error: "No valid line items were provided." },
        { status: 400 },
      );
    }

    const products = getProductsByIds(positiveItems.map((item) => item.productId));
    if (products.length === 0) {
      return NextResponse.json(
        { error: "No matching products were found." },
        { status: 400 },
      );
    }

    const lineItems = positiveItems
      .map((item) => {
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
            },
          },
        };
      })
      .filter((lineItem) => Boolean(lineItem)) as NonNullable<
      Stripe.Checkout.SessionCreateParams["line_items"]
    >;

    if (lineItems.length === 0) {
      return NextResponse.json(
        { error: "No valid products were found for checkout." },
        { status: 400 },
      );
    }

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
    const successUrl =
      process.env.STRIPE_SUCCESS_URL ?? `${siteUrl}/cart?checkout=success`;
    const cancelUrl =
      process.env.STRIPE_CANCEL_URL ?? `${siteUrl}/cart?checkout=cancelled`;

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: lineItems,
      success_url: successUrl,
      cancel_url: cancelUrl,
      billing_address_collection: "auto",
      shipping_address_collection: {
        allowed_countries: ["US", "CA"],
      },
      metadata: {
        source: "blissfulburn-web",
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "Unexpected checkout session error.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
