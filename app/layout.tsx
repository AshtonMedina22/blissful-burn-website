import type { Metadata } from "next";
import { CartProvider } from "@/components/cart/CartContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blissful Burn Candles",
  description:
    "Soft-luxury candles, wax melts, home fragrance, and relax wear from Blissful Burn.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body
        className="min-h-full flex flex-col"
        style={{ backgroundColor: "#FAF6F0", color: "#1A1A1A" }}
      >
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
