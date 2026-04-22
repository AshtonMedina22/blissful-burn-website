import Link from "next/link";

type Product = {
  name: string;
  price: string;
  gradient: string;
  note: string;
};

const products: Product[] = [
  {
    name: "Lavender Fields",
    price: "$22.00",
    gradient: "linear-gradient(160deg,#FAF6F0,#EBC2C7)",
    note: "Soft floral calm",
  },
  {
    name: "Japanese Cherry Blossom",
    price: "$22.00",
    gradient: "linear-gradient(160deg,#FFFFFF,#F7A7B8)",
    note: "Velvet petal blend",
  },
  {
    name: "Birthday Cake",
    price: "$22.00",
    gradient: "linear-gradient(160deg,#FAF6F0,#DCC7B4)",
    note: "Creamy sweet finish",
  },
  {
    name: "Sunburst Melon",
    price: "$22.00",
    gradient: "linear-gradient(160deg,#FFFFFF,#EBC2C7)",
    note: "Fresh fruit brightness",
  },
];

const valuePoints = [
  { title: "Hand Poured", detail: "in Small Batches" },
  { title: "Premium Soy", detail: "Clean Wax" },
  { title: "Clean Burning", detail: "Long Lasting" },
  { title: "Made with", detail: "Intention" },
];

function BrandMark() {
  return (
    <div className="brand-logo">
      <div className="brand-logo-mark">
        <span className="brand-logo-letter">
          B
        </span>
      </div>
      <p className="brand-logo-text">
        BLISSFUL BURN
      </p>
    </div>
  );
}

function BagIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="icon-svg"
      fill="none"
      strokeWidth="1.6"
    >
      <path d="M6 8h12l-1 11H7L6 8Z" />
      <path d="M9 8a3 3 0 1 1 6 0" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="icon-svg"
      fill="none"
      strokeWidth="1.6"
    >
      <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10Z" />
    </svg>
  );
}

function DropIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="icon-svg"
      fill="none"
      strokeWidth="1.6"
    >
      <path d="M12 3c3 4 5 7 5 10a5 5 0 1 1-10 0c0-3 2-6 5-10Z" />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="icon-svg"
      fill="none"
      strokeWidth="1.6"
    >
      <path d="m12 4 1.8 4.2L18 10l-4.2 1.8L12 16l-1.8-4.2L6 10l4.2-1.8L12 4Z" />
    </svg>
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
          <button
            className="icon-button"
            aria-label="Open cart"
          >
            <BagIcon />
          </button>
        </header>

        <section className="hero-section">
          <div className="hero-visual">
            <div className="hero-gradient-overlay" />
            <div className="hero-shape hero-shape-1" />
            <div className="hero-shape hero-shape-2" />
            <div className="hero-shape hero-shape-3" />
          </div>

          <div className="hero-content">
            <h1 className="hero-headline">
              PURE. SIMPLE.
              <br />
              BEAUTIFUL.
            </h1>
            <p className="hero-description">
              Handcrafted soy candles made for calm moments and cozy spaces with
              a soft, modern finish.
            </p>
            <button className="button button-primary">
              SHOP COLLECTION
            </button>
          </div>
        </section>

        <section className="products-section">
          <h2 className="section-title">
            FEATURED CANDLES
          </h2>
          <div className="products-grid">
            {products.map((product) => (
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
                <p className="product-note">
                  {product.note}
                </p>
                <p className="product-price">
                  {product.price}
                </p>
                <button className="button button-secondary">
                  QUICK ADD
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="values-section">
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
          </div>
          <div className="about-content">
            <h3 className="about-title">
              ABOUT BLISSFULBURN
            </h3>
            <p className="about-description">
              We create handcrafted candles using high quality ingredients and
              thoughtful details in every jar.
            </p>
            <button className="button button-secondary">
              OUR STORY
            </button>
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
