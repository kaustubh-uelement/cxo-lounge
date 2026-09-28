import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ButtonLink, Section, SectionHeading } from "@/components/ui";
import { EventCard } from "@/components/EventCard";
import { events } from "@/data/events";

export const metadata: Metadata = {
  title: "Learning programmes",
  description: "Residential programmes for senior technology leaders, designed with top institutions and subsidised by partners.",
};

export default function LearningPage() {
  const programmes = events.filter((e) => e.type === "learning");
  return (
    <>
      <PageHero
        eyebrow="Learning opportunities"
        title="Programmes with top institutions"
        lead="Short residential programmes designed with faculty for senior technology leaders. Members pay a nominal fee; a partner sponsors the rest."
      >
        <ButtonLink href="/membership/apply" variant="light" arrow>Join to take part</ButtonLink>
        <ButtonLink href="/partners#enquire" variant="outline-light">Sponsor a programme</ButtonLink>
      </PageHero>
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-start">
          <div>
            <SectionHeading eyebrow="The model" title="How a programme works" />
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ["40", "leaders per cohort — CIOs, CISOs and CTOs"],
                ["₹10,000", "member registration fee"],
                ["₹1.5L", "programme value per participant, subsidised by the sponsor"],
              ].map(([v, l]) => (
                <div key={l} className="rounded-2xl border-t-4 border-brand-600 bg-white p-5 shadow-card">
                  <p className="text-3xl font-semibold text-brand-600">{v}</p>
                  <p className="mt-2 text-sm">{l}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 leading-relaxed">
              The programme partner receives stage time with the cohort and a 30-minute closing session. Even sponsored learning carries a
              registration fee — which keeps attendance committed.
            </p>
            <p className="mt-3 text-sm italic text-ink-muted">Illustrative model. Institution partnerships to be confirmed.</p>
          </div>
          <div className="grid gap-5">
            {programmes.map((e) => <EventCard key={e.slug} event={e} />)}
          </div>
        </div>
      </Section>
    </>
  );
}
