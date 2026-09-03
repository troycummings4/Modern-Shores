import { useEffect, useState } from "react";

function getMidnight(): number {
  const now = new Date();
  const midnight = new Date(now);
  midnight.setHours(24, 0, 0, 0);
  return midnight.getTime();
}

function useCountdown() {
  const [remaining, setRemaining] = useState(() => getMidnight() - Date.now());

  useEffect(() => {
    const id = setInterval(() => {
      setRemaining(getMidnight() - Date.now());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const total = Math.max(remaining, 0);
  const hours = Math.floor(total / 3_600_000);
  const minutes = Math.floor((total % 3_600_000) / 60_000);
  const seconds = Math.floor((total % 60_000) / 1000);

  return { hours, minutes, seconds };
}

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

export default function FlashSaleBanner() {
  const { hours, minutes, seconds } = useCountdown();

  return (
    <div className="bg-shore-navy py-2.5 text-shore-shell">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-2 px-4 text-center text-xs font-semibold sm:text-sm">
        <span className="text-shore-aqua">⚡ Flash Sale:</span>
        <span>Up to 40% off today's picks</span>
        <span className="mx-1 hidden text-shore-navy/40 sm:inline">•</span>
        <span className="inline-flex items-center gap-1 font-mono tracking-wide">
          Ends in {pad(hours)}:{pad(minutes)}:{pad(seconds)}
        </span>
      </div>
    </div>
  );
}
