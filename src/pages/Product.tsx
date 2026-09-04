import { Link, Navigate, useParams } from "react-router-dom";
import { getProduct, getRelatedProducts } from "../data/products";
import { getCategory } from "../data/categories";
import { formatPrice, percentOff } from "../lib/format";
import { affiliateLink, productPhoto } from "../lib/affiliate";
import Badge from "../components/Badge";
import StarRating from "../components/StarRating";
import ProductGrid from "../components/ProductGrid";
import SectionHeading from "../components/SectionHeading";

export default function Product() {
  const { slug = "" } = useParams();
  const product = getProduct(slug);

  if (!product) return <Navigate to="/" replace />;

  const category = getCategory(product.category);
  const discount = percentOff(product.price, product.compareAtPrice);
  const related = getRelatedProducts(product);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <nav className="mb-6 text-sm text-shore-navy/50">
        <Link to="/" className="hover:text-shore-navy">
          Home
        </Link>
        <span className="mx-2">/</span>
        {category && (
          <>
            <Link to={`/category/${category.slug}`} className="hover:text-shore-navy">
              {category.name}
            </Link>
            <span className="mx-2">/</span>
          </>
        )}
        <span className="text-shore-navy">{product.name}</span>
      </nav>

      <div className="grid gap-10 lg:grid-cols-2">
        <div className="relative overflow-hidden rounded-3xl bg-shore-sand shadow-card">
          <img
            src={productPhoto(product, 900, 900)}
            alt={product.name}
            className="aspect-square w-full object-cover"
          />
          <div className="absolute left-4 top-4 flex flex-col gap-1.5">
            {product.badges?.map((b) => <Badge key={b} label={b} />)}
          </div>
        </div>

        <div className="flex flex-col">
          {category && (
            <Link
              to={`/category/${category.slug}`}
              className="mb-2 w-fit text-xs font-bold uppercase tracking-widest text-shore-teal hover:underline"
            >
              {category.name}
            </Link>
          )}
          <h1 className="font-display text-3xl font-semibold text-shore-navy sm:text-4xl">
            {product.name}
          </h1>
          <p className="mt-2 text-lg text-shore-navy/60">{product.tagline}</p>

          <div className="mt-4">
            <StarRating rating={product.rating} reviewCount={product.reviewCount} size="md" />
          </div>

          <div className="mt-6 flex items-center gap-3">
            <span className="font-display text-3xl font-bold text-shore-navy">
              {formatPrice(product.price)}
            </span>
            {product.compareAtPrice && (
              <>
                <span className="text-lg text-shore-navy/40 line-through">
                  {formatPrice(product.compareAtPrice)}
                </span>
                <span className="rounded-full bg-shore-coral/10 px-3 py-1 text-sm font-bold text-shore-coral">
                  Save {discount}%
                </span>
              </>
            )}
          </div>

          <p className="mt-6 leading-relaxed text-shore-navy/70">
            {product.description}
          </p>

          <a
            href={affiliateLink(product)}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-shore-coral px-8 py-4 text-base font-semibold text-white shadow-lg shadow-shore-coral/30 transition hover:bg-shore-coral/90 sm:w-fit"
          >
            Shop Now at Our Partner Store
            <span aria-hidden>↗</span>
          </a>
          <p className="mt-3 text-xs text-shore-navy/40">
            Opens in a new tab. As an affiliate, Modern Shores may earn a
            commission on purchases made through this link — see our{" "}
            <Link to="/disclosure" className="underline">
              disclosure
            </Link>
            .
          </p>
        </div>
      </div>

      {related.length > 0 && (
        <div className="mt-20">
          <SectionHeading eyebrow="You might also like" title="More in this category" />
          <div className="mt-8">
            <ProductGrid products={related} />
          </div>
        </div>
      )}
    </div>
  );
}
