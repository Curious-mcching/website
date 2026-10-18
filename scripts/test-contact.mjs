import assert from "node:assert/strict";
import { registerHooks } from "node:module";
import { randomUUID } from "node:crypto";
import { afterEach, beforeEach, mock, test } from "node:test";

// Resolve the app's existing alias without changing its TypeScript configuration.
registerHooks({ resolve(specifier, context, nextResolve) {
  return nextResolve(specifier.startsWith("@/") ? new URL(`../src/${specifier.slice(2)}.ts`, import.meta.url).href : specifier, context);
} });
const { POST, GET } = await import("../src/app/api/contact/route.ts");
const { validateContact, conversations, contactHref, contactEmail } = await import("../src/lib/contact.ts");
const environment = { RESEND_API_KEY: process.env.RESEND_API_KEY, CONTACT_FROM_EMAIL: process.env.CONTACT_FROM_EMAIL };
let clock = Date.now();
const valid = { name: "Avery Example", email: "avery@example.test", organization: "", conversation: "executive", message: "I would like to discuss an executive opportunity.", website: "", submissionId: randomUUID() };

beforeEach(() => {
  // Fake delivery only. This suite cannot call the real provider.
  process.env.RESEND_API_KEY = "verification-only-not-a-credential";
  process.env.CONTACT_FROM_EMAIL = "Verification <sender@example.test>";
  clock += 601_000;
  mock.method(Date, "now", () => clock);
  mock.method(globalThis, "fetch", async () => Response.json({ id: "verification-provider-acknowledgement" }));
});
afterEach(() => {
  mock.restoreAll();
  for (const [key, value] of Object.entries(environment)) {
    if (value === undefined) delete process.env[key]; else process.env[key] = value;
  }
});

function request(overrides = {}, headers = {}, raw) {
  return new Request("https://website.example/api/contact", { method: "POST", headers: { Origin: "https://website.example", "Content-Type": "application/json", ...headers }, body: raw ?? JSON.stringify({ ...valid, ...overrides }) });
}

const availability = () => GET(new Request("https://website.example/api/contact"));

test("required fields and optional organization have specific validation", () => {
  assert.deepEqual(validateContact(valid), {});
  const errors = validateContact({ ...valid, name: " ", email: "bad", message: " " });
  assert.deepEqual(Object.keys(errors), ["name", "email", "message"]);
  assert.ok(errors.email.includes("name@company.com"));
  assert.deepEqual(validateContact({ ...valid, name: " Élodie ", message: "A question", organization: " " }), {});
});

test("length, header injection and conversation choices are validated", () => {
  for (const [field, length] of [["name", 100], ["organization", 150], ["message", 5000]]) {
    assert.equal(validateContact({ ...valid, [field]: "x".repeat(length) })[field], undefined);
    assert.ok(validateContact({ ...valid, [field]: "x".repeat(length + 1) })[field]);
  }
  for (const email of ["person", "person@", "person@example.test\r\nBcc: other@example.test", "one@example.test,two@example.test"]) assert.ok(validateContact({ ...valid, email }).email);
  assert.ok(validateContact({ ...valid, name: "A\r\nB" }).name);
  assert.ok(validateContact({ ...valid, conversation: "unrecognized" }).conversation);
  for (const option of conversations) assert.equal(validateContact({ ...valid, conversation: option.value }).conversation, undefined);
  assert.equal(contactHref("advisory"), "/?conversation=advisory#connect");
  assert.equal(contactHref(), "/#connect");
});

test("cross-origin, missing-origin and unsupported requests never send", async () => {
  for (const origin of ["https://unrelated.example", "null", ""]) assert.equal((await POST(request({}, { Origin: origin }))).status, 403);
  assert.equal((await POST(request({}, { "Content-Type": "text/plain" }))).status, 415);
  assert.equal(globalThis.fetch.mock.calls.length, 0);
});

