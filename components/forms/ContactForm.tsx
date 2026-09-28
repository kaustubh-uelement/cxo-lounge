"use client";

import { useState } from "react";
import { clsx } from "clsx";
import { contactSchema, fieldErrors } from "@/lib/validation";
import { Button } from "../ui";
import { Field, SuccessPanel, submitJson } from "./shared";

const topics = ["Membership", "Pickleball League", "Partnership", "Media", "Foundation", "Something else"];

export function ContactForm() {
  const [data, setData] = useState({ fullName: "", email: "", topic: "Membership", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const set = (k: keyof typeof data, v: string) => setData((d) => ({ ...d, [k]: v }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const r = contactSchema.safeParse(data);
    if (!r.success) return setErrors(fieldErrors(r.error));
    setErrors({});
    setStatus("sending");
    const res = await submitJson("/api/contact", data);
    if (res.ok) setStatus("done");
    else {
      setStatus("idle");
      setErrors(res.errors ?? { form: res.message ?? "Something went wrong." });
    }
  };

  if (status === "done") return <SuccessPanel title="Message sent">We usually reply within one working day.</SuccessPanel>;

  return (
    <form onSubmit={submit} noValidate className="card grid gap-5 p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="fullName" error={errors.fullName}>
          <input id="fullName" autoComplete="name" value={data.fullName} onChange={(e) => set("fullName", e.target.value)} className={clsx("field", errors.fullName && "border-red-400")} />
        </Field>
        <Field label="Email" name="email" error={errors.email}>
          <input id="email" type="email" autoComplete="email" value={data.email} onChange={(e) => set("email", e.target.value)} className={clsx("field", errors.email && "border-red-400")} />
        </Field>
      </div>
      <Field label="Topic" name="topic">
        <select id="topic" value={data.topic} onChange={(e) => set("topic", e.target.value)} className="field">
          {topics.map((t) => <option key={t}>{t}</option>)}
        </select>
      </Field>
      <Field label="Message" name="message" error={errors.message}>
        <textarea id="message" rows={5} value={data.message} onChange={(e) => set("message", e.target.value)} className={clsx("field", errors.message && "border-red-400")} />
      </Field>
      {errors.form && <p className="field-error" role="alert">{errors.form}</p>}
      <div>
        <Button type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Send message"}</Button>
      </div>
    </form>
  );
}
