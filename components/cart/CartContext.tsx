"use client";

import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { PRODUCTS_BY_ID, Product } from "@/lib/products";
import {
  clearCartStorage,
  CartItem,
  getCartSubtotal,
  loadCart,
  saveCart,
} from "@/lib/cart";

type CartContextValue = {
  items: CartItem[];
  itemCount: number;
  totalItems: number;
  subtotal: number;
  detailedItems: Array<CartItem & { product: Product; lineTotal: number }>;
  isCartOpen: boolean;
  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);

function hydrateCartItems(): CartItem[] {
  return loadCart()
    .map((item) => {
      const product = PRODUCTS_BY_ID[item.productId];
      if (!product) {
        return null;
      }

      return {
        productId: product.id,
        quantity: Math.max(1, Math.floor(item.quantity)),
        unitAmount: product.priceCents,
      };
    })
    .filter((item): item is CartItem => Boolean(item));
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(hydrateCartItems);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    if (items.length === 0) {
      clearCartStorage();
      return;
    }

    saveCart(items);
  }, [items]);

  const openCart = useCallback(() => {
    setIsCartOpen(true);
  }, []);

  const closeCart = useCallback(() => {
    setIsCartOpen(false);
  }, []);

  const addItem = useCallback((product: Product) => {
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
    setIsCartOpen(true);
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    setItems((current) =>
      current
        .map((item) =>
          item.productId === productId
            ? { ...item, quantity: Math.max(0, quantity) }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }, []);

  const removeItem = useCallback((productId: string) => {
    setItems((current) =>
      current.filter((item) => item.productId !== productId),
    );
  }, []);

  const clearCart = useCallback(() => {
    clearCartStorage();
    setItems([]);
  }, []);

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
      .filter(Boolean) as Array<
      CartItem & { product: Product; lineTotal: number }
    >;

    return {
      items,
      itemCount: totalItems,
      totalItems,
      subtotal,
      detailedItems,
      isCartOpen,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      openCart,
      closeCart,
    };
  }, [items, isCartOpen, addItem, clearCart, closeCart, openCart, removeItem, updateQuantity]);

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
