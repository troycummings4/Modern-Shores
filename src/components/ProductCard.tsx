import { Link } from "react-router-dom";
import { Product } from "../types";
import { formatPrice, percentOff } from "../lib/format";
import { affiliateLink, productPhoto } from "../lib/affiliate";
import Badge from "./Badge";
import StarRating from "./StarRating";

export default function ProductCard({ product }: { product: Product }) {
  const discount = percentOff(product.price, product.compareAtPrice);

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-card-hover">
      <Link
        to={`/product/${product.slug}`}
        className="relative block aspect-square overflow-hidden bg-shore-sand"
      >
        <img
          src={productPhoto(product)}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3 flex flex-col gap-1.5">
          {product.badges?.map((b) => <Badge key={b} label={b} />)}
        </div>
        {discount > 0 && (
          <div className="absolute right-3 top-3 rounded-full bg-shore-navy px-2.5 py-1 text-[11px] font-bold text-white shadow-sm">
            -{discount}%
          </div>
        )}
      </Link>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <Link to={`/product/${product.slug}`} className="flex-1">
          <h3 className="font-display text-lg font-semibold leading-snug text-shore-navy transition group-hover:text-shore-teal">
            {product.name}
          </h3>
          <p className="mt-1 text-sm text-shore-navy/60">{product.tagline}</p>
        </Link>

        <StarRating rating={product.rating} reviewCount={product.reviewCount} />

        <div className="mt-1 flex items-center gap-2">
          <span className="text-lg font-bold text-shore-navy">
            {formatPrice(product.price)}
          </span>
          {product.compareAtPrice && (
            <span className="text-sm text-shore-navy/40 line-through">
              {formatPrice(product.compareAtPrice)}
            </span>
          )}
        </div>

        <a
          href={affiliateLink(product)}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-shore-navy px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-shore-teal"
        >
          Shop Now
          <span aria-hidden>↗</span>
        </a>
      </div>
    </div>
  );
}
