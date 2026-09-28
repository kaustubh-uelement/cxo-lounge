import type { Metadata } from "next";
import { events, sortEvents } from "@/data/events";
import { PageHero } from "@/components/PageHero";
import { Section } from "@/components/ui";
import { EventsExplorer } from "@/components/EventsExplorer";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Events",
  description: "Every event CXO Lounge is hosting — the CIO Pickleball League India Tour, curated roundtables, learning programmes and member evenings.",
};

export default function EventsPage() {
  const list = sortEvents(events);
  const open = list.filter((e) => e.status === "registration-open").length;
  return (
    <>
      <PageHero
        eyebrow="Events"
        title="Every event we're hosting"
        lead="The CIO Pickleball League India Tour, curated roundtables, learning programmes and member evenings — built for decision-makers, not headcount."
        aside={
          <dl className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <dt className="text-sm text-brand-200">Events listed</dt>
              <dd className="mt-1 text-3xl font-semibold text-white">{list.length}</dd>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <dt className="text-sm text-brand-200">Registration open</dt>
              <dd className="mt-1 text-3xl font-semibold text-white">{open}</dd>
            </div>
          </dl>
        }
      />
      <Section>
        <EventsExplorer events={list} />
      </Section>
      <CtaBand
        eyebrow="Host with us"
        title="Want your own curated roundtable?"
        body="We match your product to 15 targeted leaders, brief them in advance and put a CIO in the chair."
        primary={{ href: "/partners", label: "Partner with us" }}
      />
    </>
  );
}
