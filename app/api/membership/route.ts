import { NextResponse } from "next/server";
import { membershipSchema, fieldErrors } from "@/lib/validation";
import { recordSubmission } from "@/lib/submissions";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const parsed = membershipSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ ok: false, errors: fieldErrors(parsed.error) }, { status: 422 });
  try {
    const { id } = await recordSubmission("membership", parsed.data);
    return NextResponse.json({ ok: true, id });
  } catch {
    return NextResponse.json({ ok: false, message: "We couldn't save your application. Please try again." }, { status: 502 });
  }
}
