import assert from "node:assert/strict";
import test from "node:test";
import { challengerFilms, enterpriseFilms, resetOnStoryClose } from "../src/lib/challenger-films.ts";

class Story extends EventTarget {
  open = true;
}

test("the showcase uses the three films Michelle supplied, in her order", () => {
  assert.deepEqual(challengerFilms.map(({ id }) => id), ["E--NWILp_nw", "npL8TevDrv4", "LX-UL1Bl6QU"]);
});

test("the enterprise story uses Michelle's RBC film separately from the HSBC showcase", () => {
  assert.deepEqual(enterpriseFilms.map(({ id }) => id), ["5uV9dMYaNcc"]);
  assert.ok(enterpriseFilms.every(({ id }) => challengerFilms.every((film) => film.id !== id)));
});

test("opening the story does not interrupt a selected film", () => {
  const story = new Story();
  let selected = challengerFilms[0].id;
  const cleanup = resetOnStoryClose(story, () => { selected = null; });
  story.dispatchEvent(new Event("toggle"));
  assert.equal(selected, challengerFilms[0].id);
  cleanup();
});

test("closing the story clears any selected film, including native group closure", () => {
  for (const film of [...challengerFilms, ...enterpriseFilms]) {
    const story = new Story();
    let selected = film.id;
    const cleanup = resetOnStoryClose(story, () => { selected = null; });
    story.open = false;
    story.dispatchEvent(new Event("toggle"));
    assert.equal(selected, null);
    cleanup();
  }
});

test("closing one story clears only that story's selection", () => {
  const challengerStory = new Story();
  const enterpriseStory = new Story();
  let challengerSelected = challengerFilms[0].id;
  let enterpriseSelected = enterpriseFilms[0].id;
  const clearChallenger = resetOnStoryClose(challengerStory, () => { challengerSelected = null; });
  const clearEnterprise = resetOnStoryClose(enterpriseStory, () => { enterpriseSelected = null; });
  challengerStory.open = false;
  challengerStory.dispatchEvent(new Event("toggle"));
  assert.equal(challengerSelected, null);
  assert.equal(enterpriseSelected, enterpriseFilms[0].id);
  enterpriseStory.open = false;
  enterpriseStory.dispatchEvent(new Event("toggle"));
  assert.equal(enterpriseSelected, null);
  clearChallenger();
  clearEnterprise();
});

test("unmount cleanup removes the story listener", () => {
  const story = new Story();
  let resetCount = 0;
  const cleanup = resetOnStoryClose(story, () => { resetCount += 1; });
  cleanup();
  story.open = false;
  story.dispatchEvent(new Event("toggle"));
  assert.equal(resetCount, 0);
});
