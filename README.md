# Blissful Burn Website

Next.js storefront for Blissful Burn with:
- brand-aligned homepage layout and design-system components
- client-side cart flow
- Stripe Checkout Session API route

## Local Development

Run the app:

npm run dev

Visit:

http://localhost:3000

## Stripe Setup (Ready for keys)

The checkout flow is already wired. Add Stripe keys when ready.

Required environment variables:

- `STRIPE_SECRET_KEY`
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` (reserved for future client-side Stripe usage)
- `NEXT_PUBLIC_SITE_URL` (for local dev use `http://localhost:3000`)

Create `.env.local` in repo root:

STRIPE_SECRET_KEY=sk_test_xxx
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxx
NEXT_PUBLIC_SITE_URL=http://localhost:3000

If Stripe keys are missing, checkout requests will return a clear setup error instead of crashing.

## Checkout Behavior

- Cart state is persisted in localStorage.
- Cart page (`/cart`) displays order summary and total.
- Clicking checkout posts cart items to `/api/checkout`.
- Server creates a Stripe Checkout Session and redirects user to Stripe-hosted checkout.

## Deployment

The repository includes `vercel.json` for explicit Next.js build configuration.
