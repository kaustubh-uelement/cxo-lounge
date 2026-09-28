import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, Check, IndianRupee, MapPin, Users } from "lucide-react";
import { eventTypeLabels, events, getEvent, sortEvents, statusLabels } from "@/data/events";
import { site } from "@/data/site";
import { Badge, ButtonLink, Section } from "@/components/ui";
import { AddToCalendar } from "@/components/AddToCalendar";
import { Countdown } from "@/components/Countdown";
import { EventCard } from "@/components/EventCard";
import { EventTypeIcon } from "@/components/EventTypeIcon";
import { PaddleArt } from "@/components/PaddleArt";

export function generateStaticParams() {
  return events.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const e = getEvent(slug);
  if (!e) return {};
  return { title: e.title, description: e.summary };
}

export default async function EventPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const e = getEvent(slug);
  if (!e) notFound();

  const isLeague = ["league", "training", "finale"].includes(e.type);
  const related = sortEvents(events.filter((x) => x.slug !== e.slug && (x.type === e.type || x.city === e.city))).slice(0, 3);
  const registerHref = isLeague ? "/membership/apply?interest=league" : "/membership/apply";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: e.title,
    description: e.summary,
    ...(e.startDate ? { startDate: e.startDate } : {}),
    eventStatus: "https://schema.org/EventScheduled",
    location: { "@type": "Place", name: e.venue, address: e.city },
    organizer: { "@type": "Organization", name: site.company, url: site.url },
  };

  return (
    <>
      <section className="relative overflow-hidden bg-navy-900">
        <div className="grid-pattern absolute inset-0" aria-hidden />
        {isLeague && <PaddleArt className="absolute -right-16 top-10 hidden h-80 w-80 opacity-80 lg:block" />}
        <div className="container relative py-12 sm:py-16">
          <Link href="/events" className="inline-flex items-center gap-2 text-sm text-brand-200 hover:text-white">
            <ArrowLeft className="h-4 w-4" aria-hidden /> All events
          </Link>
          <div className="mt-8 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 text-sm font-medium text-brand-300">
                <EventTypeIcon type={e.type} className="h-4 w-4" /> {eventTypeLabels[e.type]}
              </span>
              <Badge tone={e.status === "registration-open" ? "ball" : "muted"}>{statusLabels[e.status]}</Badge>
              {e.sample && <Badge tone="amber">Sample listing</Badge>}
            </div>
            <h1 className="display mt-4 !text-white">{e.title}</h1>
            <p className="mt-5 text-lg leading-relaxed text-brand-100">{e.summary}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={registerHref} variant="light" arrow>
                {e.status === "registration-open" ? "Register now" : "Register interest"}
              </ButtonLink>
              <AddToCalendar event={e} />
            </div>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_380px]">
          <div className="space-y-12">
            <div className="space-y-4 text-[17px] leading-relaxed">
              {e.description.map((p) => <p key={p}>{p}</p>)}
            </div>

            <div>
              <h2 className="h3 mb-5">Highlights</h2>
              <ul className="grid gap-3 sm:grid-cols-2">
                {e.highlights.map((h) => (
                  <li key={h} className="flex gap-3 rounded-xl border border-line bg-white p-4 text-[15px]">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" aria-hidden />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            {e.agenda && (
              <div>
                <h2 className="h3 mb-1">Run of show</h2>
                {e.agendaNote && <p className="mb-5 text-sm text-ink-muted">{e.agendaNote}</p>}
                <ol className="relative space-y-0 border-l-2 border-brand-100 pl-6">
                  {e.agenda.map((a) => (
                    <li key={a.time + a.item} className="relative pb-6 last:pb-0">
                      <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-white bg-brand-600" aria-hidden />
                      <p className="text-sm font-semibold text-brand-700">{a.time}</p>
                      <p className="mt-0.5 text-[15px] text-ink-strong">{a.item}</p>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {e.partnerNote && (
              <div className="rounded-2xl bg-brand-50 p-6">
                <h2 className="text-lg font-semibold">For partners</h2>
                <p className="mt-2 text-[15px]">{e.partnerNote}</p>
                <Link href="/partners#enquire" className="mt-4 inline-block text-sm font-medium text-brand-600 hover:text-brand-700">
                  Enquire about sponsorship →
                </Link>
              </div>
            )}
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="card p-6">
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-600">Event details</h2>
              <dl className="mt-5 space-y-4 text-[15px]">
                <div className="flex gap-3"><CalendarDays className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" aria-hidden /><div><dt className="text-xs text-ink-muted">When</dt><dd className="font-medium text-ink-strong">{e.dateLabel}</dd></div></div>
                <div className="flex gap-3"><MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" aria-hidden /><div><dt className="text-xs text-ink-muted">Where</dt><dd className="font-medium text-ink-strong">{e.venue}</dd></div></div>
                <div className="flex gap-3"><Users className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" aria-hidden /><div><dt className="text-xs text-ink-muted">Who</dt><dd className="font-medium text-ink-strong">{e.audience}</dd>{e.capacity && <dd className="text-sm">{e.capacity}</dd>}</div></div>
                {e.fee && <div className="flex gap-3"><IndianRupee className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" aria-hidden /><div><dt className="text-xs text-ink-muted">Fee</dt><dd className="font-medium text-ink-strong">{e.fee}</dd></div></div>}
              </dl>
              {e.startDate && (
                <div className="mt-6 border-t border-line pt-6">
                  <p className="mb-3 text-xs text-ink-muted">Countdown</p>
                  <Countdown date={e.startDate} tone="dark" />
                </div>
              )}
              <ButtonLink href={registerHref} className="mt-6 w-full" arrow>
                {e.status === "registration-open" ? "Register now" : "Register interest"}
              </ButtonLink>
              <p className="mt-3 text-center text-xs text-ink-muted">Open to CIOs, CTOs, CISOs and CDOs. Nothing on CIO Lounge is free.</p>
            </div>
          </aside>
        </div>
      </Section>

      {related.length > 0 && (
        <Section tone="white">
          <h2 className="h2 mb-8">You may also like</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => <EventCard key={r.slug} event={r} />)}
          </div>
        </Section>
      )}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
