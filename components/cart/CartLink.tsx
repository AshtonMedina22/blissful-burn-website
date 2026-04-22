"use client";

import Link from "next/link";
import { useCart } from "./CartContext";
import { BagIcon } from "@/components/icons/Icons";

type CartLinkProps = {
  className?: string;
  children?: React.ReactNode;
};

export function CartLink({ className = "", children }: CartLinkProps) {
  const { itemCount } = useCart();

  return (
    <Link
      href="/cart"
      className={`icon-button relative ${className}`.trim()}
      aria-label="Open cart"
    >
      {children ?? <BagIcon />}
      {itemCount > 0 ? (
        <span className="absolute -right-1 -top-1 rounded-full bg-[var(--primary-pink)] px-1.5 py-0.5 text-[9px] font-medium text-white">
          {itemCount}
        </span>
      ) : null}
    </Link>
  );
}
