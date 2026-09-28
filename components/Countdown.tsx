"use client";

import { useEffect, useState } from "react";

function diff(target: number) {
  const ms = Math.max(0, target - Date.now());
  return {
    days: Math.floor(ms / 86_400_000),
    hours: Math.floor((ms / 3_600_000) % 24),
    minutes: Math.floor((ms / 60_000) % 60),
  };
}

export function Countdown({ date, tone = "light" }: { date: string; tone?: "light" | "dark" }) {
  const target = new Date(date + "T08:00:00+05:30").getTime();
  const [t, setT] = useState<ReturnType<typeof diff> | null>(null);

  useEffect(() => {
    setT(diff(target));
    const id = setInterval(() => setT(diff(target)), 30_000);
    return () => clearInterval(id);
  }, [target]);

  const cells = [
    { label: "Days", value: t?.days },
    { label: "Hours", value: t?.hours },
    { label: "Minutes", value: t?.minutes },
  ];
  return (
    <div className="flex gap-2.5" role="timer" aria-label="Time until the event">
      {cells.map((c) => (
        <div
          key={c.label}
          className={
            tone === "light"
              ? "min-w-[76px] rounded-xl border border-white/15 bg-white/10 px-3 py-2.5 text-center"
              : "min-w-[76px] rounded-xl border border-line bg-white px-3 py-2.5 text-center"
          }
        >
          <div className={tone === "light" ? "text-2xl font-semibold tabular-nums text-white" : "text-2xl font-semibold tabular-nums text-navy-900"}>
            {c.value === undefined ? "–" : String(c.value).padStart(2, "0")}
          </div>
          <div className={tone === "light" ? "text-[11px] uppercase tracking-wider text-brand-200" : "text-[11px] uppercase tracking-wider text-ink-muted"}>
            {c.label}
          </div>
        </div>
      ))}
    </div>
  );
}
