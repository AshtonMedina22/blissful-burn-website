import { SiteFooter, SiteHeader } from "@/components";

export default function ContactPage() {
  return (
    <main className="page-container">
      <div className="page-wrapper">
        <SiteHeader />

        <section className="info-page">
          <p className="hero-kicker">CONTACT</p>
          <h1 className="hero-headline">GET IN TOUCH</h1>
          <p className="info-page-copy">
            We would love to help with scent recommendations, gifting requests,
            and wholesale inquiries. Send us a note and we will reply soon.
          </p>

          <div className="contact-grid">
            <div className="contact-card">
              <p className="contact-label">EMAIL</p>
              <p className="contact-value">hello@blissfulburn.com</p>
            </div>
            <div className="contact-card">
              <p className="contact-label">INSTAGRAM</p>
              <p className="contact-value">@blissfulburncandles</p>
            </div>
            <div className="contact-card">
              <p className="contact-label">WHOLESALE</p>
              <p className="contact-value">wholesale@blissfulburn.com</p>
            </div>
          </div>
        </section>

        <SiteFooter />
      </div>
    </main>
  );
}
