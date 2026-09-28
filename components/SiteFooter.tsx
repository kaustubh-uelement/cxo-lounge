import Link from "next/link";
import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { footerNav, site } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-navy-950 text-brand-100">
      <div className="grid-pattern absolute inset-0 opacity-40" aria-hidden />
      <div className="container relative py-16">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
          <div className="max-w-sm">
            <Logo tone="light" />
            <p className="mt-6 text-sm leading-relaxed text-brand-200">
              A premium platform for IT leaders and the entire technology ecosystem. Built by a CIO, for CIOs — and for the partners who
              want to reach them the right way.
            </p>
            <ul className="mt-6 space-y-2.5 text-sm text-brand-200">
              <li className="flex items-center gap-2.5"><Mail className="h-4 w-4 text-brand-300" aria-hidden />{site.email}</li>
              <li className="flex items-center gap-2.5"><Phone className="h-4 w-4 text-brand-300" aria-hidden />{site.phone}</li>
              <li className="flex items-start gap-2.5"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" aria-hidden />{site.address}</li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {Object.entries(footerNav).map(([heading, links]) => (
              <div key={heading}>
                <h3 className="text-sm font-semibold !text-white">{heading}</h3>
                <ul className="mt-4 space-y-3">
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
        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-brand-300 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.company}. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/contact" className="hover:text-white">Privacy</Link>
            <Link href="/contact" className="hover:text-white">Terms</Link>
            <a href={site.linkedin} aria-label="CIO Lounge on LinkedIn" className="hover:text-white">
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
