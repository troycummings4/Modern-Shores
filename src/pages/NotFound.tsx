import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-4 py-28 text-center sm:px-6 lg:px-8">
      <span className="text-6xl">🌊</span>
      <h1 className="mt-6 font-display text-4xl font-semibold text-shore-navy">
        Lost at sea
      </h1>
      <p className="mt-3 text-shore-navy/60">
        We couldn't find that page. It might have drifted, or maybe it never
        existed at all.
      </p>
      <Link
        to="/"
        className="mt-8 rounded-full bg-shore-navy px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-shore-teal"
      >
        Back to shore
      </Link>
    </div>
  );
}
