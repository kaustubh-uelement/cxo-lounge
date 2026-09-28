import type { Metadata } from "next";
import { Handshake, Lightbulb, Scale, Wrench } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ButtonLink, Section, SectionHeading } from "@/components/ui";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Veteran CIO Advisory",
  description: "Independent guidance from retired CIOs — for enterprises, OEMs and system integrators. Paid by the client, never commissioned by vendors.",
};

const pillars = [
  { icon: Lightbulb, title: "Expert guidance for enterprises", body: "Veteran CIOs offer insights tailored to end-user organisations, aligning technology strategy with business outcomes." },
  { icon: Wrench, title: "Support for OEMs and SIs", body: "A large pool of experts helps OEMs and SIs innovate and deliver the right technology in a fast-changing market." },
  { icon: Scale, title: "Independent by design", body: "Advisors are paid by the client they serve. They never take vendor commissions — so their advice stays on your side of the table." },
  { icon: Handshake, title: "Priced for the mid-market", body: "Senior counsel from people who have run the function, without the fees of large consultancies that many enterprises can't justify." },
];

export default function AdvisoryPage() {
  return (
    <>
      <PageHero
        eyebrow="Veteran CIO Advisory"
        title="Real experience, real results"
        lead="Tap into the wisdom of industry veterans who know the industry inside out — an extended arm of CIO Lounge."
      >
        <ButtonLink href="/contact" variant="light" arrow>Find an advisor</ButtonLink>
        <ButtonLink href="/membership/apply?plan=veteran" variant="outline-light">Apply to advise</ButtonLink>
      </PageHero>
      <Section>
        <div className="grid gap-5 md:grid-cols-2">
          {pillars.map((p) => (
            <div key={p.title} className="card p-7">
              <p.icon className="h-7 w-7 text-brand-600" aria-hidden />
              <h2 className="mt-4 text-xl font-semibold">{p.title}</h2>
              <p className="mt-2 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section tone="white">
        <SectionHeading eyebrow="How it works" title="From brief to boardroom" />
        <ol className="grid gap-4 md:grid-cols-3">
          {[
            ["Brief", "Tell us the challenge — a transformation, a vendor decision, a security programme."],
            ["Match", "We introduce a veteran CIO from your industry who has solved it before."],
            ["Advise", "They join your advisory panel on agreed terms, paid by you — speaking your language, not a vendor's."],
          ].map(([t, b], i) => (
            <li key={t} className="rounded-2xl bg-paper p-6">
              <span className="text-3xl font-semibold text-brand-600">0{i + 1}</span>
              <h3 className="mt-3 text-lg font-semibold">{t}</h3>
              <p className="mt-1.5 text-[15px] leading-relaxed">{b}</p>
            </li>
          ))}
        </ol>
      </Section>
      <CtaBand
        eyebrow="Retired from the CIO chair?"
        title="Your experience is still in demand."
        body="Join the Veteran Advisor panel and mentor the next generation of technology leaders."
        primary={{ href: "/membership/apply?plan=veteran", label: "Apply to advise" }}
      />
    </>
  );
}
