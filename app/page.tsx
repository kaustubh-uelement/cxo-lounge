import Link from "next/link";
import { ArrowRight, ArrowUpRight, CalendarDays, HeartHandshake, MapPin } from "lucide-react";
import { events, featuredEvent, sortEvents } from "@/data/events";
import { headlineStats, marketProblem, platforms, principles } from "@/data/site";
import { members } from "@/data/members";
import { articles } from "@/data/studio";
import { roundtableSteps } from "@/data/sponsorship";
import { Badge, ButtonLink, Section, SectionHeading } from "@/components/ui";
import { EventCard } from "@/components/EventCard";
import { Countdown } from "@/components/Countdown";
import { PaddleArt } from "@/components/PaddleArt";
import { BenefitsGrid, SponsorTierGrid } from "@/components/Offerings";
import { MemberCard } from "@/components/MembersDirectory";
import { CtaBand } from "@/components/CtaBand";

export default function HomePage() {
  const upcoming = sortEvents(events.filter((e) => !e.sample && e.slug !== featuredEvent.slug)).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-900">
        <div className="grid-pattern absolute inset-0" aria-hidden />
        <div className="absolute -left-40 top-1/3 h-[480px] w-[480px] rounded-full bg-brand-600/20 blur-3xl" aria-hidden />
        <div className="container relative grid gap-12 py-16 sm:py-24 lg:grid-cols-[1.25fr_1fr] lg:items-center lg:py-28">
          <div>
            <p className="eyebrow-light">CXO Lounge presents · CIO Lounge</p>
            <h1 className="display mt-5 !text-white">
              Where India&apos;s technology leaders meet as <span className="text-brand-300">peers</span>, not prospects.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-brand-100 sm:text-lg">
              A premium platform for CIOs, CTOs and CISOs: curated roundtables, learning with top institutions, veteran CIO advisory and
              India&apos;s premier pickleball league for IT leaders.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href="/membership" variant="light" arrow>Explore membership</ButtonLink>
              <ButtonLink href="/partners" variant="outline-light">Partner with us</ButtonLink>
            </div>
          </div>

          <Link
            href={`/events/${featuredEvent.slug}`}
            className="group relative block overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm transition hover:border-white/25 sm:p-8"
          >
            <PaddleArt className="absolute -right-10 -top-8 hidden h-56 w-56 opacity-90 transition-transform duration-700 group-hover:rotate-6 sm:block" />
            <Badge tone="ball">Registration open</Badge>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-brand-300">Flagship · India Tour opener</p>
            <h2 className="mt-2 max-w-[15ch] text-2xl font-semibold leading-tight !text-white sm:text-3xl">{featuredEvent.title}</h2>
            <div className="mt-4 space-y-1.5 text-sm text-brand-100">
              <p className="flex items-center gap-2"><CalendarDays className="h-4 w-4 text-brand-300" aria-hidden />{featuredEvent.dateLabel}</p>
              <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-brand-300" aria-hidden />{featuredEvent.capacity}</p>
            </div>
            {featuredEvent.startDate && (
              <div className="mt-6">
                <Countdown date={featuredEvent.startDate} />
              </div>
            )}
            <p className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white">
              View the league <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden />
            </p>
          </Link>
        </div>

        <div className="relative border-t border-white/10">
          <dl className="container grid grid-cols-2 gap-4 py-4 sm:gap-6 sm:py-0 lg:grid-cols-4">
            {headlineStats.map((s) => (
              <div key={s.label} className="py-4 sm:py-7 lg:py-8">
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-2xl font-semibold tracking-tight text-white sm:text-4xl">{s.value}</dd>
                <dd className="mt-1 text-xs sm:text-sm text-brand-200">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Events */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="What's on"
          title="Events we're hosting"
          lead="From the India Tour to curated roundtables, every event is built for decision-makers, not headcount."
          action={<ButtonLink href="/events" variant="secondary" arrow>All events</ButtonLink>}
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {upcoming.map((e) => <EventCard key={e.slug} event={e} />)}
        </div>
      </Section>

      {/* Problem */}
      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <div>
            <p className="eyebrow">Why CIO Lounge</p>
            <h2 className="h2 mt-3">CIO engagement has become a commodity.</h2>
            <p className="lead mt-4">
              Cocktails, dinner, and the engagement ends. Partners see little lasting impact, and CIOs&apos; presence is commoditised by
              agencies. We built CIO Lounge to change that.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {marketProblem.map((m) => (
              <div key={m.value} className="rounded-2xl border-t-4 border-brand-600 bg-paper p-5 sm:p-6">
                <p className="text-3xl font-semibold tracking-tight text-brand-600 sm:text-4xl lg:text-5xl">{m.value}</p>
                <p className="mt-3 text-sm leading-relaxed">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Platforms */}
      <Section tone="paper">
        <SectionHeading eyebrow="One company, three platforms" title="The CXO Lounge ecosystem" />
        <div className="grid gap-6 md:grid-cols-3">
          {platforms.map((p, i) => (
            <Link key={p.key} href={p.href} className="card group flex flex-col p-7 transition hover:-translate-y-0.5 hover:shadow-lift">
              <span className="text-sm font-semibold text-brand-600">0{i + 1}</span>
              <h3 className="mt-4 text-2xl font-semibold">{p.name}</h3>
              <p className="mt-1 text-sm italic text-brand-700">{p.kicker}</p>
              <p className="mt-4 text-[15px] leading-relaxed">{p.body}</p>
              <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-medium text-brand-600">
                Learn more <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* Principles + roundtable */}
      <Section tone="navy">
        <SectionHeading
          tone="light"
          eyebrow="Our model"
          title="How CXO Lounge is different"
          lead="No conflict of interest: partners are our customers, CIOs are our peers."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {principles.map((p) => (
            <div key={p.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-lg font-semibold !text-white">{p.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-brand-200">{p.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-14">
          <p className="eyebrow-light">The CIO Lounge roundtable</p>
          <ol className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {roundtableSteps.map((s, i) => (
              <li key={s.n} className={i === 4 ? "rounded-2xl bg-brand-600 p-5" : "rounded-2xl border border-white/10 p-5"}>
                <span className="text-2xl font-semibold text-brand-300">{s.n}</span>
                <h3 className="mt-2 font-semibold !text-white">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-brand-100">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* League */}
      <section className="relative overflow-hidden bg-brand-600 py-16 sm:py-24">
        <div className="grid-pattern absolute inset-0 opacity-60" aria-hidden />
        <div className="container relative grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-100">Flagship property</p>
            <h2 className="display mt-4 !text-white">CIO Pickleball League · India Tour</h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-brand-50">
              India&apos;s first multi-city pickleball championship exclusively for technology leaders, designed to become the IPL of
              corporate pickleball.
            </p>
            <dl className="mt-8 grid max-w-lg grid-cols-3 gap-3 sm:gap-6">
              {[["8 × 8", "teams × players"], ["1 day", "per city league"], ["₹25–30K", "kit per player"]].map(([v, l]) => (
                <div key={l}>
                  <dt className="sr-only">{l}</dt>
                  <dd className="text-xl font-semibold text-white sm:text-3xl">{v}</dd>
                  <dd className="text-xs sm:text-sm text-brand-100">{l}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href="/pickleball-league" variant="light" arrow>Discover the league</ButtonLink>
              <ButtonLink href="/pickleball-league#sponsorship" variant="outline-light">Sponsor a city</ButtonLink>
            </div>
          </div>
          <PaddleArt className="mx-auto w-full max-w-sm" />
        </div>
      </section>

      {/* Benefits */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="Membership"
          title="Benefits that go beyond the event"
          lead="Professional, personal and family: rolled out across the year."
          action={<ButtonLink href="/membership" arrow>See membership</ButtonLink>}
        />
        <BenefitsGrid />
      </Section>

      {/* Members preview */}
      <Section tone="white">
        <SectionHeading
          eyebrow="The community"
          title="Who you'll meet"
          lead="CIOs, CTOs, CISOs and CDOs: the top layer only, not one level below."
          action={<ButtonLink href="/members" variant="secondary" arrow>Member directory</ButtonLink>}
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {members.slice(0, 4).map((m, i) => <MemberCard key={m.id} m={m} index={i} />)}
        </div>
        <p className="mt-4 text-xs text-ink-muted">Profiles shown are sample data for design purposes.</p>
      </Section>

      {/* Partners */}
      <Section tone="tint">
        <SectionHeading
          eyebrow="For OEMs, SIs and institutions"
          title="Reach decision-makers the right way"
          lead="Sponsorship-led, commission-free. Every tier includes branding, networking and engagement."
          action={<ButtonLink href="/partners" arrow>Partner with us</ButtonLink>}
        />
        <SponsorTierGrid compact />
      </Section>

      {/* Studio */}
      <Section tone="paper">
        <SectionHeading
          eyebrow="CIO Studio"
          title="Where CIOs speak. Technology connects."
          action={<ButtonLink href="/studio" variant="secondary" arrow>Read CIO Studio</ButtonLink>}
        />
        <div className="grid gap-6 md:grid-cols-3">
          {articles.map((a) => (
            <Link key={a.slug} href={`/studio/${a.slug}`} className="card group flex flex-col p-6 transition hover:shadow-lift">
              <Badge tone="brand" className="self-start">{a.category}</Badge>
              <h3 className="h3 mt-4 group-hover:text-brand-700">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed">{a.dek}</p>
              <p className="mt-auto pt-6 text-xs text-ink-muted">{a.readMinutes} min read</p>
            </Link>
          ))}
        </div>
      </Section>

      {/* Foundation */}
      <Section tone="white" className="!py-14">
        <div className="flex flex-col items-start gap-6 rounded-3xl border border-line bg-paper p-6 sm:flex-row sm:items-center sm:p-10">
          <div className="flex h-14 w-14 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-2xl bg-brand-600 text-white">
            <HeartHandshake className="h-7 w-7 sm:h-8 sm:w-8" aria-hidden />
          </div>
          <div className="flex-1">
            <p className="eyebrow">CIO Foundation</p>
            <p className="mt-2 text-lg sm:text-2xl font-semibold text-ink-strong">
              2% of CIO-vertical revenue goes back to the families of our community.
            </p>
          </div>
          <ButtonLink href="/foundation" variant="secondary" arrow className="w-full sm:w-auto text-center">How it works</ButtonLink>
        </div>
      </Section>

      <CtaBand
        eyebrow="Join the community"
        title="Built by a CIO, for CIOs."
        body="Membership is by application and reserved for enterprise technology leaders."
        primary={{ href: "/membership/apply", label: "Apply to join" }}
        secondary={{ href: "/contact", label: "Talk to us" }}
      />
    </>
  );
}
