import Link from "next/link";
import { notFound } from "next/navigation";
import { AddToCartButton } from "@/components/cart/AddToCartButton";
import { SiteFooter, SiteHeader } from "@/components";
import { PRODUCT_DETAILS } from "@/lib/productDetails";
import { PRODUCTS_BY_ID, formatPrice } from "@/lib/products";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = PRODUCTS_BY_ID[slug];
  const details = PRODUCT_DETAILS[slug];

  if (!product || !details) {
    notFound();
  }

  return (
    <main className="page-container">
      <div className="page-wrapper">
        <SiteHeader />

        <section className="product-detail-section">
          <div className="product-detail-visual">
            <div
              className="product-detail-image"
              style={{ background: product.gradient }}
            />
          </div>

          <div className="product-detail-content">
            <h1 className="product-detail-title">{product.name}</h1>
            <p className="product-detail-description">{details.shortDescription}</p>
            <p className="product-detail-price">{formatPrice(product.priceCents)}</p>

            <div className="product-detail-actions">
              <AddToCartButton product={product} className="product-detail-add-btn" />
            </div>

            <div className="product-detail-block">
              <h2 className="product-detail-block-label">Key Details</h2>
              <ul className="product-detail-key-details">
                {details.keyDetails.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            {details.scentProfile ? (
              <div className="product-detail-block">
                <h2 className="product-detail-block-label">Scent Profile:</h2>
                <p className="product-detail-line">{details.scentProfile}</p>
              </div>
            ) : null}

            <p className="product-detail-line">{details.experienceLine}</p>

            <Link href="/shop" className="product-detail-back-link">
              BACK TO SHOP
            </Link>
          </div>
        </section>

        <SiteFooter />
      </div>
    </main>
  );
}
