export interface Category {
  slug: string;
  name: string;
  tagline: string;
  emoji: string;
}

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  price: number;
  compareAtPrice?: number;
  rating: number;
  reviewCount: number;
  badges?: Array<"New" | "Trending" | "Staff Pick" | "Almost Gone">;
  imageSeed: string;
  /**
   * Real Amazon product detail page URL (no tracking tag — affiliateLink()
   * appends it), e.g. "https://www.amazon.com/dp/B0EXAMPLE". Falls back to
   * a generic search link when omitted.
   */
  affiliateUrl?: string;
  /**
   * Real product photo URL, sourced via Amazon SiteStripe (or your own
   * photography) — never scraped. Falls back to the placeholder generated
   * from `imageSeed` when omitted.
   */
  image?: string;
}
