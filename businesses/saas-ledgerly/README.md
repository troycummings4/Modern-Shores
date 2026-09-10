# Ledgerly

Invoicing and client tracking for freelancers. Full-stack demo: Express API
+ session auth + vanilla JS dashboard (no build step).

**Business concept:** subscription SaaS (Starter free / Pro $19mo / Studio
$49mo tiers shown on the landing page) targeting solo freelancers and small
studios who currently track invoices in spreadsheets. Revenue is recurring
subscription fees, not transaction-based. This app implements the free
tier's functionality end to end; billing for paid tiers is not wired up
(see "Making it real" below).

## Run it

```bash
cd businesses/saas-ledgerly
npm install
npm start
```

Open http://localhost:3002 — sign up for an account, add a client, create
an invoice, mark it paid, watch the summary stats update.

## What's real vs. simulated

- **Real:** account signup/login with scrypt-hashed passwords (Node's
  built-in crypto, no extra native dependency), httpOnly session cookies,
  per-user data isolation (every query is scoped to `req.user.id`), client
  and invoice CRUD, revenue summary math.
- **Simulated:** the three pricing tiers are marketing copy only — there's
  no plan gating or payment collection. To make paid tiers real, add a
  `plan` field to the user record, gate invoice/client counts by plan, and
  wire up Stripe Billing for the upgrade flow.

## API

- `POST /api/auth/signup`, `POST /api/auth/login`, `POST /api/auth/logout`
- `GET /api/me`
- `GET/POST /api/clients`
- `GET/POST /api/invoices`, `PATCH /api/invoices/:id` (`{status: "paid"}`)
- `GET /api/summary`

All routes except signup/login require the `sid` session cookie set on login.
