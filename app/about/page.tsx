import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components";

const commitments = [
  {
    title: "Intentional Ingredients",
    copy: "Clean-burning soy blend wax and fragrance profiles selected for soft, elegant room presence.",
  },
  {
    title: "Small-Batch Craft",
    copy: "Every collection is poured in focused runs so the finished product feels personal and polished.",
  },
  {
    title: "Soft Luxury Design",
    copy: "Blush, cream, nude, and charcoal details keep the brand feminine, minimal, and timeless.",
  },
];

export default function AboutPage() {
  return (
    <main className="page-container">
      <div className="page-wrapper">
        <SiteHeader />

        <section className="inner-hero about-hero">
          <p className="eyebrow">Our story</p>
          <h1 className="hero-headline">A candle brand for glow, calm, and intentional comfort.</h1>
          <p className="hero-description">
            Blissful Burn started with one goal: make home feel gentler through
            fragrance, candlelight, and cozy rituals that feel elevated but approachable.
          </p>
        </section>

        <section className="about-section editorial-section">
          <div className="about-visual">
            <div className="about-image">
              <span className="about-image-mark">B</span>
            </div>
            <p className="about-caption">Made with care</p>
          </div>
          <div className="about-content">
            <p className="eyebrow">What we value</p>
            <h2 className="about-display-title">Beautiful fragrance should feel like part of the room.</h2>
            <p className="about-description">
              We believe candles should be functional, beautiful, and easy to live
              with—soft on the eyes, comforting in the air, and refined in every detail.
            </p>
            <ul className="about-list">
              {commitments.map((item) => (
                <li key={item.title} className="about-list-item">
                  <p className="about-list-title">{item.title}</p>
                  <p className="about-list-copy">{item.copy}</p>
                </li>
              ))}
            </ul>
            <Link href="/shop" className="button button-primary">Shop the collection</Link>
          </div>
        </section>

        <SiteFooter />
      </div>
    </main>
  );
}
