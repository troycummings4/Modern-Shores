import { Product } from "../types";

/**
 * Placeholder affiliate tag. Replace with your real Amazon Associates tag,
 * or swap this whole module out to build links for whichever affiliate
 * network(s) you're approved for (CJ, ShareASale, Impact, Rakuten, etc.).
 * Each product could also carry its own `affiliateUrl` field once you have
 * real per-product tracking links from your merchants.
 */
const AFFILIATE_TAG = "modernshores-20";

export function affiliateLink(product: Product): string {
  const query = encodeURIComponent(product.name);
  return `https://www.amazon.com/s?k=${query}&tag=${AFFILIATE_TAG}`;
}

export function productImage(seed: string, width = 640, height = 640): string {
  return `https://picsum.photos/seed/${encodeURIComponent(seed)}/${width}/${height}`;
}
