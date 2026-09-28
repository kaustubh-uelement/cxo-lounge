import type { Metadata } from "next";
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/data/site";
import { Section } from "@/components/ui";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = { title: "Contact", description: "Get in touch with CXO Lounge." };

export default function ContactPage() {
  const items = [
    { icon: Mail, label: "Email", value: site.email },
    { icon: Phone, label: "Phone", value: site.phone },
    { icon: MapPin, label: "Office", value: site.address },
    { icon: Linkedin, label: "LinkedIn", value: "CIO Lounge" },
  ];
  return (
    <Section className="!pt-12">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr]">
        <div className="lg:pt-6">
          <p className="eyebrow">Contact</p>
          <h1 className="display mt-3">Talk to us</h1>
          <p className="lead mt-5">Membership, the league, partnerships or the Foundation: we usually reply within one working day.</p>
          <ul className="mt-8 space-y-4">
            {items.map((i) => (
              <li key={i.label} className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600"><i.icon className="h-5 w-5" aria-hidden /></span>
                <span>
                  <span className="block text-xs text-ink-muted">{i.label}</span>
                  <span className="font-medium text-ink-strong">{i.value}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
        <ContactForm />
      </div>
    </Section>
  );
}
