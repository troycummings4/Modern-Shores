import { Category } from "../types";

export const categories: Category[] = [
  {
    slug: "tech-and-gadgets",
    name: "Tech & Gadgets",
    tagline: "Absurdly clever gear",
    emoji: "🛸",
  },
  {
    slug: "home-and-living",
    name: "Home & Living",
    tagline: "Upgrade every room",
    emoji: "🏡",
  },
  {
    slug: "kitchen-and-bar",
    name: "Kitchen & Bar",
    tagline: "Cook like a show-off",
    emoji: "🍹",
  },
  {
    slug: "outdoor-and-adventure",
    name: "Outdoor & Adventure",
    tagline: "Take it outside",
    emoji: "🏕️",
  },
  {
    slug: "style-and-carry",
    name: "Style & Carry",
    tagline: "Wear it, flex it",
    emoji: "🕶️",
  },
  {
    slug: "just-for-fun",
    name: "Just For Fun",
    tagline: "Zero regrets purchases",
    emoji: "🎉",
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
