import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { href: "/shop", label: "SHOP" },
  { href: "/about", label: "ABOUT" },
  { href: "/contact", label: "CONTACT" },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-brand-block">
        <Image
          src="/images/blissful-burn-logo-black.svg"
          alt="Blissful Burn"
          width={220}
          height={136}
          className="footer-logo-image"
          unoptimized
        />
        <p className="footer-brand">© 2026 Blissful Burn Candles</p>
        <p className="site-footer-script">Glow, Relax, and Unwind.</p>
      </div>
      <nav className="footer-nav" aria-label="Footer navigation">
        {footerLinks.map((link) => (
          <Link key={link.label} href={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>
      <Link href="/" className="footer-top-link">
        Back to top
      </Link>
    </footer>
  );
}
