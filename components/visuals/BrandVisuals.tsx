import type { Product } from "@/lib/products";

const productArt: Record<
  string,
  { wax: string; accent: string; glow: string; note: string }
> = {
  "lavender-fields": {
    wax: "#EBC2C7",
    accent: "#C9B1D8",
    glow: "#F9DFE5",
    note: "Lavender",
  },
  "japanese-cherry-blossom": {
    wax: "#F7A7B8",
    accent: "#FAD6DF",
    glow: "#FFE7ED",
    note: "Cherry Blossom",
  },
  "birthday-cake": {
    wax: "#DCC7B4",
    accent: "#F4E8D9",
    glow: "#FFF2DF",
    note: "Birthday Cake",
  },
  "sunburst-melon": {
    wax: "#EBC2C7",
    accent: "#F1C69C",
    glow: "#FFF1DD",
    note: "Sunburst Melon",
  },
};

export function HeroProductVisual() {
  return (
    <svg
      className="hero-product-svg"
      viewBox="0 0 760 720"
      role="img"
      aria-label="Blissful Burn candle, wax melts, and relax wear still life"
    >
      <defs>
        <linearGradient id="hero-bg" x1="0" x2="1" y1="0" y2="1">
          <stop stopColor="#FFFFFF" />
          <stop offset="0.52" stopColor="#FAF6F0" />
          <stop offset="1" stopColor="#EBC2C7" />
        </linearGradient>
        <linearGradient id="hero-glass" x1="0" x2="1">
          <stop stopColor="#FFFFFF" stopOpacity="0.28" />
          <stop offset="0.44" stopColor="#FFFFFF" stopOpacity="0.9" />
          <stop offset="1" stopColor="#F7F0EA" stopOpacity="0.48" />
        </linearGradient>
        <radialGradient id="hero-flame" cx="50%" cy="45%" r="58%">
          <stop stopColor="#FFFFFF" />
          <stop offset="0.52" stopColor="#FFDFA8" />
          <stop offset="1" stopColor="#F7A7B8" />
        </radialGradient>
        <filter id="soft-shadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow
            dx="0"
            dy="24"
            stdDeviation="22"
            floodColor="#6D4B4B"
            floodOpacity="0.18"
          />
        </filter>
      </defs>

      <rect
        x="20"
        y="18"
        width="720"
        height="684"
        rx="58"
        fill="url(#hero-bg)"
      />
      <circle cx="620" cy="128" r="118" fill="#F7A7B8" opacity="0.18" />
      <circle cx="126" cy="584" r="140" fill="#DCC7B4" opacity="0.22" />

      <g filter="url(#soft-shadow)">
        <path
          d="M92 552 C176 500 278 508 356 548 C432 588 552 572 668 512 L692 642 L78 642 Z"
          fill="#F3E8DF"
        />
        <path
          d="M126 588 C250 532 366 626 520 560"
          fill="none"
          stroke="#DCC7B4"
          strokeWidth="5"
          opacity="0.34"
        />
        <path
          d="M184 610 C316 570 420 646 612 588"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="8"
          opacity="0.62"
        />
      </g>

      <g filter="url(#soft-shadow)">
        <path
          d="M104 224 h178 a26 26 0 0 1 26 26 v212 a26 26 0 0 1-26 26 H104 a26 26 0 0 1-26-26 V250 a26 26 0 0 1 26-26Z"
          fill="#1A1A1A"
          opacity="0.06"
        />
        <path
          d="M92 206 h178 a28 28 0 0 1 28 28 v212 a28 28 0 0 1-28 28 H92 a28 28 0 0 1-28-28 V234 a28 28 0 0 1 28-28Z"
          fill="#FFFFFF"
        />
        <path
          d="M92 206 h178 a28 28 0 0 1 28 28 v42 H64 v-42 a28 28 0 0 1 28-28Z"
          fill="#F7A7B8"
          opacity="0.82"
        />
        <text
          x="181"
          y="345"
          textAnchor="middle"
          className="visual-small-label"
        >
          WAX MELTS
        </text>
        <g fill="#EBC2C7">
          <rect x="94" y="370" width="46" height="46" rx="13" />
          <rect x="151" y="370" width="46" height="46" rx="13" />
          <rect x="208" y="370" width="46" height="46" rx="13" />
        </g>
      </g>

      <g filter="url(#soft-shadow)">
        <path
          d="M500 172 C536 128 606 132 638 182 C662 220 650 274 618 306 V450 H472 V306 C438 272 430 220 456 184 C466 170 482 166 500 172Z"
          fill="#FFFFFF"
        />
        <path
          d="M476 304 C512 336 584 336 620 304 V458 C620 490 590 516 546 516 C502 516 472 490 472 458 V304Z"
          fill="#EBC2C7"
          opacity="0.52"
        />
        <path
          d="M505 178 C532 216 574 216 606 178"
          fill="none"
          stroke="#F7A7B8"
          strokeWidth="10"
          strokeLinecap="round"
          opacity="0.7"
        />
        <text
          x="546"
          y="402"
          textAnchor="middle"
          className="visual-small-label"
        >
          RELAX WEAR
        </text>
      </g>

      <g filter="url(#soft-shadow)">
        <ellipse cx="374" cy="244" rx="128" ry="34" fill="#FFFFFF" />
        <path
          d="M246 242 H502 L482 588 C480 622 452 648 418 648 H330 C296 648 268 622 266 588 Z"
          fill="url(#hero-glass)"
          stroke="#E2D5CC"
          strokeWidth="2"
        />
        <ellipse
          cx="374"
          cy="244"
          rx="126"
          ry="31"
          fill="#F9DFE5"
          stroke="#FFFFFF"
          strokeWidth="5"
        />
        <path
          d="M292 244 C306 198 344 178 374 198 C398 158 456 194 438 238 C476 244 484 288 448 304 C414 320 320 318 292 292 C276 278 278 254 292 244Z"
          fill="#F7A7B8"
        />
        <path
          d="M322 246 C344 222 386 222 416 246"
          fill="none"
          stroke="#FFD9E2"
          strokeWidth="12"
          strokeLinecap="round"
          opacity="0.86"
        />
        <path
          d="M356 174 C356 134 388 126 390 90 C418 126 422 158 400 184"
          fill="url(#hero-flame)"
        />
        <path
          d="M374 228 V176"
          stroke="#1A1A1A"
          strokeWidth="5"
          strokeLinecap="round"
          opacity="0.38"
        />
        <rect
          x="304"
          y="396"
          width="140"
          height="132"
          rx="18"
          fill="#FAF6F0"
          stroke="#EBC2C7"
        />
        <image
          href="/images/blissful-burn-logo-pink.svg"
          x="318"
          y="420"
          width="112"
          height="70"
          aria-label="Blissful Burn logo"
        />
      </g>
    </svg>
  );
}

