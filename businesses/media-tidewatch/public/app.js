function renderHeader() {
  const header = document.createElement('header');
  header.className = 'site';
  header.innerHTML = `
    <a class="logo" href="/">Tidewatch</a>
    <nav>
      <a href="/">Latest</a>
      <a href="/about.html">About</a>
    </nav>
  `;
  document.body.prepend(header);
}

function renderFooter() {
  const footer = document.createElement('footer');
  footer.className = 'site';
  footer.innerHTML = `&copy; ${new Date().getFullYear()} Tidewatch &mdash; a newsletter about coastal living and the sea.`;
  document.body.appendChild(footer);
}

function renderSubscribeBox(container) {
  const box = document.createElement('div');
  box.className = 'subscribe-box';
  box.innerHTML = `
    <h2>Get Tidewatch in your inbox</h2>
    <p>One dispatch a week. No spam, unsubscribe anytime.</p>
    <form class="subscribe-form" id="subscribe-form">
      <input type="email" id="subscribe-email" placeholder="you@example.com" required />
      <button type="submit">Subscribe</button>
    </form>
    <div class="subscribe-note" id="subscribe-note"></div>
  `;
  container.appendChild(box);

  box.querySelector('#subscribe-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = box.querySelector('#subscribe-email').value;
    const note = box.querySelector('#subscribe-note');
    const res = await fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
    const data = await res.json();
    if (!res.ok) {
      note.textContent = data.error;
      return;
    }
    note.textContent = data.alreadySubscribed ? "You're already subscribed." : "You're in! Welcome aboard.";
    box.querySelector('#subscribe-form').reset();
  });
}

function formatDate(iso) {
  return new Date(iso + 'T00:00:00').toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

document.addEventListener('DOMContentLoaded', () => {
  renderHeader();
  renderFooter();
});
