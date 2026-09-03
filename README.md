# Modern Shores

A modern, Touch of Modern–inspired affiliate shopping site for curated,
high-ticket "wait, where did you get that?" products (gadgets, home
upgrades, outdoor gear, and statement pieces). The catalog is intentionally
premium-only — affiliate commissions are a percentage of order value, so a
higher average order value means meaningfully more revenue per sale at the
same traffic and the same commission rate.

Built with React + TypeScript + Vite + Tailwind CSS.

## What's included

- **Home page** — hero, shop-by-category grid, flash-sale countdown bar,
  trending / new arrivals / staff picks sections, newsletter signup
- **Category pages** — filterable grid per category
- **Product detail pages** — gallery, price/discount, rating, description,
  "Shop Now" affiliate CTA, related products
- **About, Contact, and Affiliate Disclosure pages** (FTC-compliant
  disclosure required for any affiliate site)
- Fully responsive, mobile-first layout
- 30 demo products (all $250+, avg. order value ~$950) across 6 categories
  in `src/data/products.ts`

## Getting started

```bash
npm install
npm run dev       # start the dev server
npm run build     # type-check + production build to dist/
npm run preview   # preview the production build locally
```

## Making it yours

### 1. Activate real affiliate payouts (do this first)

Every "Shop Now" button on every product already routes through one
function — `affiliateLink()` in `src/lib/affiliate.ts` — so turning on
real commissions is a single change, not per-product work. Right now it
falls back to an unregistered placeholder tag: **links work and customers
can buy, but nobody gets paid until you plug in a real tag.**

**Get an Amazon Associates tag (free, fastest way to start):**

1. Go to [affiliate-program.amazon.com](https://affiliate-program.amazon.com)
   and sign in with (or create) an Amazon account.
2. Apply as an Associate — you'll need a live site URL, so deploy this
   site first (see **Deploying** below) even before it's fully polished.
3. During signup you'll pick a **Store ID / tracking ID** — this is your
   tag (something like `modernshores-20`). You can also find/create one
   later under Account Settings → Manage Tracking IDs.
4. You're approved instantly in "trial" status, but Amazon closes the
   account if you don't generate 3 qualifying sales within 180 days — so
   don't let the site sit unlaunched for long after applying.
5. Copy `.env.example` to `.env` and set:
   ```
   VITE_AMAZON_ASSOCIATE_TAG=your-real-tag-20
   ```
6. Rebuild/redeploy. Every product's "Shop Now" link now carries your real
   tag — check the browser console in dev mode; the placeholder-tag
   warning disappears once it's set correctly.

Amazon's cookie attributes *any* purchase in that browsing session to you,
not just the exact item clicked — so even the generic search-result links
this site uses by default earn commission on whatever the visitor buys.

**Want higher commission rates or a different network** (CJ, ShareASale,
Impact, Rakuten, or a retailer's own affiliate program — often 8–20% vs.
Amazon's ~1–4%)? Give each product in `src/data/products.ts` its own
`affiliateUrl` field with the real tracking link from that network, and
update `affiliateLink()` in `src/lib/affiliate.ts` to return it (falling
back to the Amazon link for anything without one).

### 2. Swap in real product photography

Product images currently come from `picsum.photos` (placeholder photos,
keyed by `imageSeed` in `src/data/products.ts`) so the site is fully
populated out of the box. Replace `productImage()` in
`src/lib/affiliate.ts` to point at your own image URLs (host them
yourself, or use the merchant's product images where their terms allow),
or add an `image` field to each product.

### 3. Edit the catalog

All products and categories live in `src/data/products.ts` and
`src/data/categories.ts` — plain TypeScript arrays, no CMS needed. Add,
remove, or edit entries directly.

### 4. Hook up the forms

The newsletter signup (`src/components/Newsletter.tsx`) and contact form
(`src/pages/Contact.tsx`) are UI-only right now. Wire them up to an email
provider (Mailchimp, Klaviyo, ConvertKit) and a form backend (Formspree,
Resend, a serverless function) respectively.

## Deploying

This is a static site — build it and host it anywhere:

```bash
npm run build
```

Deploy the `dist/` folder to Vercel, Netlify, Cloudflare Pages, GitHub
Pages, or any static host. On Vercel/Netlify, just point them at this repo
with build command `npm run build` and output directory `dist`.

## Legal note

Affiliate sites are required by the FTC to clearly disclose affiliate
relationships (16 CFR § 255). This starter includes a disclosure page
(`/disclosure`) linked from the footer and every product page — review and
update the copy to match your actual affiliate programs before launch.
