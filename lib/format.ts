export function formatDate(iso: string, opts: Intl.DateTimeFormatOptions = { day: "numeric", month: "short", year: "numeric" }) {
  return new Date(iso + "T00:00:00+05:30").toLocaleDateString("en-IN", { ...opts, timeZone: "Asia/Kolkata" });
}

export function dateParts(iso: string | null) {
  if (!iso) return null;
  const d = new Date(iso + "T00:00:00+05:30");
  return {
    day: d.toLocaleDateString("en-IN", { day: "2-digit", timeZone: "Asia/Kolkata" }),
    month: d.toLocaleDateString("en-IN", { month: "short", timeZone: "Asia/Kolkata" }).toUpperCase(),
    year: d.toLocaleDateString("en-IN", { year: "numeric", timeZone: "Asia/Kolkata" }),
  };
}

export function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]!.toUpperCase())
    .join("");
}
