export const pillars = [
  {
    id: "challenger",
    lens: "MY SIGNATURE THESIS",
    title: "The Challenger Mindset",
    question: "What does it take to win when the conventional playbook no longer works?",
    description: "Exploring challenger brands, category disruption, creative courage, customer behaviour, and strategic reinvention.",
  },
  {
    id: "human-machine",
    lens: "AN EMERGING FRONTIER",
    title: "Human × Machine",
    question: "As AI becomes more capable, what becomes more valuable about being human?",
    description: "Exploring AI-enabled work, judgment, creativity, decision-making, leadership, and how teams evolve.",
  },
  {
    id: "reinvention",
    lens: "MY LEADERSHIP LENS",
    title: "Leading Through Reinvention",
    question: "How do we build organizations that can transform without losing their humanity?",
    description: "Exploring change leadership, trust, psychological safety, creative cultures, and navigating uncertainty.",
  },
] as const;

export type PillarId = typeof pillars[number]["id"];
export const writingFormats = ["Point of view", "Paper", "Idea", "Perspective"] as const;
export type WritingFormat = typeof writingFormats[number];

// Preserve the original theme-based records without rewriting their metadata.
export function pillarFor(record: { pillar?: PillarId; topic: string }): PillarId {
  return record.pillar ?? (["Leadership", "Transformation"].includes(record.topic) ? "reinvention" : "challenger");
}
