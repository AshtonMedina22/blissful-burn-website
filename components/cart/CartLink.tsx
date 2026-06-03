"use client";

import Link from "next/link";
import { useCart } from "./CartContext";
import { BagIcon } from "@/components/icons/Icons";

type CartLinkProps = {
  className?: string;
  children?: React.ReactNode;
};

export function CartLink({ className = "", children }: CartLinkProps) {
  const { itemCount, closeCart } = useCart();

  return (
    <Link
      href="/cart"
      className={`icon-button relative ${className}`.trim()}
      aria-label="Open full cart page"
      onClick={closeCart}
    >
      {children ?? (
        <>
          <BagIcon />
          <span className="cart-link-label">CART</span>
        </>
      )}
      {itemCount > 0 ? (
        <span className="cart-count-badge" aria-label={`${itemCount} items in cart`}>
          {itemCount}
        </span>
      ) : null}
    </Link>
  );
}
