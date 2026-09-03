import { Link } from "react-router-dom";
import { categories } from "../data/categories";

export default function Footer() {
  return (
    <footer className="bg-shore-ink text-shore-shell/70">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-1">
          <Link to="/" className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-shore-teal text-shore-ink">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                <path
                  d="M3 15c2-2 4-2 6 0s4 2 6 0 4-2 6 0"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle cx="12" cy="8" r="3" fill="currentColor" />
              </svg>
            </span>
            <span className="font-display text-lg font-semibold text-white">
              Modern Shores
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm">
            Curated, ridiculously cool products for people who like their
            shopping with a little more personality.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
            Shop
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link to={`/category/${c.slug}`} className="hover:text-white">
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
            Company
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <Link to="/about" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/disclosure" className="hover:text-white">
                Affiliate Disclosure
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
            Follow Along
          </h3>
          <div className="mt-4 flex gap-3">
            {["Instagram", "TikTok", "Pinterest"].map((s) => (
              <span
                key={s}
                className="rounded-full border border-white/15 px-3 py-1.5 text-xs font-medium"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-6 text-xs sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Modern Shores. All rights reserved.</p>
          <p className="max-w-2xl text-white/50">
            Modern Shores is a participant in affiliate advertising programs
            and may earn commissions from qualifying purchases made through
            links on this site, at no extra cost to you.{" "}
            <Link to="/disclosure" className="underline hover:text-white">
              Learn more
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
