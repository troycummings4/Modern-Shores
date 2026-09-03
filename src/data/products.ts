import { Product } from "../types";

/**
 * Demo catalog. Swap `imageSeed` for real product photography and wire up
 * real tracking links via `lib/affiliate.ts` once your affiliate accounts
 * (Amazon Associates, CJ, ShareASale, Impact, etc.) are approved.
 */
export const products: Product[] = [
  // Tech & Gadgets
  {
    slug: "levitating-bluetooth-speaker",
    name: "Levitating Bluetooth Speaker",
    tagline: "Music that floats on air. Literally.",
    description:
      "A magnetically levitating orb speaker that spins in midair while it fills the room with surprisingly punchy sound. Guaranteed to start a conversation at every party.",
    category: "tech-and-gadgets",
    price: 89.99,
    compareAtPrice: 139.99,
    rating: 4.7,
    reviewCount: 812,
    badges: ["Trending"],
    imageSeed: "levitating-speaker",
  },
  {
    slug: "galaxy-led-star-projector",
    name: "Galaxy LED Star Projector",
    tagline: "Turn your ceiling into a nebula.",
    description:
      "Nebula clouds, shooting stars, and a full galaxy swirl projected across your walls and ceiling. Bluetooth speaker and white-noise built in for the ultimate cozy cave.",
    category: "tech-and-gadgets",
    price: 34.99,
    compareAtPrice: 59.99,
    rating: 4.6,
    reviewCount: 2140,
    badges: ["Staff Pick"],
    imageSeed: "galaxy-projector",
  },
  {
    slug: "pocket-mini-projector",
    name: "Pocket Cinema Mini Projector",
    tagline: "A 120-inch screen in your backpack.",
    description:
      "Fits in a jacket pocket and throws a crisp 1080p image up to 120 inches. Built-in battery means movie night works anywhere — rooftop, campsite, backyard.",
    category: "tech-and-gadgets",
    price: 119.0,
    compareAtPrice: 179.0,
    rating: 4.4,
    reviewCount: 356,
    imageSeed: "mini-projector",
  },
  {
    slug: "smart-self-stirring-mug",
    name: "Self-Stirring Smart Mug",
    tagline: "Never dig for dissolved sugar again.",
    description:
      "A magnetic stirrer built into a double-walled travel mug. Drop it in, tap the button, perfectly mixed coffee every time — no spoon required.",
    category: "tech-and-gadgets",
    price: 24.99,
    rating: 4.3,
    reviewCount: 601,
    badges: ["New"],
    imageSeed: "stirring-mug",
  },
  {
    slug: "retro-arcade-mini-console",
    name: "Retro Arcade Mini Console",
    tagline: "620 games. One tiny joystick.",
    description:
      "A palm-sized arcade cabinet loaded with hundreds of retro classics, HDMI out, and a satisfyingly clicky joystick. Instant nostalgia, zero cartridges.",
    category: "tech-and-gadgets",
    price: 42.5,
    compareAtPrice: 64.0,
    rating: 4.5,
    reviewCount: 1029,
    imageSeed: "retro-arcade",
  },
  {
    slug: "underwater-scooter-drone",
    name: "Underwater Photo Drone",
    tagline: "Because the sky isn't the only frontier.",
    description:
      "A palm-launched underwater drone that streams live 4K video to your phone while it explores reefs, lakes, and the deep end of the pool.",
    category: "tech-and-gadgets",
    price: 249.0,
    compareAtPrice: 329.0,
    rating: 4.2,
    reviewCount: 88,
    badges: ["Almost Gone"],
    imageSeed: "underwater-drone",
  },

  // Home & Living
  {
    slug: "cloud-shaped-humidifier",
    name: "Cloud Rain Humidifier",
    tagline: "Your own personal thunderstorm.",
    description:
      "Mist drips from a cloud-shaped diffuser like gentle rain, paired with a soft LED glow and rumbling thunder sound effects. Weirdly the most relaxing thing you'll own.",
    category: "home-and-living",
    price: 32.99,
    compareAtPrice: 49.99,
    rating: 4.8,
    reviewCount: 3120,
    badges: ["Trending"],
    imageSeed: "cloud-humidifier",
  },
  {
    slug: "floating-wall-bookshelf",
    name: "Invisible Floating Bookshelf",
    tagline: "Books that appear to defy gravity.",
    description:
      "A clever bracket system hides behind your books so they appear to float straight off the wall. Comes in a set of three — an instant shelfie upgrade.",
    category: "home-and-living",
    price: 27.0,
    rating: 4.5,
    reviewCount: 540,
    imageSeed: "floating-shelf",
  },
  {
    slug: "smart-led-vanity-mirror",
    name: "Smart Touch Vanity Mirror",
    tagline: "Hollywood lighting, tabletop size.",
    description:
      "Three color temperatures, touch dimming, and a built-in bluetooth speaker turn any counter into a backstage dressing room.",
    category: "home-and-living",
    price: 59.99,
    compareAtPrice: 89.99,
    rating: 4.6,
    reviewCount: 275,
    imageSeed: "vanity-mirror",
  },
  {
    slug: "weighted-gravity-blanket",
    name: "Weighted Gravity Blanket",
    tagline: "A hug you can wash on cold.",
    description:
      "Evenly distributed glass beads and a buttery-soft cover deliver deep-pressure comfort that helps you fall asleep faster. Available in five weights.",
    category: "home-and-living",
    price: 64.0,
    compareAtPrice: 99.0,
    rating: 4.7,
    reviewCount: 1876,
    imageSeed: "weighted-blanket",
  },
  {
    slug: "ceramic-drip-vase-trio",
    name: "Nordic Drip Ceramic Vase Trio",
    tagline: "Museum-shelf energy for $30.",
    description:
      "Hand-glazed ceramic vases with an organic drip finish. Stack them, line them up, or scatter them — they look expensive because, well, they kind of are.",
    category: "home-and-living",
    price: 29.99,
    rating: 4.4,
    reviewCount: 190,
    badges: ["New"],
    imageSeed: "ceramic-vases",
  },
  {
    slug: "sunset-projection-lamp",
    name: "Sunset Projection Lamp",
    tagline: "Golden hour, on demand.",
    description:
      "Projects a warm, dreamy sunset glow across your room for the ultimate mirror selfie or cozy movie backdrop. 360° rotation, USB powered.",
    category: "home-and-living",
    price: 19.99,
    compareAtPrice: 29.99,
    rating: 4.5,
    reviewCount: 4310,
    badges: ["Trending"],
    imageSeed: "sunset-lamp",
  },

  // Kitchen & Bar
  {
    slug: "automatic-pancake-robot",
    name: "Automatic Pancake Bot",
    tagline: "Perfect circles, every single time.",
    description:
      "Pour the batter in, and this countertop robot pumps out perfectly portioned, perfectly round pancakes while you make coffee. Shapes attachment included.",
    category: "kitchen-and-bar",
    price: 79.99,
    compareAtPrice: 119.99,
    rating: 4.3,
    reviewCount: 421,
    imageSeed: "pancake-bot",
  },
  {
    slug: "tabletop-cotton-candy-maker",
    name: "Tabletop Cotton Candy Maker",
    tagline: "Carnival vibes, kitchen counter.",
    description:
      "Spin up fluffy cotton candy in under a minute with any hard candy or floss sugar. Includes cones and a splash-guard bowl for easy cleanup.",
    category: "kitchen-and-bar",
    price: 44.99,
    rating: 4.4,
    reviewCount: 302,
    badges: ["New"],
    imageSeed: "cotton-candy",
  },
  {
    slug: "electric-wine-aerator-set",
    name: "Instant Electric Wine Aerator",
    tagline: "Decant a bottle in seconds, not hours.",
    description:
      "One-touch aeration pours smoother, more aromatic wine instantly. Rechargeable, spill-proof, and honestly makes the $12 bottle taste like $40.",
    category: "kitchen-and-bar",
    price: 36.5,
    compareAtPrice: 54.0,
    rating: 4.6,
    reviewCount: 963,
    imageSeed: "wine-aerator",
  },
  {
    slug: "nugget-ice-maker",
    name: "Countertop Nugget Ice Maker",
    tagline: "The chewable ice everyone's obsessed with.",
    description:
      "Soft, chewable pellet ice — the kind you drive across town for — made fresh in your own kitchen. 26 lbs a day, ready in minutes.",
    category: "kitchen-and-bar",
    price: 279.0,
    compareAtPrice: 349.0,
    rating: 4.8,
    reviewCount: 1502,
    badges: ["Trending"],
    imageSeed: "nugget-ice",
  },
  {
    slug: "personal-espresso-maker",
    name: "Portable Manual Espresso Maker",
    tagline: "Café-grade shots, zero outlet needed.",
    description:
      "18 bars of hand-pumped pressure pull a proper espresso shot anywhere — campsite, hotel room, or your desk during a meeting that should've been an email.",
    category: "kitchen-and-bar",
    price: 54.0,
    rating: 4.5,
    reviewCount: 674,
    imageSeed: "portable-espresso",
  },
  {
    slug: "diy-sushi-roller-kit",
    name: "All-in-One Sushi Roller Kit",
    tagline: "Restaurant rolls, rookie skill level.",
    description:
      "A clever roller mold plus bamboo mats, a rice paddle, and chopsticks — everything you need to plate sushi that looks like it came from a $$ menu.",
    category: "kitchen-and-bar",
    price: 22.99,
    compareAtPrice: 34.99,
    rating: 4.2,
    reviewCount: 258,
    imageSeed: "sushi-kit",
  },

  // Outdoor & Adventure
  {
    slug: "inflatable-solo-kayak",
    name: "Inflatable Solo Touring Kayak",
    tagline: "A whole lake, packed into a backpack.",
    description:
      "Sets up in five minutes, deflates down to a duffel bag, and glides like a hardshell. Includes paddle, pump, and repair kit for spontaneous water days.",
    category: "outdoor-and-adventure",
    price: 189.0,
    compareAtPrice: 259.0,
    rating: 4.6,
    reviewCount: 447,
    badges: ["Staff Pick"],
    imageSeed: "inflatable-kayak",
  },
  {
    slug: "solar-cooler-backpack",
    name: "Solar-Powered Cooler Backpack",
    tagline: "Cold drinks, no ice required.",
    description:
      "A built-in thermoelectric cooler compartment powered by a fold-out solar panel keeps drinks and snacks cold on all-day hikes and beach trips.",
    category: "outdoor-and-adventure",
    price: 98.0,
    rating: 4.1,
    reviewCount: 156,
    imageSeed: "solar-cooler-backpack",
  },
  {
    slug: "packable-hammock-tent",
    name: "Two-Person Hammock Tent",
    tagline: "Camp above the ground, above the bugs.",
    description:
      "A full bug net and rainfly turn this ultralight hammock into a floating tent. Packs down to the size of a water bottle for backcountry trips.",
    category: "outdoor-and-adventure",
    price: 74.99,
    compareAtPrice: 109.99,
    rating: 4.5,
    reviewCount: 812,
    imageSeed: "hammock-tent",
  },
  {
    slug: "all-terrain-electric-skateboard",
    name: "All-Terrain Electric Skateboard",
    tagline: "Grass, gravel, and gutters — handled.",
    description:
      "Big pneumatic tires and a dual-motor drivetrain mean this board doesn't care if the pavement runs out. Hits 25 mph with a remote throttle and brake.",
    category: "outdoor-and-adventure",
    price: 549.0,
    compareAtPrice: 699.0,
    rating: 4.7,
    reviewCount: 233,
    badges: ["Trending"],
    imageSeed: "electric-skateboard",
  },
  {
    slug: "camp-percolator-coffee-pot",
    name: "Stainless Camp Percolator",
    tagline: "Real coffee, real campfire.",
    description:
      "No filters, no batteries — just a classic percolator built for open flame or camp stove. Brews a full pot of coffee strong enough to survive a sunrise hike.",
    category: "outdoor-and-adventure",
    price: 39.99,
    rating: 4.6,
    reviewCount: 512,
    imageSeed: "camp-percolator",
  },
  {
    slug: "collapsible-travel-fishing-rod",
    name: "Collapsible Travel Fishing Rod Kit",
    tagline: "Fits your carry-on, catches your dinner.",
    description:
      "Telescoping carbon-fiber rod collapses to 15 inches and comes with a matching reel and tackle case, so a fishing trip is never more than a whim away.",
    category: "outdoor-and-adventure",
    price: 45.0,
    compareAtPrice: 69.0,
    rating: 4.3,
    reviewCount: 389,
    imageSeed: "travel-fishing-rod",
  },

  // Style & Carry
  {
    slug: "led-light-up-sneakers",
    name: "LED Light-Up Street Sneakers",
    tagline: "Every step is a dance floor.",
    description:
      "Rechargeable LED soles sync to eleven light modes so you can walk, run, or absolutely stand out at the next block party. Adult sizing, USB-C charging.",
    category: "style-and-carry",
    price: 54.99,
    compareAtPrice: 79.99,
    rating: 4.2,
    reviewCount: 340,
    imageSeed: "led-sneakers",
  },
  {
    slug: "heated-smart-jacket",
    name: "Heated Smart Jacket",
    tagline: "Your own personal climate control.",
    description:
      "Three embedded heating zones controlled from an app or a sleeve button. Ten hours of warmth on a charge, so winter becomes optional.",
    category: "style-and-carry",
    price: 129.0,
    compareAtPrice: 189.0,
    rating: 4.6,
    reviewCount: 205,
    badges: ["New"],
    imageSeed: "heated-jacket",
  },
  {
    slug: "convertible-travel-backpack",
    name: "Convertible Travel Backpack",
    tagline: "Carry-on legal, weekend ready.",
    description:
      "Unzips flat like a suitcase, wears like a backpack, and hides a laptop sleeve, shoe pocket, and hidden anti-theft zipper for city hopping.",
    category: "style-and-carry",
    price: 89.0,
    rating: 4.7,
    reviewCount: 1120,
    badges: ["Staff Pick"],
    imageSeed: "travel-backpack",
  },
  {
    slug: "bluetooth-audio-sunglasses",
    name: "Bluetooth Audio Sunglasses",
    tagline: "Open-ear sound, zero wires.",
    description:
      "Polarized UV400 lenses with directional speakers built into the frame — hear your music and your surroundings at the same time.",
    category: "style-and-carry",
    price: 47.99,
    compareAtPrice: 69.99,
    rating: 4.1,
    reviewCount: 288,
    imageSeed: "audio-sunglasses",
  },
  {
    slug: "slim-tracker-wallet",
    name: "Slim Smart Tracker Wallet",
    tagline: "It will never actually get lost again.",
    description:
      "A featherweight aluminum wallet with a built-in Bluetooth tracker chip that pings your phone and rings from across the room.",
    category: "style-and-carry",
    price: 32.0,
    rating: 4.4,
    reviewCount: 967,
    imageSeed: "tracker-wallet",
  },
  {
    slug: "smart-fitness-ring",
    name: "Smart Fitness Ring",
    tagline: "All the data, none of the wrist bulk.",
    description:
      "Tracks sleep, heart rate, and activity from a titanium band that looks like jewelry, not a gadget. Seven-day battery life.",
    category: "style-and-carry",
    price: 219.0,
    compareAtPrice: 279.0,
    rating: 4.5,
    reviewCount: 143,
    badges: ["Trending"],
    imageSeed: "smart-ring",
  },

  // Just For Fun
  {
    slug: "giant-inflatable-unicorn-float",
    name: "Giant Inflatable Unicorn Float",
    tagline: "The pool's main character.",
    description:
      "A six-foot glittery unicorn pool float built for main-character summer photos. Sturdy handles, rapid valve, and reinforced seams for a whole season of floating.",
    category: "just-for-fun",
    price: 26.99,
    compareAtPrice: 39.99,
    rating: 4.5,
    reviewCount: 1301,
    imageSeed: "unicorn-float",
  },
  {
    slug: "human-size-hamster-wheel",
    name: "Human-Size Hamster Wheel",
    tagline: "Cardio, but make it a spectacle.",
    description:
      "A full-size rolling wheel built for actual humans. It's an at-home workout, a party trick, and a guaranteed group-chat video all in one.",
    category: "just-for-fun",
    price: 349.0,
    rating: 4.0,
    reviewCount: 62,
    badges: ["Almost Gone"],
    imageSeed: "hamster-wheel",
  },
  {
    slug: "karaoke-bluetooth-microphone",
    name: "Karaoke Bluetooth Microphone Speaker",
    tagline: "The whole bar, in your hand.",
    description:
      "A handheld mic with a built-in speaker, voice changer, and echo effects that pairs with any karaoke app. Every car ride becomes a concert.",
    category: "just-for-fun",
    price: 29.99,
    compareAtPrice: 44.99,
    rating: 4.4,
    reviewCount: 2765,
    badges: ["Trending"],
    imageSeed: "karaoke-mic",
  },
  {
    slug: "mini-nerf-blaster-office-set",
    name: "Mini Foam Blaster Office Set",
    tagline: "For very important business meetings.",
    description:
      "Pocket-sized foam dart blasters that fit in a desk drawer. Comes in a two-pack, because office warfare requires backup.",
    category: "just-for-fun",
    price: 18.99,
    rating: 4.3,
    reviewCount: 415,
    imageSeed: "mini-blaster",
  },
  {
    slug: "giant-4ft-plush-blob",
    name: "Giant 4-Foot Plush Companion",
    tagline: "Structurally, it's furniture. Emotionally, it's family.",
    description:
      "An oversized, ultra-soft plush that doubles as a beanbag, a nap spot, and the best background prop your room has ever had.",
    category: "just-for-fun",
    price: 64.99,
    compareAtPrice: 89.99,
    rating: 4.6,
    reviewCount: 733,
    badges: ["New"],
    imageSeed: "giant-plush",
  },
  {
    slug: "desktop-mini-basketball-hoop",
    name: "Desktop Mini Basketball Hoop",
    tagline: "The productivity killer your desk deserves.",
    description:
      "A backboard, a hoop, an electronic scoreboard with sound effects, and a pair of foam mini basketballs. Deadlines suddenly feel negotiable.",
    category: "just-for-fun",
    price: 21.99,
    rating: 4.2,
    reviewCount: 588,
    imageSeed: "desk-hoop",
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
