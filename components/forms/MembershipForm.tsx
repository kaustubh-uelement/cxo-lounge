"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { clsx } from "clsx";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { membershipSchema, fieldErrors } from "@/lib/validation";
import { plans } from "@/data/membership";
import { Button } from "../ui";
import { Field, SuccessPanel, ToggleChips, submitJson } from "./shared";

const roles = ["CIO", "CTO", "CISO", "CDO", "Head of IT", "Former CIO / retired"] as const;
const industries = [
  "Banking & Financial Services",
  "Insurance",
  "Capital Markets",
  "Manufacturing",
  "Healthcare & Pharma",
  "Retail & Consumer",
  "Telecom & Media",
  "Logistics",
  "Government & PSU",
  "Other",
];
const interestOptions = ["Roundtables", "Pickleball League", "Learning programmes", "Veteran advisory", "Wellness", "Family events", "CIO Studio"];

const steps = ["Plan", "About you", "Interests"] as const;
const stepFields: string[][] = [["plan"], ["fullName", "email", "phone", "role", "company", "industry", "city", "linkedin"], ["consent"]];

type FormState = {
  plan: string;
  fullName: string;
  email: string;
  phone: string;
  role: string;
  company: string;
  industry: string;
  city: string;
  linkedin: string;
  interests: string[];
  referredBy: string;
  consent: boolean;
};

