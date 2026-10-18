import { createHash } from "node:crypto";
import { contactEmail, conversations, validateContact, type ContactFields } from "@/lib/contact";

const maxBytes = 32 * 1024;
const attempts = new Map<string, { count: number; until: number }>();
let minute = { count: 0, until: 0 };
const unavailable = "The form is temporarily unavailable. Your message hasn’t been sent. Please use email or LinkedIn for now.";
const failed = "Your message couldn’t be confirmed as sent. Your draft is still here—please retry, or use email or LinkedIn.";
const json = (body: object, status = 200, headers?: Record<string, string>) => Response.json(body, { status, headers: { "Cache-Control": "no-store", ...headers } });

function configuration() {
  const key = process.env.RESEND_API_KEY?.trim();
  const from = process.env.CONTACT_FROM_EMAIL?.trim();
  return key && from && !/[\r\n]/.test(from) ? { key, from } : null;
}

export async function GET(request: Request) {
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) return json({ error: "Please use this website’s contact form." }, 403);
  return json({ available: configuration() !== null });
}

export async function POST(request: Request) {
  if (request.headers.get("origin") !== new URL(request.url).origin) return json({ error: "Please send your message from this website." }, 403);
  if (request.headers.get("content-type")?.split(";")[0].trim() !== "application/json") return json({ error: "The message could not be read. Please refresh the page and try again." }, 415);
  if (Number(request.headers.get("content-length")) > maxBytes) return json({ error: "This message is too large. Please keep it within 5,000 characters." }, 413);

  let body: Record<string, unknown>;
  try {
    const reader = request.body?.getReader();
    if (!reader) return json({ error: "Please complete the contact form." }, 400);
    const decoder = new TextDecoder();
    let raw = "";
    let bytes = 0;
    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        bytes += value.byteLength;
        if (bytes > maxBytes) { await reader.cancel(); return json({ error: "This message is too large. Please keep it within 5,000 characters." }, 413); }
        raw += decoder.decode(value, { stream: true });
      }
      raw += decoder.decode();
    } finally { reader.releaseLock(); }
    body = JSON.parse(raw);
    if (!body || typeof body !== "object" || Array.isArray(body)) return json({ error: "Please complete the contact form." }, 400);
  } catch { return json({ error: "The message could not be read. Please refresh the page and try again." }, 400); }

  if (body.website) return json({ error: "Your message couldn’t be sent. Please use email or LinkedIn." }, 400);
  const fields = {} as ContactFields;
  for (const field of ["name", "email", "organization", "conversation", "message"] as const) {
    if (field === "organization" && body[field] === undefined) { fields[field] = ""; continue; }
    if (typeof body[field] !== "string") return json({ error: "Please complete the contact form using text in each field." }, 400);
    fields[field] = body[field].trim();
  }
  const errors = validateContact(fields);
  if (Object.keys(errors).length) return json({ error: "Please check the highlighted fields.", errors }, 400);
  if (typeof body.submissionId !== "string" || !/^[\da-f]{8}-[\da-f]{4}-4[\da-f]{3}-[89ab][\da-f]{3}-[\da-f]{12}$/i.test(body.submissionId)) return json({ error: "Please refresh the page before sending your message." }, 400);
  const config = configuration();
  if (!config) return json({ error: unavailable }, 503);

  // Best-effort process-local limits. Deployments with multiple instances also
  // need their host's shared rate limit/WAF; no raw email or IP is retained here.
  const now = Date.now();
  for (const [key, value] of attempts) if (value.until <= now) attempts.delete(key);
  if (minute.until <= now) minute = { count: 0, until: now + 60_000 };
  const sender = createHash("sha256").update(fields.email.toLowerCase()).digest("hex");
  const previous = attempts.get(sender) ?? { count: 0, until: now + 600_000 };
  if (minute.count >= 20 || previous.count >= 6 || (!attempts.has(sender) && attempts.size >= 500)) return json({ error: "There have been several attempts. Please try again in 10 minutes, or use email or LinkedIn." }, 429, { "Retry-After": "600" });
  attempts.set(sender, { count: previous.count + 1, until: previous.until });
  minute.count += 1;

  const type = conversations.find((option) => option.value === fields.conversation)!;
  const idempotencyKey = createHash("sha256").update(body.submissionId + JSON.stringify(fields)).digest("hex");
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${config.key}`, "Content-Type": "application/json", "Idempotency-Key": `contact/${idempotencyKey}` },
      body: JSON.stringify({ from: config.from, to: [contactEmail], reply_to: fields.email, subject: `Website conversation: ${type.label}`, text: [`Conversation: ${type.label}`, `Name: ${fields.name}`, `Email: ${fields.email}`, `Organization: ${fields.organization || "Not provided"}`, "", fields.message].join("\n") }),
      signal: AbortSignal.timeout(12000),
    });
    if (!response.ok) return json({ error: failed }, 502);
    const result = await response.json();
    if (typeof result.id !== "string" || !result.id) return json({ error: failed }, 502);
    return json({ sent: true });
  } catch { return json({ error: failed }, 502); }
}
