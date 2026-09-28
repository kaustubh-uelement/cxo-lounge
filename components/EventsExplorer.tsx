"use client";

import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { clsx } from "clsx";
import { eventTypeLabels, type CxoEvent, type EventType } from "@/data/events";
import { EventCard } from "./EventCard";

const typeOrder: EventType[] = ["league", "training", "finale", "roundtable", "learning", "networking"];

export function EventsExplorer({ events }: { events: CxoEvent[] }) {
  const [q, setQ] = useState("");
  const [type, setType] = useState<EventType | "all">("all");
  const [city, setCity] = useState("all");
  const [openOnly, setOpenOnly] = useState(false);

  const cities = useMemo(() => Array.from(new Set(events.map((e) => e.city))).sort(), [events]);
  const counts = useMemo(() => {
    const c: Record<string, number> = {};
    events.forEach((e) => (c[e.type] = (c[e.type] ?? 0) + 1));
    return c;
  }, [events]);

  const filtered = events.filter((e) => {
    const text = `${e.title} ${e.city} ${e.summary} ${e.audience}`.toLowerCase();
    return (
      (type === "all" || e.type === type) &&
      (city === "all" || e.city === city) &&
      (!openOnly || e.status === "registration-open") &&
      (!q || text.includes(q.toLowerCase()))
    );
  });

  const reset = () => {
    setQ("");
    setType("all");
    setCity("all");
    setOpenOnly(false);
  };

  return (
    <div>
      <div className="card mb-8 p-4 sm:p-5">
        <div className="grid gap-3 md:grid-cols-[1fr_220px_auto]">
          <label className="relative">
            <span className="sr-only">Search events</span>
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted" aria-hidden />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search events, cities, audiences" className="field pl-11" />
          </label>
          <label>
            <span className="sr-only">City</span>
            <select value={city} onChange={(e) => setCity(e.target.value)} className="field appearance-none">
              <option value="all">All cities</option>
              {cities.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </label>
          <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-line bg-white px-4 py-3 text-sm text-ink-strong">
            <input type="checkbox" checked={openOnly} onChange={(e) => setOpenOnly(e.target.checked)} className="h-4 w-4 accent-brand-600" />
            Registration open
          </label>
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-2" role="group" aria-label="Event type">
          <SlidersHorizontal className="mr-1 h-4 w-4 text-ink-muted" aria-hidden />
          {(["all", ...typeOrder] as const).map((t) =>
            t !== "all" && !counts[t] ? null : (
              <button
                key={t}
                type="button"
                onClick={() => setType(t)}
                aria-pressed={type === t}
                className={clsx(
                  "rounded-full border px-3.5 py-1.5 text-sm transition",
                  type === t ? "border-navy-900 bg-navy-900 text-white" : "border-line bg-white text-ink hover:border-brand-300",
                )}
              >
                {t === "all" ? "All events" : eventTypeLabels[t]}
                <span className={clsx("ml-1.5 text-xs", type === t ? "text-brand-200" : "text-ink-muted")}>
                  {t === "all" ? events.length : counts[t]}
                </span>
              </button>
            ),
          )}
        </div>
      </div>

      <p className="mb-5 text-sm text-ink-muted" aria-live="polite">
        Showing {filtered.length} of {events.length} events
      </p>

      {filtered.length ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((e) => (
            <EventCard key={e.slug} event={e} />
          ))}
        </div>
      ) : (
        <div className="card flex flex-col items-center gap-3 p-12 text-center">
          <p className="h3">No events match those filters</p>
          <button onClick={reset} className="text-sm font-medium text-brand-600 hover:text-brand-700">Clear filters</button>
        </div>
      )}
    </div>
  );
}
