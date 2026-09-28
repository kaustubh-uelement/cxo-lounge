// Server-side handling for form submissions.
// Out of the box this logs submissions and, if configured, forwards them to a webhook
// (Zapier / Make / a CRM endpoint) via SUBMISSIONS_WEBHOOK_URL. Swap in your CRM or email provider here.

export type SubmissionKind = "membership" | "partner" | "contact";

export async function recordSubmission(kind: SubmissionKind, payload: unknown) {
  const entry = { kind, receivedAt: new Date().toISOString(), payload };
  const webhook = process.env.SUBMISSIONS_WEBHOOK_URL;
  if (webhook) {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(entry),
    });
    if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
  } else {
    console.info("[submission]", JSON.stringify(entry));
  }
  return { id: `${kind}-${Date.now().toString(36)}` };
}
