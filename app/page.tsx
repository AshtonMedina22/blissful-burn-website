import Link from "next/link";
import { BagIcon, Button, DropIcon, HeartIcon, SparkIcon } from "@/components";
import { AddToCartButton } from "@/components/cart/AddToCartButton";
import { CartLink } from "@/components/cart/CartLink";
import { PRODUCTS, formatPrice } from "@/lib/products";

const valuePoints = [
  { title: "Hand Poured", detail: "in Small Batches" },
  { title: "Premium Soy", detail: "Clean Wax" },
  { title: "Clean Burning", detail: "Long Lasting" },
  { title: "Made with", detail: "Intention" },
];

function BrandMark() {
  return (
    <div className="flex items-center gap-3">
      <div className="grid h-10 w-10 place-items-center rounded-full border border-[var(--primary-pink)] sm:h-11 sm:w-11">
        <span className="font-[family-name:var(--font-accent)] text-[30px] leading-none text-[var(--primary-pink)]">
          B
        </span>
      </div>
      <p className="text-[11px] font-medium tracking-[0.33em] text-[var(--primary-pink)] sm:text-xs">
        BLISSFUL BURN
      </p>
    </div>
  );
}
export default function Home() {
  return (
    <main className="page-container">
      <div className="page-wrapper">
        <header className="site-header">
          <BrandMark />
          <nav className="nav-menu">
            <Link href="#">HOME</Link>
            <Link href="#">SHOP</Link>
            <Link href="#">ABOUT</Link>
            <Link href="#">CONTACT</Link>
          </nav>
          <CartLink />
        </header>

        <section className="hero-section">
          <div className="hero-content">
            <p className="hero-kicker">
              SMALL-BATCH SOY CANDLES
            </p>
            <h1 className="hero-headline">
              PURE. SIMPLE.
              <br />
              BEAUTIFUL.
            </h1>
            <p className="hero-description">
              Handcrafted soy candles made for calm moments and cozy spaces with
              a soft, modern finish.
            </p>
            <div className="hero-actions">
              <Button className="hero-primary-cta" variant="primary">
                SHOP COLLECTION
              </Button>
              <Link href="#featured" className="hero-secondary-link">
                EXPLORE SCENTS
              </Link>
            </div>
            <div className="hero-note-row">
              <p className="hero-note-pill">CLEAN BURN</p>
              <p className="hero-note-pill">LONG-LASTING</p>
              <p className="hero-note-pill">PETITE LUXURY</p>
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
              FEATURED CANDLES
            </h2>
            <p className="section-subtitle">
              Designed to feel soft, clean, and elevated in every room.
            </p>
          </div>
          <div className="products-grid">
            {PRODUCTS.map((product, index) => (
              <article
                key={product.name}
                className="product-card"
              >
                <p className="product-index">
                  NO. 0{index + 1}
                </p>
                <div
                  className="product-image"
                  style={{ background: product.gradient }}
                />
                <p className="product-name">
                  {product.name}
                </p>
                <p className="product-note">
                  {product.note}
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
            WHY BLISSFUL BURN
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
              ABOUT BLISSFUL BURN
            </h3>
            <p className="about-description">
              We blend clean ingredients, warm scent profiles, and intentional
              design to turn everyday spaces into restorative rituals.
            </p>
            <ul className="about-list">
              <li>Small-batch soy wax blends</li>
              <li>Modern scent stories for home and gifting</li>
              <li>Soft luxury styling inspired by calm living</li>
            </ul>
            <Button variant="secondary">OUR STORY</Button>
          </div>
        </section>

        <footer className="site-footer">
          <p>© 2026 Blissful Burn Candles</p>
          <p>Made with love</p>
          <p>Back to top</p>
        </footer>
      </div>
    </main>
  );
}
