"use client";

import { useState } from "react";
import { clsx } from "clsx";
import { partnerSchema, fieldErrors } from "@/lib/validation";
import { Button } from "../ui";
import { Field, SuccessPanel, ToggleChips, submitJson } from "./shared";

const companyTypes = ["OEM", "System integrator", "ISV / SaaS", "Institution", "Other"];
const interestOptions = ["Title sponsorship", "Platinum (city)", "Team Partner", "Associate Partner", "Curated roundtable", "Learning programme", "Bespoke event"];
const cityOptions = ["Mumbai", "Delhi", "Bangalore", "Hyderabad", "Chennai", "Ahmedabad", "Pune", "Grand Finale"];

export function PartnerForm() {
  const [data, setData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    companyType: "",
    interest: [] as string[],
    cities: [] as string[],
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const set = (k: keyof typeof data, v: unknown) => setData((d) => ({ ...d, [k]: v }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const r = partnerSchema.safeParse(data);
    if (!r.success) return setErrors(fieldErrors(r.error));
    setErrors({});
    setStatus("sending");
    const res = await submitJson("/api/partners", data);
    if (res.ok) setStatus("done");
    else {
      setStatus("idle");
      setErrors(res.errors ?? { form: res.message ?? "Something went wrong." });
    }
  };

  if (status === "done")
    return (
      <SuccessPanel title="Thank you — we'll be in touch">
        Our partnerships team will share availability for your chosen tiers and cities, along with the audience profile.
      </SuccessPanel>
    );

  const text = (name: "fullName" | "email" | "phone" | "company", label: string, type = "text", auto?: string) => (
    <Field label={label} name={name} error={errors[name]}>
      <input
        id={name}
        type={type}
        autoComplete={auto}
        value={data[name]}
        onChange={(e) => set(name, e.target.value)}
        aria-invalid={!!errors[name]}
        className={clsx("field", errors[name] && "border-red-400")}
      />
    </Field>
  );

  return (
    <form onSubmit={submit} noValidate className="card grid gap-5 p-6 sm:grid-cols-2 sm:p-8">
      {text("fullName", "Full name", "text", "name")}
      {text("email", "Work email", "email", "email")}
      {text("phone", "Mobile", "tel", "tel")}
      {text("company", "Company", "text", "organization")}
      <Field label="Company type" name="companyType" error={errors.companyType} className="sm:col-span-2">
        <select id="companyType" value={data.companyType} onChange={(e) => set("companyType", e.target.value)} className={clsx("field", errors.companyType && "border-red-400")}>
          <option value="">Select one</option>
          {companyTypes.map((c) => <option key={c}>{c}</option>)}
        </select>
      </Field>
      <div className="sm:col-span-2">
        <p className="field-label">I'm interested in</p>
        <ToggleChips name="Partnership interest" options={interestOptions} value={data.interest} onChange={(v) => set("interest", v)} />
        {errors.interest && <p className="field-error" role="alert">{errors.interest}</p>}
      </div>
      <div className="sm:col-span-2">
        <p className="field-label">Cities</p>
        <ToggleChips name="Cities" options={cityOptions} value={data.cities} onChange={(v) => set("cities", v)} />
      </div>
      <Field label="Anything we should know?" name="message" className="sm:col-span-2" hint="Target audience, products, timelines">
        <textarea id="message" rows={4} value={data.message} onChange={(e) => set("message", e.target.value)} className="field" />
      </Field>
      {errors.form && <p className="field-error sm:col-span-2" role="alert">{errors.form}</p>}
      <div className="sm:col-span-2">
        <Button type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Send enquiry"}</Button>
      </div>
    </form>
  );
}
