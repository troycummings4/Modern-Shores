import { Category } from "../types";

export const categories: Category[] = [
  {
    slug: "tech-and-gadgets",
    name: "Tech & Gadgets",
    tagline: "The kind of gear that needs a demo, not a description",
    emoji: "🤖",
  },
  {
    slug: "lifestyle-and-leisure",
    name: "Lifestyle & Leisure",
    tagline: "Everyday luxury, upgraded",
    emoji: "✨",
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
