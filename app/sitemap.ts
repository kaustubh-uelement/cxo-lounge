import type { MetadataRoute } from "next";
import { events } from "@/data/events";
import { articles } from "@/data/studio";
import { site } from "@/data/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/events", "/pickleball-league", "/members", "/membership", "/membership/apply", "/partners", "/advisory", "/learning", "/studio", "/foundation", "/about", "/contact"];
  return [
    ...pages.map((p) => ({ url: `${site.url}${p}`, changeFrequency: "weekly" as const, priority: p === "" ? 1 : 0.7 })),
    ...events.map((e) => ({ url: `${site.url}/events/${e.slug}`, changeFrequency: "weekly" as const, priority: 0.6 })),
    ...articles.map((a) => ({ url: `${site.url}/studio/${a.slug}`, changeFrequency: "monthly" as const, priority: 0.5 })),
  ];
}
