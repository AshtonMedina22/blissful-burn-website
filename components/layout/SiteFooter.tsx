import Link from "next/link";

const footerLinks = [
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <p className="footer-brand">BLISSFUL BURN</p>
        <p className="site-footer-script">Glow. Relax. Unwind.</p>
      </div>
      <nav className="footer-nav" aria-label="Footer navigation">
        {footerLinks.map((link) => (
          <Link key={link.label} href={link.href}>{link.label}</Link>
        ))}
      </nav>
      <p className="footer-copy">© 2026 Blissful Burn Candles</p>
    </footer>
  );
}
