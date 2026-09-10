const express = require('express');
const path = require('path');
const crypto = require('crypto');
const { JsonStore } = require('./lib/db');

const PORT = process.env.PORT || 3001;
const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const productsStore = new JsonStore(
  path.join(__dirname, 'data', 'products.json'),
  []
);
const ordersStore = new JsonStore(path.join(__dirname, 'data', 'orders.json'), []);

function getProducts() {
  return productsStore.read();
}

app.get('/api/products', (req, res) => {
  const { category } = req.query;
  let products = getProducts();
  if (category) {
    products = products.filter(
      (p) => p.category.toLowerCase() === String(category).toLowerCase()
    );
  }
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = getProducts().find((p) => p.id === req.params.id);
  if (!product) return res.status(404).json({ error: 'Product not found' });
  res.json(product);
});

// Checkout recomputes the total from server-side product data rather than
// trusting client-submitted prices, so a tampered request can't buy at a
// fake price.
app.post('/api/orders', (req, res) => {
  const { items, customer } = req.body || {};

  if (!Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ error: 'Cart is empty' });
  }
  if (!customer || !customer.name || !customer.email || !customer.address) {
    return res.status(400).json({ error: 'Missing customer details' });
  }

  const products = getProducts();
  const lineItems = [];
  let subtotal = 0;

  for (const item of items) {
    const product = products.find((p) => p.id === item.productId);
    if (!product) {
      return res.status(400).json({ error: `Unknown product: ${item.productId}` });
    }
    const quantity = Math.max(1, Math.min(99, parseInt(item.quantity, 10) || 1));
    if (quantity > product.stock) {
      return res
        .status(400)
        .json({ error: `Only ${product.stock} left of "${product.name}"` });
    }
    const lineTotal = Math.round(product.price * quantity * 100) / 100;
    subtotal += lineTotal;
    lineItems.push({
      productId: product.id,
      name: product.name,
      unitPrice: product.price,
      quantity,
      lineTotal,
    });
  }

  const shipping = subtotal >= 150 ? 0 : 12.0;
  const tax = Math.round(subtotal * 0.0825 * 100) / 100;
  const total = Math.round((subtotal + shipping + tax) * 100) / 100;

  const order = {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    customer: {
      name: customer.name,
      email: customer.email,
      address: customer.address,
    },
    items: lineItems,
    subtotal: Math.round(subtotal * 100) / 100,
    shipping,
    tax,
    total,
    status: 'confirmed',
  };

  const orders = ordersStore.read();
  orders.push(order);
  ordersStore.write(orders);

  res.status(201).json(order);
});

app.get('/api/orders/:id', (req, res) => {
  const order = ordersStore.read().find((o) => o.id === req.params.id);
  if (!order) return res.status(404).json({ error: 'Order not found' });
  res.json(order);
});

app.listen(PORT, () => {
  console.log(`Driftwood Supply Co. running at http://localhost:${PORT}`);
});
