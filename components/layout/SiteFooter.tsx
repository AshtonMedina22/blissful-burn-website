import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <p>© 2026 Blissful Burn Candles</p>
      <p>Made with love</p>
      <Link href="/" className="footer-top-link">
        Back to top
      </Link>
    </footer>
  );
}