export function ProductVisual({ product }: { product: Product }) {
  const art = productArt[product.id] ?? productArt["lavender-fields"];
  const safeId = product.id.replace(/[^a-z0-9]/gi, "-");

  return (
    <svg
      className="product-visual-svg"
      viewBox="0 0 360 360"
      role="img"
      aria-label={`${product.name} candle illustration`}
    >
      <defs>
        <radialGradient id={`${safeId}-bg`} cx="50%" cy="20%" r="76%">
          <stop stopColor="#FFFFFF" />
          <stop offset="0.46" stopColor={art.glow} />
          <stop offset="1" stopColor="#FAF6F0" />
        </radialGradient>
        <linearGradient id={`${safeId}-glass`} x1="0" x2="1">
          <stop stopColor="#FFFFFF" stopOpacity="0.32" />
          <stop offset="0.5" stopColor="#FFFFFF" stopOpacity="0.9" />
          <stop offset="1" stopColor="#F6EFE9" stopOpacity="0.54" />
        </linearGradient>
        <filter
          id={`${safeId}-shadow`}
          x="-30%"
          y="-30%"
          width="160%"
          height="160%"
        >
          <feDropShadow
            dx="0"
            dy="18"
            stdDeviation="16"
            floodColor="#6D4B4B"
            floodOpacity="0.16"
          />
        </filter>
      </defs>

      <rect
        x="12"
        y="12"
        width="336"
        height="336"
        rx="34"
        fill={`url(#${safeId}-bg)`}
      />
      <circle cx="82" cy="74" r="38" fill={art.accent} opacity="0.36" />
      <circle cx="284" cy="92" r="24" fill="#DCC7B4" opacity="0.36" />
      <path
        d="M68 296 C116 264 174 270 218 294 C258 316 300 306 326 282 V334 H46 V318 C50 310 58 302 68 296Z"
        fill="#EFE3D9"
        opacity="0.8"
      />

      <g filter={`url(#${safeId}-shadow)`}>
        <ellipse cx="180" cy="112" rx="82" ry="22" fill="#FFFFFF" />
        <path
          d="M98 112 H262 L248 292 C246 314 228 330 206 330 H154 C132 330 114 314 112 292 Z"
          fill={`url(#${safeId}-glass)`}
          stroke="#E3D4CB"
          strokeWidth="1.5"
        />
        <ellipse
          cx="180"
          cy="112"
          rx="80"
          ry="20"
          fill={art.wax}
          opacity="0.82"
          stroke="#FFFFFF"
          strokeWidth="4"
        />
        <path
          d="M132 114 C142 86 166 72 184 86 C200 62 236 84 224 110 C250 116 254 144 230 154 C206 164 150 164 132 148 C120 138 122 122 132 114Z"
          fill={art.wax}
        />
        <path
          d="M154 116 C170 102 196 100 212 116"
          fill="none"
          stroke="#FFE4EA"
          strokeWidth="7"
          strokeLinecap="round"
          opacity="0.78"
        />
        <path
          d="M180 98 V64"
          stroke="#1A1A1A"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.36"
        />
        <path
          d="M170 66 C170 44 188 38 188 20 C206 42 208 60 194 74"
          fill="#F7A7B8"
        />
        <rect
          x="132"
          y="198"
          width="96"
          height="82"
          rx="14"
          fill="#FAF6F0"
          stroke="#EBC2C7"
          strokeWidth="1.5"
        />
        <image
          href="/images/blissful-burn-logo-pink.svg"
          x="142"
          y="214"
          width="76"
          height="47"
          aria-label="Blissful Burn logo"
        />
        <text
          x="180"
          y="272"
          textAnchor="middle"
          className="visual-product-note"
        >
          {art.note}
        </text>
      </g>
    </svg>
  );
}

