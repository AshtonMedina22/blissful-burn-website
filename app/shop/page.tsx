import { AddToCartButton } from "@/components/cart/AddToCartButton";
import { SiteFooter, SiteHeader } from "@/components";
import { PRODUCTS, formatPrice } from "@/lib/products";
import Link from "next/link";
import { ProductVisual } from "@/components/visuals/BrandVisuals";

const collectionFilters = [
  "Candles",
  "Wax melts coming soon",
  "Fragrances coming soon",
  "Merch coming soon",
];

export default function ShopPage() {
  return (
    <main className="page-container">
      <div className="page-wrapper">
        <SiteHeader />
        <section className="inner-hero shop-hero">
          <h1 className="hero-headline">SHOP ALL CANDLES</h1>
          <p className="hero-description">
            Curated candle scents for cozy evenings, slow mornings, and
            thoughtful gifting.
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
          <div className="section-header">
            <h2 className="section-display-title">Featured Candles</h2>
            <p className="section-subtitle">
              Curated scents for everyday moments.
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
