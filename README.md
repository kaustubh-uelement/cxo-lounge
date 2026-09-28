# CIO Lounge: website (CXO Lounge Pvt Ltd)

Next.js 15 (App Router) · TypeScript · Tailwind CSS 3 · Poppins (self-hosted via Fontsource) · Zod · Lucide icons.

## Run it

```bash
npm install
npm run dev          # http://localhost:3000
npm run build && npm start   # production server, with API routes
npm run build:preview        # static export to ./out (no API routes): for a shareable preview
```

Deploys as-is to Vercel (recommended) or any Node host. Set `NEXT_PUBLIC_SITE_URL` to the live domain.

## What's in it

| Route | Purpose |
|---|---|
| `/` | Home: hero with the Mumbai League countdown, events, the problem, three platforms, model, league, benefits, members, partner tiers, CIO Studio, Foundation |
| `/events`, `/events/[slug]` | Every event with search and filters (type, city, registration open); detail pages with run of show, add-to-calendar (.ics), countdown, schema.org Event data |
| `/pickleball-league` | India Tour microsite: format, cities, kit, partners, game day, family zone, sponsorship |
| `/members` | Member directory with search and filters (role, industry, city, league players), plus the advisory council |
| `/membership`, `/membership/apply` | Plans, benefits, eligibility, FAQ; three-step application form (`?plan=` and `?interest=league` pre-fill it) |
| `/partners` | For OEMs, SIs and institutions: roundtable model, sponsorship tiers, bespoke events at cost + 20%, enquiry form |
| `/advisory`, `/learning`, `/studio`, `/foundation`, `/about`, `/contact` | Veteran CIO Advisory, learning programmes, CIO Studio articles, CIO Foundation, founder story, contact form |
| `/api/membership`, `/api/partners`, `/api/contact` | POST, Zod-validated form handlers |
| `/api/events` | GET JSON feed of events (`?type=&city=&status=`) |
| `/sitemap.xml`, `/robots.txt` | SEO |

## Where the content lives

All content is typed data in `/data`: edit these files, no code changes needed:

- `data/site.ts`: contact details, navigation, headline stats, principles, platforms
- `data/events.ts`: the event catalogue (drives the events pages, home page, league page and `/api/events`)
- `data/members.ts`: member directory and advisory council
- `data/membership.ts`: plans, benefits, eligibility, FAQ
- `data/sponsorship.ts`: sponsor tiers, roundtable steps
- `data/studio.ts`: CIO Studio articles

When the catalogue grows, swap these for a CMS (Sanity, Contentful) or a database; pages only import the exported arrays and helpers.

## Form submissions

`lib/submissions.ts` logs each submission and, if `SUBMISSIONS_WEBHOOK_URL` is set, POSTs it there (Zapier, Make, HubSpot, a Google Sheet via Apps Script, etc.). Replace with your CRM or email provider as needed.

## Before launch: placeholders and items to confirm

- **Members and advisors are SAMPLE data** (fictional people and companies). Replace with real members, with their consent.
- Contact email, phone, address, domain and LinkedIn URL in `data/site.ts`.
- Membership fee (₹25,000 is marked indicative) and the Founding Circle / Veteran Advisor terms.
- Mumbai League date (set to 7 Nov 2026 for the countdown; the site says "first week of November, Saturday or Sunday"), venue and player fee (₹5,000–7,000).
- City league and Grand Finale dates.
- Written consent to name the All India Pickleball Association, Vrushali Thakare, ITC, Taj and IIT Bombay.
- Events flagged `sample: true` (roundtables, learning programme) are format examples, shown with a "Sample listing" badge.
- CIO Studio articles are drafts written from the founder's stated views; approve or replace.
- Privacy policy and terms pages (footer links currently point to Contact).

## Suggested next phase

Member login and private profiles (NextAuth or Clerk), online payment for membership and league registration (Razorpay), an admin view of applications, sponsor logo wall, photo galleries per event, and a WhatsApp opt-in for event updates.
