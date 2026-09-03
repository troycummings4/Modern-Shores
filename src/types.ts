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
}
