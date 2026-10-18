"use client";

import { useEffect, useRef, useState } from "react";
import { Arrow } from "./arrow";
import { contactFieldLabels, conversations, isConversation, validateContact, type ContactErrors, type ContactField, type ContactFields, type ConversationType } from "@/lib/contact";

export function ContactForm() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [conversation, setConversation] = useState<ConversationType>("other");
  const [errors, setErrors] = useState<ContactErrors>({});
  const [pending, setPending] = useState(false);
  const [sent, setSent] = useState(false);
  const [failure, setFailure] = useState("");
  const [available, setAvailable] = useState(true);
  const submitting = useRef(false);
  const selectionTouched = useRef(false);
  const attempt = useRef<{ signature: string; id: string } | null>(null);
  const errorsRef = useRef<HTMLDivElement>(null);
  const feedbackRef = useRef<HTMLDivElement>(null);
  const failureRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let lastQuery: string | null | undefined;
    const readIntent = () => {
      if (window.location.hash === "#connect") setOpen(true);
      const value = new URLSearchParams(window.location.search).get("conversation");
      if (value === lastQuery) return;
      const initial = lastQuery === undefined;
      lastQuery = value;
      if (initial && selectionTouched.current) return;
      setConversation(isConversation(value) ? value : "other");
    };
    const chooseIntent = (event: Event) => {
      setOpen(true);
      const value = (event as CustomEvent).detail;
      lastQuery = isConversation(value) ? value : null;
      if (isConversation(value)) setConversation(value);
    };
    readIntent();
    window.addEventListener("contact-intent", chooseIntent);
    window.addEventListener("popstate", readIntent);
    window.addEventListener("hashchange", readIntent);
    const controller = new AbortController();
    fetch("/api/contact", { signal: controller.signal, cache: "no-store" })
      .then((response) => response.ok ? response.json() : null)
      .then((result) => { if (result) setAvailable(result.available === true); })
      .catch(() => { /* A submit can still retry if the availability check fails. */ });
    return () => {
      controller.abort();
      window.removeEventListener("contact-intent", chooseIntent);
      window.removeEventListener("popstate", readIntent);
      window.removeEventListener("hashchange", readIntent);
    };
  }, []);

  useEffect(() => {
    if (open) titleRef.current?.focus({ preventScroll: true });
  }, [open]);

  function closeForm() {
    if (submitting.current) return;
    setOpen(false);
    requestAnimationFrame(() => triggerRef.current?.focus());
  }

  function showErrors(next: ContactErrors) {
    setErrors(next);
    requestAnimationFrame(() => errorsRef.current?.focus());
  }

  function fieldProps(field: ContactField, help?: string) {
    return { "aria-invalid": errors[field] ? true : undefined, "aria-describedby": [help, errors[field] ? `contact-${field}-error` : ""].filter(Boolean).join(" ") || undefined };
  }

  const fieldError = (field: ContactField) => errors[field] && <p className="field-error" id={`contact-${field}-error`}>{errors[field]}</p>;

  async function send(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting.current) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    const fields = Object.fromEntries(Object.keys(contactFieldLabels).map((field) => [field, String(data.get(field) ?? "").trim()])) as ContactFields;
    setFailure(""); setSent(false);
    const nextErrors = validateContact(fields);
    if (Object.keys(nextErrors).length) { showErrors(nextErrors); return; }
    setErrors({});
    const signature = JSON.stringify(fields);
    if (attempt.current?.signature !== signature) attempt.current = { signature, id: crypto.randomUUID() };
    submitting.current = true; setPending(true);
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...fields, website: String(data.get("website") ?? ""), submissionId: attempt.current.id }), signal: AbortSignal.timeout(20000) });
      const result = await response.json().catch(() => null);
      if (!result) throw new Error("Your message couldn’t be confirmed as sent. Your draft is still here—please retry, or use email or LinkedIn.");
      if (!response.ok && result.errors) { showErrors(result.errors); return; }
      if (!response.ok || result.sent !== true) throw new Error(result.error || "Your message couldn’t be sent. Please try again, or use email or LinkedIn.");
      setSent(true); setAvailable(true);
      form.reset(); setConversation("other"); attempt.current = null;
      requestAnimationFrame(() => feedbackRef.current?.focus());
    } catch (error) {
      setFailure(error instanceof Error && !["TimeoutError", "AbortError", "TypeError"].includes(error.name) ? error.message : "Your message couldn’t be confirmed as sent. Your draft is still here—please retry, or use email or LinkedIn.");
      requestAnimationFrame(() => failureRef.current?.focus());
    } finally { submitting.current = false; setPending(false); }
  }

  return (
    <div className="contact-form-slot" data-open={open ? "" : undefined}>
    <button ref={triggerRef} type="button" className="contact-launch" hidden={open} aria-expanded={open} aria-controls="contact-conversation-form" onClick={() => setOpen(true)}><span>Let’s start a<br />conversation</span><Arrow /></button>
    <form id="contact-conversation-form" className="contact-form" hidden={!open} onKeyDown={(event) => { if (event.key === "Escape") { event.preventDefault(); closeForm(); } }} onSubmit={send} action="/api/contact" method="post" noValidate aria-labelledby="contact-form-title" onChange={() => { setSent(false); setFailure(""); }}>
      <div className="contact-form-header"><h3 id="contact-form-title" ref={titleRef} tabIndex={-1}>Start a conversation</h3><button type="button" className="contact-form-close" onClick={closeForm} disabled={pending} aria-label="Close conversation form"><span className="contact-close-label">Close</span><span aria-hidden="true">×</span></button></div>
      <p className="contact-guidance" id="contact-guidance">Name, email and message are required.</p>
      {!available && <p className="contact-availability">The form is temporarily unavailable. Please use email or LinkedIn for now.</p>}
      {Object.keys(errors).length > 0 && <div className="form-error-summary" ref={errorsRef} tabIndex={-1} role="alert" aria-labelledby="contact-errors-title"><h4 id="contact-errors-title">A couple of things to check</h4><ul>{(Object.entries(errors) as [ContactField, string][]).map(([field, error]) => <li key={field}><a href={`#contact-${field}`} onClick={() => document.getElementById(`contact-${field}`)?.focus()}>{contactFieldLabels[field]}: {error}</a></li>)}</ul></div>}
      <fieldset className="contact-fields" disabled={pending} aria-busy={pending} aria-describedby="contact-guidance">
        <legend className="sr-only">Your contact details and message</legend>
        <div className="contact-form-row"><div><label htmlFor="contact-name">Name <span>(required)</span></label><input id="contact-name" name="name" autoComplete="name" required maxLength={100} {...fieldProps("name")} />{fieldError("name")}</div><div><label htmlFor="contact-email">Email <span>(required)</span></label><input id="contact-email" name="email" type="email" autoComplete="email" autoCapitalize="none" spellCheck={false} required maxLength={254} {...fieldProps("email")} />{fieldError("email")}</div></div>
        <div><label htmlFor="contact-organization">Organization <span>(optional)</span></label><input id="contact-organization" name="organization" autoComplete="organization" maxLength={150} {...fieldProps("organization")} />{fieldError("organization")}</div>
        <fieldset className="conversation-options" id="contact-conversation" tabIndex={-1} {...fieldProps("conversation")}><legend>Conversation type</legend><div>{conversations.map((option) => <label key={option.value}><input type="radio" name="conversation" value={option.value} checked={conversation === option.value} onChange={() => { selectionTouched.current = true; setConversation(option.value); }} /><span>{option.label}</span></label>)}</div>{fieldError("conversation")}</fieldset>
        <div><label htmlFor="contact-message">Message <span>(required)</span></label><p className="contact-message-prompt" id="contact-message-prompt">{conversations.find((option) => option.value === conversation)?.prompt}</p><textarea id="contact-message" name="message" rows={5} maxLength={5000} required {...fieldProps("message", "contact-message-prompt contact-message-help")} /><span className="contact-field-help" id="contact-message-help">Up to 5,000 characters.</span>{fieldError("message")}</div>
        <div className="contact-honeypot" aria-hidden="true"><label htmlFor="contact-website">Leave this field empty</label><input id="contact-website" name="website" tabIndex={-1} autoComplete="off" /></div>
        <button type="submit" className="button button-dark">{pending ? "Sending…" : "Send message"} <Arrow /></button>
      </fieldset>
      <div ref={feedbackRef} tabIndex={-1} role="status" className={pending || sent ? "contact-feedback" : undefined}>{pending ? "Sending your message…" : sent ? "Thanks for reaching out. Your message has been sent." : ""}</div>
      {failure && <div className="contact-feedback contact-failure" ref={failureRef} tabIndex={-1} role="alert">{failure} <button type="submit" className="contact-retry">Try again</button></div>}
    </form>
    </div>
  );
}
