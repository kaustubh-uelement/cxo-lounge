// Site-wide content and settings. Replace bracketed placeholders before launch.
export const site = {
  company: "CXO Lounge Pvt Ltd",
  brand: "CIO Lounge",
  tagline: "Innovate | Influence | Impact",
  description:
    "CIO Lounge is a premium platform for CIOs, CTOs, CISOs and the technology ecosystem: curated roundtables, learning with top institutions, veteran CIO advisory and India's premier pickleball league for IT leaders.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.ciolounge.in", // [confirm domain]
  email: "[hello@ciolounge.in]",
  phone: "[+91 __________]",
  address: "[Registered office address], Mumbai, Maharashtra",
  linkedin: "#",
  founder: {
    name: "Kamal Goel",
    title: "Founder, CXO Lounge",
    experience: ["Yotta", "Hitachi", "63 Moons", "Anand Rathi"],
  },
};

export const nav = [
  { href: "/events", label: "Events" },
  { href: "/pickleball-league", label: "Pickleball League" },
  { href: "/members", label: "Members" },
  { href: "/membership", label: "Membership" },
  { href: "/partners", label: "Partner with us" },
  { href: "/about", label: "About" },
];

export const footerNav = {
  Platform: [
    { href: "/events", label: "Events" },
    { href: "/members", label: "Member directory" },
    { href: "/membership", label: "Membership" },
    { href: "/advisory", label: "Veteran CIO Advisory" },
    { href: "/learning", label: "Learning programmes" },
  ],
  "CXO Lounge": [
    { href: "/about", label: "About us" },
    { href: "/studio", label: "CIO Studio" },
    { href: "/foundation", label: "CIO Foundation" },
    { href: "/partners", label: "Partner with us" },
    { href: "/contact", label: "Contact" },
  ],
  "Pickleball League": [
    { href: "/pickleball-league", label: "India Tour" },
    { href: "/events/cpl-mumbai-2026", label: "Mumbai League" },
    { href: "/pickleball-league#sponsorship", label: "Sponsorship" },
    { href: "/membership/apply?interest=league", label: "Register interest" },
  ],
};

export const headlineStats = [
  { value: "5–7", label: "cities on the India Tour" },
  { value: "250–400", label: "enterprise decision-makers" },
  { value: "CXO-only", label: "CIOs, CTOs and CISOs" },
  { value: "0%", label: "commission on partner deals" },
];

export const principles = [
  {
    title: "Partners are customers. CIOs are peers.",
    body: "Vendors and system integrators sponsor the platform; CIOs are members of the community. The two roles never blur.",
  },
  {
    title: "No commissions, ever",
    body: "We earn from sponsorships and memberships, never from the deals partners close with our members.",
  },
  {
    title: "Nothing is free",
    body: "Every member invests in the platform. It keeps the room serious and the conversations real.",
  },
  {
    title: "Sponsors and delegates, side by side",
    body: "No wall between the two. Partners take part on the same footing as CIOs, so networking is genuine.",
  },
];

export const platforms = [
  {
    key: "lounge",
    name: "CIO Lounge",
    kicker: "The community",
    body: "A multi-platform ecosystem for CIOs and technology leaders: professional engagements, learning, advisory, sport and lifestyle.",
    href: "/membership",
  },
  {
    key: "studio",
    name: "CIO Studio",
    kicker: "Where CIOs speak. Technology connects.",
    body: "The voice of the community: perspectives, conversations and case notes from the people who run India's technology.",
    href: "/studio",
  },
  {
    key: "foundation",
    name: "CIO Foundation",
    kicker: "Future social-impact initiative",
    body: "The giving-back dimension of CIO Lounge, funded by 2% of CIO-vertical revenue.",
    href: "/foundation",
  },
];

export const marketProblem = [
  { value: "~125", label: "CIO forums, media platforms and agencies competing for the same leaders in India" },
  { value: "₹15L", label: "a typical agency quote for a single 15-person CIO roundtable" },
  { value: "~35", label: "genuine buyers at a typical 140-CIO flagship event, pursued by 89 sponsors" },
];
