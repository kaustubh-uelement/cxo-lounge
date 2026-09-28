"use client";

import { useMemo, useState } from "react";
import { MapPin, Search, Trophy } from "lucide-react";
import { clsx } from "clsx";
import type { Member, Role } from "@/data/members";
import { initials } from "@/lib/format";

const avatarTones = ["bg-brand-600", "bg-navy-800", "bg-brand-700", "bg-navy-700", "bg-brand-500"];

export function MemberCard({ m, index = 0 }: { m: Member; index?: number }) {
  return (
    <article className="card flex h-full flex-col p-5">
      <div className="flex items-start gap-4">
        <div
          className={clsx(
            "flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-lg font-semibold text-white ring-4 ring-brand-50",
            avatarTones[index % avatarTones.length],
          )}
          aria-hidden
        >
          {initials(m.name)}
        </div>
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-ink-strong">{m.name}</h3>
          <p className="text-sm text-ink">{m.title}</p>
          <p className="text-sm font-medium text-brand-700">{m.company}</p>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {m.interests.map((i) => (
          <span key={i} className="rounded-full bg-brand-50 px-2.5 py-1 text-xs text-brand-700">{i}</span>
        ))}
      </div>
      <div className="mt-auto flex items-center justify-between gap-3 border-t border-line pt-4 text-xs text-ink-muted">
        <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" aria-hidden />{m.city} · {m.industry.split(" ")[0]}</span>
        <span className="flex items-center gap-2">
          {m.league && (
            <span title="League player" className="flex items-center gap-1 rounded-full bg-lime-100 px-2 py-0.5 text-lime-900">
              <Trophy className="h-3 w-3" aria-hidden />League
            </span>
          )}
          {m.tier === "Founding Circle" && <span className="rounded-full bg-navy-900 px-2 py-0.5 text-white">Founding</span>}
        </span>
      </div>
    </article>
  );
}

export function MembersDirectory({
  members,
  industries,
  cities,
  roles,
}: {
  members: Member[];
  industries: string[];
  cities: string[];
  roles: Role[];
}) {
  const [q, setQ] = useState("");
  const [role, setRole] = useState<Role | "all">("all");
  const [industry, setIndustry] = useState("all");
  const [city, setCity] = useState("all");
  const [league, setLeague] = useState(false);

  const filtered = useMemo(
    () =>
      members.filter((m) => {
        const text = `${m.name} ${m.company} ${m.title} ${m.interests.join(" ")}`.toLowerCase();
        return (
          (role === "all" || m.role === role) &&
          (industry === "all" || m.industry === industry) &&
          (city === "all" || m.city === city) &&
          (!league || m.league) &&
          (!q || text.includes(q.toLowerCase()))
        );
      }),
    [members, q, role, industry, city, league],
  );

  return (
    <div>
      <div className="card mb-8 p-4 sm:p-5">
        <div className="grid gap-3 md:grid-cols-[1fr_240px_180px]">
          <label className="relative">
            <span className="sr-only">Search members</span>
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted" aria-hidden />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search by name, company or interest" className="field pl-11" />
          </label>
          <label>
            <span className="sr-only">Industry</span>
            <select value={industry} onChange={(e) => setIndustry(e.target.value)} className="field">
              <option value="all">All industries</option>
              {industries.map((i) => <option key={i}>{i}</option>)}
            </select>
          </label>
          <label>
            <span className="sr-only">City</span>
            <select value={city} onChange={(e) => setCity(e.target.value)} className="field">
              <option value="all">All cities</option>
              {cities.map((c) => <option key={c}>{c}</option>)}
            </select>
          </label>
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-2">
          {(["all", ...roles] as const).map((r) => (
            <button
              key={r}
              type="button"
              aria-pressed={role === r}
              onClick={() => setRole(r)}
              className={clsx(
                "rounded-full border px-3.5 py-1.5 text-sm transition",
                role === r ? "border-navy-900 bg-navy-900 text-white" : "border-line bg-white hover:border-brand-300",
              )}
            >
              {r === "all" ? "All roles" : r}
            </button>
          ))}
          <label className="ml-auto flex cursor-pointer items-center gap-2 text-sm text-ink-strong">
            <input type="checkbox" checked={league} onChange={(e) => setLeague(e.target.checked)} className="h-4 w-4 accent-brand-600" />
            League players only
          </label>
        </div>
      </div>
      <p className="mb-5 text-sm text-ink-muted" aria-live="polite">
        {filtered.length} {filtered.length === 1 ? "member" : "members"}
      </p>
      {filtered.length ? (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((m) => <MemberCard key={m.id} m={m} index={members.indexOf(m)} />)}
        </div>
      ) : (
        <div className="card p-12 text-center">
          <p className="h3">No members match those filters</p>
        </div>
      )}
    </div>
  );
}
