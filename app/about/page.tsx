import { SiteFooter, SiteHeader, Button } from "@/components";

const commitments = [
  {
    title: "Intentional Ingredients",
    copy: "We use clean-burning soy wax and carefully selected fragrance blends.",
  },
  {
    title: "Small-Batch Craft",
    copy: "Every collection is poured in small runs to keep quality high and personal.",
  },
  {
    title: "Soft Luxury Design",
    copy: "Our jars and scent profiles are created to feel calming, modern, and warm.",
  },
];

export default function AboutPage() {
  return (
    <main className="page-container">
      <div className="page-wrapper">
        <SiteHeader />

        <section className="inner-hero">
          <p className="hero-kicker">OUR STORY</p>
          <h1 className="hero-headline">
            BLISSFUL BURN
          </h1>
          <p className="hero-description">
            Blissful Burn started with one goal: make home feel gentler through
            scent, glow, and quiet ritual.
          </p>
        </section>

        <section className="about-section">
          <div className="about-visual">
            <div className="about-image" />
            <p className="about-caption">MADE WITH CARE</p>
          </div>
          <div className="about-content">
            <h2 className="about-title">WHAT WE VALUE</h2>
            <p className="about-description">
              We believe candles should be beautiful and functional: easy on the
              eyes, comfortable in your space, and clean in the way they burn.
            </p>
            <ul className="about-list">
              {commitments.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}:</strong> {item.copy}
                </li>
              ))}
            </ul>
            <Button variant="secondary">SHOP THE COLLECTION</Button>
          </div>
        </section>

        <SiteFooter />
      </div>
    </main>
  );
}
