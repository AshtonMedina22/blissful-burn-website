import Link from "next/link";

const featuredCandles = [
  {
    name: "Lavender Fields",
    price: "$22.00",
    note: "Soft lavender calm for slow evenings.",
    tint: "bg-[linear-gradient(145deg,#f9edf0,#ebc2c7)]",
  },
  {
    name: "Japanese Cherry Blossom",
    price: "$22.00",
    note: "Airy florals with a polished finish.",
    tint: "bg-[linear-gradient(145deg,#f8ecef,#e9c7cf)]",
  },
  {
    name: "Birthday Cake",
    price: "$22.00",
    note: "A sweet bakery glow, done elegantly.",
    tint: "bg-[linear-gradient(145deg,#fae9ed,#f3cfd7)]",
  },
  {
    name: "Sunburst Melon",
    price: "$22.00",
    note: "Fresh fruit brightness with a clean burn.",
    tint: "bg-[linear-gradient(145deg,#f8efe6,#dcc7b4)]",
  },
];

const values = [
  { icon: "01", title: "Hand Poured", detail: "Small joyful batches." },
  { icon: "02", title: "Soy Wax", detail: "Clean burn, less fuss." },
  { icon: "03", title: "Long Lasting", detail: "Slow glow, big mood." },
  { icon: "04", title: "Made With Love", detail: "Every jar gets heart." },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <header className="sticky top-0 z-20 border-b border-[var(--light-grey)] bg-[var(--background)]/95 backdrop-blur">
        <div className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between px-4 sm:h-[84px] sm:px-6 lg:px-10">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-full border border-[var(--primary-pink)] text-lg font-light text-[var(--primary-pink)] sm:h-11 sm:w-11">
              B
            </div>
            <p className="text-[11px] font-medium tracking-[0.42em] text-[var(--primary-pink)] sm:text-xs">
              BLISSFUL BURN
            </p>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium text-[var(--foreground)] md:flex">
            <Link href="#" className="hover:text-[var(--primary-pink)]">
              Home
            </Link>
            <Link href="#" className="hover:text-[var(--primary-pink)]">
              Shop
            </Link>
            <Link href="#" className="hover:text-[var(--primary-pink)]">
              About
            </Link>
            <Link href="#" className="hover:text-[var(--primary-pink)]">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-3 text-sm text-[var(--foreground)]">
            <button className="rounded-full border border-[var(--light-grey)] p-2 leading-none hover:border-[var(--primary-pink)] hover:text-[var(--primary-pink)]">
              ⌕
            </button>
            <button className="rounded-full border border-[var(--light-grey)] p-2 leading-none hover:border-[var(--primary-pink)] hover:text-[var(--primary-pink)]">
              🛍
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-[1280px] px-4 pb-16 pt-8 sm:px-6 sm:pt-10 lg:px-10">
        <section className="grid items-center gap-8 rounded-xl bg-[var(--surface)] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.06)] sm:p-8 lg:grid-cols-2 lg:p-12">
          <div className="space-y-6">
            <p className="text-sm font-medium tracking-[0.04em] text-[var(--primary-pink)]">
              SOY BLEND CANDLES
            </p>
            <h1 className="max-w-xl text-4xl font-light leading-[1.1] text-[var(--foreground)] sm:text-5xl lg:text-[64px]">
              Light Up Life&apos;s Sweet Moments
            </h1>
            <p className="max-w-xl text-base font-normal leading-7 text-[var(--muted)]">
              Hand-poured soy candles designed to bring warmth, calm, and beauty
              into everyday spaces.
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <button className="rounded-[10px] bg-[var(--primary-pink)] px-6 py-[14px] text-sm font-medium tracking-[0.04em] text-white hover:bg-[var(--dusty-pink)]">
                SHOP COLLECTION
              </button>
              <button className="rounded-[10px] border border-[var(--foreground)] px-6 py-[14px] text-sm font-medium tracking-[0.04em] text-[var(--foreground)] hover:border-[var(--primary-pink)] hover:text-[var(--primary-pink)]">
                BEST SELLERS
              </button>
            </div>
          </div>

          <div className="relative min-h-[360px] overflow-hidden rounded-xl border border-[var(--light-grey)] bg-[linear-gradient(155deg,#faf6f0,#f0e8e1)]">
            <div className="absolute -left-2 top-6 h-56 w-56 rounded-full bg-[var(--dusty-pink)]/45 blur-3xl" />
            <div className="absolute right-0 top-20 h-44 w-44 rounded-full bg-[var(--nude-beige)]/60 blur-2xl" />
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#e8ddd2] to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 rounded-lg border border-[var(--light-grey)] bg-white/80 px-4 py-3 text-center text-sm font-normal text-[var(--muted)] backdrop-blur">
              Signature jar visual placeholder for product photography.
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-[30px] font-light leading-tight text-[var(--foreground)] sm:text-[40px]">
              Best Sellers
            </h2>
            <button className="text-sm font-medium tracking-[0.04em] text-[var(--foreground)] hover:text-[var(--primary-pink)]">
              VIEW ALL
            </button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {featuredCandles.map((candle) => (
              <article
                key={candle.name}
                className="group flex h-full flex-col rounded-xl border border-[var(--light-grey)] bg-[var(--surface)] p-4 shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all duration-250 hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(0,0,0,0.1)]"
              >
                <div
                  className={`mb-4 h-56 rounded-lg border border-[var(--light-grey)] ${candle.tint}`}
                />
                <p className="min-h-[56px] text-xl font-medium text-[var(--foreground)]">
                  {candle.name}
                </p>
                <p className="mt-2 min-h-[42px] text-sm font-normal text-[var(--muted)]">
                  {candle.note}
                </p>
                <p className="mt-4 text-sm font-medium tracking-[0.04em] text-[var(--foreground)]">
                  {candle.price}
                </p>
                <button className="mt-auto w-full rounded-[10px] bg-[var(--primary-pink)] px-4 py-3 text-sm font-medium tracking-[0.04em] text-white hover:bg-[var(--dusty-pink)]">
                  QUICK ADD
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-[var(--light-grey)] bg-[var(--surface)] px-6 py-10 shadow-[0_10px_30px_rgba(0,0,0,0.06)] sm:px-8">
          <h3 className="mb-8 text-[30px] font-light leading-tight text-[var(--foreground)] sm:text-[40px]">
            Why Choose Us
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full border border-[var(--light-grey)] text-[10px] font-medium tracking-wide text-[var(--muted)]">
                  {value.icon}
                </span>
                <div>
                  <p className="text-base font-medium text-[var(--foreground)]">
                    {value.title}
                  </p>
                  <p className="text-sm font-normal text-[var(--muted)]">
                    {value.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-8 py-12 sm:py-16 lg:grid-cols-2">
          <div className="min-h-[280px] rounded-xl border border-[var(--light-grey)] bg-[linear-gradient(160deg,#efe6de,#f7f2ec)] shadow-[0_10px_30px_rgba(0,0,0,0.06)]" />
          <div className="flex flex-col justify-center gap-5">
            <h3 className="text-[30px] font-light leading-tight text-[var(--foreground)] sm:text-[40px]">
              About Blissful Burn
            </h3>
            <p className="max-w-2xl text-base leading-7 text-[var(--muted)]">
              We create hand-crafted candles using premium soy wax, thoughtful
              scent blends, and a modern minimalist finish.
            </p>
            <p className="max-w-2xl text-base leading-7 text-[var(--muted)]">
              Every jar is made to feel gift-worthy and personal: clean enough
              to trust, warm enough to love.
            </p>
            <button className="w-fit rounded-[10px] border border-[var(--foreground)] px-6 py-[14px] text-sm font-medium tracking-[0.04em] text-[var(--foreground)] hover:border-[var(--primary-pink)] hover:text-[var(--primary-pink)]">
              OUR STORY
            </button>
          </div>
        </section>

        <section className="rounded-xl border border-[var(--light-grey)] bg-[var(--surface)] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.06)] sm:p-8">
          <div className="mb-4 flex items-center justify-between gap-4">
            <h4 className="text-2xl font-light text-[var(--foreground)]">
              Instagram
            </h4>
            <p className="text-sm font-normal text-[var(--muted)]">
              @blissfulburncandles
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="h-28 rounded-lg border border-[var(--light-grey)] bg-[linear-gradient(145deg,#f4e6e8,#ede5df)]" />
            <div className="h-28 rounded-lg border border-[var(--light-grey)] bg-[linear-gradient(145deg,#f0e5de,#ead8de)]" />
            <div className="h-28 rounded-lg border border-[var(--light-grey)] bg-[linear-gradient(145deg,#f4ece3,#f1e9df)]" />
          </div>
        </section>
      </div>

      <footer className="mt-6 border-t border-[var(--light-grey)] bg-[var(--foreground)]">
        <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-3 px-4 py-5 text-xs font-normal text-white/85 sm:px-6 lg:px-10">
          <p>© 2026 Blissful Burn Candles</p>
          <p>Glow. Relax. Unwind.</p>
        </div>
      </footer>
    </main>
  );
}
