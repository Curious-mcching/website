export const publishingFieldLabels = { title: "Title", kind: "Format", pillar: "Pillar", summary: "Your idea or introduction", experience: "The experience behind it", file: "PDF attachment" };
export type PublishingField = keyof typeof publishingFieldLabels;
export type PublishingErrors = Partial<Record<PublishingField, string>>;

export function validatePublishingFields(fields: { title: string; summary: string; experience: string; kind: string; file: { name: string; size: number } | null }): PublishingErrors {
  const errors: PublishingErrors = {};
  if (fields.title.trim().length < 3 || fields.title.trim().length > 120) errors.title = "Enter a title between 3 and 120 characters.";
  if (fields.summary.trim().length < 20 || fields.summary.trim().length > 600) errors.summary = "Enter an introduction between 20 and 600 characters.";
  const experienceLength = fields.experience.trim().length;
  if (experienceLength > 0 && (experienceLength < 20 || experienceLength > 1500)) errors.experience = "Use 20–1,500 characters for experience notes, or leave this field empty.";
  const file = fields.file;
  const hasPdf = file !== null && file.size > 0;
  if (fields.kind === "Paper" && !hasPdf) errors.file = "Choose a PDF for a paper, or select another format.";
  if (file && hasPdf && (!file.name.toLowerCase().endsWith(".pdf") || file.size > 10 * 1024 * 1024)) errors.file = "Choose a PDF file no larger than 10 MB.";
  return errors;
}
