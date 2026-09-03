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

### 1. Swap in real affiliate links

Right now every "Shop Now" button links to an Amazon search result via
`src/lib/affiliate.ts`, using a placeholder tag (`modernshores-20`). Once
you're approved for an affiliate program:

- **Amazon Associates**: replace `AFFILIATE_TAG` in `src/lib/affiliate.ts`
  with your real tag, or better — give each product in
  `src/data/products.ts` its own `affiliateUrl` field pointing at the exact
  product page (search links convert worse than direct links).
- **Other networks** (CJ, ShareASale, Impact, Rakuten, etc.): add an
  `affiliateUrl` field per product and update `affiliateLink()` in
  `src/lib/affiliate.ts` to return it directly.

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
