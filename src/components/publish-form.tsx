"use client";

import Link from "next/link";
import { useState } from "react";
import { Arrow } from "./arrow";
import { pillars, writingFormats, type WritingFormat } from "@/lib/thought-leadership";

export function PublishForm() {
  const [pending, setPending] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [filename, setFilename] = useState("");
  const [kind, setKind] = useState<WritingFormat>("Point of view");

  async function publish(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setPending(true); setMessage(""); setSuccess(false);
    try {
      const response = await fetch("/api/povs", { method: "POST", body: new FormData(form) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Your piece could not be published.");
      setSuccess(true); setMessage("Your perspective is published. It’s now in the writing library.");
      form.reset(); setFilename(""); setKind("Point of view");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "The upload failed. Please try again.");
    } finally { setPending(false); }
  }

  return (
    <form className="publish-form" onSubmit={publish}>
      <fieldset disabled={pending}>
        <div className="studio-form-heading"><span className="small-label">01 / FRAME YOUR IDEA</span><span>Start small. Go deeper over time.</span></div>
        <label htmlFor="title">Title</label><input id="title" name="title" required minLength={3} maxLength={120} placeholder="The question or idea at the heart of your piece" />
        <div className="form-row"><div><label htmlFor="kind">Format</label><select id="kind" name="kind" value={kind} onChange={(event) => setKind(event.target.value as WritingFormat)}>{writingFormats.map((format) => <option key={format}>{format}</option>)}</select></div><div><label htmlFor="pillar">Pillar</label><select id="pillar" name="pillar">{pillars.map((pillar) => <option key={pillar.id} value={pillar.id}>{pillar.title}</option>)}</select></div></div>
        <label htmlFor="summary">Your idea or introduction</label><textarea id="summary" name="summary" required minLength={20} maxLength={600} rows={4} placeholder="A question, an observation, or the opening to a deeper piece." /><span className="field-help">20–600 characters. For a short idea, this can be the whole piece. Add a PDF for longer writing.</span>
        <label htmlFor="experience">The experience behind it (optional)</label><textarea id="experience" name="experience" minLength={20} maxLength={1500} rows={5} placeholder="Connect the thinking to a real experience, lesson, or observation when it’s useful." /><span className="field-help">20–1,500 characters if added. Share only context you’re comfortable making public.</span>
        <div className="studio-form-heading upload-heading"><span className="small-label">02 / GO DEEPER</span><span>{kind === "Paper" ? "PDF required" : "PDF optional"} · Up to 10 MB</span></div>
        <label className="upload-zone" htmlFor="file"><span className="upload-symbol" aria-hidden="true">↑</span><strong>{filename || "Add longer writing when you’re ready"}</strong><span>{filename ? "Click to choose a different PDF" : "Ideas, perspectives, and POVs can be shared without a PDF"}</span><input id="file" name="file" type="file" accept="application/pdf,.pdf" required={kind === "Paper"} aria-label="Choose PDF file" onChange={(event) => { setFilename(event.target.files?.[0]?.name ?? ""); setMessage(""); setSuccess(false); }} /></label>
        <p className="studio-note">Publishing makes your piece and any attached PDF visible on your local website. The studio is available only while running <code>npm run dev</code>; it is disabled in production.</p>
        <button className="button button-dark" type="submit">{pending ? "Publishing…" : "Publish perspective"} <Arrow diagonal /></button>
      </fieldset>
      {message && <div className={`form-message ${success ? "is-success" : "is-error"}`} role={success ? "status" : "alert"}>{message}{success && <Link className="text-link" href="/#perspectives">View the writing library <Arrow /></Link>}</div>}
    </form>
  );
}
