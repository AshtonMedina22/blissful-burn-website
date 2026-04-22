import Link from "next/link";

type Product = {
  name: string;
  price: string;
  gradient: string;
  note: string;
};

const products: Product[] = [
  {
    name: "Lavender Fields",
    price: "$22.00",
    gradient: "linear-gradient(160deg,#FAF6F0,#EBC2C7)",
    note: "Soft floral calm",
  },
  {
    name: "Japanese Cherry Blossom",
    price: "$22.00",
    gradient: "linear-gradient(160deg,#FFFFFF,#F7A7B8)",
    note: "Velvet petal blend",
  },
  {
    name: "Birthday Cake",
    price: "$22.00",
    gradient: "linear-gradient(160deg,#FAF6F0,#DCC7B4)",
    note: "Creamy sweet finish",
  },
  {
    name: "Sunburst Melon",
    price: "$22.00",
    gradient: "linear-gradient(160deg,#FFFFFF,#EBC2C7)",
    note: "Fresh fruit brightness",
  },
];

const valuePoints = [
  { title: "Hand Poured", detail: "in Small Batches" },
  { title: "Premium Soy", detail: "Clean Wax" },
  { title: "Clean Burning", detail: "Long Lasting" },
  { title: "Made with", detail: "Intention" },
];

function BrandMark() {
  return (
    <div className="flex items-center gap-3">
      <div className="grid h-10 w-10 place-items-center rounded-full border border-[var(--primary-pink)] sm:h-11 sm:w-11">
        <span className="font-[family-name:var(--font-accent)] text-[30px] leading-none text-[var(--primary-pink)]">
          B
        </span>
      </div>
      <p className="text-[11px] font-medium tracking-[0.33em] text-[var(--primary-pink)] sm:text-xs">
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
    <main className="min-h-screen bg-[var(--background)] px-4 py-8 text-[var(--foreground)] sm:px-7 lg:px-10">
      <div className="mx-auto max-w-[1200px] overflow-hidden rounded-xl border border-[var(--light-grey)] bg-[var(--surface)] shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
        <header className="flex h-[74px] items-center justify-between border-b border-[var(--light-grey)] px-5 sm:h-[82px] sm:px-10">
          <BrandMark />
          <nav className="hidden items-center gap-8 text-[11px] font-medium tracking-[0.05em] text-[var(--muted)] md:flex">
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

        <section className="grid border-b border-[var(--light-grey)] lg:grid-cols-[1.06fr_0.94fr]">
          <div className="relative min-h-[380px] overflow-hidden bg-[linear-gradient(155deg,#FFFFFF,#FAF6F0)] px-6 py-8 sm:min-h-[440px] sm:px-10 sm:py-10">
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#EBC2C733] to-transparent" />
            <div className="absolute left-[10%] top-[20%] h-[64%] w-[31%] rounded-[30px_30px_40px_40px] border border-[var(--light-grey)] bg-[linear-gradient(165deg,#FAF6F0,#EBC2C7)]" />
            <div className="absolute left-[38%] top-[14%] h-[72%] w-[36%] rounded-[34px_34px_44px_44px] border border-[var(--light-grey)] bg-[linear-gradient(165deg,#FFFFFF,#F7A7B8)]" />
            <div className="absolute right-[9%] bottom-[14%] h-24 w-24 rounded-full border border-[var(--light-grey)] bg-[linear-gradient(165deg,#FFFFFF,#DCC7B4)]" />
          </div>

          <div className="flex flex-col justify-center gap-5 px-6 py-10 sm:px-11 sm:py-12">
            <h1 className="text-[38px] font-light leading-[1.04] sm:text-[48px]">
              PURE. SIMPLE.
              <br />
              BEAUTIFUL.
            </h1>
            <p className="max-w-[33ch] text-[15px] leading-7 text-[var(--muted)]">
              Handcrafted soy candles made for calm moments and cozy spaces with
              a soft, modern finish.
            </p>
            <button className="w-fit rounded-[10px] bg-[var(--primary-pink)] px-5 py-2.5 text-[11px] font-medium tracking-[0.06em] text-white hover:bg-[var(--dusty-pink)]">
              SHOP COLLECTION
            </button>
          </div>
        </section>

        <section className="border-b border-[var(--light-grey)] px-5 py-12 sm:px-10 sm:py-14">
          <h2 className="mb-8 text-center text-[12px] font-medium tracking-[0.22em] text-[var(--muted)]">
            FEATURED CANDLES
          </h2>
          <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
            {products.map((product) => (
              <article
                key={product.name}
                className="flex min-h-[340px] flex-col rounded-lg border border-[var(--light-grey)] bg-[var(--surface)] px-3.5 py-4 sm:min-h-[380px]"
              >
                <div
                  className="h-44 rounded-md border border-[var(--light-grey)] sm:h-52"
                  style={{ background: product.gradient }}
                />
                <p className="mt-4 min-h-[38px] text-center text-[11px] font-medium leading-[1.35] text-[var(--foreground)]">
                  {product.name}
                </p>
                <p className="mt-1 text-center text-[10px] text-[var(--muted)]">
                  {product.note}
                </p>
                <p className="mt-2 text-center text-[11px] font-medium text-[var(--foreground)]">
                  {product.price}
                </p>
                <button className="mt-auto self-center rounded-[10px] border border-[var(--light-grey)] bg-[var(--background)] px-4 py-2 text-[10px] font-medium tracking-[0.06em] text-[var(--foreground)] hover:border-[var(--primary-pink)] hover:text-[var(--primary-pink)]">
                  QUICK ADD
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="border-b border-[var(--light-grey)] px-5 py-11 sm:px-10">
          <div className="mx-auto grid max-w-[920px] gap-y-7 text-center sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-4">
            {valuePoints.map((point, index) => (
              <div key={point.title} className="flex flex-col items-center">
                <div className="mb-2.5 grid h-9 w-9 place-items-center rounded-full border border-[var(--light-grey)] text-[var(--muted)]">
                  {index === 0 && <SparkIcon />}
                  {index === 1 && <DropIcon />}
                  {index === 2 && <BagIcon />}
                  {index === 3 && <HeartIcon />}
                </div>
                <p className="text-[11px] font-medium text-[var(--foreground)]">
                  {point.title}
                </p>
                <p className="mt-0.5 text-[10px] tracking-[0.02em] text-[var(--muted)]">
                  {point.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid border-b border-[var(--light-grey)] lg:grid-cols-[0.46fr_0.54fr]">
          <div className="min-h-[320px] bg-[linear-gradient(155deg,#FFFFFF,#FAF6F0)] p-6 sm:min-h-[370px] sm:p-8">
            <div className="mx-auto h-full min-h-[260px] max-w-[320px] rounded-xl border border-[var(--light-grey)] bg-[linear-gradient(165deg,#FFFFFF,#EBC2C7)]" />
          </div>
          <div className="flex items-center px-6 py-11 sm:px-12 sm:py-12">
            <div className="max-w-[420px] space-y-4">
              <h3 className="text-[12px] font-medium tracking-[0.22em] text-[var(--muted)]">
                ABOUT BLISSFULBURN
              </h3>
              <p className="text-[15px] leading-7 text-[var(--muted)]">
                We create handcrafted candles using high quality ingredients and
                thoughtful details in every jar.
              </p>
              <button className="rounded-[10px] border border-[var(--foreground)] px-5 py-2.5 text-[11px] font-medium tracking-[0.08em] hover:border-[var(--primary-pink)] hover:text-[var(--primary-pink)]">
                OUR STORY
              </button>
            </div>
          </div>
        </section>

        <footer className="flex flex-wrap items-center justify-between gap-3 border-t border-[var(--light-grey)] bg-[var(--background)] px-5 py-6 text-[10px] text-[var(--muted)] sm:px-10">
          <p>© 2026 Blissful Burn Candles</p>
          <p>Made with love</p>
          <p>Back to top</p>
        </footer>
      </div>
    </main>
  );
}
