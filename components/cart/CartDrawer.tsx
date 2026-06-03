"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/buttons/Button";
import { CloseIcon } from "@/components/icons/Icons";
import { useCart } from "@/components/cart/CartContext";
import { ProductVisual } from "@/components/visuals/BrandVisuals";
import { formatPrice } from "@/lib/products";

const quantityOptions = [1, 2, 3, 4, 5, 6, 7, 8];

export function CartDrawer() {
  const {
    isCartOpen,
    closeCart,
    items,
    detailedItems,
    subtotal,
    updateQuantity,
    removeItem,
  } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [checkoutError, setCheckoutError] = useState<string | null>(null);

  useEffect(() => {
    if (!isCartOpen) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeCart();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeCart, isCartOpen]);


  if (!isCartOpen) {
    return null;
  }

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
      const payload = (await response.json()) as { url?: string; error?: string };

      if (!response.ok || !payload.url) {
        setCheckoutError(payload.error ?? "Unable to start checkout.");
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
    <div className="cart-drawer-root" aria-live="polite">
      <button
        type="button"
        className="cart-drawer-backdrop"
        aria-label="Close cart panel"
        onClick={closeCart}
      />
      <aside
        className="cart-drawer-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-drawer-title"
      >
        <div className="cart-drawer-header">
          <div>
            <p className="eyebrow">Your cart</p>
            <h2 id="cart-drawer-title">Ready when you are.</h2>
          </div>
          <button
            type="button"
            className="cart-drawer-close"
            aria-label="Close cart panel"
            onClick={closeCart}
          >
            <CloseIcon />
          </button>
        </div>

        {detailedItems.length === 0 ? (
          <div className="cart-drawer-empty">
            <h3>Start with a signature scent.</h3>
            <p>
              Add a candle to your cart and it will show here while you keep
              browsing.
            </p>
            <Link href="/shop" className="button button-primary" onClick={closeCart}>
              SHOP COLLECTION
            </Link>
          </div>
        ) : (
          <>
            <div className="cart-drawer-items" aria-label="Cart panel items">
              {detailedItems.map((item) => (
                <article key={item.productId} className="cart-drawer-item">
                  <Link
                    href={`/shop/${item.product.id}`}
                    className="cart-drawer-item-visual"
                    aria-label={`View ${item.product.name}`}
                    onClick={closeCart}
                  >
                    <ProductVisual product={item.product} />
                  </Link>
                  <div className="cart-drawer-item-content">
                    <Link
                      href={`/shop/${item.product.id}`}
                      className="product-name-link"
                      onClick={closeCart}
                    >
                      <h3>{item.product.name}</h3>
                    </Link>
                    <p>{item.product.note}</p>
                    <strong>{formatPrice(item.lineTotal)}</strong>
                    <div className="cart-drawer-controls">
                      <label htmlFor={`drawer-qty-${item.productId}`}>Qty</label>
                      <select
                        id={`drawer-qty-${item.productId}`}
                        value={item.quantity}
                        onChange={(event) =>
                          updateQuantity(item.productId, Number(event.target.value))
                        }
                      >
                        {quantityOptions.map((qty) => (
                          <option key={qty} value={qty}>
                            {qty}
                          </option>
                        ))}
                      </select>
                      <button
                        type="button"
                        onClick={() => removeItem(item.productId)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="cart-drawer-summary">
              <div>
                <span>Subtotal</span>
                <strong>{formatPrice(subtotal)}</strong>
              </div>
              <p>Shipping and taxes are calculated during secure checkout.</p>
              <Button
                variant="primary"
                className="cart-drawer-checkout"
                onClick={handleCheckout}
                disabled={isSubmitting}
              >
                {isSubmitting ? "STARTING CHECKOUT..." : "CHECKOUT SECURELY"}
              </Button>
              {checkoutError ? (
                <p className="cart-error-message">{checkoutError}</p>
              ) : null}
              <Link
                href="/cart"
                className="cart-drawer-full-link"
                onClick={closeCart}
              >
                VIEW FULL CART
              </Link>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
