import { SiteFooter, SiteHeader } from "@/components";

export default function ContactPage() {
  return (
    <main className="page-container">
      <div className="page-wrapper">
        <SiteHeader />

        <section className="info-page contact-page">
          <p className="eyebrow">Contact</p>
          <h1 className="hero-headline">Let’s create a softer moment.</h1>
          <p className="info-page-copy">
            We would love to help with scent recommendations, gifting requests,
            wholesale inquiries, or questions about upcoming wax melts and relax wear.
          </p>

          <div className="contact-grid">
            <div className="contact-card">
              <p className="contact-label">Email</p>
              <p className="contact-value">hello@blissfulburn.com</p>
            </div>
            <div className="contact-card">
              <p className="contact-label">Instagram</p>
              <p className="contact-value">@blissfulburncandles</p>
            </div>
            <div className="contact-card">
              <p className="contact-label">Wholesale</p>
              <p className="contact-value">wholesale@blissfulburn.com</p>
            </div>
          </div>
        </section>

        <SiteFooter />
      </div>
    </main>
  );
}
