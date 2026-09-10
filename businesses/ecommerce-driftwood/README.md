# Driftwood Supply Co.

A coastal-modern home goods DTC store. Full-stack demo: Express API backend
+ vanilla JS storefront (no build step).

**Business concept:** small-batch furniture, lighting, bedding, and decor
sold direct-to-consumer, positioned like Article/West Elm but narrower and
brand-driven. Revenue is unit sales margin (own the SKU, not affiliate %).
Scaling to a large outcome here means real inventory, real suppliers, paid
acquisition, and retention — this app is the storefront/ordering layer, not
a guarantee of sales.

## Run it

```bash
cd businesses/ecommerce-driftwood
npm install
npm start
```

Open http://localhost:3001

## What's real vs. simulated

- **Real:** product catalog, cart (persisted in browser localStorage),
  checkout that recomputes totals server-side (never trusts client-sent
  prices), order persistence to `data/orders.json`, stock validation.
- **Simulated:** payment collection (no card is charged — wire in Stripe by
  replacing the `POST /api/orders` handler in `server.js` with a
  `stripe.paymentIntents.create` call before persisting the order).

## API

- `GET /api/products?category=Furniture` — list/filter products
- `GET /api/products/:id` — one product
- `POST /api/orders` — `{ items: [{productId, quantity}], customer: {name, email, address} }`
- `GET /api/orders/:id` — look up a placed order
