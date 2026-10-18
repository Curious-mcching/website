export const contactEmail = "mc.ching@gmail.com";
export const contactLinkedIn = "https://www.linkedin.com/in/chingmichelle/";

export const conversations = [
  { value: "executive", label: "Executive opportunities", prompt: "Tell me a little about the role, organization, and what you’re looking to build or change." },
  { value: "advisory", label: "Advisory & collaboration", prompt: "What challenge or opportunity are you exploring, and where could you use a fresh perspective?" },
  { value: "speaking", label: "Speaking & conversations", prompt: "Tell me about the audience, topic, format, and timing you have in mind." },
  { value: "other", label: "Something else", prompt: "What would you like to explore?" },
] as const;

export type ConversationType = (typeof conversations)[number]["value"];
export const contactFieldLabels = { name: "Name", email: "Email", organization: "Organization", conversation: "Conversation type", message: "Message" };
export type ContactField = keyof typeof contactFieldLabels;
export type ContactErrors = Partial<Record<ContactField, string>>;
export type ContactFields = Record<ContactField, string>;

export function isConversation(value: unknown): value is ConversationType {
  return conversations.some((option) => option.value === value);
}

export function contactHref(conversation?: ConversationType) {
  return conversation ? `/?conversation=${conversation}#connect` : "/#connect";
}

export function validateContact(fields: ContactFields): ContactErrors {
  const errors: ContactErrors = {};
  if (!fields.name.trim()) errors.name = "Please enter your name.";
  else if (fields.name.trim().length > 100 || /[\r\n]/.test(fields.name)) errors.name = "Use a name of up to 100 characters on one line.";
  if (!/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(fields.email.trim()) || fields.email.trim().length > 254) errors.email = "Enter a valid email address, such as name@company.com.";
  if (fields.organization.trim().length > 150 || /[\r\n]/.test(fields.organization)) errors.organization = "Use up to 150 characters on one line, or leave organization empty.";
  if (!isConversation(fields.conversation)) errors.conversation = "Choose one of the four conversation types.";
  if (!fields.message.trim()) errors.message = "Please add a message about what you’d like to explore.";
  else if (fields.message.trim().length > 5000) errors.message = "Keep your message within 5,000 characters.";
  return errors;
}