test("malformed, nontext and invalid fields receive errors before delivery", async () => {
  for (const body of ["{bad", "null", "[]", JSON.stringify({ ...valid, name: {} })]) assert.equal((await POST(request({}, {}, body))).status, 400);
  const response = await POST(request({ name: "", message: "", conversation: "wrong" }));
  assert.equal(response.status, 400);
  assert.deepEqual(Object.keys((await response.json()).errors), ["name", "conversation", "message"]);
  assert.equal((await POST(request({ submissionId: "invalid" }))).status, 400);
  assert.equal(globalThis.fetch.mock.calls.length, 0);
});

test("honeypot and declared or streamed oversized requests are rejected honestly", async () => {
  const spam = await POST(request({ website: "https://spam.example" }));
  assert.equal(spam.status, 400);
  assert.equal((await spam.json()).sent, undefined);
  assert.equal((await POST(request({}, { "Content-Length": "40000" }))).status, 413);
  assert.equal((await POST(request({}, {}, JSON.stringify({ ...valid, message: "x".repeat(40000) })))).status, 413);
  assert.equal(globalThis.fetch.mock.calls.length, 0);
});

test("missing service configuration reports unavailable and never reports success", async () => {
  for (const key of ["RESEND_API_KEY", "CONTACT_FROM_EMAIL"]) {
    const original = process.env[key]; delete process.env[key];
    assert.deepEqual(await (await availability()).json(), { available: false });
    const response = await POST(request());
    assert.equal(response.status, 503);
    assert.equal((await response.json()).sent, undefined);
    process.env[key] = original;
  }
  assert.equal(globalThis.fetch.mock.calls.length, 0);
});

test("acknowledged delivery uses the existing recipient, plain text and visitor reply-to", async () => {
  assert.deepEqual(await (await availability()).json(), { available: true });
  const response = await POST(request({ organization: "Example team", message: "An idea <not HTML>\nA second line." }));
  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { sent: true });
  const [url, options] = globalThis.fetch.mock.calls[0].arguments;
  const payload = JSON.parse(options.body);
  assert.equal(url, "https://api.resend.com/emails");
  assert.deepEqual(payload.to, [contactEmail]);
  assert.equal(payload.reply_to, valid.email);
  assert.equal(payload.from, process.env.CONTACT_FROM_EMAIL);
  assert.ok(payload.text.includes("An idea <not HTML>\nA second line."));
  assert.equal(payload.html, undefined);
  assert.equal(payload.cc, undefined); assert.equal(payload.bcc, undefined);
  assert.equal(response.headers.get("cache-control"), "no-store");
});

test("identical retries reuse provider idempotency while edited drafts get a new key", async () => {
  await POST(request()); await POST(request()); await POST(request({ message: "An updated question worth exploring." }));
  const keys = globalThis.fetch.mock.calls.map((call) => call.arguments[1].headers["Idempotency-Key"]);
  assert.equal(keys[0], keys[1]); assert.notEqual(keys[1], keys[2]);
});

test("provider errors, ambiguous acknowledgements and network failure never report success", async () => {
  for (const result of [new Response("private provider error", { status: 403 }), Response.json({}), Response.json({ id: "" })]) {
    globalThis.fetch.mock.mockImplementation(async () => result);
    const response = await POST(request());
    assert.equal(response.status, 502);
    const body = await response.json();
    assert.equal(body.sent, undefined); assert.ok(!body.error.includes("private provider error"));
  }
  globalThis.fetch.mock.mockImplementation(async () => { throw new Error("verification network failure"); });
  assert.equal((await POST(request())).status, 502);
});

test("sender and process limits reject excess messages before reaching the provider", async () => {
  for (let index = 0; index < 6; index++) assert.equal((await POST(request())).status, 200);
  const limited = await POST(request());
  assert.equal(limited.status, 429); assert.equal(limited.headers.get("retry-after"), "600");
  assert.equal(globalThis.fetch.mock.calls.length, 6);
  clock += 601_000;
  assert.equal((await POST(request())).status, 200);
  for (let index = 1; index < 20; index++) assert.equal((await POST(request({ email: `sender${index}@example.test` }))).status, 200);
  assert.equal((await POST(request({ email: "new@example.test" }))).status, 429);
});
