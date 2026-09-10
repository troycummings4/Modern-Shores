import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { categories } from "../data/categories";

const NAV_LINK =
  "text-sm font-semibold text-shore-navy/70 transition hover:text-shore-navy";
const NAV_LINK_ACTIVE = "text-shore-navy";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-shore-navy/5 bg-shore-shell/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-shore-navy text-shore-aqua">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
              <path
                d="M3 15c2-2 4-2 6 0s4 2 6 0 4-2 6 0"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle cx="12" cy="8" r="3" fill="currentColor" />
            </svg>
          </span>
          <span className="font-display text-xl font-semibold tracking-tight text-shore-navy">
            Modern Shores
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {categories.slice(0, 5).map((c) => (
            <NavLink
              key={c.slug}
              to={`/category/${c.slug}`}
              className={({ isActive }) =>
                `${NAV_LINK} ${isActive ? NAV_LINK_ACTIVE : ""}`
              }
            >
              {c.name}
            </NavLink>
          ))}
          <NavLink
            to="/about"
            className={({ isActive }) => `${NAV_LINK} ${isActive ? NAV_LINK_ACTIVE : ""}`}
          >
            About
          </NavLink>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            to="/category/tech-and-gadgets"
            className="rounded-full bg-shore-coral px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-shore-coral/90"
          >
            Today's Deals
          </Link>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border border-shore-navy/10 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
            {open ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="#0c1f33"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="#0c1f33"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-shore-navy/5 bg-shore-shell px-4 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col gap-1">
            {categories.map((c) => (
              <Link
                key={c.slug}
                to={`/category/${c.slug}`}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-semibold text-shore-navy/80 hover:bg-shore-navy/5"
              >
                {c.emoji} {c.name}
              </Link>
            ))}
            <Link
              to="/about"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-semibold text-shore-navy/80 hover:bg-shore-navy/5"
            >
              About
            </Link>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-semibold text-shore-navy/80 hover:bg-shore-navy/5"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
