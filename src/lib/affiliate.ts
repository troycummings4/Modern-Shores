import { Product } from "../types";

/**
 * Every "Shop Now" button on every product routes through this one
 * function, so activating real payouts is a single change here — no
 * per-product editing needed.
 *
 * Set VITE_AMAZON_ASSOCIATE_TAG in a `.env` file (see `.env.example`) once
 * you have a real Amazon Associates tracking ID from
 * https://affiliate-program.amazon.com. Until then this falls back to an
 * unregistered placeholder tag — links still work for customers, but
 * Amazon has no account to credit, so clicks will NOT earn a commission.
 *
 * Using a different network instead (CJ, ShareASale, Impact, Rakuten, or a
 * retailer's own program)? Swap the URL this function returns, or give
 * each product its own `affiliateUrl` field once you have real per-product
 * tracking links.
 */
const PLACEHOLDER_TAG = "modernshores-20";
const AFFILIATE_TAG = import.meta.env.VITE_AMAZON_ASSOCIATE_TAG || PLACEHOLDER_TAG;

if (import.meta.env.DEV && AFFILIATE_TAG === PLACEHOLDER_TAG) {
  // eslint-disable-next-line no-console
  console.warn(
    "[Modern Shores] Using a placeholder affiliate tag — no commissions will be earned. " +
      "Set VITE_AMAZON_ASSOCIATE_TAG in .env once you have a real Amazon Associates ID."
  );
}

export function affiliateLink(product: Product): string {
  const query = encodeURIComponent(product.name);
  return `https://www.amazon.com/s?k=${query}&tag=${AFFILIATE_TAG}`;
}

export function productImage(seed: string, width = 640, height = 640): string {
  return `https://picsum.photos/seed/${encodeURIComponent(seed)}/${width}/${height}`;
}
