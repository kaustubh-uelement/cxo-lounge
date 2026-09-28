// Partner tiers for the CIO Pickleball League India Tour (from the CXO Lounge sponsorship deck).

export interface SponsorTier {
  id: string;
  name: string;
  price: string;
  priceNote: string;
  slots: string;
  featured?: boolean;
  includes: string[];
}

export const sponsorTiers: SponsorTier[] = [
  {
    id: "title",
    name: "Title",
    price: "₹5 lakh",
    priceNote: "× number of cities",
    slots: "One for the entire tour",
    featured: true,
    includes: [
      "Exclusive rights for the India Tour",
      "Premium branding at every level",
      "Premium position on T-shirt and player kit",
      "5 passes for each location",
      "7 CXO invites per location (player fees apply)",
      "20-CXO breakfast roundtable in every city",
    ],
  },
  {
    id: "platinum",
    name: "Platinum",
    price: "₹4 lakh",
    priceNote: "per city",
    slots: "One per city",
    includes: [
      "City-wise rights for the league",
      "Premium city-wise branding",
      "Branding on T-shirt and player kit",
      "3 passes for the selected city",
      "5 CXO invites per location (player fees apply)",
      "10-CXO breakfast roundtable for selected locations",
      "10% discount for more than one city",
    ],
  },
  {
    id: "team",
    name: "Team Partner",
    price: "₹3 lakh",
    priceNote: "per city",
    slots: "Eight per city",
    includes: [
      "Branding for your team",
      "Branding on the team T-shirt",
      "2 passes for the selected city",
      "3 CXO invites per location (player fees apply)",
      "10% discount for more than one city",
    ],
  },
  {
    id: "associate",
    name: "Associate Partner",
    price: "₹1 lakh",
    priceNote: "per city",
    slots: "Eight per city",
    includes: ["Branding on tournament day", "1 pass for each location"],
  },
];

export const beyondTheCourt = [
  { title: "Roundtable discussions", body: "Exclusive sessions with a select group of 10, 15, 20 or all IT leaders." },
  { title: "Executive networking", body: "Choose your slots: breakfast, executive luncheons, cocktails and dinner." },
  { title: "Product showcases", body: "Direct brand and product exposure to decision-makers." },
];

export const roundtableSteps = [
  { n: "01", title: "Brief", body: "You share your product literature. We match it to about 15 targeted CIOs or CISOs." },
  { n: "02", title: "Prepare", body: "Leaders study it in advance and come with their pros and cons." },
  { n: "03", title: "Present", body: "A 15–25 minute product capsule from your product head. Never longer." },
  { n: "04", title: "Brainstorm", body: "A member CIO moderates an open discussion of real pain points." },
  { n: "05", title: "Commit", body: "Leaders who share the pain point step forward for a proof of concept." },
];
