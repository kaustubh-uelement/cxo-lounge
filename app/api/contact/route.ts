import { NextResponse } from "next/server";
import { contactSchema, fieldErrors } from "@/lib/validation";
import { recordSubmission } from "@/lib/submissions";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ ok: false, errors: fieldErrors(parsed.error) }, { status: 422 });
  try {
    const { id } = await recordSubmission("contact", parsed.data);
    return NextResponse.json({ ok: true, id });
  } catch {
    return NextResponse.json({ ok: false, message: "We couldn't save your message. Please try again." }, { status: 502 });
  }
}
