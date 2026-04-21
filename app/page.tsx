const featuredCandles = [
  {
    name: "Lavender Fields",
    price: "$22.00",
    note: "Calm, cozy, ahhh.",
    tint: "bg-[#b19abc]",
  },
  {
    name: "Japanese Cherry Blossom",
    price: "$22.00",
    note: "Soft florals, main character energy.",
    tint: "bg-[#dccabf]",
  },
  {
    name: "Birthday Cake",
    price: "$22.00",
    note: "Sprinkles and sweet chaos.",
    tint: "bg-[#d6a8ba]",
  },
  {
    name: "Sunburst Melon",
    price: "$22.00",
    note: "Bright and juicy sunshine.",
    tint: "bg-[#edbe8c]",
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
    <main className="min-h-screen bg-[#ece7e5] px-4 py-8 text-zinc-800 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[24px] border border-black/10 bg-[#f9f8f7] shadow-[0_24px_60px_rgba(0,0,0,0.08)]">
        <header className="flex items-center justify-between border-b border-black/10 px-6 py-5 sm:px-10">
          <p className="text-xs font-semibold tracking-[0.25em] text-zinc-700">
            BLISSFULBURN CANDLES
          </p>
          <nav className="hidden items-center gap-8 text-xs tracking-[0.16em] text-zinc-600 md:flex">
            <a href="#" className="hover:text-zinc-900">
              SHOP
            </a>
            <a href="#" className="hover:text-zinc-900">
              ABOUT
            </a>
            <a href="#" className="hover:text-zinc-900">
              FAQ
            </a>
            <a href="#" className="hover:text-zinc-900">
              CONTACT
            </a>
          </nav>
        </header>

        <section className="grid gap-6 border-b border-black/10 p-6 sm:p-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative min-h-[280px] overflow-hidden rounded-2xl bg-gradient-to-br from-[#cdb8ce] via-[#efdfd5] to-[#d7c7bc]">
            <div className="absolute -left-6 bottom-0 h-48 w-48 rounded-full bg-[#8d6f9d]/55 blur-2xl" />
            <div className="absolute right-6 top-8 h-40 w-40 rounded-full bg-[#e8b298]/45 blur-xl" />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/15 to-transparent" />
          </div>
          <div className="flex flex-col justify-center gap-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
              New season drop
            </p>
            <h1 className="text-3xl font-semibold leading-tight text-zinc-900 sm:text-4xl">
              Pure. Simple. Beautiful.
            </h1>
            <p className="max-w-md text-sm leading-7 text-zinc-600">
              Handcrafted soy candles made for calm corners and cozy moments.
              Light one up and let your room throw a tiny, delightful vibe
              party.
            </p>
            <div className="flex flex-wrap gap-3">
              <button className="rounded-md bg-zinc-900 px-5 py-3 text-xs font-medium tracking-[0.15em] text-white transition hover:bg-zinc-700">
                SHOP COLLECTION
              </button>
              <button className="rounded-md border border-zinc-300 px-5 py-3 text-xs font-medium tracking-[0.15em] text-zinc-700 transition hover:border-zinc-500 hover:text-zinc-900">
                BUILD YOUR CANDLE BOX
              </button>
            </div>
          </div>
        </section>

        <section className="border-b border-black/10 px-6 py-10 sm:px-10">
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xs font-semibold tracking-[0.2em] text-zinc-500">
              FEATURED CANDLES
            </h2>
            <a href="#" className="text-xs font-medium tracking-[0.15em] text-zinc-700">
              VIEW ALL
            </a>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {featuredCandles.map((candle) => (
              <article
                key={candle.name}
                className="rounded-xl border border-black/10 bg-white p-4"
              >
                <div
                  className={`mb-4 h-44 rounded-lg ${candle.tint} shadow-inner shadow-black/10`}
                />
                <p className="text-sm font-semibold text-zinc-900">{candle.name}</p>
                <p className="mt-1 text-xs text-zinc-500">{candle.note}</p>
                <p className="mt-3 text-xs font-semibold tracking-widest text-zinc-700">
                  {candle.price}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="border-b border-black/10 px-6 py-8 sm:px-10">
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {values.map((value) => (
              <div key={value.title} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full border border-zinc-300 text-[10px] font-semibold tracking-wide text-zinc-500">
                  {value.icon}
                </span>
                <div>
                  <p className="text-sm font-semibold text-zinc-800">{value.title}</p>
                  <p className="text-xs text-zinc-500">{value.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 p-6 sm:p-10 lg:grid-cols-2">
          <div className="min-h-[220px] rounded-2xl bg-gradient-to-tr from-[#7f6e8b] via-[#b89fb4] to-[#d7c4bb]" />
          <div className="flex flex-col justify-center gap-5">
            <h3 className="text-xs font-semibold tracking-[0.2em] text-zinc-500">
              ABOUT BLISSFULBURN
            </h3>
            <p className="max-w-md text-sm leading-7 text-zinc-600">
              We mix high-quality ingredients with thoughtful details in every
              jar. Think clean aesthetic meets sweet personality.
            </p>
            <p className="max-w-md text-sm leading-7 text-zinc-600">
              Need a gift? Need a mood reset? Need your apartment to smell like
              a dream? We got you.
            </p>
            <button className="w-fit rounded-md border border-zinc-300 px-5 py-3 text-xs font-medium tracking-[0.15em] text-zinc-700 transition hover:border-zinc-500 hover:text-zinc-900">
              OUR STORY
            </button>
          </div>
        </section>

        <footer className="flex flex-wrap items-center justify-between gap-3 border-t border-black/10 bg-zinc-900 px-6 py-4 text-[11px] text-zinc-300 sm:px-10">
          <p>(c) 2026 BlissfulBurn Candles</p>
          <p>Made with love + a little sparkle.</p>
        </footer>
      </div>
    </main>
  );
}
