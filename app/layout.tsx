import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { BackToTop } from "@/components/BackToTop";
import { site } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "CIO Lounge: A premium platform for IT leaders", template: "%s · CIO Lounge" },
  description: site.description,
  openGraph: {
    title: "CIO Lounge: A premium platform for IT leaders",
    description: site.description,
    siteName: "CIO Lounge",
    type: "website",
    locale: "en_IN",
  },
};

export const viewport: Viewport = { themeColor: "#102A4C", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.company,
    alternateName: site.brand,
    url: site.url,
    slogan: site.tagline,
    founder: { "@type": "Person", name: site.founder.name },
  };
  return (
    <html lang="en-IN">
      <body className="relative flex min-h-screen w-full max-w-full flex-col">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1 w-full max-w-full">
          {children}
        </main>
        <SiteFooter />
        <BackToTop />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      </body>
    </html>
  );
}
