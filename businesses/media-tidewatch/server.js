const express = require('express');
const path = require('path');
const { JsonStore } = require('./lib/db');

const PORT = process.env.PORT || 3003;
const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const articlesStore = new JsonStore(path.join(__dirname, 'data', 'articles.json'), []);
const subscribersStore = new JsonStore(path.join(__dirname, 'data', 'subscribers.json'), []);

function getArticles() {
  return articlesStore
    .read()
    .slice()
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
}

app.get('/api/articles', (req, res) => {
  const articles = getArticles().map(
    ({ slug, title, author, publishedAt, category, excerpt, image }) => ({
      slug,
      title,
      author,
      publishedAt,
      category,
      excerpt,
      image,
    })
  );
  res.json(articles);
});

app.get('/api/articles/:slug', (req, res) => {
  const article = getArticles().find((a) => a.slug === req.params.slug);
  if (!article) return res.status(404).json({ error: 'Article not found' });
  res.json(article);
});

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

app.post('/api/subscribe', (req, res) => {
  const { email } = req.body || {};
  if (!email || !EMAIL_RE.test(email)) {
    return res.status(400).json({ error: 'Enter a valid email address' });
  }
  const subscribers = subscribersStore.read();
  const normalized = email.toLowerCase();
  if (subscribers.find((s) => s.email === normalized)) {
    return res.json({ ok: true, alreadySubscribed: true });
  }
  subscribers.push({ email: normalized, subscribedAt: new Date().toISOString() });
  subscribersStore.write(subscribers);
  res.status(201).json({ ok: true, alreadySubscribed: false });
});

app.get('/api/subscribers/count', (req, res) => {
  res.json({ count: subscribersStore.read().length });
});

app.listen(PORT, () => {
  console.log(`Tidewatch running at http://localhost:${PORT}`);
});
