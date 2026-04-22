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
      "A calming, botanical-inspired candle designed to create a soft, relaxing atmosphere.",
    keyDetails: [
      "Hand poured in small batches",
      "Soy blend wax for a clean, even burn",
      "Long-lasting fragrance",
      "Designed for everyday use",
    ],
    scentProfile: "Soft lavender with subtle herbal undertones",
    experienceLine: "Created to help you unwind and reset your space.",
  },
  "japanese-cherry-blossom": {
    id: "japanese-cherry-blossom",
    shortDescription:
      "A refined floral blend designed to bring balance, softness, and calm to your space.",
    keyDetails: [
      "Hand poured in small batches",
      "Soy blend wax for a clean, even burn",
      "Long-lasting fragrance",
      "Designed for everyday use",
    ],
    scentProfile: "Petal-forward florals with a smooth, airy finish",
    experienceLine: "Created to help you unwind and reset your space.",
  },
  "birthday-cake": {
    id: "birthday-cake",
    shortDescription:
      "A warm, dessert-inspired candle designed to create a cozy, elevated atmosphere.",
    keyDetails: [
      "Hand poured in small batches",
      "Soy blend wax for a clean, even burn",
      "Long-lasting fragrance",
      "Designed for everyday use",
    ],
    experienceLine: "Created to help you unwind and reset your space.",
  },
  "sunburst-melon": {
    id: "sunburst-melon",
    shortDescription:
      "A bright, modern fragrance designed to refresh your space with a clean, soft finish.",
    keyDetails: [
      "Hand poured in small batches",
      "Soy blend wax for a clean, even burn",
      "Long-lasting fragrance",
      "Designed for everyday use",
    ],
    scentProfile: "Fresh melon with light citrus and soft sweetness",
    experienceLine: "Created to help you unwind and reset your space.",
  },
};

export function getProductDetail(productId: string): ProductDetail | undefined {
  return PRODUCT_DETAILS[productId];
}
