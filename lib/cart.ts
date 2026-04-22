"use client";

import { Product } from "@/lib/products";

export type CartItem = {
  productId: string;
  quantity: number;
  unitAmount: number;
};

export type CartDisplayItem = CartItem & { product: Product; lineTotal: number };

const CART_STORAGE_KEY = "blissfulburn-cart-v1";

export function loadCart(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(CART_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as CartItem[];
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (item) =>
        typeof item?.productId === "string" &&
        typeof item?.quantity === "number" &&
        item.quantity > 0 &&
        typeof item?.unitAmount === "number" &&
        item.unitAmount > 0,
    );
  } catch {
    return [];
  }
}

export function saveCart(items: CartItem[]): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
}

export function clearCartStorage(): void {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(CART_STORAGE_KEY);
}

export function getCartSubtotal(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.quantity * item.unitAmount, 0);
}

export function formatCurrency(cents: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(cents / 100);
}

export function createCartItemFromProduct(product: Product): CartItem {
  return {
    productId: product.id,
    quantity: 1,
    unitAmount: product.priceCents,
  };
}
