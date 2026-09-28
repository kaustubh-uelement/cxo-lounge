import Link from "next/link";
import { ArrowUpRight, MapPin, Users } from "lucide-react";
import { clsx } from "clsx";
import { eventTypeLabels, statusLabels, type CxoEvent } from "@/data/events";
import { dateParts } from "@/lib/format";
import { Badge } from "./ui";
import { EventTypeIcon } from "./EventTypeIcon";

export function EventCard({ event, className }: { event: CxoEvent; className?: string }) {
  const d = dateParts(event.startDate);
  const isLeague = event.type === "league" || event.type === "finale" || event.type === "training";
  return (
    <Link
      href={`/events/${event.slug}`}
      className={clsx(
        "card group relative flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-lift",
        className,
      )}
    >
      <div className={clsx("relative flex items-start justify-between gap-4 p-5", isLeague ? "bg-navy-900" : "bg-brand-50")}>
        <div className="flex items-center gap-3">
          <div
            className={clsx(
              "flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-xl text-center",
              isLeague ? "bg-white/10 text-white" : "bg-white text-navy-900",
            )}
          >
            {d ? (
              <>
                <span className="text-[11px] font-semibold tracking-widest opacity-80">{d.month}</span>
                <span className="text-2xl font-semibold leading-none">{d.day}</span>
              </>
            ) : (
              <span className="text-[11px] font-semibold leading-tight tracking-wider opacity-80">DATE<br />TBA</span>
            )}
          </div>
          <div className={clsx("flex items-center gap-2 text-xs font-medium", isLeague ? "text-brand-200" : "text-brand-700")}>
            <EventTypeIcon type={event.type} className="h-4 w-4" />
            {eventTypeLabels[event.type]}
          </div>
        </div>
        <ArrowUpRight
          className={clsx("h-5 w-5 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5", isLeague ? "text-brand-200" : "text-brand-600")}
          aria-hidden
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex flex-wrap gap-2">
          <Badge tone={event.status === "registration-open" ? "green" : event.status === "tba" ? "muted" : "brand"}>
            {statusLabels[event.status]}
          </Badge>
          {event.sample && <Badge tone="amber">Sample listing</Badge>}
        </div>
        <h3 className="h3">{event.title}</h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed">{event.summary}</p>
        <div className="mt-auto space-y-1.5 pt-5 text-sm text-ink-muted">
          <p className="flex items-center gap-2"><MapPin className="h-4 w-4 shrink-0 text-brand-600" aria-hidden />{event.city}</p>
          <p className="flex items-center gap-2"><Users className="h-4 w-4 shrink-0 text-brand-600" aria-hidden />{event.capacity ?? event.audience}</p>
        </div>
        <p className="mt-4 border-t border-line pt-4 text-xs font-medium text-ink-strong">{event.dateLabel}</p>
      </div>
    </Link>
  );
}