export function MembershipForm() {
  const params = useSearchParams();
  const initialPlan = plans.some((p) => p.id === params.get("plan")) ? params.get("plan")! : "member";
  const initialInterests = params.get("interest") === "league" ? ["Pickleball League"] : [];

  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormState>({
    plan: initialPlan,
    fullName: "",
    email: "",
    phone: "",
    role: "",
    company: "",
    industry: "",
    city: "",
    linkedin: "",
    interests: initialInterests,
    referredBy: "",
    consent: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [message, setMessage] = useState("");

  const set = <K extends keyof FormState>(k: K, v: FormState[K]) => setData((d) => ({ ...d, [k]: v }));

  const validate = (upTo: number) => {
    const r = membershipSchema.safeParse(data);
    if (r.success) return {};
    const all = fieldErrors(r.error);
    const relevant = stepFields.slice(0, upTo + 1).flat();
    return Object.fromEntries(Object.entries(all).filter(([k]) => relevant.includes(k)));
  };

  const next = () => {
    const e = validate(step);
    setErrors(e);
    if (!Object.keys(e).length) setStep((s) => s + 1);
  };

  const submit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (step < steps.length - 1) return next();
    const e = validate(step);
    setErrors(e);
    if (Object.keys(e).length) return;
    setStatus("sending");
    const res = await submitJson("/api/membership", data);
    if (res.ok) setStatus("done");
    else {
      setStatus("error");
      setErrors(res.errors ?? {});
      setMessage(res.message ?? "Please check the highlighted fields.");
    }
  };

  if (status === "done") {
    return (
      <SuccessPanel title="Application received">
        Thank you, {data.fullName.split(" ")[0]}. The CIO Lounge team reviews every application personally and will be in touch within a few working days.
      </SuccessPanel>
    );
  }

  const input = (name: keyof FormState, props: React.InputHTMLAttributes<HTMLInputElement> = {}) => (
    <input
      id={name}
      name={name}
      value={data[name] as string}
      onChange={(e) => set(name, e.target.value as never)}
      aria-invalid={!!errors[name]}
      aria-describedby={errors[name] ? `${name}-error` : undefined}
      className={clsx("field", errors[name] && "border-red-400")}
      {...props}
    />
  );

  return (
    <form onSubmit={submit} noValidate className="card p-6 sm:p-8">
      <ol className="mb-8 grid grid-cols-3 gap-2" aria-label="Progress">
        {steps.map((s, i) => (
          <li key={s} aria-current={i === step ? "step" : undefined}>
            <div className={clsx("h-1.5 rounded-full", i <= step ? "bg-brand-600" : "bg-line")} />
            <p className={clsx("mt-2 text-xs font-medium", i === step ? "text-brand-700" : "text-ink-muted")}>
              {i + 1}. {s}
            </p>
          </li>
        ))}
      </ol>

      {step === 0 && (
        <fieldset>
          <legend className="h3 mb-5">Which membership are you applying for?</legend>
          <div className="grid gap-3">
            {plans.map((p) => (
              <label
                key={p.id}
                className={clsx(
                  "flex cursor-pointer items-start gap-4 rounded-xl border p-4 transition",
                  data.plan === p.id ? "border-brand-600 bg-brand-50" : "border-line bg-white hover:border-brand-300",
                )}
              >
                <input type="radio" name="plan" value={p.id} checked={data.plan === p.id} onChange={() => set("plan", p.id)} className="mt-1 h-4 w-4 accent-brand-600" />
                <span>
                  <span className="block font-semibold text-ink-strong">{p.name} <span className="font-normal text-ink-muted">· {p.price}{p.cadence ? ` ${p.cadence}` : ""}</span></span>
                  <span className="mt-0.5 block text-sm">{p.audience}</span>
                </span>
              </label>
            ))}
          </div>
        </fieldset>
      )}

      {step === 1 && (
        <fieldset className="grid gap-5 sm:grid-cols-2">
          <legend className="h3 mb-5 sm:col-span-2">Tell us about you</legend>
          <Field label="Full name" name="fullName" error={errors.fullName}>{input("fullName", { autoComplete: "name" })}</Field>
          <Field label="Work email" name="email" error={errors.email}>{input("email", { type: "email", autoComplete: "email" })}</Field>
          <Field label="Mobile" name="phone" error={errors.phone}>{input("phone", { type: "tel", autoComplete: "tel", placeholder: "+91" })}</Field>
          <Field label="Role" name="role" error={errors.role}>
            <select id="role" value={data.role} onChange={(e) => set("role", e.target.value)} className={clsx("field", errors.role && "border-red-400")}>
              <option value="">Select your role</option>
              {roles.map((r) => <option key={r}>{r}</option>)}
            </select>
          </Field>
          <Field label="Organisation" name="company" error={errors.company}>{input("company", { autoComplete: "organization" })}</Field>
          <Field label="Industry" name="industry" error={errors.industry}>
            <select id="industry" value={data.industry} onChange={(e) => set("industry", e.target.value)} className={clsx("field", errors.industry && "border-red-400")}>
              <option value="">Select an industry</option>
              {industries.map((r) => <option key={r}>{r}</option>)}
            </select>
          </Field>
          <Field label="City" name="city" error={errors.city}>{input("city", { autoComplete: "address-level2" })}</Field>
          <Field label="LinkedIn profile" name="linkedin" error={errors.linkedin} hint="Optional">
            {input("linkedin", { type: "url", placeholder: "https://www.linkedin.com/in/…" })}
          </Field>
        </fieldset>
      )}

      {step === 2 && (
        <fieldset className="grid gap-6">
          <legend className="h3 mb-1">What would you like to be part of?</legend>
          <ToggleChips name="Interests" options={interestOptions} value={data.interests} onChange={(v) => set("interests", v)} />
          <Field label="Referred by a member?" name="referredBy" hint="Optional">
            <input id="referredBy" value={data.referredBy} onChange={(e) => set("referredBy", e.target.value)} className="field" />
          </Field>
          <div>
            <label className="flex cursor-pointer items-start gap-3 text-sm">
              <input
                type="checkbox"
                checked={data.consent}
                onChange={(e) => set("consent", e.target.checked)}
                className="mt-0.5 h-4 w-4 accent-brand-600"
                aria-describedby={errors.consent ? "consent-error" : undefined}
              />
              <span>I agree that CXO Lounge may contact me about my application and store my details for this purpose.</span>
            </label>
            {errors.consent && <p id="consent-error" className="field-error" role="alert">{errors.consent}</p>}
          </div>
        </fieldset>
      )}

      {status === "error" && message && <p className="field-error mt-6" role="alert">{message}</p>}

      <div className="mt-8 flex items-center justify-between gap-3 border-t border-line pt-6">
        {step > 0 ? (
          <Button type="button" variant="secondary" onClick={() => setStep((s) => s - 1)}>
            <ArrowLeft className="h-4 w-4" aria-hidden /> Back
          </Button>
        ) : <span />}
        <Button type="submit" disabled={status === "sending"}>
          {step < steps.length - 1 ? (<>Continue <ArrowRight className="h-4 w-4" aria-hidden /></>) : status === "sending" ? "Sending…" : "Submit application"}
        </Button>
      </div>
    </form>
  );
}
