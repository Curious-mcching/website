import assert from "node:assert/strict";
import test from "node:test";
import { getCurrentNavigationId } from "../src/lib/navigation.ts";

const positions = (tops) => ["expertise", "experience", "challenger", "connect"]
  .map((id, index) => ({ id, top: tops[index] }));

test("no section is marked while the hero or throughline is being read", () => {
  assert.equal(getCurrentNavigationId(positions([900, 1800, 2700, 4200]), 130), null);
});

test("a section becomes current when it reaches the header reading line", () => {
  assert.equal(getCurrentNavigationId(positions([130, 1100, 2200, 3500]), 130), "expertise");
});

test("the latest section crossed replaces the previous current section", () => {
  assert.equal(getCurrentNavigationId(positions([-1100, 120, 1800, 3200]), 130), "experience");
});

test("scrolling back restores the earlier section", () => {
  assert.equal(getCurrentNavigationId(positions([-900, 180, 1900, 3400]), 130), "expertise");
});

test("writing remains grouped with thought leadership until contact is reached", () => {
  assert.equal(getCurrentNavigationId(positions([-3000, -2100, -700, 600]), 130), "challenger");
});

test("a short contact section is current at the page end", () => {
  assert.equal(getCurrentNavigationId(positions([-4000, -3100, -1700, 260]), 130, true), "connect");
});

test("a taller header advances the reading line to match its anchor offset", () => {
  const sections = positions([-1000, 180, 2000, 3500]);
  assert.equal(getCurrentNavigationId(sections, 130), "expertise");
  assert.equal(getCurrentNavigationId(sections, 200), "experience");
});

test("no current location is returned when there are no navigation sections", () => {
  assert.equal(getCurrentNavigationId([], 130), null);
  assert.equal(getCurrentNavigationId([], 130, true), null);
});
