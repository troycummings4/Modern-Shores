import { Category } from "../types";

export const categories: Category[] = [
  {
    slug: "sim-and-gaming",
    name: "Sim & Gaming Rigs",
    tagline: "Cockpits, not controllers",
    emoji: "🏎️",
  },
  {
    slug: "drones-and-robotics",
    name: "Drones & Robotics",
    tagline: "It flies, walks, or thinks for itself",
    emoji: "🤖",
  },
  {
    slug: "electric-rides",
    name: "Electric Rides",
    tagline: "Absurd top speeds, zero gas",
    emoji: "⚡",
  },
  {
    slug: "home-theater-audio",
    name: "Home Theater & Audio",
    tagline: "Overkill, by design",
    emoji: "🎬",
  },
  {
    slug: "wearable-tech",
    name: "Wearable Tech",
    tagline: "The future, worn casually",
    emoji: "🕶️",
  },
  {
    slug: "smart-home-tech",
    name: "Smart Home Tech",
    tagline: "Your house, upgraded",
    emoji: "🏠",
  },
];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
