import Link from "next/link";

type Candle = {
  name: string;
  price: string;
  waxColor: string;
  jarColor: string;
};

const featuredCandles: Candle[] = [
  {
    name: "Lavender Fields",
    price: "$22.00",
    waxColor: "#bda5cf",
    jarColor: "#c7b5d3",
  },
  {
    name: "Japanese Cherry Blossom",
    price: "$22.00",
    waxColor: "#efd7ce",
    jarColor: "#dfc9bc",
  },
  {
    name: "Birthday Cake",
    price: "$22.00",
    waxColor: "#e8b8d0",
    jarColor: "#dcc8d9",
  },
  {
    name: "Sunburst Melon",
    price: "$22.00",
    waxColor: "#f0c17f",
    jarColor: "#dbc6af",
  },
];

const valuePoints = [
  "Hand Poured in Small Batches",
  "Premium Soy Wax",
  "Clean Burning & Long Lasting",
  "Made with Intention",
];

function CandleJar({
  waxColor,
  jarColor,
  className,
}: {
  waxColor: string;
  jarColor: string;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-xl border border-[#ded9d4] bg-[#f2ece6] ${className ?? ""}`}
    >
      <div className="absolute left-1/2 top-[10%] h-5 w-1 -translate-x-1/2 rounded bg-[#c9a377]" />
      <div
        className="absolute left-1/2 top-[14%] h-14 w-16 -translate-x-1/2 rounded-[48%_52%_44%_56%]"
        style={{ backgroundColor: waxColor }}
      />
      <div
        className="absolute left-1/2 top-[37%] h-[50%] w-[52%] -translate-x-1/2 rounded-[10px_10px_18px_18px] border border-[#cfc7be]"
        style={{ backgroundColor: jarColor }}
      />
      <div className="absolute left-1/2 top-[55%] h-[1px] w-[44%] -translate-x-1/2 bg-[#b7afa7]" />
      <div className="absolute inset-x-0 bottom-0 h-[28%] bg-gradient-to-t from-[#e8dfd5]/70 to-transparent" />
    </div>
  );
}

export default function Home() {
  const heroCandles = [featuredCandles[0], featuredCandles[1]];

  return (
    <main className="min-h-screen bg-[#f5efea] px-3 py-6 text-[var(--foreground)] sm:px-6">
      <div className="mx-auto max-w-[1060px] overflow-hidden rounded-2xl border border-[#e4ddd6] bg-[var(--surface)] shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
        <header className="flex h-[72px] items-center justify-between border-b border-[var(--light-grey)] px-4 sm:px-8">
          <p className="text-[10px] font-medium tracking-[0.22em] text-[#4e4a47]">
            BLISSFULBURN CANDLES
          </p>
          <nav className="hidden items-center gap-7 text-[11px] font-medium tracking-[0.08em] text-[#615c58] md:flex">
            <Link href="#">SHOP</Link>
            <Link href="#">ABOUT</Link>
            <Link href="#">FAQ</Link>
            <Link href="#">CONTACT</Link>
          </nav>
          <button
            className="rounded-md border border-[var(--light-grey)] px-2 py-1 text-xs"
            aria-label="Open cart"
          >
            🛒
          </button>
        </header>

        <section className="grid gap-0 border-b border-[var(--light-grey)] lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative min-h-[290px] overflow-hidden bg-[linear-gradient(160deg,#e7ddd6,#f5ece5)] p-6 sm:p-8">
            <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-[#ddd2c7]/60 to-transparent" />
            <div className="absolute bottom-0 left-4 h-20 w-28 rotate-[12deg] rounded-[100px_100px_0_0] border-t border-[#b39f8d]/60" />
            <div className="grid h-full grid-cols-2 items-end gap-4">
              {heroCandles.map((candle) => (
                <CandleJar
                  key={`hero-${candle.name}`}
                  waxColor={candle.waxColor}
                  jarColor={candle.jarColor}
                  className="mx-auto h-56 w-full max-w-[168px]"
                />
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center gap-4 px-6 py-8 sm:px-10">
            <h1 className="text-[34px] font-light leading-tight sm:text-[42px]">
              PURE. SIMPLE.
              <br />
              BEAUTIFUL.
            </h1>
            <p className="max-w-sm text-sm leading-6 text-[var(--muted)]">
              Handcrafted soy candles made for calm moments and cozy spaces.
            </p>
            <button className="w-fit rounded-md bg-[var(--foreground)] px-5 py-3 text-[11px] font-medium tracking-[0.08em] text-white">
              SHOP COLLECTION
            </button>
          </div>
        </section>

        <section className="border-b border-[var(--light-grey)] px-4 py-8 sm:px-8 sm:py-10">
          <h2 className="mb-6 text-center text-[11px] font-medium tracking-[0.22em] text-[#66615e]">
            FEATURED CANDLES
          </h2>
          <div className="grid gap-4 grid-cols-2 md:grid-cols-4">
            {featuredCandles.map((candle) => (
              <article
                key={candle.name}
                className="group rounded-lg border border-[var(--light-grey)] bg-white p-3 transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)]"
              >
                <CandleJar
                  waxColor={candle.waxColor}
                  jarColor={candle.jarColor}
                  className="h-28 w-full"
                />
                <p className="mt-3 min-h-[30px] text-center text-[10px] font-medium text-[#494542]">
                  {candle.name}
                </p>
                <p className="mt-1 text-center text-[10px] text-[var(--muted)]">
                  {candle.price}
                </p>
                <button className="mt-3 w-full rounded-md border border-[var(--light-grey)] bg-[var(--background)] px-2 py-1.5 text-[10px] font-medium tracking-[0.06em] text-[var(--foreground)]">
                  QUICK ADD
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="border-b border-[var(--light-grey)] px-4 py-7 sm:px-8">
          <div className="grid gap-4 text-center sm:grid-cols-2 lg:grid-cols-4">
            {valuePoints.map((point) => (
              <div key={point}>
                <div className="mx-auto mb-2 h-6 w-6 rounded-full border border-[#cfc6be]" />
                <p className="text-[10px] leading-4 text-[#65605d]">{point}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid border-b border-[var(--light-grey)] lg:grid-cols-[1fr_1fr]">
          <div className="min-h-[240px] bg-[linear-gradient(150deg,#c7b5c8,#e8ddd4)] p-6">
            <CandleJar
              waxColor="#ba9ccc"
              jarColor="#cfbfcb"
              className="mx-auto h-full min-h-[190px] w-full max-w-[220px]"
            />
          </div>
          <div className="flex items-center px-6 py-8 sm:px-10">
            <div className="space-y-3">
              <h3 className="text-[11px] font-medium tracking-[0.22em] text-[#66615e]">
                ABOUT BLISSFULBURN
              </h3>
              <p className="max-w-md text-sm leading-6 text-[var(--muted)]">
                We create handcrafted candles using high quality ingredients and
                thoughtful details in every jar.
              </p>
              <button className="rounded-md border border-[var(--foreground)] px-5 py-2.5 text-[11px] font-medium tracking-[0.08em]">
                OUR STORY
              </button>
            </div>
          </div>
        </section>

        <footer className="flex flex-wrap items-center justify-between gap-2 border-t border-[var(--light-grey)] bg-[#f4efea] px-4 py-4 text-[10px] text-[#57524f] sm:px-8">
          <p>© 2026 Blissful Burn Candles</p>
          <p>Made with love</p>
          <p>Back to top</p>
        </footer>
      </div>
    </main>
  );
}
