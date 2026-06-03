export type Product = {
  id: string;
  name: string;
  priceCents: number;
  note: string;
  gradient: string;
  category: string;
};

export const PRODUCTS: Product[] = [
  {
    id: "lavender-fields",
    name: "Lavender Fields",
    priceCents: 2200,
    gradient: "radial-gradient(circle at 50% 22%,#fff 0 13%,#f9dfe5 14% 31%,#ebc2c7 32% 58%,#faf6f0 59% 100%)",
    note: "Soft lavender, airy herbs, and a quiet spa finish",
    category: "Soy Blend Candle",
  },
  {
    id: "japanese-cherry-blossom",
    name: "Japanese Cherry Blossom",
    priceCents: 2200,
    gradient: "radial-gradient(circle at 48% 20%,#fff 0 12%,#ffdce6 13% 30%,#f7a7b8 31% 56%,#fff7f9 57% 100%)",
    note: "Velvet petals, soft musk, and polished florals",
    category: "Soy Blend Candle",
  },
  {
    id: "birthday-cake",
    name: "Birthday Cake",
    priceCents: 2200,
    gradient: "radial-gradient(circle at 50% 22%,#fff 0 13%,#f5e7dc 14% 31%,#dcc7b4 32% 58%,#faf6f0 59% 100%)",
    note: "Whipped vanilla, sugared cream, and cozy warmth",
    category: "Soy Blend Candle",
  },
  {
    id: "sunburst-melon",
    name: "Sunburst Melon",
    priceCents: 2200,
    gradient: "radial-gradient(circle at 50% 22%,#fff 0 12%,#f9d7dc 13% 30%,#ebc2c7 31% 56%,#fffaf6 57% 100%)",
    note: "Juicy melon, light citrus, and a clean bright finish",
    category: "Soy Blend Candle",
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
