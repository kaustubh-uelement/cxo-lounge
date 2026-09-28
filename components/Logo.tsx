import Link from "next/link";
import { clsx } from "clsx";

export function LogoMark({ className, tone = "brand" }: { className?: string; tone?: "brand" | "light" }) {
  const dot = tone === "light" ? "#7FB0DE" : "#1E6BB0";
  const ring = tone === "light" ? "#F6F8FB" : "#102A4C";
  const pts = Array.from({ length: 7 }, (_, i) => {
    const a = (i / 7) * Math.PI * 2 - Math.PI / 2;
    return { x: 20 + Math.cos(a) * 13, y: 20 + Math.sin(a) * 13, big: i === 0 };
  });
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <circle cx="20" cy="20" r="13" fill="none" stroke={ring} strokeWidth="2.2" />
      {pts.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r={p.big ? 4 : 2.6} fill={p.big ? dot : ring} />
      ))}
    </svg>
  );
}

export function Logo({ tone = "brand", className }: { tone?: "brand" | "light"; className?: string }) {
  return (
    <Link href="/" className={clsx("group inline-flex items-center gap-2 sm:gap-2.5 shrink-0", className)} aria-label="CIO Lounge home">
      <LogoMark className="h-8 w-8 sm:h-9 sm:w-9 shrink-0 transition-transform duration-500 group-hover:rotate-[51deg]" tone={tone} />
      <span className="flex flex-col leading-none">
        <span className={clsx("text-[20px] sm:text-[22px] tracking-tight", tone === "light" ? "text-white" : "text-navy-900")}>
          <span className={clsx("font-semibold", tone === "light" ? "text-brand-300" : "text-brand-600")}>CIO</span>
          <span className="font-light">lounge</span>
        </span>
        <span className={clsx("mt-0.5 sm:mt-1 text-[7.5px] sm:text-[8.5px] font-medium tracking-[0.2em] sm:tracking-[0.28em]", tone === "light" ? "text-brand-200" : "text-ink-muted")}>
          INNOVATE · INFLUENCE · IMPACT
        </span>
      </span>
    </Link>
  );
}
