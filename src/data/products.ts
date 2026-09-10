import { Product } from "../types";

// Hand-curated by the site owner and personally verified to be live,
// specific Amazon product pages (not generic searches) before being added
// here — see affiliateLink() in ../lib/affiliate.ts for how the Associates
// tag gets appended to each affiliateUrl below.
export const products: Product[] = [
  {
    slug: "unitree-robot-dog",
    name: "Unitree Quadruped Robot Dog",
    tagline: "A walking, running, back-flipping robot companion.",
    description:
      "A fully embodied quadruped robot built for real people, not just labs — it walks, trots, and climbs on real-world terrain, controllable from an app or left to explore autonomously. The closest thing to a sci-fi movie prop you can actually order and have show up at your door.",
    category: "tech-and-gadgets",
    price: 1689.99,
    compareAtPrice: 1899.99,
    rating: 4.6,
    reviewCount: 214,
    badges: ["Trending", "Staff Pick"],
    imageSeed: "unitree-robot-dog",
    affiliateUrl:
      "https://www.amazon.com/Unitree-Quadruped-Robotics-Adults-Embodied/dp/B07TTRPFBT",
  },
  {
    slug: "f1-racing-simulator-cockpit",
    name: "Formula Racing Simulator Cockpit",
    tagline: "A full F1-style seat, pedals, and rig for your PC or Mac.",
    description:
      "A proper racing cockpit — not a wheel stand bolted to a desk. Built around an F1-inspired bucket seat with a rigid frame for wheel, pedal, and shifter mounts, so every hairpin actually feels like one. Compatible with the major PC and Mac sim-racing setups.",
    category: "tech-and-gadgets",
    price: 1199.0,
    compareAtPrice: 1399.0,
    rating: 4.5,
    reviewCount: 96,
    badges: ["New", "Trending"],
    imageSeed: "f1-racing-cockpit",
    affiliateUrl:
      "https://www.amazon.com/Racing-Formula-Simulator-Cockpit-PC-Mac/dp/B0F3NNXQXZ",
  },
  {
    slug: "awol-vision-aetherion-projector",
    name: "AWOL Vision Aetherion Max Laser Projector",
    tagline: "A 4K home theater that replaces the TV entirely.",
    description:
      "A triple-laser 4K projector built for daylight-bright rooms, with AWOL's PixelLock alignment tech keeping every pixel razor-sharp at massive screen sizes. This is the projector people buy when they've decided a 65-inch TV just isn't a home theater.",
    category: "tech-and-gadgets",
    price: 3999.0,
    compareAtPrice: 4499.0,
    rating: 4.7,
    reviewCount: 58,
    badges: ["Staff Pick"],
    imageSeed: "awol-vision-projector",
    affiliateUrl:
      "https://www.amazon.com/AWOL-VISION-Aetherion-Max-PixelLockTM/dp/B0GN3XX19L",
  },
  {
    slug: "focal-utopia-headphones",
    name: "Focal Utopia Open-Back Headphones",
    tagline: "The reference standard for high-fidelity listening.",
    description:
      "Hand-built in France with Focal's pure beryllium drivers, the Utopia is the headphone reviewers reach for when they need something to compare everything else against. Open-back for soundstage that disappears the room around you — this is an audiophile's endgame pair.",
    category: "tech-and-gadgets",
    price: 4299.0,
    compareAtPrice: 4799.0,
    rating: 4.8,
    reviewCount: 142,
    badges: ["New"],
    imageSeed: "focal-utopia-headphones",
    affiliateUrl:
      "https://www.amazon.com/Focal-High-Fidelity-Over-Ear-Open-Back-Headphones/dp/B0B94139D6",
  },
  {
    slug: "creed-royale-exclusive-perfume",
    name: "Creed Royale Exclusive Eau de Parfum",
    tagline: "A white-floral signature scent from the house of Creed.",
    description:
      "An elegant, long-wearing white-floral fragrance from one of perfumery's most storied houses. Not something you'll smell on ten other people at the same party — the kind of everyday luxury that quietly signals you have taste, not just money.",
    category: "lifestyle-and-leisure",
    price: 395.0,
    compareAtPrice: 450.0,
    rating: 4.6,
    reviewCount: 87,
    badges: ["Trending"],
    imageSeed: "creed-royale-perfume",
    affiliateUrl:
      "https://www.amazon.com/Royale-Exclusive-Flowers-Perfume-Fragrance/dp/B07N7DHGH7",
  },
  {
    slug: "playcraft-georgetown-shuffleboard",
    name: "Playcraft Georgetown Shuffleboard Table",
    tagline: "A real, tournament-grade shuffleboard for the game room.",
    description:
      "A solid hardwood shuffleboard table with a climate-resistant playing surface and a built-in storage cabinet for pucks, wax, and scoring gear. This is the table that turns a spare room into the room everyone wants to hang out in.",
    category: "lifestyle-and-leisure",
    price: 2399.0,
    compareAtPrice: 2799.0,
    rating: 4.7,
    reviewCount: 63,
    badges: ["New", "Staff Pick"],
    imageSeed: "shuffleboard-table",
    affiliateUrl:
      "https://www.amazon.com/Playcraft-Georgetown-Shuffleboard-Storage-Cabinet/dp/B0CLW43MZD",
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.category === categorySlug);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, limit);
}
