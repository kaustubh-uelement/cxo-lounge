import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Award, Backpack, Check, Droplet, Footprints, Shirt, Sparkles } from "lucide-react";
import { events } from "@/data/events";
import { beyondTheCourt } from "@/data/sponsorship";
import { Badge, ButtonLink, Section, SectionHeading } from "@/components/ui";
import { PaddleArt } from "@/components/PaddleArt";
import { SponsorTierGrid } from "@/components/Offerings";
import { Countdown } from "@/components/Countdown";
import { CtaBand } from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "CIO Pickleball League — India Tour",
  description:
    "India's premier pickleball league for IT leaders. A multi-city championship for CIOs, CTOs and CISOs, starting in Mumbai in November 2026.",
};

const whyPickleball = ["Easy to learn", "Suitable for all age groups", "Low impact on joints", "Highly social", "Fast-paced and exciting", "Great for fitness and wellness"];

const format = [
  { stage: "League stage", body: "Two groups of four. Every team plays each team in its group twice. Each player plays at least two matches, at most two." },
  { stage: "Super Four", body: "The top two teams from each group play one round robin — three matches each. No player plays more than once." },
  { stage: "Playoffs", body: "Match 1: 1st v 2nd → Qualifier 1. Match 2: 3rd v 4th. Eliminator: loser of Match 1 v winner of Match 2 → Qualifier 2." },
  { stage: "Final", body: "Qualifier 1 v Qualifier 2. From the playoffs on, captains decide who plays each match." },
];

const kit = [
  { icon: Shirt, label: "T-shirt with your name" },
  { icon: Shirt, label: "Shorts" },
  { icon: Footprints, label: "Professional shoes" },
  { icon: Sparkles, label: "Branded paddle" },
  { icon: Droplet, label: "Water bottle" },
  { icon: Backpack, label: "Sports bag" },
  { icon: Award, label: "Towel" },
];

const gameDay = ["Opening ceremony", "Celebrity guests", "Competitive league matches", "Wellness zone", "Live entertainment", "Food and beverage court", "Photo opportunities", "Awards ceremony", "Closing celebration"];
const family = ["Chess", "Carrom", "Board games", "Card games", "Kids' activities", "Wellness sessions", "Entertainment", "Food court", "Networking lounge", "Music and leisure"];

