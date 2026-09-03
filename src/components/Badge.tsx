const STYLES: Record<string, string> = {
  New: "bg-shore-teal text-white",
  Trending: "bg-shore-coral text-white",
  "Staff Pick": "bg-shore-navy text-shore-sand",
  "Almost Gone": "bg-amber-500 text-white",
};

export default function Badge({ label }: { label: string }) {
  const style = STYLES[label] ?? "bg-shore-navy text-white";
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide shadow-sm ${style}`}
    >
      {label}
    </span>
  );
}
