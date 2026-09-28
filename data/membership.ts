// Membership plans, benefits and FAQ. Fees marked "indicative" should be confirmed before launch.

export const memberBenefits = [
  { icon: "users", title: "Professional engagements", body: "Curated roundtables where you shape products, not sit through pitches." },
  { icon: "graduation", title: "Learning with top institutions", body: "Residential programmes designed with faculty, subsidised by partners." },
  { icon: "trophy", title: "Sports", body: "The CIO Pickleball League India Tour, coaching and member tournaments." },
  { icon: "heart", title: "Health and wellness", body: "Wellness zones, fitness sessions and health programmes." },
  { icon: "sparkles", title: "Lifestyle", body: "Hospitality with ITC and Taj, and experiences worth your weekend." },
  { icon: "home", title: "Family and wealth programmes", body: "Family days, kids' activities and wealth sessions." },
  { icon: "key", title: "Premium concierge", body: "A dedicated desk for event logistics and member requests." },
  { icon: "plane", title: "Travel perks", body: "Destination events, starting with the National Grand Finale." },
  { icon: "party", title: "Recreation and entertainment", body: "Live entertainment, celebrations and member evenings." },
  { icon: "shield", title: "Veteran CIO advisory", body: "Access to a panel of retired CIOs for independent counsel." },
] as const;

export interface Plan {
  id: string;
  name: string;
  price: string;
  cadence?: string;
  note?: string;
  audience: string;
  cta: string;
  href: string;
  highlight?: boolean;
  features: string[];
}

export const plans: Plan[] = [
  {
    id: "member",
    name: "Member",
    price: "₹25,000",
    cadence: "per year",
    note: "Indicative fee",
    audience: "CIOs, CTOs, CISOs and CDOs of enterprises",
    cta: "Apply for membership",
    href: "/membership/apply?plan=member",
    features: [
      "Invitations to curated roundtables in your city and industry",
      "Priority registration for the CIO Pickleball League",
      "Member rates for learning programmes",
      "Wellness, lifestyle and family events",
      "Listing in the member directory",
      "Access to CIO Studio features and conversations",
    ],
  },
  {
    id: "founding",
    name: "Founding Circle",
    price: "By invitation",
    audience: "The first cohort of members who help shape CIO Lounge",
    cta: "Request an invitation",
    href: "/membership/apply?plan=founding",
    highlight: true,
    features: [
      "Everything in Member",
      "Moderator seats at roundtables",
      "Founding recognition at the India Tour and Grand Finale",
      "A voice in the programme calendar",
      "Priority access to destination events",
      "Nomination rights for new members",
    ],
  },
  {
    id: "veteran",
    name: "Veteran Advisor",
    price: "Application-based",
    audience: "Retired CIOs and technology leaders",
    cta: "Apply to advise",
    href: "/membership/apply?plan=veteran",
    features: [
      "Join the Veteran CIO Advisory panel",
      "Paid advisory engagements with client organisations",
      "Never commissioned by vendors",
      "Mentor members and moderate sessions",
      "Invitations to community events",
    ],
  },
];

export const eligibility = [
  "You lead technology for an enterprise — CIO, CTO, CISO, CDO or head of IT.",
  "CIO Lounge is for the top layer only, not one level below.",
  "Vendors, OEMs and system integrators join as partners, not members.",
];

export const membershipFaq = [
  {
    q: "Why is there a membership fee?",
    a: "Nothing on CIO Lounge is free. A fee keeps the community committed and the conversations serious — and it means our members are never the product.",
  },
  {
    q: "Do partners pay commissions on deals with members?",
    a: "No. CIO Lounge earns from sponsorships and memberships only. We never take a commission on deals between partners and members.",
  },
  {
    q: "Can vendors or system integrators become members?",
    a: "Partners take part through sponsorship tiers, which put them in the room on the same footing as members. Membership itself is reserved for enterprise technology leaders.",
  },
  {
    q: "Do I need to play pickleball?",
    a: "No. The league is one part of the platform. Many members join for roundtables, learning and advisory — though pickleball is easy to learn if you want to try.",
  },
  {
    q: "Can my family join events?",
    a: "Yes. Game days include an optional family zone, and spouses are invited to league finals and selected evenings.",
  },
];
