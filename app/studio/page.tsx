import type { Metadata } from "next";
import Link from "next/link";
import { Mic, PenLine, Video } from "lucide-react";
import { articles } from "@/data/studio";
import { PageHero } from "@/components/PageHero";
import { Badge, Section, SectionHeading } from "@/components/ui";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "CIO Studio",
  description: "Where CIOs speak. Technology connects. Perspectives, playbooks and conversations from the CIO Lounge community.",
};

export default function StudioPage() {
  const [lead, ...rest] = articles;
  return (
    <>
      <PageHero eyebrow="CIO Studio" title="Where CIOs speak. Technology connects." lead="Perspectives, playbooks and conversations from the people who run India's technology." />
      <Section>
        <Link href={`/studio/${lead.slug}`} className="group grid overflow-hidden rounded-3xl bg-navy-900 md:grid-cols-[1.2fr_1fr]">
          <div className="p-8 sm:p-10">
            <Badge tone="ball">{lead.category}</Badge>
            <h2 className="mt-5 text-3xl font-semibold leading-tight !text-white group-hover:text-brand-200 sm:text-4xl">{lead.title}</h2>
            <p className="mt-4 text-lg text-brand-100">{lead.dek}</p>
            <p className="mt-8 text-sm text-brand-300">{lead.author} · {lead.readMinutes} min read</p>
          </div>
          <div className="grid-pattern relative hidden items-center justify-center bg-brand-600 md:flex">
            <p className="px-10 text-center text-5xl font-semibold leading-tight text-white/90">“Engagement shouldn&apos;t end with dinner.”</p>
          </div>
        </Link>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {rest.map((a) => (
            <Link key={a.slug} href={`/studio/${a.slug}`} className="card group p-7 transition hover:shadow-lift">
              <Badge>{a.category}</Badge>
              <h2 className="mt-4 text-2xl font-semibold group-hover:text-brand-700">{a.title}</h2>
              <p className="mt-2 leading-relaxed">{a.dek}</p>
              <p className="mt-6 text-sm text-ink-muted">{a.author} · {a.readMinutes} min read</p>
            </Link>
          ))}
        </div>
      </Section>
      <Section tone="white">
        <SectionHeading eyebrow="Coming to CIO Studio" title="Formats in development" />
        <div className="grid gap-5 md:grid-cols-3">
          {[
            { icon: Mic, t: "CIO conversations", b: "Long-form conversations with members on the decisions that shaped their careers." },
            { icon: Video, t: "Roundtable notes", b: "Anonymised takeaways from curated roundtables, shared with the community." },
            { icon: PenLine, t: "Member columns", b: "Members write on what's working, what isn't, and what's next." },
          ].map((f) => (
            <div key={f.t} className="rounded-2xl bg-paper p-6">
              <f.icon className="h-6 w-6 text-brand-600" aria-hidden />
              <h3 className="mt-3 font-semibold">{f.t}</h3>
              <p className="mt-1.5 text-sm leading-relaxed">{f.b}</p>
            </div>
          ))}
        </div>
      </Section>
      <CtaBand eyebrow="Have something to say?" title="Write for CIO Studio" body="Members can pitch a column or a conversation." primary={{ href: "/contact", label: "Pitch an idea" }} />
    </>
  );
}
