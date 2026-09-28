"use client";

import { clsx } from "clsx";
import { CheckCircle2 } from "lucide-react";
import type { ReactNode } from "react";

export const isPreview = process.env.NEXT_PUBLIC_PREVIEW === "1";

/** Posts JSON to an API route. In the static preview there is no server, so it resolves locally. */
export async function submitJson(url: string, data: unknown): Promise<{ ok: boolean; errors?: Record<string, string>; message?: string }> {
  if (isPreview) {
    await new Promise((r) => setTimeout(r, 700));
    return { ok: true };
  }
  try {
    const res = await fetch(url, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(data) });
    return await res.json();
  } catch {
    return { ok: false, message: "Network error — please try again." };
  }
}

export function Field({
  label,
  name,
  error,
  hint,
  children,
  className,
}: {
  label: string;
  name: string;
  error?: string;
  hint?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={name} className="field-label">{label}</label>
      {children}
      {hint && !error && <p className="mt-1.5 text-xs text-ink-muted">{hint}</p>}
      {error && <p id={`${name}-error`} className="field-error" role="alert">{error}</p>}
    </div>
  );
}

export function ToggleChips({
  options,
  value,
  onChange,
  name,
}: {
  options: string[];
  value: string[];
  onChange: (v: string[]) => void;
  name: string;
}) {
  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label={name}>
      {options.map((o) => {
        const on = value.includes(o);
        return (
          <button
            key={o}
            type="button"
            aria-pressed={on}
            onClick={() => onChange(on ? value.filter((v) => v !== o) : [...value, o])}
            className={clsx(
              "rounded-full border px-3.5 py-2 text-sm transition",
              on ? "border-brand-600 bg-brand-600 text-white" : "border-line bg-white text-ink hover:border-brand-300",
            )}
          >
            {o}
          </button>
        );
      })}
    </div>
  );
}

export function SuccessPanel({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="card flex flex-col items-center p-10 text-center">
      <CheckCircle2 className="h-12 w-12 text-emerald-600" aria-hidden />
      <h2 className="h3 mt-4">{title}</h2>
      <div className="mt-2 max-w-md text-sm leading-relaxed">{children}</div>
      {isPreview && (
        <p className="mt-6 rounded-lg bg-amber-50 px-4 py-2 text-xs text-amber-900">
          Preview build: nothing was sent. On the live site this goes to the CXO Lounge team.
        </p>
      )}
    </div>
  );
}
