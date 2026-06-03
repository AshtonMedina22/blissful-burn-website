export type ProductDetail = {
  id: string;
  shortDescription: string;
  keyDetails: string[];
  scentProfile?: string;
  experienceLine: string;
};

export const PRODUCT_DETAILS: Record<string, ProductDetail> = {
  "lavender-fields": {
    id: "lavender-fields",
    shortDescription:
      "A calming botanical candle designed for slow evenings, bath rituals, and soft bedroom resets.",
    keyDetails: [
      "Hand poured in small batches",
      "Soy blend wax for a clean, even burn",
      "Minimal vessel designed for elevated styling",
      "Gift-ready fragrance for everyday unwinding",
    ],
    scentProfile: "Soft lavender, airy herbs, and a quiet spa finish",
    experienceLine: "Created to make your space feel peaceful, polished, and deeply relaxed.",
  },
  "japanese-cherry-blossom": {
    id: "japanese-cherry-blossom",
    shortDescription:
      "A refined floral blend with a feminine finish—pretty, modern, and intentionally understated.",
    keyDetails: [
      "Hand poured in small batches",
      "Soy blend wax for a clean, even burn",
      "Balanced floral throw without overpowering the room",
      "Designed for gifting, vanities, and calm corners",
    ],
    scentProfile: "Velvet petals, soft musk, and polished florals",
    experienceLine: "Created to bring balance, softness, and a luxe floral mood into your space.",
  },
  "birthday-cake": {
    id: "birthday-cake",
    shortDescription:
      "A warm gourmand candle that feels celebratory, creamy, and cozy without losing its soft-luxury edge.",
    keyDetails: [
      "Hand poured in small batches",
      "Soy blend wax for a clean, even burn",
      "Dessert-inspired fragrance with a smooth finish",
      "A thoughtful pick for birthdays, self-care nights, and gifting",
    ],
    scentProfile: "Whipped vanilla, sugared cream, and cozy warmth",
    experienceLine: "Created to make home feel sweet, inviting, and beautifully comforting.",
  },
  "sunburst-melon": {
    id: "sunburst-melon",
    shortDescription:
      "A bright modern fragrance designed to refresh your space with a clean, soft, fruit-forward finish.",
    keyDetails: [
      "Hand poured in small batches",
      "Soy blend wax for a clean, even burn",
      "Fresh profile for kitchens, entryways, and daytime rituals",
      "Polished vessel that fits modern neutral styling",
    ],
    scentProfile: "Juicy melon, light citrus, and a clean bright finish",
    experienceLine: "Created to wake up your space while keeping the mood gentle and elevated.",
  },
};

export function getProductDetail(productId: string): ProductDetail | undefined {
  return PRODUCT_DETAILS[productId];
}
