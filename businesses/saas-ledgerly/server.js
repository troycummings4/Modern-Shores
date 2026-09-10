const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const crypto = require('crypto');
const { JsonStore } = require('./lib/db');
const { hashPassword, verifyPassword } = require('./lib/auth');

const PORT = process.env.PORT || 3002;
const SESSION_TTL_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const usersStore = new JsonStore(path.join(__dirname, 'data', 'users.json'), []);
const sessionsStore = new JsonStore(path.join(__dirname, 'data', 'sessions.json'), []);
const clientsStore = new JsonStore(path.join(__dirname, 'data', 'clients.json'), []);
const invoicesStore = new JsonStore(path.join(__dirname, 'data', 'invoices.json'), []);

function createSession(userId) {
  const sessions = sessionsStore.read();
  const token = crypto.randomUUID();
  sessions.push({ token, userId, expiresAt: Date.now() + SESSION_TTL_MS });
  sessionsStore.write(sessions);
  return token;
}

function requireAuth(req, res, next) {
  const token = req.cookies.sid;
  if (!token) return res.status(401).json({ error: 'Not signed in' });
  const session = sessionsStore.read().find((s) => s.token === token);
  if (!session || session.expiresAt < Date.now()) {
    return res.status(401).json({ error: 'Session expired' });
  }
  const user = usersStore.read().find((u) => u.id === session.userId);
  if (!user) return res.status(401).json({ error: 'Not signed in' });
  req.user = user;
  next();
}

// --- Auth ---

app.post('/api/auth/signup', (req, res) => {
  const { email, password, companyName } = req.body || {};
  if (!email || !password || password.length < 8) {
    return res.status(400).json({ error: 'Email and an 8+ character password are required' });
  }
  const users = usersStore.read();
  if (users.find((u) => u.email.toLowerCase() === email.toLowerCase())) {
    return res.status(409).json({ error: 'An account with that email already exists' });
  }
  const user = {
    id: crypto.randomUUID(),
    email,
    companyName: companyName || 'My Company',
    passwordHash: hashPassword(password),
    createdAt: new Date().toISOString(),
  };
  users.push(user);
  usersStore.write(users);

  const token = createSession(user.id);
  res.cookie('sid', token, { httpOnly: true, maxAge: SESSION_TTL_MS, sameSite: 'lax' });
  res.status(201).json({ id: user.id, email: user.email, companyName: user.companyName });
});

app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body || {};
  const user = usersStore.read().find((u) => u.email.toLowerCase() === (email || '').toLowerCase());
  if (!user || !verifyPassword(password || '', user.passwordHash)) {
    return res.status(401).json({ error: 'Invalid email or password' });
  }
  const token = createSession(user.id);
  res.cookie('sid', token, { httpOnly: true, maxAge: SESSION_TTL_MS, sameSite: 'lax' });
  res.json({ id: user.id, email: user.email, companyName: user.companyName });
});

app.post('/api/auth/logout', (req, res) => {
  const token = req.cookies.sid;
  if (token) {
    sessionsStore.write(sessionsStore.read().filter((s) => s.token !== token));
  }
  res.clearCookie('sid');
  res.json({ ok: true });
});

app.get('/api/me', requireAuth, (req, res) => {
  res.json({ id: req.user.id, email: req.user.email, companyName: req.user.companyName });
});

// --- Clients ---

app.get('/api/clients', requireAuth, (req, res) => {
  res.json(clientsStore.read().filter((c) => c.userId === req.user.id));
});

app.post('/api/clients', requireAuth, (req, res) => {
  const { name, email } = req.body || {};
  if (!name) return res.status(400).json({ error: 'Client name is required' });
  const clients = clientsStore.read();
  const client = { id: crypto.randomUUID(), userId: req.user.id, name, email: email || '' };
  clients.push(client);
  clientsStore.write(clients);
  res.status(201).json(client);
});

// --- Invoices ---

app.get('/api/invoices', requireAuth, (req, res) => {
  res.json(invoicesStore.read().filter((i) => i.userId === req.user.id));
});

app.post('/api/invoices', requireAuth, (req, res) => {
  const { clientId, description, amount, dueDate } = req.body || {};
  const clients = clientsStore.read();
  const client = clients.find((c) => c.id === clientId && c.userId === req.user.id);
  if (!client) return res.status(400).json({ error: 'Unknown client' });
  const numericAmount = Number(amount);
  if (!description || !Number.isFinite(numericAmount) || numericAmount <= 0) {
    return res.status(400).json({ error: 'Description and a positive amount are required' });
  }
  const invoices = invoicesStore.read();
  const invoice = {
    id: crypto.randomUUID(),
    userId: req.user.id,
    clientId,
    clientName: client.name,
    description,
    amount: Math.round(numericAmount * 100) / 100,
    dueDate: dueDate || null,
    status: 'unpaid',
    createdAt: new Date().toISOString(),
  };
  invoices.push(invoice);
  invoicesStore.write(invoices);
  res.status(201).json(invoice);
});

app.patch('/api/invoices/:id', requireAuth, (req, res) => {
  const invoices = invoicesStore.read();
  const invoice = invoices.find((i) => i.id === req.params.id && i.userId === req.user.id);
  if (!invoice) return res.status(404).json({ error: 'Invoice not found' });
  if (req.body?.status && ['unpaid', 'paid'].includes(req.body.status)) {
    invoice.status = req.body.status;
  }
  invoicesStore.write(invoices);
  res.json(invoice);
});

app.get('/api/summary', requireAuth, (req, res) => {
  const invoices = invoicesStore.read().filter((i) => i.userId === req.user.id);
  const outstanding = invoices.filter((i) => i.status === 'unpaid').reduce((s, i) => s + i.amount, 0);
  const paid = invoices.filter((i) => i.status === 'paid').reduce((s, i) => s + i.amount, 0);
  const now = new Date();
  const thisMonth = invoices.filter((i) => {
    const d = new Date(i.createdAt);
    return i.status === 'paid' && d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
  }).reduce((s, i) => s + i.amount, 0);

  res.json({
    outstanding: Math.round(outstanding * 100) / 100,
    paid: Math.round(paid * 100) / 100,
    revenueThisMonth: Math.round(thisMonth * 100) / 100,
    invoiceCount: invoices.length,
  });
});

app.listen(PORT, () => {
  console.log(`Ledgerly running at http://localhost:${PORT}`);
});
