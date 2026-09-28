import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
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
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-brand-300 sm:flex-row">
          <p className="text-center sm:text-left">© {new Date().getFullYear()} {site.company}. All rights reserved.</p>
          <div className="flex items-center gap-5 text-center">
            <Link href="/contact" className="py-1 transition hover:text-white">Privacy</Link>
            <Link href="/contact" className="py-1 transition hover:text-white">Terms</Link>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="CIO Lounge on LinkedIn"
              className="p-1 text-brand-300 transition hover:text-white"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.778-.773 1.778-1.729V1.73C24 .774 23.205 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
          <span id="foot-credit" className="footCredit text-center sm:text-right text-xs text-brand-300">
            Built on{" "}
            <a
              href="https://uelement.in/stambh/"
              target="_blank"
              rel="noopener noreferrer"
              className="footCreditLink font-medium text-brand-200 transition underline-offset-4 hover:text-white hover:underline"
            >
              UElement STamBH
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
