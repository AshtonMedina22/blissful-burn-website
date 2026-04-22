"use client";

import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import { PRODUCTS_BY_ID, Product } from "@/lib/products";
import { CartItem, getCartSubtotal } from "@/lib/cart";

type CartContextValue = {
  items: CartItem[];
  itemCount: number;
  totalItems: number;
  subtotal: number;
  detailedItems: Array<CartItem & { product: Product; lineTotal: number }>;
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (product: Product) => {
    setItems((current) => {
      const existing = current.find((item) => item.productId === product.id);
      if (!existing) {
        return [
          ...current,
          {
            productId: product.id,
            quantity: 1,
            unitAmount: product.priceCents,
          },
        ];
      }

      return current.map((item) =>
        item.productId === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item,
      );
    });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    setItems((current) =>
      current
        .map((item) =>
          item.productId === productId
            ? { ...item, quantity: Math.max(0, quantity) }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const removeItem = (productId: string) => {
    setItems((current) => current.filter((item) => item.productId !== productId));
  };

  const clearCart = () => {
    setItems([]);
  };

  const value = useMemo<CartContextValue>(() => {
    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = getCartSubtotal(items);
    const detailedItems = items
      .map((item) => {
        const product = PRODUCTS_BY_ID[item.productId];
        if (!product) {
          return null;
        }

        return {
          ...item,
          product,
          lineTotal: item.quantity * item.unitAmount,
        };
      })
      .filter(Boolean) as Array<CartItem & { product: Product; lineTotal: number }>;

    return {
      items,
      itemCount: totalItems,
      totalItems,
      subtotal,
      detailedItems,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
    };
  }, [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }

  return context;
}

export function useCartProducts() {
  const { items } = useCart();

  return items.map((item) => {
    const product = PRODUCTS_BY_ID[item.productId];
    return {
      ...item,
      product,
      total: item.quantity * item.unitAmount,
    };
  });
}
