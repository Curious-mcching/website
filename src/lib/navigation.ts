export const navigationItems = [
  { id: "expertise", label: "Expertise" },
  { id: "experience", label: "Leadership in Action" },
  { id: "challenger", label: "Thought leadership" },
  { id: "connect", label: "Let’s connect" },
] as const;

export type NavigationId = (typeof navigationItems)[number]["id"];

export function getCurrentNavigationId(
  sections: ReadonlyArray<{ id: NavigationId; top: number }>,
  readingLine: number,
  atPageEnd = false,
): NavigationId | null {
  if (atPageEnd) return sections.at(-1)?.id ?? null;

  let current: NavigationId | null = null;
  for (const section of sections) {
    if (section.top <= readingLine) current = section.id;
  }
  return current;
}
