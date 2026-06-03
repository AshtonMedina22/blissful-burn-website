"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Button, SiteFooter, SiteHeader } from "@/components";
import { useCart } from "@/components/cart/CartContext";
import { ProductVisual } from "@/components/visuals/BrandVisuals";
import { formatPrice } from "@/lib/products";

const quantityOptions = [1, 2, 3, 4, 5, 6, 7, 8];
const trustNotes = [
  "Secure checkout",
  "Small-batch poured",
  "Gift-ready packaging",
];

export default function CartPage() {
  const {
    items,
    subtotal,
    updateQuantity,
    removeItem,
    clearCart,
    detailedItems,
  } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [checkoutError, setCheckoutError] = useState<string | null>(null);
  const [checkoutStatus, setCheckoutStatus] = useState<
    "success" | "cancelled" | null
  >(null);

  const itemCount = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items],
  );

  useEffect(() => {
    const status = new URLSearchParams(window.location.search).get("checkout");

    if (status !== "success" && status !== "cancelled") {
      return;
    }

    queueMicrotask(() => {
      setCheckoutStatus(status);

      if (status === "success") {
        clearCart();
      }
    });
  }, [clearCart]);

  async function handleCheckout() {
    setCheckoutError(null);

    if (items.length === 0) {
      setCheckoutError("Your cart is empty.");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: items.map((item) => ({
            productId: item.productId,
            quantity: item.quantity,
          })),
        }),
      });

      const payload = (await response.json()) as
        | { url: string }
        | { error: string };

      if (!response.ok || "error" in payload) {
        setCheckoutError(
          "error" in payload ? payload.error : "Unable to start checkout.",
        );
        return;
      }

      window.location.href = payload.url;
    } catch {
      setCheckoutError("Network error while starting checkout.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="page-container">
      <div className="page-wrapper">
        <SiteHeader />

        <section className="cart-hero inner-hero">
          <p className="eyebrow">Your cart</p>
          <div className="cart-hero-row">
            <div>
              <h1 className="hero-headline">
                A few soft rituals, ready to glow.
              </h1>
              <p className="hero-description">
                {itemCount > 0
                  ? `${itemCount} item${itemCount === 1 ? "" : "s"} selected for your Blissful Burn order.`
                  : "Your cart is ready for candles, wax melts, and cozy rituals."}
              </p>
            </div>
            {items.length > 0 ? (
              <button className="cart-clear-button" onClick={clearCart}>
                Clear cart
              </button>
            ) : null}
          </div>
        </section>

        <section className="cart-section">
          {checkoutStatus ? (
            <div className={`cart-status-card cart-status-${checkoutStatus}`}>
              <p className="eyebrow">
                {checkoutStatus === "success"
                  ? "Checkout complete"
                  : "Checkout paused"}
              </p>
              <h2 className="cart-empty-title">
                {checkoutStatus === "success"
                  ? "Thank you for your order."
                  : "Your cart is still here."}
              </h2>
              <p className="cart-empty-copy">
                {checkoutStatus === "success"
                  ? "Stripe confirmed the payment flow and your cart has been cleared in the browser."
                  : "No payment was collected. You can keep shopping or return to checkout when you are ready."}
              </p>
              <Link href="/shop" className="button button-primary">
                Continue shopping
              </Link>
            </div>
          ) : items.length === 0 ? (
            <div className="cart-empty-card">
              <p className="eyebrow">Nothing saved yet</p>
              <h2 className="cart-empty-title">
                Start with a signature scent.
              </h2>
              <p className="cart-empty-copy">
                Browse the current candle edit, then come back here to review
                your order before checkout.
              </p>
              <Link href="/shop" className="button button-primary">
                Continue shopping
              </Link>
            </div>
          ) : (
            <div className="cart-layout">
              <div className="cart-items-list" aria-label="Cart items">
                {detailedItems.map((item) => (
                  <article key={item.productId} className="cart-item-card">
                    <Link
                      href={`/shop/${item.product.id}`}
                      className="cart-item-visual"
                      aria-label={`View ${item.product.name}`}
                    >
                      <ProductVisual product={item.product} />
                    </Link>

                    <div className="cart-item-details">
                      <p className="product-category">
                        {item.product.category}
                      </p>
                      <Link
                        href={`/shop/${item.product.id}`}
                        className="product-name-link"
                      >
                        <h2 className="cart-item-title">{item.product.name}</h2>
                      </Link>
                      <p className="cart-item-note">{item.product.note}</p>
                      <p className="cart-item-price">
                        {formatPrice(item.product.priceCents)} each
                      </p>

                      <div className="cart-item-controls">
                        <label
                          className="cart-quantity-label"
                          htmlFor={`qty-${item.productId}`}
                        >
                          Qty
                        </label>
                        <select
                          id={`qty-${item.productId}`}
                          className="cart-quantity-select"
                          value={item.quantity}
                          onChange={(event) =>
                            updateQuantity(
                              item.productId,
                              Number(event.target.value),
                            )
                          }
                        >
                          {quantityOptions.map((qty) => (
                            <option key={qty} value={qty}>
                              {qty}
                            </option>
                          ))}
                        </select>
                        <button
                          className="cart-remove-button"
                          onClick={() => removeItem(item.productId)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>

                    <div className="cart-line-total">
                      <span>Line total</span>
                      <strong>{formatPrice(item.lineTotal)}</strong>
                    </div>
                  </article>
                ))}
              </div>

              <aside className="cart-summary-card" aria-label="Order summary">
                <p className="eyebrow">Order summary</p>
                <div className="cart-summary-lines">
                  <div>
                    <span>Subtotal</span>
                    <strong>{formatPrice(subtotal)}</strong>
                  </div>
                  <div>
                    <span>Shipping</span>
                    <strong>Calculated at checkout</strong>
                  </div>
                  <div>
                    <span>Estimated total</span>
                    <strong>{formatPrice(subtotal)}</strong>
                  </div>
                </div>

                <Button
                  variant="primary"
                  className="cart-checkout-button"
                  onClick={handleCheckout}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Starting checkout..." : "Checkout securely"}
                </Button>

                {checkoutError ? (
                  <p className="cart-error-message">{checkoutError}</p>
                ) : null}

                <div className="cart-trust-list" aria-label="Checkout promises">
                  {trustNotes.map((note) => (
                    <span key={note}>{note}</span>
                  ))}
                </div>

                <p className="cart-summary-note">
                  Final taxes, shipping, and any promo codes are confirmed
                  during secure checkout.
                </p>
              </aside>
            </div>
          )}
        </section>

        <SiteFooter />
      </div>
    </main>
  );
}
