export default function StarRating({
  rating,
  reviewCount,
  size = "sm",
}: {
  rating: number;
  reviewCount?: number;
  size?: "sm" | "md";
}) {
  const full = Math.round(rating);
  const starSize = size === "sm" ? "text-xs" : "text-base";
  return (
    <div className={`flex items-center gap-1.5 ${starSize}`}>
      <span className="tracking-tight text-amber-400" aria-hidden>
        {"★".repeat(full)}
        <span className="text-shore-navy/20">{"★".repeat(5 - full)}</span>
      </span>
      <span className="text-shore-navy/50">
        {rating.toFixed(1)}
        {reviewCount !== undefined && ` (${reviewCount.toLocaleString()})`}
      </span>
    </div>
  );
}
