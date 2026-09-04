import { Product } from "../types";

/**
 * Every "Shop Now" button on every product routes through this one
 * function, so it only has to be set in one place. This is the real,
 * registered Amazon Associates tracking ID — every link on the site earns
 * a commission on qualifying purchases made through it.
 *
 * VITE_AMAZON_ASSOCIATE_TAG can still override this (e.g. to test a
 * second tag) via a `.env` file — see `.env.example` — but nothing has to
 * be set for the site to work correctly out of the box.
 *
 * Using a different network instead (CJ, ShareASale, Impact, Rakuten, or a
 * retailer's own program)? Swap the URL this function returns to that
 * network's tracking link format.
 */
const AFFILIATE_TAG = import.meta.env.VITE_AMAZON_ASSOCIATE_TAG || "051695-20";

export function affiliateLink(product: Product): string {
  if (product.affiliateUrl) {
    const separator = product.affiliateUrl.includes("?") ? "&" : "?";
    return `${product.affiliateUrl}${separator}tag=${AFFILIATE_TAG}`;
  }
  const query = encodeURIComponent(product.name);
  return `https://www.amazon.com/s?k=${query}&tag=${AFFILIATE_TAG}`;
}

export function productImage(seed: string, width = 640, height = 640): string {
  return `https://picsum.photos/seed/${encodeURIComponent(seed)}/${width}/${height}`;
}

/**
 * Real product photo when set (product.image, sourced via Amazon
 * SiteStripe or your own photography — never scraped), otherwise the
 * generated placeholder keyed off imageSeed.
 */
export function productPhoto(product: Product, width = 640, height = 640): string {
  return product.image || productImage(product.imageSeed, width, height);
}
