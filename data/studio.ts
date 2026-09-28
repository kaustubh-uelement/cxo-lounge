// CIO Studio: perspectives from the community. These are DRAFT articles written from the founder's
// stated views; review and approve (or replace) before publishing.

export interface Article {
  slug: string;
  title: string;
  dek: string;
  category: "Perspective" | "Playbook" | "League";
  author: string;
  readMinutes: number;
  body: string[];
}

export const articles: Article[] = [
  {
    slug: "why-cio-events-stopped-working",
    title: "Why CIO events stopped working, and what comes next",
    dek: "A roundtable that ends with the dinner is not engagement. It is hospitality.",
    category: "Perspective",
    author: "CIO Lounge Editorial",
    readMinutes: 4,
    body: [
      "India has around 125 forums, media houses and agencies that bring CIOs together. OEMs run their own signature events on top. For a technology leader, two events a month is normal. For a vendor, a single roundtable can cost as much as a small proof of concept.",
      "Yet the outcome is often the same: a presentation, a cocktail dinner, and the engagement ends. At a typical large flagship event, only a fraction of the audience holds budget, and dozens of sponsors chase them.",
      "CIO Lounge starts from a different premise. Members pay to belong, so the room is serious. Partners pay to sponsor, never to take a cut of deals. And the conversation is led by a CIO, not a vendor.",
    ],
  },
  {
    slug: "the-roundtable-that-ends-in-a-poc",
    title: "The roundtable that ends in a proof of concept",
    dek: "Pre-read, a 15-minute capsule, a CIO in the chair, and a room that owns the problem.",
    category: "Playbook",
    author: "CIO Lounge Editorial",
    readMinutes: 3,
    body: [
      "Our roundtable format is simple. The partner's literature goes to about 15 targeted leaders in advance, so they arrive with their pros and cons already formed.",
      "The partner's product head gets 15 minutes, 25 at most. Then a member CIO moderates an open discussion of real pain points. The product stops being the vendor's and becomes the room's.",
      "When three or four leaders share the pain point, they step forward together. One successful proof of concept then builds credibility across the whole community.",
    ],
  },
  {
    slug: "why-pickleball",
    title: "Why pickleball, and why now",
    dek: "Leaders come to play, not for the cocktail dinner. That changes the conversation.",
    category: "League",
    author: "CIO Lounge Editorial",
    readMinutes: 3,
    body: [
      "Pickleball combines elements of tennis, badminton and table tennis, and it has become one of the fastest-growing sports in the USA, Europe and now India. It is easy to learn, suitable for every age and low impact on the joints.",
      "More importantly, it is social. A leader who has trained with a team for four weekends, played a knockout and shared the podium builds a very different relationship from one who attended a keynote.",
      "The CIO Pickleball League India Tour starts in Mumbai and travels across India's technology hubs before a national Grand Finale.",
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
