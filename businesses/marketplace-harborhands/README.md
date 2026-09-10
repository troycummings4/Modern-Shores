# HarborHands

A two-sided local home-services marketplace. Full-stack demo: Express API +
vanilla JS frontend (no build step).

**Business concept:** connect local service providers (cleaning,
landscaping, handyman, pet care, moving, photography) with customers who
book and pay through the platform. Revenue is a take rate on every booking
(15% here, on top of the provider's rate) — this is the TaskRabbit/Thumbtack
model. Value compounds with two-sided liquidity: more providers attract more
customers and vice versa, which is also why marketplaces are hard to start
(cold-start problem) but valuable once they tip.

## Run it

```bash
cd businesses/marketplace-harborhands
npm install
npm start
```

Open http://localhost:3004 — browse providers by category, open one, book a
time slot, see the confirmation. Try "Become a provider" to see the supply
side of the marketplace.

## What's real vs. simulated

- **Real:** category browsing, provider profiles, booking with
  double-booking prevention (same provider/date/time is rejected), fee
  math computed server-side (never trusts client-submitted prices), a
  provider application flow that lands new listings in `pending` status
  rather than going live immediately.
- **Simulated:** no payment is actually collected or paid out; no email
  notifications; no admin screen to approve pending providers (approve one
  by hand-editing its `status` to `"approved"` in
  `data/providers.json`).

## API

- `GET /api/providers?category=Cleaning` — approved providers, optionally filtered
- `GET /api/providers/:id`
- `POST /api/providers` — provider application, lands as `status: "pending"`
- `POST /api/bookings` — `{ providerId, date, time, hours, customerName, email, notes }`
- `GET /api/bookings/:id`
