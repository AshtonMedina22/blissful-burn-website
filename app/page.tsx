import Image from "next/image";
import Link from "next/link";
import { BagIcon, DropIcon, HeartIcon, SparkIcon } from "@/components";
import { AddToCartButton } from "@/components/cart/AddToCartButton";
import { SiteFooter, SiteHeader } from "@/components";
import {
  BrandStillLifeVisual,
  CategoryVisual,
  ProductVisual,
} from "@/components/visuals/BrandVisuals";
import { PRODUCTS, formatPrice } from "@/lib/products";

const valuePoints = [
  { title: "Hand Poured", detail: "Small Batch Craftsmanship" },
  { title: "Premium Soy Wax", detail: "Clean, Even Burn" },
  { title: "Long Lasting", detail: "Designed for Extended Use" },
  { title: "Made with Intention", detail: "Thoughtful Ingredients & Design" },
];

const categoryCards = [
  {
    title: "Candles",
    copy: "Handcrafted candles designed to bring calm, warmth, and intention into your space.",
    label: "SHOP COLLECTION",
    visual: "candle" as const,
  },
  {
    title: "Wax Melts",
    copy: "More fragrance options are being prepared for future Blissful Burn collections.",
    label: "COMING SOON",
    visual: "melts" as const,
  },
  {
    title: "Merch & Relax Wear",
    copy: "Hoodies, shirts, shorts, and relax wear are planned for upcoming brand drops.",
    label: "STAY CONNECTED",
    visual: "wear" as const,
  },
];

const brandTagline = "Glow, Relax, and Unwind.";

export default function Home() {
  return (
    <main className="page-container">
      <div className="page-wrapper">
        <SiteHeader />

        <section className="hero-section">
          <div className="hero-content">
            <p className="eyebrow">SOY BLEND CANDLES</p>
            <h1 className="hero-headline">Elevate Your Everyday</h1>
            <p className="hero-description">
              Handcrafted candles designed to bring calm, warmth, and intention
              into your space.
            </p>
            <div className="hero-actions">
              <Link
                href="/shop"
                className="button button-primary hero-primary-cta"
              >
                SHOP COLLECTION
              </Link>
              <Link href="/about" className="button button-secondary">
                LEARN MORE
              </Link>
            </div>
            <div className="hero-proof-row" aria-label="Brand highlights">
              <span>HAND POURED</span>
              <span>PREMIUM SOY WAX</span>
              <span>MADE WITH INTENTION</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-frame">
              <Image
                src="/images/blissful-burn-home-hero.svg"
                alt="Blissful Burn candle styled with wax melts and soft fabric in a warm boutique still life"
                width={1400}
                height={1200}
                className="hero-image"
                priority
                unoptimized
              />
              <div className="hero-image-caption" aria-hidden="true">
                <span>Glow</span>
                <span>Relax</span>
                <span>Unwind</span>
              </div>
            </div>
          </div>
        </section>

        <section
          className="marquee-strip"
          aria-label="Blissful Burn brand tagline"
        >
          <p>{brandTagline}</p>
        </section>

        <section
          id="featured"
          className="products-section products-section-luxe"
        >
          <div className="section-header">
            <h2 className="section-display-title">Featured Candles</h2>
            <p className="section-subtitle">
              Curated scents for everyday moments.
            </p>
          </div>
          <div className="products-grid">
            {PRODUCTS.map((product) => (
              <article key={product.name} className="product-card">
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

        <section className="category-section">
          <div className="section-header section-header-split">
            <div>
              <p className="eyebrow">COMING NEXT</p>
              <h2 className="section-display-title">More from Blissful Burn</h2>
            </div>
            <p className="section-subtitle">
              Candles are available now, with wax melts, other fragrances, and
              merch planned for future collections.
            </p>
          </div>
          <div className="category-grid">
            {categoryCards.map((category, index) => (
              <article key={category.title} className="category-card">
                <span className="category-number">0{index + 1}</span>
                <CategoryVisual type={category.visual} />
                <h3>{category.title}</h3>
                <p>{category.copy}</p>
                <Link href={index === 0 ? "/shop" : "/contact"}>
                  {category.label}
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="values-section values-section-luxe">
          <div className="section-header">
            <h3 className="section-display-title">Why Blissful Burn</h3>
          </div>
          <div className="values-grid">
            {valuePoints.map((point, index) => (
              <div key={point.title} className="value-item">
                <div className="icon-badge">
                  {index === 0 && <SparkIcon />}
                  {index === 1 && <DropIcon />}
                  {index === 2 && <BagIcon />}
                  {index === 3 && <HeartIcon />}
                </div>
                <p className="value-title">{point.title}</p>
                <p className="value-subtitle">{point.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="about-section editorial-section">
          <div className="about-visual">
            <div className="about-image">
              <BrandStillLifeVisual />
            </div>
            <p className="about-caption">CALM, BOTTLED IN CANDLELIGHT</p>
          </div>
          <div className="about-content">
            <h3 className="about-display-title">ABOUT BLISSFUL BURN</h3>
            <p className="about-description">
              We create handcrafted candles using high-quality ingredients and
              thoughtful design-made to elevate your everyday environment.
            </p>
            <Link href="/about" className="button button-secondary">
              OUR STORY
            </Link>
          </div>
        </section>

        <section className="social-section">
          <h3 className="section-display-title">Stay Connected</h3>
          <p className="section-subtitle">
            New releases, restocks, and behind-the-scenes.
          </p>
          <Link href="/contact" className="button button-secondary social-cta">
            FOLLOW ON INSTAGRAM
          </Link>
        </section>

        <SiteFooter />
      </div>
    </main>
  );
}
