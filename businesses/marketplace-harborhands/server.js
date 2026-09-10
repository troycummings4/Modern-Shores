const express = require('express');
const path = require('path');
const crypto = require('crypto');
const { JsonStore } = require('./lib/db');

const PORT = process.env.PORT || 3004;
const PLATFORM_FEE_RATE = 0.15; // charged on top of the provider's rate

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const providersStore = new JsonStore(path.join(__dirname, 'data', 'providers.json'), []);
const bookingsStore = new JsonStore(path.join(__dirname, 'data', 'bookings.json'), []);

function approvedProviders() {
  return providersStore.read().filter((p) => p.status === 'approved');
}

app.get('/api/providers', (req, res) => {
  const { category } = req.query;
  let providers = approvedProviders();
  if (category) {
    providers = providers.filter((p) => p.category.toLowerCase() === String(category).toLowerCase());
  }
  res.json(providers);
});

app.get('/api/providers/:id', (req, res) => {
  const provider = approvedProviders().find((p) => p.id === req.params.id);
  if (!provider) return res.status(404).json({ error: 'Provider not found' });
  res.json(provider);
});

// Providers apply and land in "pending" status rather than going live
// immediately — a real marketplace needs a review step before a listing
// is trusted with customer bookings.
app.post('/api/providers', (req, res) => {
  const { name, category, city, bio, hourlyRate, email } = req.body || {};
  const rate = Number(hourlyRate);
  if (!name || !category || !city || !email || !Number.isFinite(rate) || rate <= 0) {
    return res.status(400).json({ error: 'Name, category, city, email, and a positive hourly rate are required' });
  }
  const providers = providersStore.read();
  const provider = {
    id: crypto.randomUUID(),
    name,
    category,
    city,
    bio: bio || '',
    hourlyRate: Math.round(rate * 100) / 100,
    email,
    rating: null,
    reviewCount: 0,
    image: `https://picsum.photos/seed/${encodeURIComponent(name)}/500/400`,
    status: 'pending',
    appliedAt: new Date().toISOString(),
  };
  providers.push(provider);
  providersStore.write(providers);
  res.status(201).json({ id: provider.id, status: provider.status });
});

app.post('/api/bookings', (req, res) => {
  const { providerId, date, time, hours, customerName, email, notes } = req.body || {};
  const provider = approvedProviders().find((p) => p.id === providerId);
  if (!provider) return res.status(400).json({ error: 'Unknown provider' });
  if (!date || !time || !customerName || !email) {
    return res.status(400).json({ error: 'Date, time, name, and email are required' });
  }
  const numHours = Math.max(1, Math.min(8, parseInt(hours, 10) || 2));

  const bookings = bookingsStore.read();
  const conflict = bookings.find(
    (b) => b.providerId === providerId && b.date === date && b.time === time && b.status !== 'cancelled'
  );
  if (conflict) {
    return res.status(409).json({ error: 'That time slot is already booked for this provider' });
  }

  const providerPayout = Math.round(provider.hourlyRate * numHours * 100) / 100;
  const platformFee = Math.round(providerPayout * PLATFORM_FEE_RATE * 100) / 100;
  const total = Math.round((providerPayout + platformFee) * 100) / 100;

  const booking = {
    id: crypto.randomUUID(),
    providerId,
    providerName: provider.name,
    date,
    time,
    hours: numHours,
    customerName,
    email,
    notes: notes || '',
    providerPayout,
    platformFee,
    total,
    status: 'confirmed',
    createdAt: new Date().toISOString(),
  };
  bookings.push(booking);
  bookingsStore.write(bookings);
  res.status(201).json(booking);
});

app.get('/api/bookings/:id', (req, res) => {
  const booking = bookingsStore.read().find((b) => b.id === req.params.id);
  if (!booking) return res.status(404).json({ error: 'Booking not found' });
  res.json(booking);
});

app.listen(PORT, () => {
  console.log(`HarborHands running at http://localhost:${PORT}`);
});
