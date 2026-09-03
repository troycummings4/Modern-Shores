import { Link } from "react-router-dom";
import { productImage } from "../lib/affiliate";
import { products } from "../data/products";
import { formatPrice } from "../lib/format";

const avgOrderValue = Math.round(
  products.reduce((sum, p) => sum + p.price, 0) / products.length
);

const FLOATERS = [
  { seed: "camera-drone", className: "left-2 top-6 h-28 w-28 sm:h-36 sm:w-36", delay: "0s" },
  { seed: "espresso-machine", className: "right-4 top-16 h-24 w-24 sm:h-32 sm:w-32", delay: "1.2s" },
  { seed: "cold-plunge", className: "left-10 bottom-4 h-24 w-24 sm:h-32 sm:w-32", delay: "2.1s" },
  { seed: "electric-skateboard", className: "right-10 bottom-10 h-28 w-28 sm:h-36 sm:w-36", delay: "0.6s" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-shore-gradient">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24 lg:px-8">
        <div className="relative z-10 text-shore-shell">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-shore-aqua backdrop-blur">
            Premium finds only · New drops weekly
          </p>
          <h1 className="text-balance font-display text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
            Ridiculously cool, seriously worth it.
          </h1>
          <p className="mt-5 max-w-lg text-balance text-lg text-shore-shell/75">
            Modern Shores hand-picks the internet's most gorgeous, most
            "wait, where did you get that?" statement pieces — the kind of
            investment buys worth researching before you click order.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              to="/category/tech-and-gadgets"
              className="rounded-full bg-shore-coral px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-shore-coral/30 transition hover:bg-shore-coral/90"
            >
              Start Shopping
            </Link>
            <Link
              to="/about"
              className="rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Our Story
            </Link>
          </div>
          <div className="mt-10 flex items-center gap-6 text-sm text-shore-shell/60">
            <div>
              <p className="font-display text-xl font-semibold text-white">
                {formatPrice(avgOrderValue)}
              </p>
              <p>Avg. order value</p>
            </div>
            <div className="h-8 w-px bg-white/20" />
            <div>
              <p className="font-display text-xl font-semibold text-white">4.6★</p>
              <p>Avg. rating</p>
            </div>
            <div className="h-8 w-px bg-white/20" />
            <div>
              <p className="font-display text-xl font-semibold text-white">Weekly</p>
              <p>New drops</p>
            </div>
          </div>
        </div>

        <div className="relative hidden h-[420px] md:block">
          {FLOATERS.map((f) => (
            <img
              key={f.seed}
              src={productImage(f.seed, 300, 300)}
              alt=""
              aria-hidden
              className={`animate-float absolute rounded-2xl border-4 border-white/20 object-cover shadow-2xl ${f.className}`}
              style={{ animationDelay: f.delay }}
            />
          ))}
        </div>
      </div>

      <svg
        className="absolute inset-x-0 bottom-0 text-shore-shell"
        viewBox="0 0 1440 80"
        fill="currentColor"
        preserveAspectRatio="none"
      >
        <path d="M0 40c120 20 240 20 360 0s240-40 360-20 240 40 360 20 240-40 360-20v60H0z" />
      </svg>
    </section>
  );
}
