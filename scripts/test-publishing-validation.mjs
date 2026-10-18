import assert from "node:assert/strict";
import test from "node:test";
import { validatePublishingFields } from "../src/lib/publishing-validation.ts";

const valid = { title: "An idea", summary: "A considered introduction for this idea.", experience: "", kind: "Idea", file: null };

test("missing text receives specific field errors", () => {
  assert.deepEqual(Object.keys(validatePublishingFields({ ...valid, title: " ", summary: "short" })), ["title", "summary"]);
});

test("text limits accept their boundaries and reject overflow", () => {
  for (const [field, min, max] of [["title", 3, 120], ["summary", 20, 600], ["experience", 20, 1500]]) {
    for (const length of [min, max]) assert.equal(validatePublishingFields({ ...valid, [field]: "x".repeat(length) })[field], undefined);
    for (const length of [min - 1, max + 1]) assert.ok(validatePublishingFields({ ...valid, [field]: "x".repeat(length) })[field]);
  }
});

test("optional whitespace notes are accepted and required text is trimmed", () => {
  assert.deepEqual(validatePublishingFields({ ...valid, experience: "   " }), {});
  assert.ok(validatePublishingFields({ ...valid, title: " x " }).title);
  assert.ok(validatePublishingFields({ ...valid, summary: " short " }).summary);
});

test("only papers require a PDF", () => {
  for (const kind of ["Idea", "Perspective", "Point of view"]) assert.equal(validatePublishingFields({ ...valid, kind }).file, undefined);
  assert.ok(validatePublishingFields({ ...valid, kind: "Paper" }).file);
  assert.ok(validatePublishingFields({ ...valid, kind: "Paper", file: { name: "", size: 0 } }).file);
});

test("PDF names and size boundaries are validated consistently", () => {
  assert.equal(validatePublishingFields({ ...valid, kind: "Paper", file: { name: "paper.PDF", size: 10 * 1024 * 1024 } }).file, undefined);
  assert.ok(validatePublishingFields({ ...valid, file: { name: "paper.txt", size: 1 } }).file);
  assert.ok(validatePublishingFields({ ...valid, file: { name: "paper.pdf", size: 10 * 1024 * 1024 + 1 } }).file);
});
