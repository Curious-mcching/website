import assert from "node:assert/strict";
import { lstat, readFile, realpath, rm } from "node:fs/promises";
import path from "node:path";

const production = process.argv.includes("--production");
const base = process.argv.find((arg) => /^https?:\/\//.test(arg)) ?? "http://localhost:3000";
const url = new URL(base);
assert.ok(["localhost", "127.0.0.1"].includes(url.hostname), "Tests must run against a local server.");
const root = path.resolve("content/povs");
const marker = `Temporary publishing verification ${Date.now()}`;
const fixture = Buffer.from("%PDF-1.4\n% Temporary API validation fixture, not a published paper\n%%EOF\n");
const ids = [];

function form(overrides = {}, bytes = fixture, filename = "verification.pdf") {
  const data = new FormData();
  const fields = { title: marker, summary: "A temporary introduction for publication verification.", experience: "This is a disposable software verification record, not Michelle's writing.", kind: "Point of view", pillar: "challenger", ...overrides };
  for (const [key, value] of Object.entries(fields)) data.set(key, value);
  if (bytes !== null) data.set("file", new Blob([bytes], { type: "application/pdf" }), filename);
  return data;
}

async function post(data, origin = url.origin) {
  return fetch(new URL("/api/povs", url), { method: "POST", headers: { Origin: origin }, body: data });
}

try {
  const beforeResponse = await fetch(new URL("/api/povs", url));
  assert.equal(beforeResponse.status, 200);
  const before = await beforeResponse.json();
  assert.ok(Array.isArray(before));

  if (production) {
    assert.equal((await post(form())).status, 404, "Production uploads must be disabled.");
    assert.equal((await fetch(new URL("/studio", url))).status, 404, "Production studio must be disabled.");
    console.log("PASS: production library is readable; studio and uploads are disabled.");
  } else {
    assert.equal((await post(form(), "https://example.com")).status, 403, "Cross-origin uploads must be rejected.");
    assert.equal((await post(form({ title: "x" }))).status, 400, "Short titles must be rejected.");
    assert.equal((await post(form({ summary: "short" }))).status, 400, "Short summaries must be rejected.");
    assert.equal((await post(form({ experience: "short" }))).status, 400, "Added experience notes must meet the minimum length.");
    assert.equal((await post(form({ kind: "Unknown" }))).status, 400, "Unknown formats must be rejected.");
    assert.equal((await post(form({ pillar: "Unknown" }))).status, 400, "Unknown pillars must be rejected.");
    assert.equal((await post(form({ kind: "Paper" }, null))).status, 400, "Papers must include a PDF.");
    assert.equal((await post(form({}, Buffer.from("not a PDF")))).status, 400, "Fake PDF headers must be rejected.");
    assert.equal((await post(form({}, fixture, "verification.txt"))).status, 400, "Non-PDF filenames must be rejected.");
    assert.equal((await post(form({}, Buffer.alloc(10 * 1024 * 1024 + 1)))).status, 400, "Oversized files must be rejected.");
    assert.equal((await fetch(new URL("/api/povs/not-an-id", url))).status, 404);

    const created = await post(form());
    const createdRecord = await created.json();
    assert.equal(created.status, 201, JSON.stringify(createdRecord));
    const id = createdRecord.id;
    ids.push(id);
    assert.match(id, /^[0-9a-f-]{36}$/);
    const after = await fetch(new URL("/api/povs", url)).then((response) => response.json());
    const record = after.find((pov) => pov.title === marker);
    assert.ok(record, "Published record must appear on a fresh request.");
    assert.equal(record.id, id);
    assert.equal(after.length, before.length + 1);
    const metadata = JSON.parse(await readFile(path.join(root, id, "metadata.json"), "utf8"));
    assert.equal(metadata.title, marker);
    assert.equal(metadata.experience, "This is a disposable software verification record, not Michelle's writing.");
    assert.equal(metadata.pillar, "challenger");
    assert.equal(metadata.hasPdf, true);
    const pdf = await fetch(new URL(`/api/povs/${id}`, url));
    assert.equal(pdf.status, 200);
    assert.equal(pdf.headers.get("content-type"), "application/pdf");
    assert.equal(pdf.headers.get("x-content-type-options"), "nosniff");
    assert.deepEqual(Buffer.from(await pdf.arrayBuffer()), fixture);

    for (const [kind, pillar] of [["Idea", "human-machine"], ["Perspective", "reinvention"], ["Point of view", "challenger"], ["Paper", "reinvention"]]) {
      const response = await post(form({ kind, pillar, experience: "" }, kind === "Paper" ? fixture : null));
      const piece = await response.json();
      assert.equal(response.status, 201, JSON.stringify(piece));
      ids.push(piece.id);
      assert.equal(piece.pillar, pillar);
      assert.equal(piece.kind, kind);
      assert.equal(piece.hasPdf, kind === "Paper");
      assert.equal(piece.experience, "");
      const persisted = JSON.parse(await readFile(path.join(root, piece.id, "metadata.json"), "utf8"));
      assert.equal(persisted.hasPdf, kind === "Paper");
      const attachment = await fetch(new URL(`/api/povs/${piece.id}`, url));
      assert.equal(attachment.status, kind === "Paper" ? 200 : 404, "Notes must not expose a missing PDF link.");
    }
    const collection = await fetch(new URL("/api/povs", url)).then((response) => response.json());
    assert.equal(collection.length, before.length + ids.length);
    for (const id of ids) assert.ok(collection.some((piece) => piece.id === id));
    console.log("PASS: validation, origin protection, all three pillars, all four formats, optional experience/PDF, persistence, and PDF serving.");
  }
} finally {
  for (const id of ids) {
    const target = path.resolve(root, id);
    assert.ok(target.startsWith(root + path.sep), "Cleanup must stay within content/povs.");
    assert.equal(await realpath(target), target, "Cleanup target must not be a redirected directory.");
    assert.equal((await lstat(target)).isSymbolicLink(), false);
    const metadata = JSON.parse(await readFile(path.join(target, "metadata.json"), "utf8"));
    assert.equal(metadata.title, marker, "Only this test's temporary record may be removed.");
    await rm(target, { recursive: true });
  }
  if (ids.length) {
    const remaining = await fetch(new URL("/api/povs", url)).then((response) => response.json());
    assert.ok(!remaining.some((pov) => ids.includes(pov.id)));
    console.log("PASS: temporary fixtures removed; original writing library preserved.");
  }
}
