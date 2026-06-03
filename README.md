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

The checkout flow is wired to Stripe-hosted Checkout. You can launch the site before Stripe is configured; if keys are missing, checkout returns a clear setup message instead of crashing.

Create `.env.local` in the repo root using `.env.example` as the template.

Required when ready to accept payments:

- `STRIPE_SECRET_KEY` - your Stripe secret key (`sk_test_...` for testing, `sk_live_...` for live payments).
- `NEXT_PUBLIC_SITE_URL` - the deployed site URL, for example `https://your-domain.com`.

Optional Stripe settings:

- `STRIPE_SUCCESS_URL` - defaults to `/cart?checkout=success&session_id={CHECKOUT_SESSION_ID}`.
- `STRIPE_CANCEL_URL` - defaults to `/cart?checkout=cancelled`.
- `STRIPE_SHIPPING_COUNTRIES` - comma-separated country codes; defaults to `US`.
- `STRIPE_ALLOW_PROMOTION_CODES` - defaults to `true`; set to `false` to hide promo-code entry.
- `STRIPE_ENABLE_AUTOMATIC_TAX` - defaults to `false`; set to `true` only after automatic tax is configured in Stripe.
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` - not required for the current hosted Checkout flow, but can be added later for Stripe Elements or embedded Checkout.

## Checkout Behavior

- Cart state is persisted in localStorage.
- Cart page (`/cart`) displays order summary and total.
- Clicking checkout posts cart items to `/api/checkout`.
- Server creates a Stripe Checkout Session and redirects user to Stripe-hosted checkout.

## Deployment

The repository includes `vercel.json` for explicit Next.js build configuration.
