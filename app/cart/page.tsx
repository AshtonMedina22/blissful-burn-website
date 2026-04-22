"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Button, SiteHeader } from "@/components";
import { useCart } from "@/components/cart/CartContext";
import { formatPrice } from "@/lib/products";

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

  const itemCount = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items],
  );

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

        <section className="products-section">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 className="hero-headline !text-[32px] sm:!text-[40px]">
                YOUR CART
              </h1>
              <p className="hero-description !max-w-none">
                {itemCount} item{itemCount === 1 ? "" : "s"} ready for checkout.
              </p>
            </div>
            {items.length > 0 && (
              <button
                className="text-[11px] font-medium tracking-[0.06em] text-[var(--muted)] hover:text-[var(--primary-pink)]"
                onClick={clearCart}
              >
                CLEAR CART
              </button>
            )}
          </div>

          {items.length === 0 ? (
            <div className="rounded-lg border border-[var(--light-grey)] bg-[var(--surface)] p-8 text-center">
              <p className="product-note !text-[12px]">
                Your cart is currently empty.
              </p>
              <div className="mt-4">
                <Link href="/">
                  <Button variant="primary">CONTINUE SHOPPING</Button>
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
              <div className="space-y-4">
                {detailedItems.map((item) => (
                  <article
                    key={item.productId}
                    className="rounded-lg border border-[var(--light-grey)] bg-[var(--surface)] p-4 sm:p-5"
                  >
                    <div className="grid gap-4 sm:grid-cols-[140px_1fr] sm:items-center">
                      <div
                        className="h-32 rounded-md border border-[var(--light-grey)]"
                        style={{ background: item.product.gradient }}
                      />
                      <div>
                        <h2 className="product-name !mt-0 !text-left !text-[13px]">
                          {item.product.name}
                        </h2>
                        <p className="product-note !text-left !text-[11px]">
                          {item.product.note}
                        </p>
                        <p className="product-price !text-left !text-[12px]">
                          {formatPrice(item.product.priceCents)}
                        </p>

                        <div className="mt-3 flex flex-wrap items-center gap-3">
                          <label className="text-[10px] font-medium tracking-[0.05em] text-[var(--muted)]">
                            QTY
                          </label>
                          <select
                            className="rounded-[8px] border border-[var(--light-grey)] bg-[var(--background)] px-2 py-1 text-[11px]"
                            value={item.quantity}
                            onChange={(event) =>
                              updateQuantity(
                                item.productId,
                                Number(event.target.value),
                              )
                            }
                          >
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((qty) => (
                              <option key={qty} value={qty}>
                                {qty}
                              </option>
                            ))}
                          </select>
                          <button
                            className="text-[10px] font-medium tracking-[0.05em] text-[var(--muted)] hover:text-[var(--primary-pink)]"
                            onClick={() => removeItem(item.productId)}
                          >
                            REMOVE
                          </button>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <aside className="h-fit rounded-lg border border-[var(--light-grey)] bg-[var(--surface)] p-5">
                <h2 className="section-title !mb-4 !text-left">ORDER SUMMARY</h2>
                <div className="space-y-2 text-[12px] text-[var(--muted)]">
                  <div className="flex items-center justify-between">
                    <span>Subtotal</span>
                    <span className="font-medium text-[var(--foreground)]">
                      {formatPrice(subtotal)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Shipping</span>
                    <span>Calculated at checkout</span>
                  </div>
                </div>
                <div className="my-4 border-t border-[var(--light-grey)]" />
                <div className="flex items-center justify-between text-[13px] font-medium">
                  <span>Total</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>

                <div className="mt-5">
                  <Button
                    variant="primary"
                    className="w-full justify-center"
                    onClick={handleCheckout}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "STARTING CHECKOUT..." : "CHECKOUT"}
                  </Button>
                </div>
                {checkoutError && (
                  <p className="mt-3 text-[11px] text-[#b65f67]">{checkoutError}</p>
                )}
              </aside>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
