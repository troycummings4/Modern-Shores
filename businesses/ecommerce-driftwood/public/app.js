// Shared cart + header logic used by every page.
const CART_KEY = 'driftwood_cart';

function getCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
  } catch {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartCount();
}

function addToCart(productId, quantity) {
  const cart = getCart();
  const existing = cart.find((i) => i.productId === productId);
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({ productId, quantity });
  }
  saveCart(cart);
}

function removeFromCart(productId) {
  saveCart(getCart().filter((i) => i.productId !== productId));
}

function clearCart() {
  saveCart([]);
}

function cartCount() {
  return getCart().reduce((sum, i) => sum + i.quantity, 0);
}

function updateCartCount() {
  const el = document.getElementById('cart-count');
  if (el) el.textContent = cartCount();
}

function renderHeader(activeCategory) {
  const header = document.createElement('header');
  header.className = 'site';
  header.innerHTML = `
    <a class="logo" href="/">Driftwood Supply Co.</a>
    <nav>
      <a href="/">Shop</a>
      <a class="cart-link" href="/cart.html">Cart (<span id="cart-count">0</span>)</a>
    </nav>
  `;
  document.body.prepend(header);
  updateCartCount();
}

function renderFooter() {
  const footer = document.createElement('footer');
  footer.className = 'site';
  footer.innerHTML = `&copy; ${new Date().getFullYear()} Driftwood Supply Co. &mdash; coastal-modern home goods.`;
  document.body.appendChild(footer);
}

function money(n) {
  return `$${Number(n).toFixed(2)}`;
}

document.addEventListener('DOMContentLoaded', () => {
  renderHeader();
  renderFooter();
});
