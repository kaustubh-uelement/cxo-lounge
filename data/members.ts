// Member directory.
// IMPORTANT: every profile below is a SAMPLE using fictional people and fictional companies, so the
// directory can be designed and tested. Replace with real members (with their consent) before launch.

export type Industry =
  | "Banking & Financial Services"
  | "Insurance"
  | "Capital Markets"
  | "Manufacturing"
  | "Healthcare & Pharma"
  | "Retail & Consumer"
  | "Telecom & Media"
  | "Logistics";

export type Role = "CIO" | "CTO" | "CISO" | "CDO";

export interface Member {
  id: string;
  name: string;
  role: Role;
  title: string;
  company: string;
  industry: Industry;
  city: string;
  memberSince: number;
  tier: "Founding Circle" | "Member" | "Veteran Advisor";
  interests: string[];
  league?: boolean;
  sample: true;
}

export const members: Member[] = [
  { id: "m01", name: "Aarav Deshmukh", role: "CIO", title: "Chief Information Officer", company: "Woodgrove Bank", industry: "Banking & Financial Services", city: "Mumbai", memberSince: 2026, tier: "Founding Circle", interests: ["Core banking", "Cloud"], league: true, sample: true },
  { id: "m02", name: "Meera Iyer", role: "CISO", title: "Chief Information Security Officer", company: "Contoso Insurance", industry: "Insurance", city: "Mumbai", memberSince: 2026, tier: "Founding Circle", interests: ["Zero trust", "DPDP compliance"], league: true, sample: true },
  { id: "m03", name: "Rohan Kulkarni", role: "CTO", title: "Chief Technology Officer", company: "Proseware Capital", industry: "Capital Markets", city: "Mumbai", memberSince: 2026, tier: "Member", interests: ["Low-latency trading", "AI"], league: true, sample: true },
  { id: "m04", name: "Ananya Rao", role: "CDO", title: "Chief Digital Officer", company: "Adventure Works Retail", industry: "Retail & Consumer", city: "Bangalore", memberSince: 2026, tier: "Member", interests: ["Customer data", "Commerce platforms"], sample: true },
  { id: "m05", name: "Vikram Sethi", role: "CIO", title: "Group CIO", company: "Fabrikam Pharma", industry: "Healthcare & Pharma", city: "Ahmedabad", memberSince: 2026, tier: "Member", interests: ["GxP systems", "Manufacturing IT"], league: true, sample: true },
  { id: "m06", name: "Farah Sheikh", role: "CISO", title: "Head of Cyber Security", company: "Litware Telecom", industry: "Telecom & Media", city: "Delhi", memberSince: 2026, tier: "Member", interests: ["SOC", "Quantum-safe security"], sample: true },
  { id: "m07", name: "Karthik Subramanian", role: "CIO", title: "Chief Information Officer", company: "Tailspin Logistics", industry: "Logistics", city: "Chennai", memberSince: 2026, tier: "Member", interests: ["Fleet telematics", "ERP"], league: true, sample: true },
  { id: "m08", name: "Neha Bhatt", role: "CTO", title: "Chief Technology Officer", company: "Northwind Financial", industry: "Banking & Financial Services", city: "Pune", memberSince: 2026, tier: "Member", interests: ["Platform engineering", "DevSecOps"], sample: true },
  { id: "m09", name: "Sanjay Menon", role: "CIO", title: "Chief Information Officer", company: "Coho Manufacturing", industry: "Manufacturing", city: "Pune", memberSince: 2026, tier: "Founding Circle", interests: ["Industry 4.0", "OT security"], league: true, sample: true },
  { id: "m10", name: "Priya Nair", role: "CISO", title: "Chief Information Security Officer", company: "Woodgrove Securities", industry: "Capital Markets", city: "Mumbai", memberSince: 2026, tier: "Member", interests: ["Identity", "Cyber resilience"], league: true, sample: true },
  { id: "m11", name: "Arjun Malhotra", role: "CTO", title: "Chief Technology Officer", company: "Wide World Importers", industry: "Retail & Consumer", city: "Delhi", memberSince: 2026, tier: "Member", interests: ["Supply chain", "Data platforms"], sample: true },
  { id: "m12", name: "Lakshmi Reddy", role: "CIO", title: "Chief Information Officer", company: "Lucerne Health", industry: "Healthcare & Pharma", city: "Hyderabad", memberSince: 2026, tier: "Member", interests: ["Hospital systems", "AI in care"], league: true, sample: true },
];

export const advisors = [
  { id: "a01", name: "Rajesh Varma", formerly: "Former Group CIO, a leading private bank", focus: ["Core banking transformation", "Vendor governance"], sample: true },
  { id: "a02", name: "Sunita Joshi", formerly: "Former CISO, a national insurer", focus: ["Security programme design", "Regulatory audits"], sample: true },
  { id: "a03", name: "Anil Khanna", formerly: "Former CTO, a listed manufacturing group", focus: ["ERP and OT modernisation", "Cost optimisation"], sample: true },
] as const;

export const industries = Array.from(new Set(members.map((m) => m.industry))).sort();
export const memberCities = Array.from(new Set(members.map((m) => m.city))).sort();
export const roles: Role[] = ["CIO", "CTO", "CISO", "CDO"];
