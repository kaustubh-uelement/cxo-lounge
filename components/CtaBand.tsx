import type { ReactNode } from "react";
import { ButtonLink } from "./ui";

export function CtaBand({
  eyebrow,
  title,
  body,
  primary,
  secondary,
}: {
  eyebrow: string;
  title: ReactNode;
  body?: ReactNode;
  primary: { href: string; label: string };
  secondary?: { href: string; label: string };
}) {
  return (
    <section className="bg-paper py-16 sm:py-20">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl bg-brand-600 px-6 py-12 sm:px-12 sm:py-16">
          <div className="grid-pattern absolute inset-0 opacity-60" aria-hidden />
          <div className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full border-[28px] border-white/10" aria-hidden />
          <div className="relative max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-100">{eyebrow}</p>
            <h2 className="h2 mt-3 !text-white">{title}</h2>
            {body && <p className="mt-4 text-base leading-relaxed text-brand-50 sm:text-lg">{body}</p>}
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={primary.href} variant="light" arrow>{primary.label}</ButtonLink>
              {secondary && <ButtonLink href={secondary.href} variant="outline-light">{secondary.label}</ButtonLink>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
