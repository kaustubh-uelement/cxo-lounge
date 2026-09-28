import { z } from "zod";

export const membershipSchema = z.object({
  plan: z.enum(["member", "founding", "veteran"]),
  fullName: z.string().trim().min(2, "Please enter your full name"),
  email: z.string().trim().email("Please enter a valid work email"),
  phone: z.string().trim().min(8, "Please enter a phone number"),
  role: z.enum(["CIO", "CTO", "CISO", "CDO", "Head of IT", "Former CIO / retired"], {
    errorMap: () => ({ message: "Please choose your role" }),
  }),
  company: z.string().trim().min(2, "Please enter your organisation"),
  industry: z.string().trim().min(2, "Please choose an industry"),
  city: z.string().trim().min(2, "Please enter your city"),
  linkedin: z.string().trim().url("Please enter a full LinkedIn URL").optional().or(z.literal("")),
  interests: z.array(z.string()).default([]),
  referredBy: z.string().trim().optional(),
  consent: z.literal(true, { errorMap: () => ({ message: "Please accept to continue" }) }),
});
export type MembershipApplication = z.infer<typeof membershipSchema>;

export const partnerSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name"),
  email: z.string().trim().email("Please enter a valid work email"),
  phone: z.string().trim().min(8, "Please enter a phone number"),
  company: z.string().trim().min(2, "Please enter your company"),
  companyType: z.enum(["OEM", "System integrator", "ISV / SaaS", "Institution", "Other"], {
    errorMap: () => ({ message: "Please choose a company type" }),
  }),
  interest: z.array(z.string()).min(1, "Pick at least one"),
  cities: z.array(z.string()).default([]),
  message: z.string().trim().max(2000).optional(),
});
export type PartnerEnquiry = z.infer<typeof partnerSchema>;

export const contactSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your name"),
  email: z.string().trim().email("Please enter a valid email"),
  topic: z.string().trim().min(2),
  message: z.string().trim().min(10, "Please add a few words").max(2000),
});
export type ContactMessage = z.infer<typeof contactSchema>;

export function fieldErrors(err: z.ZodError) {
  const out: Record<string, string> = {};
  for (const issue of err.issues) {
    const key = issue.path.join(".");
    if (!out[key]) out[key] = issue.message;
  }
  return out;
}
