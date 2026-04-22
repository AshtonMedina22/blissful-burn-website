import Link from "next/link";
import { CartLink } from "@/components/cart/CartLink";

const NAV_ITEMS = [
  { href: "/", label: "HOME" },
  { href: "/shop", label: "SHOP" },
  { href: "/about", label: "ABOUT" },
  { href: "/contact", label: "CONTACT" },
];

function BrandMark() {
  return (
    <Link href="/" className="brand-logo" aria-label="Blissful Burn home">
      <div className="brand-logo-mark">
        <span className="brand-logo-letter">B</span>
      </div>
      <p className="brand-logo-text">BLISSFUL BURN</p>
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <BrandMark />
      <nav className="nav-menu">
        {NAV_ITEMS.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <CartLink />
    </header>
  );
}
