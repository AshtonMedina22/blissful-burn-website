"use client";

import { Product } from "@/lib/products";
import { useCart } from "@/components/cart/CartContext";
import { Button } from "@/components/buttons/Button";

type AddToCartButtonProps = {
  product: Product;
  className?: string;
};

export function AddToCartButton({ product, className }: AddToCartButtonProps) {
  const { addItem } = useCart();

  return (
    <Button
      variant="secondary"
      className={className}
      onClick={() => addItem(product)}
    >
      QUICK ADD
    </Button>
  );
}
