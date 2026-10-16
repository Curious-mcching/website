export const challengerFilms = [
  {
    id: "E--NWILp_nw",
    title: "Don’t let your banking become a tragedy",
    context: "HSBC Canada",
  },
  {
    id: "npL8TevDrv4",
    title: "The World’s Largest Welcome Mat",
    context: "#HSBCWelcome · Behind the scenes",
  },
  {
    id: "LX-UL1Bl6QU",
    title: "Meet 1on26",
    context: "2019",
  },
] as const;

export const enterpriseFilms = [
  {
    id: "5uV9dMYaNcc",
    title: "Crochet",
    context: "RBC · Apple partnership · Creative by Battery",
  },
] as const;

export function resetOnStoryClose(
  story: Pick<HTMLDetailsElement, "open" | "addEventListener" | "removeEventListener">,
  reset: () => void,
) {
  const onToggle = () => {
    if (!story.open) reset();
  };
  story.addEventListener("toggle", onToggle);
  return () => story.removeEventListener("toggle", onToggle);
}
