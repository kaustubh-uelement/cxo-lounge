import Link from "next/link";
import { clsx } from "clsx";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={clsx("container", className)}>{children}</div>;
}

export function Section({
  children,
  className,
  id,
  tone = "paper",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: "paper" | "white" | "tint" | "navy";
}) {
  const tones = {
    paper: "bg-paper",
    white: "bg-white",
    tint: "bg-brand-50",
    navy: "bg-navy-900 text-brand-100",
  } as const;
  return (
    <section id={id} className={clsx("scroll-mt-24 py-16 sm:py-24", tones[tone], className)}>
      <Container>{children}</Container>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  tone = "dark",
  action,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  action?: ReactNode;
}) {
  return (
    <div
      className={clsx(
        "mb-10 flex flex-col gap-6 sm:mb-14",
        align === "center" ? "items-center text-center" : "lg:flex-row lg:items-end lg:justify-between",
      )}
    >
      <div className={clsx("max-w-3xl", align === "center" && "mx-auto")}>
        {eyebrow && <p className={tone === "light" ? "eyebrow-light" : "eyebrow"}>{eyebrow}</p>}
        <h2 className={clsx("h2 mt-3", tone === "light" && "!text-white")}>{title}</h2>
        {lead && <p className={clsx("lead mt-4", tone === "light" && "!text-brand-100")}>{lead}</p>}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}

type BtnVariant = "primary" | "secondary" | "ghost" | "light" | "outline-light";

const btnBase =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition duration-200 disabled:cursor-not-allowed disabled:opacity-60 sm:px-6";
const btnVariants: Record<BtnVariant, string> = {
  primary: "bg-brand-600 text-white shadow-sm hover:bg-brand-700",
  secondary: "border border-line bg-white text-navy-900 hover:border-brand-300 hover:bg-brand-50",
  ghost: "text-brand-600 hover:text-brand-700 !px-0",
  light: "bg-white text-navy-900 hover:bg-brand-50",
  "outline-light": "border border-white/30 text-white hover:border-white/60 hover:bg-white/10",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  arrow,
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: BtnVariant;
  arrow?: boolean;
  className?: string;
}) {
  return (
    <Link href={href} className={clsx(btnBase, btnVariants[variant], "group", className)}>
      {children}
      {arrow && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />}
    </Link>
  );
}

export function Button({
  children,
  variant = "primary",
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: BtnVariant }) {
  return (
    <button className={clsx(btnBase, btnVariants[variant], className)} {...props}>
      {children}
    </button>
  );
}

export function Badge({
  children,
  tone = "brand",
  className,
}: {
  children: ReactNode;
  tone?: "brand" | "navy" | "green" | "amber" | "muted" | "ball";
  className?: string;
}) {
  const tones = {
    brand: "border-brand-200 bg-brand-50 text-brand-700",
    navy: "border-navy-900 bg-navy-900 text-white",
    green: "border-emerald-200 bg-emerald-50 text-emerald-800",
    amber: "border-amber-200 bg-amber-50 text-amber-800",
    muted: "border-line bg-white text-ink-muted",
    ball: "border-lime-300 bg-lime-100 text-lime-900",
  } as const;
  return <span className={clsx("chip", tones[tone], className)}>{children}</span>;
}

export function SampleNotice({ children }: { children: ReactNode }) {
  return (
    <div className="mb-8 flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
      <span className="mt-0.5 inline-block h-2 w-2 shrink-0 rounded-full bg-amber-500" aria-hidden />
      <p>{children}</p>
    </div>
  );
}
