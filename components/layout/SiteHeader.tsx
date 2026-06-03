import Link from "next/link";
import { CartLink } from "@/components/cart/CartLink";
import { SearchIcon } from "@/components/icons/Icons";

const NAV_ITEMS = [
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
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
    <>
      <div className="announcement-bar">Free shipping on orders $75+ · New fragrance rituals coming soon</div>
      <header className="site-header">
        <BrandMark />
        <nav className="nav-menu" aria-label="Primary navigation">
          {NAV_ITEMS.map((item) => (
            <Link key={item.label} href={item.href} className="nav-item">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <Link href="/shop" className="icon-button" aria-label="Search the shop">
            <SearchIcon />
          </Link>
          <CartLink className="header-cart" />
        </div>
      </header>
    </>
  );
}
