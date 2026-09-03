import { Link } from "react-router-dom";
import { categories } from "../data/categories";
import { productImage } from "../lib/affiliate";

export default function CategoryStrip() {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
      {categories.map((c) => (
        <Link
          key={c.slug}
          to={`/category/${c.slug}`}
          className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-2xl shadow-card transition hover:-translate-y-1 hover:shadow-card-hover"
        >
          <img
            src={productImage(c.slug, 400, 500)}
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-shore-navy/90 via-shore-navy/20 to-transparent" />
          <div className="relative p-3 text-white sm:p-4">
            <span className="text-xl">{c.emoji}</span>
            <p className="mt-1 font-display text-sm font-semibold leading-tight sm:text-base">
              {c.name}
            </p>
            <p className="hidden text-xs text-white/70 sm:block">{c.tagline}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