export function CategoryVisual({
  type,
}: {
  type: "candle" | "melts" | "wear";
}) {
  if (type === "melts") {
    return (
      <svg
        className="category-visual-svg"
        viewBox="0 0 260 160"
        role="img"
        aria-label="Wax melts illustration"
      >
        <rect
          x="22"
          y="28"
          width="216"
          height="106"
          rx="28"
          fill="#FFFFFF"
          stroke="#E6E6E6"
        />
        <rect x="48" y="54" width="44" height="44" rx="13" fill="#EBC2C7" />
        <rect x="108" y="54" width="44" height="44" rx="13" fill="#F7A7B8" />
        <rect x="168" y="54" width="44" height="44" rx="13" fill="#DCC7B4" />
        <text
          x="130"
          y="124"
          textAnchor="middle"
          className="visual-small-label"
        >
          WAX MELTS
        </text>
      </svg>
    );
  }

  if (type === "wear") {
    return (
      <svg
        className="category-visual-svg"
        viewBox="0 0 260 160"
        role="img"
        aria-label="Relax wear hoodie illustration"
      >
        <path
          d="M88 40 C104 20 154 20 172 40 L210 70 L190 102 L172 90 V134 H88 V90 L70 102 L50 70 Z"
          fill="#FFFFFF"
          stroke="#E6E6E6"
          strokeWidth="2"
        />
        <path
          d="M102 42 C116 62 144 62 158 42"
          fill="none"
          stroke="#EBC2C7"
          strokeWidth="7"
          strokeLinecap="round"
        />
        <text
          x="130"
          y="104"
          textAnchor="middle"
          className="visual-small-label"
        >
          RELAX WEAR
        </text>
      </svg>
    );
  }

  return (
    <svg
      className="category-visual-svg"
      viewBox="0 0 260 160"
      role="img"
      aria-label="Signature candle illustration"
    >
      <path
        d="M86 54 H174 L166 132 H94 Z"
        fill="#FFFFFF"
        stroke="#E6E6E6"
        strokeWidth="2"
      />
      <ellipse cx="130" cy="54" rx="45" ry="13" fill="#F7A7B8" opacity="0.78" />
      <path
        d="M128 42 C128 25 142 22 142 10 C156 28 152 42 138 50"
        fill="#F7A7B8"
      />
      <image
        href="/images/blissful-burn-logo-mark-pink.svg"
        x="108"
        y="78"
        width="44"
        height="48"
        aria-label="Blissful Burn logo mark"
      />
    </svg>
  );
}

export function BrandStillLifeVisual() {
  return (
    <svg
      className="brand-still-life-svg"
      viewBox="0 0 520 520"
      role="img"
      aria-label="Blissful Burn branded candle still life"
    >
      <rect x="24" y="24" width="472" height="472" rx="52" fill="#FAF6F0" />
      <circle cx="380" cy="124" r="82" fill="#F7A7B8" opacity="0.24" />
      <path
        d="M86 392 C168 336 270 374 330 392 C388 408 430 386 470 352 V482 H58 V430 C62 414 72 402 86 392Z"
        fill="#EADDD3"
      />
      <g>
        <ellipse cx="256" cy="152" rx="100" ry="26" fill="#FFFFFF" />
        <path
          d="M156 152 H356 L338 402 C336 432 312 454 282 454 H230 C200 454 176 432 174 402 Z"
          fill="rgba(255,255,255,0.68)"
          stroke="#E3D4CB"
          strokeWidth="2"
        />
        <ellipse
          cx="256"
          cy="152"
          rx="96"
          ry="24"
          fill="#F7A7B8"
          opacity="0.76"
        />
        <path
          d="M204 154 C218 114 248 102 268 118 C290 84 340 116 326 150 C356 158 362 194 330 208 C294 224 218 220 202 202 C188 188 190 164 204 154Z"
          fill="#F7A7B8"
        />
        <path
          d="M236 150 C258 130 292 130 308 150"
          fill="none"
          stroke="#FFE4EA"
          strokeWidth="10"
          strokeLinecap="round"
        />
        <path
          d="M254 132 V90"
          stroke="#1A1A1A"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.34"
        />
        <path
          d="M244 90 C244 60 268 54 268 30 C292 62 292 86 272 102"
          fill="#F7A7B8"
        />
        <rect
          x="198"
          y="274"
          width="116"
          height="104"
          rx="16"
          fill="#FAF6F0"
          stroke="#EBC2C7"
        />
        <image
          href="/images/blissful-burn-logo-pink.svg"
          x="210"
          y="296"
          width="92"
          height="57"
          aria-label="Blissful Burn logo"
        />
      </g>
    </svg>
  );
}
