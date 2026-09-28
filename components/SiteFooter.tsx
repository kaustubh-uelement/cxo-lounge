import Link from "next/link";
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { footerNav, site } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-navy-950 text-brand-100">
      <div className="grid-pattern absolute inset-0 opacity-40" aria-hidden />
      <div className="container relative py-12 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_2fr] lg:gap-12">
          <div className="max-w-sm">
            <Logo tone="light" />
            <p className="mt-5 text-sm leading-relaxed text-brand-200">
              A premium platform for IT leaders and the entire technology ecosystem. Built by a CIO, for CIOs, and for the partners who
              want to reach them the right way.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-brand-200">
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-brand-300" aria-hidden />
                <span className="break-all">{site.email}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-brand-300" aria-hidden />
                <span>{site.phone}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" aria-hidden />
                <span className="leading-snug">{site.address}</span>
              </li>
            </ul>
          </div>
          <div className="grid grid-cols-1 gap-8 min-[480px]:grid-cols-3 sm:gap-6">
            {Object.entries(footerNav).map(([heading, links]) => (
              <div key={heading}>
                <h3 className="text-sm font-semibold tracking-wide !text-white">{heading}</h3>
                <ul className="mt-3.5 space-y-2.5">
                  {links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="text-sm text-brand-200 transition hover:text-white">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center gap-4 border-t border-white/10 pt-6 text-xs text-brand-300 sm:flex-row sm:justify-between">
          <p className="text-center sm:text-left">© {new Date().getFullYear()} {site.company}. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/contact" className="py-1 hover:text-white">Privacy</Link>
            <Link href="/contact" className="py-1 hover:text-white">Terms</Link>
            <a href={site.linkedin} aria-label="CIO Lounge on LinkedIn" className="p-1 hover:text-white">
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
