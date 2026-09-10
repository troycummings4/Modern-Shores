# Modern Shores

A modern, Touch of Modern–inspired affiliate shopping site for a small,
hand-curated lineup of high-ticket finds — a robot dog, an F1-style racing
cockpit, a laser home theater projector, reference-grade audio, and a
couple of everyday-luxury picks. The catalog is intentionally small: every
product's link was personally verified by the site owner before being
added, rather than sourced in bulk. Affiliate commissions are a percentage
of order value, so a higher average order value means meaningfully more
revenue per sale at the same traffic and the same commission rate.

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
- 6 hand-picked products (all $250+) across 2 categories in
  `src/data/products.ts`, each already linking through the live Amazon
  Associates tag

## Getting started

```bash
npm install
npm run dev       # start the dev server
npm run build     # type-check + production build to dist/
npm run preview   # preview the production build locally
```

## Making it yours

### 1. Affiliate payouts are already active

Every "Shop Now" button on every product routes through one function —
`affiliateLink()` in `src/lib/affiliate.ts` — which has the real, live
Amazon Associates tag (`051695-20`) baked in as the default. Nothing
further to set up: every product on the site already earns a commission
on qualifying purchases.

Amazon closes an Associates account that hasn't generated 3 qualifying
sales within 180 days of approval, so the main thing now is driving
traffic (SEO, social, email) before that window closes, not further
wiring.

Need to swap the tag later (a second account, a campaign-specific ID)?
Copy `.env.example` to `.env` and set `VITE_AMAZON_ASSOCIATE_TAG` — it
overrides the default without touching code.

Every product's `affiliateUrl` in `src/data/products.ts` points at a real,
verified Amazon product page (not a generic search) — Amazon's Associates
terms expect links to specific items, and direct product links convert far
better than search results. Amazon's cookie also attributes *any* purchase
in that browsing session to you, not just the exact item clicked, so these
links earn commission on whatever the visitor ends up buying.

**Want higher commission rates or a different network** (CJ, ShareASale,
Impact, Rakuten, or a retailer's own affiliate program — often 8–20% vs.
Amazon's ~1–4%)? Update the relevant product's `affiliateUrl` in
`src/data/products.ts` to that network's tracking link, and adjust
`affiliateLink()` in `src/lib/affiliate.ts` if the URL format needs
different handling than Amazon's.

### 2. Swap in real product photography

Product images currently come from `picsum.photos` (placeholder photos,
keyed by `imageSeed`) so the site is fully populated out of the box. To
show each product's real Amazon photo instead, set that product's
`image` field in `src/data/products.ts` — `productPhoto()` in
`src/lib/affiliate.ts` uses it automatically when present, falling back
to the placeholder otherwise. No other code changes needed.

Get the image URLs via **Amazon SiteStripe** (the official tool for
approved Associates — never scrape/hotlink from the page's HTML directly,
that's against Amazon's terms). `docs/product-images-checklist.md` has
the direct link to every product's listing and a place to record each
image URL as you go.

### 3. Edit the catalog

All products and categories live in `src/data/products.ts` and
`src/data/categories.ts` — plain TypeScript arrays, no CMS needed. Add,
remove, or edit entries directly.

### 4. Hook up the forms

The newsletter signup (`src/components/Newsletter.tsx`) and contact form
(`src/pages/Contact.tsx`) are UI-only right now. Wire them up to an email
provider (Mailchimp, Klaviyo, ConvertKit) and a form backend (Formspree,
Resend, a serverless function) respectively.

## Deploying (going live)

The code is deploy-ready as-is — routing, SPA rewrites, and build config
are already set up for the two easiest hosts. The one step nobody else can
do for you is connecting your own account to a host, since that requires
your login. Everything else is done.

### Option A — Vercel (recommended: fastest, free, custom domains)

1. Push this repo to GitHub if it isn't already (it is, on this branch).
2. Go to [vercel.com](https://vercel.com) → sign up/log in with GitHub →
   **Add New Project** → select this repo.
3. Vercel auto-detects Vite. Leave the defaults (build command
   `npm run build`, output directory `dist`) and click **Deploy**.
4. Done — you get a live `*.vercel.app` URL in about a minute. Add a real
   domain later under Project Settings → Domains.

`vercel.json` in this repo already handles the SPA rewrite so deep links
like `/product/...` and page refreshes work correctly.

### Option B — Netlify

1. Go to [netlify.com](https://netlify.com) → sign up/log in with GitHub →
   **Add new site** → **Import an existing project** → select this repo.
2. Build command `npm run build`, publish directory `dist` (Netlify
   usually detects both automatically). Click **Deploy**.
3. Live at a `*.netlify.app` URL immediately; add a custom domain under
   Site configuration → Domain management.

`public/_redirects` already handles the SPA rewrite for Netlify.

### Option C — GitHub Pages (no third-party account at all)

A workflow (`.github/workflows/deploy-gh-pages.yml`) is already set up to
build and deploy automatically on every push to `main`. It only needs one
manual, one-time toggle that only a repo admin can make: go to this repo's
**Settings → Pages → Build and deployment → Source**, and select
**"GitHub Actions."** After that, every push to `main` deploys
automatically to `https://<your-username>.github.io/Modern-Shores/`.

### Custom domain

All three options support attaching your own domain (e.g.
`modernshores.com`) for free once deployed — you'd buy the domain
separately from a registrar (Namecheap, Google Domains successor Squarespace,
Cloudflare, etc.) and point it at whichever host you chose.

## Legal note

Affiliate sites are required by the FTC to clearly disclose affiliate
relationships (16 CFR § 255). This starter includes a disclosure page
(`/disclosure`) linked from the footer and every product page — review and
update the copy to match your actual affiliate programs before launch.
