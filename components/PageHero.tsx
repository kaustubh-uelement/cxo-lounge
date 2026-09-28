import type { ReactNode } from "react";
import { clsx } from "clsx";

export function PageHero({
  eyebrow,
  title,
  lead,
  children,
  aside,
  compact,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  children?: ReactNode;
  aside?: ReactNode;
  compact?: boolean;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-900">
      <div className="grid-pattern absolute inset-0" aria-hidden />
      <div className="absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-brand-600/25 blur-3xl" aria-hidden />
      <div className={clsx("container relative grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end", compact ? "py-14 sm:py-20" : "py-16 sm:py-24")}>
        <div>
          <p className="eyebrow-light">{eyebrow}</p>
          <h1 className="display mt-4 !text-white">{title}</h1>
          {lead && <p className="mt-5 max-w-2xl text-base leading-relaxed text-brand-100 sm:text-lg">{lead}</p>}
          {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
        </div>
        {aside && <div>{aside}</div>}
      </div>
    </section>
  );
}
