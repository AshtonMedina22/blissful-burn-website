import { AddToCartButton } from "@/components/cart/AddToCartButton";
import { SiteFooter, SiteHeader } from "@/components";
import { PRODUCTS, formatPrice } from "@/lib/products";

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
            {PRODUCTS.map((product, index) => (
              <article key={product.id} className="product-card">
                <p className="product-index">NO. 0{index + 1}</p>
                <div
                  className="product-image"
                  style={{ background: product.gradient }}
                />
                <p className="product-name">{product.name}</p>
                <p className="product-note">{product.note}</p>
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
