import type { Metadata } from "next";
import { Suspense } from "react";
import { ShieldCheck } from "lucide-react";
import { Section } from "@/components/ui";
import { MembershipForm } from "@/components/forms/MembershipForm";

export const metadata: Metadata = {
  title: "Apply for membership",
  description: "Apply to join CIO Lounge — for CIOs, CTOs, CISOs, CDOs and veteran technology leaders.",
};

export default function ApplyPage() {
  return (
    <Section className="!pt-12">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr]">
        <div className="lg:pt-6">
          <p className="eyebrow">Membership application</p>
          <h1 className="display mt-3">Apply to join CIO Lounge</h1>
          <p className="lead mt-5">Three short steps. Every application is reviewed personally by the CIO Lounge team.</p>
          <div className="mt-8 flex gap-3 rounded-2xl border border-line bg-white p-5 text-sm">
            <ShieldCheck className="h-5 w-5 shrink-0 text-brand-600" aria-hidden />
            <p>Your details are used only to assess your application and are never shared with sponsors or partners.</p>
          </div>
        </div>
        <Suspense fallback={<div className="card h-[520px] animate-pulse" />}>
          <MembershipForm />
        </Suspense>
      </div>
    </Section>
  );
}
