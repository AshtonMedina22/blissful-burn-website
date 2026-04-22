import { AddToCartButton } from "@/components/cart/AddToCartButton";
import { SiteFooter, SiteHeader } from "@/components";
import { PRODUCTS, formatPrice } from "@/lib/products";
import Link from "next/link";

export default function ShopPage() {
  return (
    <main className="page-container">
      <div className="page-wrapper">
        <SiteHeader />
        <section className="products-section">
          <div className="section-header">
            <h1 className="section-title">SHOP ALL CANDLES</h1>
            <p className="section-subtitle">
              Curated candle scents for cozy evenings, slow mornings, and
              thoughtful gifting.
            </p>
          </div>
          <div className="products-grid">
            {PRODUCTS.map((product) => (
              <article key={product.id} className="product-card">
                <Link href={`/shop/${product.id}`} className="product-image-link">
                  <div
                    className="product-image"
                    style={{ background: product.gradient }}
                  />
                </Link>
                <Link href={`/shop/${product.id}`} className="product-name-link">
                  <p className="product-name">{product.name}</p>
                </Link>
                <p className="product-price">{formatPrice(product.priceCents)}</p>
                <AddToCartButton product={product} className="product-add-btn" />
              </article>
            ))}
          </div>
        </section>
        <SiteFooter />
      </div>
    </main>
  );
}
