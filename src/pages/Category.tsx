import { Link, Navigate, useParams } from "react-router-dom";
import { getCategory, categories } from "../data/categories";
import { getProductsByCategory } from "../data/products";
import ProductGrid from "../components/ProductGrid";

export default function Category() {
  const { slug = "" } = useParams();
  const category = getCategory(slug);

  if (!category) return <Navigate to="/" replace />;

  const items = getProductsByCategory(slug);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <nav className="mb-6 text-sm text-shore-navy/50">
        <Link to="/" className="hover:text-shore-navy">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-shore-navy">{category.name}</span>
      </nav>

      <div className="mb-10 flex flex-col gap-2">
        <span className="text-3xl">{category.emoji}</span>
        <h1 className="font-display text-3xl font-semibold text-shore-navy sm:text-4xl">
          {category.name}
        </h1>
        <p className="text-shore-navy/60">{category.tagline}</p>
      </div>

      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((c) => (
          <Link
            key={c.slug}
            to={`/category/${c.slug}`}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              c.slug === slug
                ? "bg-shore-navy text-white"
                : "bg-white text-shore-navy/70 hover:bg-shore-navy/5"
            }`}
          >
            {c.emoji} {c.name}
          </Link>
        ))}
      </div>

      <ProductGrid products={items} />
    </div>
  );
}
