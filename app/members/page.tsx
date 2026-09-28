import type { Metadata } from "next";
import { advisors, industries, memberCities, members, roles } from "@/data/members";
import { PageHero } from "@/components/PageHero";
import { SampleNotice, Section, SectionHeading, ButtonLink } from "@/components/ui";
import { MembersDirectory } from "@/components/MembersDirectory";
import { initials } from "@/lib/format";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Members",
  description: "The CIO Lounge member directory: CIOs, CTOs, CISOs and CDOs from India's leading enterprises.",
};

export default function MembersPage() {
  const byRole = roles.map((r) => ({ role: r, n: members.filter((m) => m.role === r).length }));
  return (
    <>
      <PageHero
        eyebrow="Member directory"
        title="The people in the room"
        lead="CIO Lounge is for the top layer of enterprise technology: CIOs, CTOs, CISOs and CDOs. Partners are our customers; members are our peers."
        aside={
          <dl className="grid grid-cols-2 gap-3">
            {byRole.map((r) => (
              <div key={r.role} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <dt className="text-sm text-brand-200">{r.role}s</dt>
                <dd className="mt-1 text-2xl font-semibold text-white">{r.n}</dd>
              </div>
            ))}
          </dl>
        }
      >
        <ButtonLink href="/membership/apply" variant="light" arrow>Apply to join</ButtonLink>
      </PageHero>

      <Section>
        <SampleNotice>
          These profiles are <strong>sample data</strong> with fictional people and companies, so the directory can be reviewed. Real
          members will be listed here with their consent. Full profiles and contact details will sit behind member login.
        </SampleNotice>
        <MembersDirectory members={members} industries={industries} cities={memberCities} roles={roles} />
      </Section>

      <Section tone="white">
        <SectionHeading
          eyebrow="Veteran CIO Advisory"
          title="Advisory council"
          lead="Retired CIOs who advise enterprises: paid by the client, never commissioned by vendors."
          action={<ButtonLink href="/advisory" variant="secondary" arrow>About the advisory</ButtonLink>}
        />
        <div className="grid gap-5 md:grid-cols-3">
          {advisors.map((a) => (
            <div key={a.id} className="card flex gap-4 p-6">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-navy-900 text-lg font-semibold text-white" aria-hidden>
                {initials(a.name)}
              </div>
              <div>
                <h3 className="font-semibold">{a.name}</h3>
                <p className="text-sm">{a.formerly}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {a.focus.map((f) => <span key={f} className="rounded-full bg-brand-50 px-2.5 py-1 text-xs text-brand-700">{f}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-ink-muted">Advisor profiles shown are sample data.</p>
      </Section>

      <CtaBand
        eyebrow="Membership is by application"
        title="Take your seat at the table."
        primary={{ href: "/membership/apply", label: "Apply to join" }}
        secondary={{ href: "/membership", label: "Compare plans" }}
      />
    </>
  );
}
