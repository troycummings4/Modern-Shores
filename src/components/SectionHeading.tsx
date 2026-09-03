import { ReactNode } from "react";
import { Link } from "react-router-dom";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  cta,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  cta?: { label: string; to: string };
}) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        {eyebrow && (
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-shore-teal">
            {eyebrow}
          </p>
        )}
        <h2 className="font-display text-3xl font-semibold text-shore-navy sm:text-4xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-2 max-w-xl text-shore-navy/60">{subtitle}</p>
        )}
      </div>
      {cta && (
        <Link
          to={cta.to}
          className="inline-flex w-fit items-center gap-1.5 whitespace-nowrap text-sm font-semibold text-shore-navy transition hover:text-shore-teal"
        >
          {cta.label}
          <span aria-hidden>→</span>
        </Link>
      )}
    </div>
  );
}
