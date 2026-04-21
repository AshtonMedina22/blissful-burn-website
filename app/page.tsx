import Link from "next/link";

type Product = {
  name: string;
  price: string;
  gradient: string;
};

const products: Product[] = [
  {
    name: "Lavender Fields",
    price: "$22.00",
    gradient: "linear-gradient(160deg,#FAF6F0,#EBC2C7)",
  },
  {
    name: "Japanese Cherry Blossom",
    price: "$22.00",
    gradient: "linear-gradient(160deg,#FFFFFF,#F7A7B8)",
  },
  {
    name: "Birthday Cake",
    price: "$22.00",
    gradient: "linear-gradient(160deg,#FAF6F0,#DCC7B4)",
  },
  {
    name: "Sunburst Melon",
    price: "$22.00",
    gradient: "linear-gradient(160deg,#FFFFFF,#EBC2C7)",
  },
];

const valuePoints = [
  { title: "Hand Poured", detail: "in Small Batches" },
  { title: "Premium", detail: "Soy Wax" },
  { title: "Clean Burning", detail: "& Long Lasting" },
  { title: "Made with", detail: "Intention" },
];

function BrandMark() {
  return (
    <div className="flex items-center gap-3">
      <div className="grid h-10 w-10 place-items-center rounded-full border border-[var(--primary-pink)]">
        <span className="font-[family-name:var(--font-accent)] text-[30px] leading-none text-[var(--primary-pink)]">
          B
        </span>
      </div>
      <p className="text-[11px] font-medium tracking-[0.35em] text-[var(--primary-pink)]">
        BLISSFUL BURN
      </p>
    </div>
  );
}

function BagIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 stroke-current"
      fill="none"
      strokeWidth="1.6"
    >
      <path d="M6 8h12l-1 11H7L6 8Z" />
      <path d="M9 8a3 3 0 1 1 6 0" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 stroke-current"
      fill="none"
      strokeWidth="1.6"
    >
      <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10Z" />
    </svg>
  );
}

function DropIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 stroke-current"
      fill="none"
      strokeWidth="1.6"
    >
      <path d="M12 3c3 4 5 7 5 10a5 5 0 1 1-10 0c0-3 2-6 5-10Z" />
    </svg>
  );
}

function SparkIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-4 w-4 stroke-current"
      fill="none"
      strokeWidth="1.6"
    >
      <path d="m12 4 1.8 4.2L18 10l-4.2 1.8L12 16l-1.8-4.2L6 10l4.2-1.8L12 4Z" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] px-3 py-6 text-[var(--foreground)] sm:px-6">
      <div className="mx-auto max-w-[1060px] overflow-hidden rounded-xl border border-[var(--light-grey)] bg-[var(--surface)] shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
        <header className="flex h-[72px] items-center justify-between border-b border-[var(--light-grey)] px-4 sm:px-8">
          <BrandMark />
          <nav className="hidden items-center gap-7 text-[11px] font-medium tracking-[0.05em] text-[var(--muted)] md:flex">
            <Link href="#">HOME</Link>
            <Link href="#">SHOP</Link>
            <Link href="#">ABOUT</Link>
            <Link href="#">CONTACT</Link>
          </nav>
          <button
            className="rounded-md border border-[var(--light-grey)] p-2 text-[var(--muted)]"
            aria-label="Open cart"
          >
            <BagIcon />
          </button>
        </header>

        <section className="grid border-b border-[var(--light-grey)] lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative min-h-[300px] overflow-hidden bg-[linear-gradient(155deg,#FFFFFF,#FAF6F0)] p-6 sm:p-8">
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#EBC2C733] to-transparent" />
            <div className="absolute left-[8%] top-[18%] h-[62%] w-[34%] rounded-[28px_28px_36px_36px] border border-[var(--light-grey)] bg-[linear-gradient(165deg,#FAF6F0,#EBC2C7)]" />
            <div className="absolute left-[38%] top-[12%] h-[68%] w-[38%] rounded-[30px_30px_40px_40px] border border-[var(--light-grey)] bg-[linear-gradient(165deg,#FFFFFF,#F7A7B8)]" />
            <div className="absolute right-[8%] bottom-[12%] h-20 w-20 rounded-full border border-[var(--light-grey)] bg-[linear-gradient(165deg,#FFFFFF,#DCC7B4)]" />
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
            <button className="w-fit rounded-[10px] bg-[var(--primary-pink)] px-5 py-3 text-[11px] font-medium tracking-[0.06em] text-white hover:bg-[var(--dusty-pink)]">
              SHOP COLLECTION
            </button>
          </div>
        </section>

        <section className="border-b border-[var(--light-grey)] px-4 py-8 sm:px-8 sm:py-10">
          <h2 className="mb-6 text-center text-[11px] font-medium tracking-[0.22em] text-[var(--muted)]">
            FEATURED CANDLES
          </h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {products.map((product) => (
              <article
                key={product.name}
                className="rounded-lg border border-[var(--light-grey)] bg-[var(--surface)] p-3"
              >
                <div
                  className="h-24 rounded-md border border-[var(--light-grey)]"
                  style={{ background: product.gradient }}
                />
                <p className="mt-3 min-h-[30px] text-center text-[10px] font-medium text-[var(--foreground)]">
                  {product.name}
                </p>
                <p className="mt-1 text-center text-[10px] text-[var(--muted)]">
                  {product.price}
                </p>
                <button className="mt-3 w-full rounded-[10px] border border-[var(--light-grey)] bg-[var(--background)] px-2 py-1.5 text-[10px] font-medium tracking-[0.06em] text-[var(--foreground)] hover:border-[var(--primary-pink)] hover:text-[var(--primary-pink)]">
                  QUICK ADD
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="border-b border-[var(--light-grey)] px-4 py-7 sm:px-8">
          <div className="grid gap-4 text-center sm:grid-cols-2 lg:grid-cols-4">
            {valuePoints.map((point, index) => (
              <div key={point.title}>
                <div className="mx-auto mb-2 grid h-6 w-6 place-items-center text-[var(--muted)]">
                  {index === 0 && <SparkIcon />}
                  {index === 1 && <DropIcon />}
                  {index === 2 && <BagIcon />}
                  {index === 3 && <HeartIcon />}
                </div>
                <p className="text-[10px] leading-4 text-[var(--muted)]">
                  {point.title}
                  <br />
                  {point.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid border-b border-[var(--light-grey)] lg:grid-cols-2">
          <div className="min-h-[240px] bg-[linear-gradient(155deg,#FFFFFF,#FAF6F0)] p-6">
            <div className="mx-auto h-full min-h-[190px] max-w-[240px] rounded-xl border border-[var(--light-grey)] bg-[linear-gradient(165deg,#FFFFFF,#EBC2C7)]" />
          </div>
          <div className="flex items-center px-6 py-8 sm:px-10">
            <div className="space-y-3">
              <h3 className="text-[11px] font-medium tracking-[0.22em] text-[var(--muted)]">
                ABOUT BLISSFULBURN
              </h3>
              <p className="max-w-md text-sm leading-6 text-[var(--muted)]">
                We create handcrafted candles using high quality ingredients and
                thoughtful details in every jar.
              </p>
              <button className="rounded-[10px] border border-[var(--foreground)] px-5 py-2.5 text-[11px] font-medium tracking-[0.08em] hover:border-[var(--primary-pink)] hover:text-[var(--primary-pink)]">
                OUR STORY
              </button>
            </div>
          </div>
        </section>

        <footer className="flex flex-wrap items-center justify-between gap-2 border-t border-[var(--light-grey)] bg-[var(--background)] px-4 py-4 text-[10px] text-[var(--muted)] sm:px-8">
          <p>© 2026 Blissful Burn Candles</p>
          <p>Made with love</p>
          <p>Back to top</p>
        </footer>
      </div>
    </main>
  );
}
