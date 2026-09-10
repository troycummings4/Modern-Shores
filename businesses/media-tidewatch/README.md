# Tidewatch

A coastal-living and ocean newsletter/media brand. Full-stack demo: Express
API + vanilla JS reading experience (no build step).

**Business concept:** niche content brand monetized primarily through a
free weekly newsletter that builds an audience, then a paid subscription
tier and/or sponsorships (boat/gear brands, coastal tourism boards) once
the list is large enough. This is the same model as Deadspin-era niche
blogs or hyper-focused Substacks — narrow audience, high relevance, and revenue
that scales with list size and engagement, not pageviews.

## Run it

```bash
cd businesses/media-tidewatch
npm install
npm start
```

Open http://localhost:3003 — browse articles, read one, subscribe with an
email.

## What's real vs. simulated

- **Real:** 6 full articles served from `data/articles.json`, subscriber
  capture (deduplicated, persisted to `data/subscribers.json`), live
  subscriber count.
- **Simulated:** no actual email is sent to subscribers (wire up
  Mailchimp/ConvertKit/Resend to send the weekly digest); no paid tier or
  ad-sales flow exists yet.

## API

- `GET /api/articles` — list (summary fields only)
- `GET /api/articles/:slug` — full article
- `POST /api/subscribe` — `{ email }`
- `GET /api/subscribers/count`

## Editing content

Add or edit articles directly in `data/articles.json` — plain JSON, no CMS
needed. Each entry needs a unique `slug`.
