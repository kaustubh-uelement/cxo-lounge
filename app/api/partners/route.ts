import { NextResponse } from "next/server";
import { partnerSchema, fieldErrors } from "@/lib/validation";
import { recordSubmission } from "@/lib/submissions";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const parsed = partnerSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ ok: false, errors: fieldErrors(parsed.error) }, { status: 422 });
  try {
    const { id } = await recordSubmission("partner", parsed.data);
    return NextResponse.json({ ok: true, id });
  } catch {
    return NextResponse.json({ ok: false, message: "We couldn't save your enquiry. Please try again." }, { status: 502 });
  }
}
