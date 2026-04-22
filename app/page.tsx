import Link from "next/link";
import { BagIcon, Button, DropIcon, HeartIcon, SparkIcon } from "@/components";
import { AddToCartButton } from "@/components/cart/AddToCartButton";
import { SiteFooter, SiteHeader } from "@/components";
import { PRODUCTS, formatPrice } from "@/lib/products";

const valuePoints = [
  { title: "Hand Poured", detail: "Small Batch Craftsmanship" },
  { title: "Premium Soy Wax", detail: "Clean, Even Burn" },
  { title: "Long Lasting", detail: "Designed for Extended Use" },
  { title: "Made with Intention", detail: "Thoughtful Ingredients & Design" },
];

export default function Home() {
  return (
    <main className="page-container">
      <div className="page-wrapper">
        <SiteHeader />

        <section className="hero-section">
          <div className="hero-content">
            <p className="hero-kicker">
              SOY BLEND CANDLES
            </p>
            <h1 className="hero-headline">
              Elevate Your Everyday
            </h1>
            <p className="hero-description">
              Handcrafted candles designed to bring calm, warmth, and intention
              into your space.
            </p>
            <div className="hero-actions">
              <Link href="/shop" className="button button-primary hero-primary-cta">
                Shop Collection
              </Link>
              <Link href="/about" className="hero-secondary-link">
                Learn More
              </Link>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-stage">
              <div className="hero-card hero-card-main" />
              <div className="hero-card hero-card-secondary" />
              <div className="hero-card hero-card-tertiary" />
              <p className="hero-badge">
                HAND POURED
              </p>
            </div>
          </div>
        </section>

        <section id="featured" className="products-section">
          <div className="section-header">
            <h2 className="section-title">
              Featured Candles
            </h2>
            <p className="section-subtitle">
              Curated scents for everyday moments.
            </p>
          </div>
          <div className="products-grid">
            {PRODUCTS.map((product) => (
              <article
                key={product.name}
                className="product-card"
              >
                <div
                  className="product-image"
                  style={{ background: product.gradient }}
                />
                <p className="product-name">
                  {product.name}
                </p>
                <p className="product-price">
                  {formatPrice(product.priceCents)}
                </p>
                <AddToCartButton product={product} className="product-add-btn" />
              </article>
            ))}
          </div>
        </section>

        <section className="values-section">
          <h3 className="section-title">
            Why Blissful Burn
          </h3>
          <div className="values-grid">
            {valuePoints.map((point, index) => (
              <div key={point.title} className="value-item">
                <div className="icon-badge">
                  {index === 0 && <SparkIcon />}
                  {index === 1 && <DropIcon />}
                  {index === 2 && <BagIcon />}
                  {index === 3 && <HeartIcon />}
                </div>
                <p className="value-title">
                  {point.title}
                </p>
                <p className="value-subtitle">
                  {point.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="about-section">
          <div className="about-visual">
            <div className="about-image" />
            <p className="about-caption">
              CALM, BOTTLED IN CANDLELIGHT
            </p>
          </div>
          <div className="about-content">
            <h3 className="about-title">
              About Blissful Burn
            </h3>
            <p className="about-description">
              We create handcrafted candles using high-quality ingredients and
              thoughtful design—made to elevate your everyday environment.
            </p>
            <Link href="/about" className="button button-secondary">
              Our Story
            </Link>
          </div>
        </section>

        <SiteFooter />
      </div>
    </main>
  );
}
