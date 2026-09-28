import type { Metadata } from "next";
import { GraduationCap, Briefcase, Scale, Users } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Section, SectionHeading } from "@/components/ui";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "CIO Foundation",
  description: "The giving-back dimension of CIO Lounge. 2% of CIO-vertical revenue supports the families of technology leaders in difficult times.",
};

export default function FoundationPage() {
  return (
    <>
      <PageHero
        eyebrow="CIO Foundation · Future social-impact initiative"
        title="Giving back to the community that builds us"
        lead="The CIO Foundation represents the giving-back and social-impact dimension of CIO Lounge."
        aside={
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
            <p className="text-7xl font-semibold text-white">2%</p>
            <p className="mt-2 text-brand-100">of CIO-vertical revenue goes to the Foundation</p>
          </div>
        }
      />
      <Section>
        <SectionHeading eyebrow="How it helps" title="Support when a family needs it most" lead="When a CIO, CTO or CISO faces an unfortunate situation, the Foundation supports their family under a predefined procedure." />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: GraduationCap, t: "Children's education", b: "Funding for children's education for one to two years." },
            { icon: Briefcase, t: "Help finding work", b: "Support for family members looking for employment, through the community's network." },
            { icon: Users, t: "A predefined procedure", b: "Support follows a published procedure agreed in advance, so families know what to expect." },
            { icon: Scale, t: "Independent decisions", b: "An external panel decides where support goes, with conflict-of-interest safeguards." },
          ].map((c) => (
            <div key={c.t} className="card p-6">
              <c.icon className="h-7 w-7 text-brand-600" aria-hidden />
              <h3 className="mt-4 font-semibold">{c.t}</h3>
              <p className="mt-1.5 text-sm leading-relaxed">{c.b}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-3xl text-sm text-ink-muted">
          The Foundation begins its charitable work as the platform&apos;s properties mature. Eligibility criteria and the support procedure will be
          published here.
        </p>
      </Section>
      <CtaBand eyebrow="Get involved" title="Want to support the Foundation?" primary={{ href: "/contact", label: "Contact us" }} />
    </>
  );
}
