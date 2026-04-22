import type { Metadata } from "next";
import { Great_Vibes, Poppins } from "next/font/google";
import { CartProvider } from "@/components/cart/CartContext";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BlissfulBurn Candles",
  description:
    "Modern, clean, soft-luxury candle storefront for Blissful Burn.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${greatVibes.variable} h-full antialiased`}
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
