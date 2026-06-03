import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components";
import { BrandStillLifeVisual } from "@/components/visuals/BrandVisuals";

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
          <p className="eyebrow">About Blissful Burn</p>
          <h1 className="hero-headline">
            Meet the candle studio behind the glow.
          </h1>
          <p className="hero-description">
            This is the story page for Blissful Burn: our small-batch approach,
            soft-luxury point of view, and the calm rituals behind every candle,
            wax melt, and future relax wear drop.
          </p>
        </section>

        <section className="about-section editorial-section">
          <div className="about-visual">
            <div className="about-image">
              <BrandStillLifeVisual />
            </div>
            <p className="about-caption">Made with care</p>
          </div>
          <div className="about-content">
            <p className="eyebrow">Our standards</p>
            <h2 className="about-display-title">
              Beautiful fragrance should feel like part of the room.
            </h2>
            <p className="about-description">
              We believe candles should be functional, beautiful, and easy to
              live with—soft on the eyes, comforting in the air, and refined in
              every detail.
            </p>
            <ul className="about-list">
              {commitments.map((item) => (
                <li key={item.title} className="about-list-item">
                  <p className="about-list-title">{item.title}</p>
                  <p className="about-list-copy">{item.copy}</p>
                </li>
              ))}
            </ul>
            <Link href="/shop" className="button button-primary">
              Shop the collection
            </Link>
          </div>
        </section>

        <SiteFooter />
      </div>
    </main>
  );
}
