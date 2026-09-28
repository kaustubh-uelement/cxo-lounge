import type { Metadata } from "next";
import { platforms, principles, site } from "@/data/site";
import { PageHero } from "@/components/PageHero";
import { ButtonLink, Section, SectionHeading } from "@/components/ui";
import { initials } from "@/lib/format";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "About",
  description: "CXO Lounge is a multi-platform ecosystem created for CIOs and technology leaders — built by a CIO who has sat on both sides of the table.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About CXO Lounge"
        title="A multi-platform ecosystem built for CIOs and technology leaders"
        lead="CXO Lounge brings together technology, people, ideas, enterprises and opportunities — so CIOs meet as peers, and partners meet them in a setting built on trust."
      />
      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-center">
          <div className="rounded-3xl bg-navy-900 p-8 text-brand-100 sm:p-10">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-600 text-2xl font-semibold text-white" aria-hidden>
              {initials(site.founder.name)}
            </div>
            <h2 className="mt-6 text-3xl font-semibold !text-white">{site.founder.name}</h2>
            <p className="mt-1 text-brand-300">{site.founder.title}</p>
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-brand-300">Experience includes</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {site.founder.experience.map((x) => <span key={x} className="rounded-full bg-white/10 px-3 py-1.5 text-sm text-white">{x}</span>)}
            </div>
          </div>
          <div>
            <p className="eyebrow">Our story</p>
            <h2 className="h2 mt-3">Built by a CIO who has sat on both sides of the table</h2>
            <div className="mt-6 space-y-4 text-[17px] leading-relaxed">
              <p>
                Kamal has led technology as a CIO and worked closely with vendors and partners — so he knows what CIOs value, and what
                partners need from an audience.
              </p>
              <p>
                He watched CIO engagement turn into a commodity: dozens of forums, the same cocktail dinners, and very little that lasted.
                CIO Lounge is his answer — a community where members invest to belong, partners sponsor without taking a cut, and the
                conversation is led by a CIO.
              </p>
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <SectionHeading eyebrow="Our mission" title="Meaningful connections among CIOs — and with the partners who serve them" />
        <div className="grid gap-5 md:grid-cols-2">
          {principles.map((p) => (
            <div key={p.title} className="card border-l-4 border-l-brand-600 p-6">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section tone="white">
        <SectionHeading eyebrow="One company, three platforms" title="What we run" />
        <div className="grid gap-6 md:grid-cols-3">
          {platforms.map((p) => (
            <div key={p.key} className="rounded-2xl bg-paper p-6">
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <p className="mt-1 text-sm italic text-brand-700">{p.kicker}</p>
              <p className="mt-3 text-[15px] leading-relaxed">{p.body}</p>
              <ButtonLink href={p.href} variant="ghost" arrow className="mt-4">Learn more</ButtonLink>
            </div>
          ))}
        </div>
      </Section>
      <CtaBand eyebrow="Innovate · Influence · Impact" title="Let's build it together." primary={{ href: "/membership/apply", label: "Apply to join" }} secondary={{ href: "/partners", label: "Partner with us" }} />
    </>
  );
}
