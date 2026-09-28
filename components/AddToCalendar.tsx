"use client";

import { CalendarPlus } from "lucide-react";
import type { CxoEvent } from "@/data/events";
import { buildIcs } from "@/lib/ics";

export function AddToCalendar({ event }: { event: CxoEvent }) {
  if (!event.startDate) return null;
  const download = () => {
    const ics = buildIcs(event, window.location.origin);
    if (!ics) return;
    const url = URL.createObjectURL(new Blob([ics], { type: "text/calendar;charset=utf-8" }));
    const a = document.createElement("a");
    a.href = url;
    a.download = `${event.slug}.ics`;
    a.click();
    URL.revokeObjectURL(url);
  };
  return (
    <button
      type="button"
      onClick={download}
      className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-5 py-3 text-sm font-medium text-white transition hover:border-white/60 hover:bg-white/10 sm:px-6"
    >
      <CalendarPlus className="h-4 w-4" aria-hidden />
      Add to calendar
    </button>
  );
}
