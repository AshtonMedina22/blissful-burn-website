export type Product = {
  id: string;
  name: string;
  priceCents: number;
  note: string;
  gradient: string;
};

export const PRODUCTS: Product[] = [
  {
    id: "lavender-fields",
    name: "Lavender Fields",
    priceCents: 2200,
    gradient: "linear-gradient(160deg,#FAF6F0,#EBC2C7)",
    note: "Soft floral calm",
  },
  {
    id: "japanese-cherry-blossom",
    name: "Japanese Cherry Blossom",
    priceCents: 2200,
    gradient: "linear-gradient(160deg,#FFFFFF,#F7A7B8)",
    note: "Velvet petal blend",
  },
  {
    id: "birthday-cake",
    name: "Birthday Cake",
    priceCents: 2200,
    gradient: "linear-gradient(160deg,#FAF6F0,#DCC7B4)",
    note: "Creamy sweet finish",
  },
  {
    id: "sunburst-melon",
    name: "Sunburst Melon",
    priceCents: 2200,
    gradient: "linear-gradient(160deg,#FFFFFF,#EBC2C7)",
    note: "Fresh fruit brightness",
  },
];

export const PRODUCTS_BY_ID = Object.fromEntries(
  PRODUCTS.map((product) => [product.id, product]),
) as Record<string, Product>;

export function getProductsByIds(ids: string[]): Product[] {
  const uniqueIds = Array.from(new Set(ids));
  return uniqueIds
    .map((id) => PRODUCTS_BY_ID[id])
    .filter((product): product is Product => Boolean(product));
}

export function formatPrice(cents: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(cents / 100);
}
