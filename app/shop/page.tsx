import { AddToCartButton } from "@/components/cart/AddToCartButton";
import { SiteFooter, SiteHeader } from "@/components";
import { PRODUCTS, formatPrice } from "@/lib/products";
import Link from "next/link";
import { ProductVisual } from "@/components/visuals/BrandVisuals";

const collectionFilters = [
  "Candles",
  "Wax melts coming soon",
  "Room fragrance",
  "Relax wear",
];

export default function ShopPage() {
  return (
    <main className="page-container">
      <div className="page-wrapper">
        <SiteHeader />
        <section className="inner-hero shop-hero">
          <p className="eyebrow">Shop Blissful Burn</p>
          <h1 className="hero-headline">
            Candles made for a softer kind of luxury.
          </h1>
          <p className="hero-description">
            Browse the current signature candle edit, then watch this space for
            wax melts, fragrance essentials, and cozy relax wear.
          </p>
          <div
            className="filter-pill-row"
            aria-label="Planned product categories"
          >
            {collectionFilters.map((filter) => (
              <span key={filter}>{filter}</span>
            ))}
          </div>
        </section>

        <section className="products-section products-section-luxe">
          <div className="section-header section-header-split">
            <div>
              <p className="eyebrow">Current collection</p>
              <h2 className="section-display-title">Signature candles</h2>
            </div>
            <p className="section-subtitle">
              Polished, giftable fragrance profiles designed for calm rooms and
              beautiful everyday rituals.
            </p>
          </div>
          <div className="products-grid">
            {PRODUCTS.map((product) => (
              <article key={product.id} className="product-card">
                <Link
                  href={`/shop/${product.id}`}
                  className="product-image-link"
                >
                  <div className="product-image-shell">
                    <ProductVisual product={product} />
                  </div>
                </Link>
                <p className="product-category">{product.category}</p>
                <Link
                  href={`/shop/${product.id}`}
                  className="product-name-link"
                >
                  <p className="product-name">{product.name}</p>
                </Link>
                <p className="product-note">{product.note}</p>
                <p className="product-price">
                  {formatPrice(product.priceCents)}
                </p>
                <AddToCartButton
                  product={product}
                  className="product-add-btn"
                />
              </article>
            ))}
          </div>
        </section>
        <SiteFooter />
      </div>
    </main>
  );
}
