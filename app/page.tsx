import Link from "next/link";
import { BagIcon, DropIcon, HeartIcon, SparkIcon } from "@/components";
import { AddToCartButton } from "@/components/cart/AddToCartButton";
import { SiteFooter, SiteHeader } from "@/components";
import { PRODUCTS, formatPrice } from "@/lib/products";

const valuePoints = [
  { title: "Small-batch poured", detail: "Made slowly for a cleaner, more even burn" },
  { title: "Layered fragrance", detail: "Soft luxury scent profiles that feel refined, not loud" },
  { title: "Gift-ready design", detail: "Minimal vessels and packaging made for beautiful rituals" },
  { title: "Beyond candles", detail: "Wax melts, fragrance essentials, and cozy merch coming soon" },
];

const categoryCards = [
  {
    title: "Signature Candles",
    copy: "Hand-poured soy blend candles for slow mornings, bath rituals, and evening resets.",
    label: "Shop candles",
  },
  {
    title: "Wax Melts",
    copy: "Flameless fragrance moments with the same soft, elegant Blissful Burn mood.",
    label: "Coming soon",
  },
  {
    title: "Relax Wear",
    copy: "Hoodies, tees, shorts, and lounge pieces made for unwinding in style.",
    label: "Preview merch",
  },
];

const ritualSteps = ["Light", "Glow", "Relax", "Unwind"];

export default function Home() {
  const featuredProducts = PRODUCTS.slice(0, 4);

  return (
    <main className="page-container">
      <div className="page-wrapper">
        <SiteHeader />

        <section className="hero-section">
          <div className="hero-content">
            <p className="eyebrow">Soy blend candles · wax melts · fragrance rituals</p>
            <h1 className="hero-headline">Soft luxury for your everyday unwind.</h1>
            <p className="hero-description">
              Blissful Burn creates feminine, clean, and modern home fragrance—crafted
              to make your space feel warm, calm, and quietly elevated.
            </p>
            <div className="hero-actions">
              <Link href="/shop" className="button button-primary hero-primary-cta">
                Shop the collection
              </Link>
              <Link href="/about" className="button button-secondary">
                Explore the ritual
              </Link>
            </div>
            <div className="hero-proof-row" aria-label="Brand highlights">
              <span>Hand poured</span>
              <span>Clean + minimal</span>
              <span>Gift ready</span>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="hero-editorial-card">
              <div className="hero-candle-scene">
                <div className="flame" />
                <div className="wax-top" />
                <div className="candle-vessel">
                  <span className="vessel-mark">B</span>
                  <span className="vessel-name">BLISSFUL BURN</span>
                </div>
                <div className="cream-drape" />
                <div className="pink-orb orb-one" />
                <div className="pink-orb orb-two" />
              </div>
              <div className="hero-floating-note">
                <span>New mood</span>
                <strong>Glow. Relax. Unwind.</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="marquee-strip" aria-label="Blissful Burn ritual words">
          {ritualSteps.map((step) => (
            <span key={step}>{step}</span>
          ))}
        </section>

        <section className="category-section">
          <div className="section-header section-header-split">
            <div>
              <p className="eyebrow">The Blissful Burn shop</p>
              <h2 className="section-display-title">A polished fragrance and lifestyle destination.</h2>
            </div>
            <p className="section-subtitle">
              Built for candles now, with room to introduce wax melts, room sprays,
              cozy apparel, and limited seasonal drops.
            </p>
          </div>
          <div className="category-grid">
            {categoryCards.map((category, index) => (
              <article key={category.title} className="category-card">
                <span className="category-number">0{index + 1}</span>
                <h3>{category.title}</h3>
                <p>{category.copy}</p>
                <Link href="/shop">{category.label}</Link>
              </article>
            ))}
          </div>
        </section>

        <section id="featured" className="products-section products-section-luxe">
          <div className="section-header">
            <p className="eyebrow">Best sellers</p>
            <h2 className="section-display-title">Signature scents, elevated.</h2>
            <p className="section-subtitle">
              Curated fragrance profiles for thoughtful gifting and everyday calm.
            </p>
          </div>
          <div className="products-grid">
            {featuredProducts.map((product) => (
              <article key={product.name} className="product-card">
                <Link href={`/shop/${product.id}`} className="product-image-link">
                  <div className="product-image-shell">
                    <div
                      className="product-image"
                      style={{ background: product.gradient }}
                    >
                      <span className="product-vessel-mark">B</span>
                    </div>
                  </div>
                </Link>
                <p className="product-category">{product.category}</p>
                <Link href={`/shop/${product.id}`} className="product-name-link">
                  <p className="product-name">{product.name}</p>
                </Link>
                <p className="product-note">{product.note}</p>
                <p className="product-price">{formatPrice(product.priceCents)}</p>
                <AddToCartButton product={product} className="product-add-btn" />
              </article>
            ))}
          </div>
        </section>

        <section className="values-section">
          <div className="section-header">
            <p className="eyebrow">Brand promise</p>
            <h3 className="section-display-title">Feminine, clean, soft, and timeless.</h3>
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
              <span className="about-image-mark">B</span>
            </div>
            <p className="about-caption">Calm, bottled in candlelight</p>
          </div>
          <div className="about-content">
            <p className="eyebrow">Our point of view</p>
            <h3 className="about-display-title">Designed for the version of home that feels like an exhale.</h3>
            <p className="about-description">
              From blush-toned labels to soft fragrance notes and cozy future
              merch, every detail is intentionally minimal, warm, and polished.
            </p>
            <Link href="/about" className="button button-primary">
              Our story
            </Link>
          </div>
        </section>

        <section className="social-section">
          <p className="eyebrow">Join the list</p>
          <h3 className="section-display-title">First access to restocks, drops, and soft-life rituals.</h3>
          <p className="section-subtitle">
            New scents, seasonal wax melts, and Blissful Burn relax wear are on the way.
          </p>
          <Link href="/contact" className="button button-secondary social-cta">
            Contact Blissful Burn
          </Link>
        </section>

        <SiteFooter />
      </div>
    </main>
  );
}
