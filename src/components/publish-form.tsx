"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { Arrow } from "./arrow";
import { pillars, writingFormats, type WritingFormat } from "@/lib/thought-leadership";
import { publishingFieldLabels, validatePublishingFields, type PublishingErrors, type PublishingField } from "@/lib/publishing-validation";

export function PublishForm() {
  const [pending, setPending] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [filename, setFilename] = useState("");
  const [kind, setKind] = useState<WritingFormat>("Point of view");
  const [errors, setErrors] = useState<PublishingErrors>({});
  const errorsRef = useRef<HTMLDivElement>(null);
  const feedbackRef = useRef<HTMLDivElement>(null);
  const failureRef = useRef<HTMLDivElement>(null);

  function showErrors(nextErrors: PublishingErrors) {
    setErrors(nextErrors); setMessage(""); setSuccess(false);
    requestAnimationFrame(() => errorsRef.current?.focus());
  }

  function validationProps(field: PublishingField, help?: string) {
    return { "aria-invalid": errors[field] ? true : undefined, "aria-describedby": [help, errors[field] ? `${field}-error` : ""].filter(Boolean).join(" ") || undefined };
  }

  const fieldError = (field: PublishingField) => errors[field] && <p className="field-error" id={`${field}-error`}>{errors[field]}</p>;

  async function publish(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const file = data.get("file");
    const nextErrors = validatePublishingFields({ title: String(data.get("title") ?? ""), summary: String(data.get("summary") ?? ""), experience: String(data.get("experience") ?? ""), kind: String(data.get("kind") ?? ""), file: file instanceof File ? file : null });
    if (Object.keys(nextErrors).length) { showErrors(nextErrors); return; }
    setErrors({});
    setPending(true); setMessage(""); setSuccess(false);
    try {
      const response = await fetch("/api/povs", { method: "POST", body: data });
      const result = await response.json();
      if (!response.ok && result.errors) { showErrors(result.errors); return; }
      if (!response.ok) throw new Error(result.error || "Your piece could not be published.");
      setSuccess(true); setMessage("Your perspective is published. It’s now in the writing library.");
      form.reset(); setFilename(""); setKind("Point of view");
      requestAnimationFrame(() => feedbackRef.current?.focus());
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "The upload failed. Please try again.");
      requestAnimationFrame(() => failureRef.current?.focus());
    } finally { setPending(false); }
  }

  return (
    <form className="publish-form" onSubmit={publish} noValidate aria-describedby="publishing-guidance">
      <p className="form-guidance" id="publishing-guidance">Fields labelled “required” must be completed. A PDF is required only for papers.</p>
      {Object.keys(errors).length > 0 && <div className="form-error-summary" ref={errorsRef} tabIndex={-1} role="alert" aria-labelledby="publishing-errors-title"><h2 id="publishing-errors-title">Please check the following fields</h2><ul>{(Object.entries(errors) as [PublishingField, string][]).map(([field, error]) => <li key={field}><a href={`#${field}`} onClick={() => document.getElementById(field)?.focus()}>{publishingFieldLabels[field]}: {error}</a></li>)}</ul></div>}
      <fieldset disabled={pending} aria-busy={pending}>
        <legend className="sr-only">Publish a perspective</legend>
        <div className="studio-form-heading"><span className="small-label">01 / FRAME YOUR IDEA</span><span>Start small. Go deeper over time.</span></div>
        <label htmlFor="title">Title (required)</label><input id="title" name="title" required minLength={3} maxLength={120} placeholder="The question or idea at the heart of your piece" {...validationProps("title", "title-help")} /><span className="field-help" id="title-help">3–120 characters.</span>{fieldError("title")}
        <div className="form-row"><div><label htmlFor="kind">Format (required)</label><select id="kind" name="kind" required value={kind} onChange={(event) => setKind(event.target.value as WritingFormat)} {...validationProps("kind")}>{writingFormats.map((format) => <option key={format}>{format}</option>)}</select>{fieldError("kind")}</div><div><label htmlFor="pillar">Pillar (required)</label><select id="pillar" name="pillar" required {...validationProps("pillar")}>{pillars.map((pillar) => <option key={pillar.id} value={pillar.id}>{pillar.title}</option>)}</select>{fieldError("pillar")}</div></div>
        <label htmlFor="summary">Your idea or introduction (required)</label><textarea id="summary" name="summary" required minLength={20} maxLength={600} rows={4} placeholder="A question, an observation, or the opening to a deeper piece." {...validationProps("summary", "summary-help")} /><span className="field-help" id="summary-help">20–600 characters. For a short idea, this can be the whole piece. Add a PDF for longer writing.</span>{fieldError("summary")}
        <label htmlFor="experience">The experience behind it (optional)</label><textarea id="experience" name="experience" minLength={20} maxLength={1500} rows={5} placeholder="Connect the thinking to a real experience, lesson, or observation when it’s useful." {...validationProps("experience", "experience-help")} /><span className="field-help" id="experience-help">20–1,500 characters if added. Share only context you’re comfortable making public.</span>{fieldError("experience")}
        <div className="studio-form-heading upload-heading"><span className="small-label">02 / GO DEEPER</span><span>{kind === "Paper" ? "PDF required" : "PDF optional"} · Up to 10 MB</span></div>
        <label className="upload-zone" htmlFor="file"><span className="upload-symbol" aria-hidden="true">↑</span><strong id="file-label">PDF attachment ({kind === "Paper" ? "required" : "optional"})</strong><span>{filename || "Add longer writing when you’re ready"}</span><span id="file-help">PDF only, up to 10 MB. Ideas, perspectives and POVs can be shared without a PDF.</span><input id="file" name="file" type="file" accept="application/pdf,.pdf" required={kind === "Paper"} aria-labelledby="file-label" {...validationProps("file", "file-help")} onChange={(event) => { setFilename(event.target.files?.[0]?.name ?? ""); setMessage(""); setSuccess(false); }} /></label>{fieldError("file")}
        <p className="studio-note">Publishing makes your piece and any attached PDF visible on your local website. The studio is available only while running <code>npm run dev</code>; it is disabled in production.</p>
        <button className="button button-dark" type="submit">{pending ? "Publishing…" : "Publish perspective"} <Arrow diagonal /></button>
      </fieldset>
      <div ref={feedbackRef} tabIndex={-1} className={pending || success ? "form-message is-success" : undefined} role="status">{pending ? "Publishing your perspective…" : success ? message : ""}{success && <Link className="text-link" href="/#perspectives">View the writing library <Arrow /></Link>}</div>
      {message && !success && <div ref={failureRef} tabIndex={-1} className="form-message is-error" role="alert">{message}</div>}
    </form>
  );
}
