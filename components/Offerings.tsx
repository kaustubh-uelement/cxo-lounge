import Link from "next/link";
import { clsx } from "clsx";
import {
  Check,
  GraduationCap,
  HeartPulse,
  Home,
  KeyRound,
  PartyPopper,
  Plane,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
} from "lucide-react";
import { memberBenefits, type Plan } from "@/data/membership";
import { sponsorTiers } from "@/data/sponsorship";

const benefitIcons = {
  users: Users,
  graduation: GraduationCap,
  trophy: Trophy,
  heart: HeartPulse,
  sparkles: Sparkles,
  home: Home,
  key: KeyRound,
  plane: Plane,
  party: PartyPopper,
  shield: ShieldCheck,
} as const;

export function BenefitsGrid({ limit, tone = "light" }: { limit?: number; tone?: "light" | "navy" }) {
  const items = limit ? memberBenefits.slice(0, limit) : memberBenefits;
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {items.map((b) => {
        const Icon = benefitIcons[b.icon];
        return (
          <div
            key={b.title}
            className={clsx(
              "rounded-2xl p-5",
              tone === "navy" ? "border border-white/10 bg-white/5" : "border border-line bg-white shadow-card",
            )}
          >
            <div className={clsx("mb-4 flex h-11 w-11 items-center justify-center rounded-xl", tone === "navy" ? "bg-brand-600/30 text-brand-200" : "bg-brand-50 text-brand-600")}>
              <Icon className="h-5 w-5" aria-hidden />
            </div>
            <h3 className={clsx("text-[15px] font-semibold leading-snug", tone === "navy" && "!text-white")}>{b.title}</h3>
            <p className={clsx("mt-1.5 text-sm leading-relaxed", tone === "navy" ? "text-brand-200" : "text-ink")}>{b.body}</p>
          </div>
        );
      })}
    </div>
  );
}

export function PlanCard({ plan }: { plan: Plan }) {
  return (
    <div
      className={clsx(
        "relative flex h-full flex-col rounded-2xl p-6 sm:p-7",
        plan.highlight ? "bg-navy-900 text-brand-100 shadow-lift" : "border border-line bg-white shadow-card",
      )}
    >
      {plan.highlight && (
        <span className="absolute -top-3 left-6 sm:left-7 rounded-full bg-gold px-3 py-1 text-xs font-semibold text-navy-950">Limited cohort</span>
      )}
      <h3 className={clsx("text-lg font-semibold", plan.highlight && "!text-white")}>{plan.name}</h3>
      <p className={clsx("mt-1 text-sm", plan.highlight ? "text-brand-200" : "text-ink-muted")}>{plan.audience}</p>
      <div className="mt-6 flex flex-wrap items-baseline gap-2">
        <span className={clsx("font-semibold tracking-tight", plan.price.startsWith("₹") ? "text-3xl" : "text-2xl", plan.highlight ? "text-white" : "text-navy-900")}>{plan.price}</span>
        {plan.cadence && <span className={plan.highlight ? "text-brand-200" : "text-ink-muted"}>{plan.cadence}</span>}
      </div>
      {plan.note && <p className="mt-1 text-xs text-ink-muted">{plan.note}</p>}
      <ul className="mt-6 space-y-3 text-sm">
        {plan.features.map((f) => (
          <li key={f} className="flex gap-3">
            <Check className={clsx("mt-0.5 h-4 w-4 shrink-0", plan.highlight ? "text-brand-300" : "text-brand-600")} aria-hidden />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <Link
        href={plan.href}
        className={clsx(
          "mt-8 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition",
          plan.highlight ? "bg-white text-navy-900 hover:bg-brand-50" : "bg-brand-600 text-white hover:bg-brand-700",
        )}
      >
        {plan.cta}
      </Link>
    </div>
  );
}

export function SponsorTierGrid({ compact }: { compact?: boolean }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {sponsorTiers.map((t) => (
        <div
          key={t.id}
          className={clsx(
            "flex h-full flex-col rounded-2xl p-6",
            t.featured ? "bg-brand-600 text-white shadow-lift" : "border border-line bg-white shadow-card",
          )}
        >
          <p className={clsx("text-xs font-semibold uppercase tracking-[0.18em]", t.featured ? "text-brand-100" : "text-brand-600")}>{t.slots}</p>
          <h3 className={clsx("mt-3 text-xl font-semibold", t.featured && "!text-white")}>{t.name}</h3>
          <p className="mt-4 flex flex-wrap items-baseline gap-1.5">
            <span className={clsx("text-2xl sm:text-3xl font-semibold tracking-tight", t.featured ? "text-white" : "text-navy-900")}>{t.price}</span>
            <span className={clsx("text-sm", t.featured ? "text-brand-100" : "text-ink-muted")}>{t.priceNote}</span>
          </p>
          {!compact && (
            <ul className="mt-6 space-y-2.5 text-sm">
              {t.includes.map((i) => (
                <li key={i} className="flex gap-2.5">
                  <Check className={clsx("mt-0.5 h-4 w-4 shrink-0", t.featured ? "text-brand-100" : "text-brand-600")} aria-hidden />
                  <span className={t.featured ? "text-white" : ""}>{i}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
