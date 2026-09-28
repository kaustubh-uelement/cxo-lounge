import type { Metadata } from "next";
import { Building2, Cpu, Landmark } from "lucide-react";
import { beyondTheCourt, roundtableSteps } from "@/data/sponsorship";
import { PageHero } from "@/components/PageHero";
import { ButtonLink, Section, SectionHeading } from "@/components/ui";
import { SponsorTierGrid } from "@/components/Offerings";
import { PartnerForm } from "@/components/forms/PartnerForm";

export const metadata: Metadata = {
  title: "Partner with us",
  description: "Sponsorship, curated roundtables and bespoke events for OEMs, system integrators and institutions who want to reach CIOs the right way.",
};

const audiences = [
  { icon: Cpu, title: "OEMs", body: "Go beyond one-off signature events. Build long-term value with a community that meets all year." },
  { icon: Building2, title: "System integrators", body: "Swap ad-hoc sponsorships for curated rooms of the leaders you actually want to meet." },
  { icon: Landmark, title: "Institutions", body: "Design programmes for senior technology leaders, subsidised by partners and filled by members." },
];

export default function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Partner with us"
        title="Reach decision-makers. Not headcount."
        lead="Sponsorship-led and commission-free. We never take a cut of the deals you close with our members: you're our customer, they're our peers."
      >
        <ButtonLink href="#enquire" variant="light" arrow>Enquire now</ButtonLink>
        <ButtonLink href="#tiers" variant="outline-light">Sponsorship tiers</ButtonLink>
      </PageHero>

      <Section tone="white">
        <div className="grid gap-5 md:grid-cols-3">
          {audiences.map((a) => (
            <div key={a.title} className="rounded-2xl border border-line bg-paper p-6">
              <a.icon className="h-7 w-7 text-brand-600" aria-hidden />
              <h2 className="mt-4 text-lg font-semibold">{a.title}</h2>
              <p className="mt-2 text-[15px] leading-relaxed">{a.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Professional engagements"
          title="Curated roundtables that turn into proofs of concept"
          lead="It stops being your product and becomes the CIOs' product. That sense of belonging is what converts, and one successful POC builds credibility across the whole community."
        />
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {roundtableSteps.map((s, i) => (
            <li key={s.n} className={i === 4 ? "rounded-2xl bg-brand-600 p-6 text-white" : "card p-6"}>
              <span className={i === 4 ? "text-3xl font-semibold text-brand-100" : "text-3xl font-semibold text-brand-600"}>{s.n}</span>
              <h3 className={i === 4 ? "mt-3 text-lg font-semibold !text-white" : "mt-3 text-lg font-semibold"}>{s.title}</h3>
              <p className={i === 4 ? "mt-1.5 text-sm leading-relaxed text-brand-50" : "mt-1.5 text-sm leading-relaxed"}>{s.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section id="tiers" tone="tint">
        <SectionHeading
          eyebrow="CIO Pickleball League · India Tour"
          title="Sponsorship tiers"
          lead="Every category includes branding, networking and engagement. Sponsors play alongside CIOs."
        />
        <SponsorTierGrid />
        <p className="mt-5 text-sm text-ink-muted">CXO invites: player fees apply. Grand Finale sponsorship is priced separately.</p>
      </Section>

      <Section tone="navy">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <p className="eyebrow-light">Beyond the court</p>
            <h2 className="h2 mt-3 !text-white">Bespoke events at actual cost + 20%</h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-brand-100">
              Extend your roundtable into a breakfast, luncheon or cocktail dinner at ITC and Taj properties, priced transparently, with the
              audience curated by CIO Lounge.
            </p>
          </div>
          <div className="grid gap-4">
            {beyondTheCourt.map((b) => (
              <div key={b.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h3 className="font-semibold !text-white">{b.title}</h3>
                <p className="mt-1 text-sm text-brand-200">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="enquire">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr]">
          <div>
            <p className="eyebrow">Enquire</p>
            <h2 className="h2 mt-3">Tell us what you want to achieve</h2>
            <p className="lead mt-4">We&apos;ll come back with availability for your tiers and cities, and the audience profile you can expect.</p>
          </div>
          <PartnerForm />
        </div>
      </Section>
    </>
  );
}