export default function LeaguePage() {
  const tour = events.filter((e) => e.type === "league" || e.type === "finale");
  const mumbai = events.find((e) => e.slug === "cpl-mumbai-2026")!;

  return (
    <>
      <section className="relative overflow-hidden bg-navy-900">
        <div className="grid-pattern absolute inset-0" aria-hidden />
        <div className="absolute -bottom-32 left-1/3 h-96 w-96 rounded-full bg-lime-300/10 blur-3xl" aria-hidden />
        <div className="container relative grid items-center gap-10 py-16 sm:py-24 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <p className="eyebrow-light">CIO Lounge presents</p>
            <h1 className="display mt-4 !text-white">
              CIO Pickleball League <span className="block text-brand-300">India Tour</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-brand-100">
              India&apos;s premier pickleball league for IT leaders — where technology meets sports, networking and lifestyle.
            </p>
            <p className="mt-6 text-sm font-medium tracking-wide text-brand-200">
              Mumbai · Delhi · Bangalore · Hyderabad · Chennai · Ahmedabad · Pune <span className="text-brand-300">(optional)</span>
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/membership/apply?interest=league" variant="light" arrow>Register to play</ButtonLink>
              <ButtonLink href="#sponsorship" variant="outline-light">Sponsorship</ButtonLink>
            </div>
          </div>
          <div className="relative">
            <PaddleArt className="mx-auto w-full max-w-sm" />
            <div className="mx-auto mt-4 w-fit rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="mb-2 text-center text-xs uppercase tracking-[0.18em] text-brand-200">Mumbai League opens in</p>
              <Countdown date={mumbai.startDate!} />
            </div>
          </div>
        </div>
      </section>

      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">About the league</p>
            <h2 className="h2 mt-3">Designed to become the IPL of corporate pickleball</h2>
            <ul className="mt-6 space-y-4 text-[17px] leading-relaxed">
              <li className="flex gap-3"><Check className="mt-1 h-5 w-5 shrink-0 text-brand-600" aria-hidden />India&apos;s first multi-city pickleball championship exclusively for technology leaders.</li>
              <li className="flex gap-3"><Check className="mt-1 h-5 w-5 shrink-0 text-brand-600" aria-hidden />A national sporting ecosystem where IT leaders compete, network and build lasting relationships.</li>
              <li className="flex gap-3"><Check className="mt-1 h-5 w-5 shrink-0 text-brand-600" aria-hidden />Every city crowns its champion before the National Grand Finale in Goa, Phuket or Sri Lanka.</li>
              <li className="flex gap-3"><Check className="mt-1 h-5 w-5 shrink-0 text-brand-600" aria-hidden />Open to CIOs, CTOs and CISOs only — the top layer, not one level below.</li>
            </ul>
          </div>
          <div className="rounded-3xl bg-paper p-8">
            <p className="eyebrow">About pickleball</p>
            <h3 className="mt-3 text-2xl font-semibold">One of the world&apos;s fastest-growing sports</h3>
            <p className="mt-3 leading-relaxed">
              It combines elements of tennis, badminton and table tennis, and has become one of the fastest-growing sports across the USA,
              Europe and now India.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-3">
              {whyPickleball.map((w) => (
                <li key={w} className="flex items-center gap-2.5 text-sm font-medium text-ink-strong">
                  <span className="h-2.5 w-2.5 rounded-full bg-ball ring-2 ring-lime-600/30" aria-hidden />{w}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="The India Tour" title="Seven cities, one national champion" lead="Mumbai opens the tour in the first week of November 2026. Other city dates will be announced." />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {tour.map((e, i) => (
            <Link
              key={e.slug}
              href={`/events/${e.slug}`}
              className={
                e.type === "finale"
                  ? "group flex flex-col rounded-2xl bg-navy-900 p-5 text-white transition hover:bg-navy-800 sm:col-span-2 lg:col-span-1"
                  : "card group flex flex-col p-5 transition hover:border-brand-300"
              }
            >
              <span className={e.type === "finale" ? "text-xs font-semibold tracking-widest text-brand-300" : "text-xs font-semibold tracking-widest text-brand-600"}>
                {e.type === "finale" ? "GRAND FINALE" : `STOP ${String(i + 1).padStart(2, "0")}`}
              </span>
              <span className={e.type === "finale" ? "mt-2 text-lg font-semibold" : "mt-2 text-lg font-semibold text-ink-strong"}>{e.city}</span>
              <span className={e.type === "finale" ? "mt-1 text-sm text-brand-200" : "mt-1 text-sm text-ink-muted"}>{e.dateLabel}</span>
              {e.status === "registration-open" && <Badge tone="green" className="mt-3 self-start">Registration open</Badge>}
              <ArrowRight className="mt-4 h-4 w-4 opacity-60 transition group-hover:translate-x-1" aria-hidden />
            </Link>
          ))}
        </div>
      </Section>

      <Section tone="navy">
        <SectionHeading tone="light" eyebrow="Mumbai league format" title="8 teams · 8 players per team · 64 players" lead="Played to international style, with a tournament director and referees appointed by the All India Pickleball Association." />
        <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {format.map((f, i) => (
            <li key={f.stage} className={i === 3 ? "rounded-2xl bg-brand-600 p-6" : "rounded-2xl border border-white/10 bg-white/5 p-6"}>
              <span className="text-sm font-semibold text-brand-300">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-2 text-lg font-semibold !text-white">{f.stage}</h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-100">{f.body}</p>
            </li>
          ))}
        </ol>
        <p className="mt-6 text-sm text-brand-200">Podium: 1st — Final winner · 2nd — Final runner-up · 3rd — Eliminator loser.</p>
      </Section>

      <Section tone="white">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Every player receives</p>
            <h2 className="h2 mt-3">A personalised kit worth ₹25–30K</h2>
            <p className="lead mt-4">A fully personalised, CIO Lounge–branded kit from recognised sports brands — packed and ready for game day.</p>
            <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {kit.map((k) => (
                <li key={k.label} className="flex flex-col items-start gap-3 rounded-xl border border-line bg-paper p-4 text-sm font-medium text-ink-strong">
                  <k.icon className="h-5 w-5 text-brand-600" aria-hidden />{k.label}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">Run to international standards</p>
            <h2 className="h2 mt-3">Partners and coaching</h2>
            <div className="mt-8 space-y-4">
              {[
                ["All India Pickleball Association", "Tournament partner: appoints the tournament director and a referee in every city, and sets the rules we play by."],
                ["Vrushali Thakare", "National gold medallist and brand ambassador — on the ground in every city and at the Grand Finale."],
                ["ITC and Taj", "Hospitality partners for the wellness zone and food and beverage court."],
                ["Certified coaches", "Friday-to-Sunday pre-season training at Navi Mumbai, Lower Parel, Malad and Thane."],
              ].map(([t, b]) => (
                <div key={t} className="rounded-xl border-l-4 border-brand-600 bg-paper p-5">
                  <h3 className="font-semibold">{t}</h3>
                  <p className="mt-1 text-sm leading-relaxed">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Game day experience</p>
            <h2 className="h2 mt-3">Sports, business and lifestyle — in one day</h2>
            <div className="mt-6 flex flex-wrap gap-2">
              {gameDay.map((g) => <span key={g} className="rounded-full border border-line bg-white px-4 py-2 text-sm text-ink-strong">{g}</span>)}
            </div>
            <p className="mt-6 text-sm font-semibold tracking-[0.18em] text-brand-600">ONE DAY · ONE LEAGUE · ONE UNFORGETTABLE EXPERIENCE</p>
          </div>
          <div className="rounded-3xl bg-brand-50 p-8">
            <p className="eyebrow">Fun for the entire family · optional</p>
            <h3 className="mt-3 text-2xl font-semibold">A perfect weekend outing</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {family.map((f) => <span key={f} className="rounded-full bg-white px-3.5 py-1.5 text-sm text-brand-700">{f}</span>)}
            </div>
          </div>
        </div>
      </Section>

      <Section id="sponsorship" tone="tint">
        <SectionHeading
          eyebrow="Sponsorship opportunities"
          title="Every category includes branding, networking and engagement"
          lead="Sponsors play alongside CIOs — there is no wall between sponsor and delegate."
          action={<ButtonLink href="/partners#enquire" arrow>Enquire</ButtonLink>}
        />
        <SponsorTierGrid />
        <p className="mt-5 text-sm text-ink-muted">CXO invites: player fees apply. Grand Finale sponsorship is priced separately.</p>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {beyondTheCourt.map((b) => (
            <div key={b.title} className="card p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">Beyond the court</p>
              <h3 className="mt-2 text-lg font-semibold">{b.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed">{b.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand
        eyebrow="September and October 2026"
        title="Registration, coaching and team selection are under way."
        body="Mumbai League: first week of November, Saturday or Sunday."
        primary={{ href: "/membership/apply?interest=league", label: "Register to play" }}
        secondary={{ href: "/events/cpl-mumbai-2026", label: "Mumbai League details" }}
      />
    </>
  );
}
