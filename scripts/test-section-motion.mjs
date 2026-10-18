import assert from "node:assert/strict";
import test from "node:test";
import { setupPillarMotion, setupSectionEntrances } from "../src/lib/section-motion.ts";

class Section extends EventTarget {
  attributes = new Map();
  constructor(top) { super(); this.top = top; }
  getBoundingClientRect() { return { top: this.top }; }
  setAttribute(name, value) { this.attributes.set(name, value); }
  removeAttribute(name) { this.attributes.delete(name); }
  getAttribute(name) { return this.attributes.get(name) ?? null; }
}

class Preference extends EventTarget {
  constructor(matches = false) { super(); this.matches = matches; }
  change(matches) { this.matches = matches; this.dispatchEvent(new Event("change")); }
}

function environment(t, supported = true) {
  const originalWindow = globalThis.window;
  const originalObserver = globalThis.IntersectionObserver;
  const observers = [];
  globalThis.window = { innerHeight: 800 };
  globalThis.IntersectionObserver = supported ? class {
    observed = new Set();
    disconnected = false;
    constructor(callback) { this.callback = callback; observers.push(this); }
    observe(element) { this.observed.add(element); }
    unobserve(element) { this.observed.delete(element); }
    disconnect() { this.disconnected = true; this.observed.clear(); }
    enter(target) { this.callback([{ target, isIntersecting: true }]); }
  } : undefined;
  t.after(() => {
    if (originalWindow === undefined) delete globalThis.window;
    else globalThis.window = originalWindow;
    if (originalObserver === undefined) delete globalThis.IntersectionObserver;
    else globalThis.IntersectionObserver = originalObserver;
  });
  return observers;
}

test("sections remain visible before observation and enter only once", (t) => {
  const observers = environment(t);
  const onscreen = new Section(120);
  const below = new Section(1000);
  const stop = setupSectionEntrances([onscreen, below], new Preference());
  assert.equal(onscreen.getAttribute("data-motion"), null);
  assert.equal(below.getAttribute("data-motion"), null);
  assert.deepEqual([...observers[0].observed], [below]);
  observers[0].enter(below);
  assert.equal(below.getAttribute("data-motion"), "enter");
  assert.equal(observers[0].observed.has(below), false);
  below.dispatchEvent(new Event("animationend"));
  observers[0].enter(below);
  assert.equal(below.getAttribute("data-motion"), null);
  stop();
});

test("pillar motion runs only onscreen and cleanup ignores queued entries", (t) => {
  const observers = environment(t);
  const graphic = new Section(1000);
  const stop = setupPillarMotion([graphic], new Preference());
  assert.equal(graphic.getAttribute("data-motion-active"), null);
  observers[0].enter(graphic);
  assert.equal(graphic.getAttribute("data-motion-active"), "");
  observers[0].callback([{ target: graphic, isIntersecting: false }]);
  assert.equal(graphic.getAttribute("data-motion-active"), null);
  stop();
  observers[0].enter(graphic);
  assert.equal(graphic.getAttribute("data-motion-active"), null);
  assert.equal(observers[0].disconnected, true);
});

test("pillar motion respects preference changes and rejects stale observer entries", (t) => {
  const observers = environment(t);
  const graphic = new Section(1000);
  const preference = new Preference(true);
  const stop = setupPillarMotion([graphic], preference);
  assert.equal(observers.length, 0);
  preference.change(false);
  observers[0].enter(graphic);
  assert.equal(graphic.getAttribute("data-motion-active"), "");
  preference.change(true);
  assert.equal(graphic.getAttribute("data-motion-active"), null);
  preference.change(false);
  observers[0].enter(graphic);
  assert.equal(graphic.getAttribute("data-motion-active"), null);
  observers[1].enter(graphic);
  assert.equal(graphic.getAttribute("data-motion-active"), "");
  stop();
});

test("unsupported observation leaves pillar graphics static", (t) => {
  environment(t, false);
  const graphic = new Section(1000);
  const stop = setupPillarMotion([graphic], new Preference());
  assert.equal(graphic.getAttribute("data-motion-active"), null);
  stop();
});

test("reduced motion skips entrances and stops an entrance immediately", (t) => {
  const observers = environment(t);
  const section = new Section(1000);
  const preference = new Preference(true);
  const stop = setupSectionEntrances([section], preference);
  assert.equal(observers.length, 0);
  assert.equal(section.getAttribute("data-motion"), null);
  preference.change(false);
  observers[0].enter(section);
  assert.equal(section.getAttribute("data-motion"), "enter");
  preference.change(true);
  assert.equal(section.getAttribute("data-motion"), null);
  assert.equal(observers[0].disconnected, true);
  preference.change(false);
  assert.equal(observers[1].observed.size, 0, "Changing preferences must not replay a section.");
  stop();
});

test("unsupported observation leaves all content visible", (t) => {
  environment(t, false);
  const section = new Section(1000);
  const stop = setupSectionEntrances([section], new Preference());
  assert.equal(section.getAttribute("data-motion"), null);
  stop();
});

test("keyboard focus cancels an entrance and cleanup rejects queued callbacks", (t) => {
  const observers = environment(t);
  const section = new Section(1000);
  const focusedBeforeEntry = new Section(1200);
  const preference = new Preference();
  const stop = setupSectionEntrances([section, focusedBeforeEntry], preference);
  focusedBeforeEntry.dispatchEvent(new Event("focusin"));
  observers[0].enter(focusedBeforeEntry);
  assert.equal(focusedBeforeEntry.getAttribute("data-motion"), null);
  observers[0].enter(section);
  section.dispatchEvent(new Event("focusin"));
  assert.equal(section.getAttribute("data-motion"), null);
  stop();
  const unmounted = new Section(1200);
  observers[0].enter(unmounted);
  preference.change(true);
  preference.change(false);
  assert.equal(unmounted.getAttribute("data-motion"), null);
  assert.equal(observers.length, 1);
});
