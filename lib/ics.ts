import type { CxoEvent } from "@/data/events";

// Builds an all-day iCalendar entry for events that have a fixed date.
export function buildIcs(e: CxoEvent, siteUrl: string) {
  if (!e.startDate) return null;
  const start = e.startDate.replaceAll("-", "");
  const endIso = e.endDate ?? e.startDate;
  const end = new Date(endIso + "T00:00:00Z");
  end.setUTCDate(end.getUTCDate() + 1);
  const endStr = end.toISOString().slice(0, 10).replaceAll("-", "");
  const esc = (s: string) => s.replace(/([,;\\])/g, "\\$1").replace(/\n/g, "\\n");
  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//CXO Lounge//Events//EN",
    "BEGIN:VEVENT",
    `UID:${e.slug}@ciolounge`,
    `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, "").split(".")[0]}Z`,
    `DTSTART;VALUE=DATE:${start}`,
    `DTEND;VALUE=DATE:${endStr}`,
    `SUMMARY:${esc(e.title)}`,
    `LOCATION:${esc(e.venue)}`,
    `DESCRIPTION:${esc(e.summary + "\n" + siteUrl + "/events/" + e.slug)}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}
