function renderHeader() {
  const header = document.createElement('header');
  header.className = 'site';
  header.innerHTML = `
    <a class="logo" href="/">HarborHands</a>
    <nav>
      <a href="/">Browse</a>
      <a class="cta" href="/become-a-provider.html">Become a provider</a>
    </nav>
  `;
  document.body.prepend(header);
}

function renderFooter() {
  const footer = document.createElement('footer');
  footer.className = 'site';
  footer.innerHTML = `&copy; ${new Date().getFullYear()} HarborHands &mdash; local home services marketplace.`;
  document.body.appendChild(footer);
}

function money(n) {
  return `$${Number(n).toFixed(2)}`;
}

document.addEventListener('DOMContentLoaded', () => {
  renderHeader();
  renderFooter();
});
