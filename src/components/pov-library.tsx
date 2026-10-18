"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { Pov } from "@/lib/povs";
import { pillars, pillarFor, writingFormats } from "@/lib/thought-leadership";
import { Arrow } from "./arrow";
import { ContactEntryLink } from "./contact-entry-link";

export function PovLibrary() {
  const [povs, setPovs] = useState<Pov[] | null>(null);
  const [filter, setFilter] = useState("All");
  const [pillarFilter, setPillarFilter] = useState("All");
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/povs", { signal: controller.signal, cache: "no-store" })
      .then((response) => { if (!response.ok) throw new Error("Unable to load"); return response.json(); })
      .then(setPovs)
      .catch((error) => { if (error.name !== "AbortError") setError(true); });
    return () => controller.abort();
  }, []);

  if (error) return <div className="writing-empty" role="alert"><h3>The writing library couldn’t load.</h3><p>Please refresh this page to try again.</p></div>;
  if (povs === null) return <p className="library-loading" role="status">Opening the writing space…</p>;
  const visible = povs.filter((pov) => (filter === "All" || pov.kind === filter) && (pillarFilter === "All" || pillarFor(pov) === pillarFilter));
  return (
    <>
      <div className="writing-filters">
        <div className="library-filters" role="group" aria-label="Filter by pillar">{[{ id: "All", title: "All pillars" }, ...pillars].map((option) => <button type="button" key={option.id} aria-pressed={pillarFilter === option.id} onClick={() => setPillarFilter(option.id)}>{option.title}</button>)}</div>
        <div className="library-filters format-filters" role="group" aria-label="Filter by format">{["All", ...writingFormats].map((option) => <button type="button" key={option} aria-pressed={filter === option} onClick={() => setFilter(option)}>{option === "All" ? "All formats" : option}</button>)}</div>
      </div>
      {povs.length > 0 && <p className="sr-only" role="status">{visible.length ? `${visible.length} ${visible.length === 1 ? "piece" : "pieces"} shown.` : "No pieces match these filters yet. Try another pillar or format."}</p>}
      {povs.length === 0 ? (
    <div className="writing-empty">
      <div className="writing-art-bleed" aria-hidden="true"><Image className="writing-artwork" src="/images/art-of-possibility.png" alt="" fill sizes="(max-width: 760px) 100vw, (max-width: 1050px) 50vw, 520px" /></div>
      <div><span className="small-label">THE NEXT CHAPTER IS TAKING SHAPE</span><h3>Room for ideas.<br /><em>Space for what’s next.</em></h3><p>{pillarFilter === "All" ? "Nothing published yet. Three pillars, and room for the first idea, perspective, or paper." : `Nothing published in ${pillars.find((pillar) => pillar.id === pillarFilter)?.title} yet. There’s room for a first question, observation, or deeper exploration.`}</p><ContactEntryLink className="text-link">Have a question worth exploring? <Arrow /></ContactEntryLink></div>
    </div>
      ) : <>
      {visible.length === 0 && <p className="library-loading">No pieces match these filters yet. Try another pillar or format.</p>}
      <div className="pov-grid">{visible.map((pov) => (
        <article className="pov-card" key={pov.id}>
          <div className="pov-meta"><span>{pov.kind} / {pillars.find((pillar) => pillar.id === pillarFor(pov))?.title}</span><time dateTime={pov.publishedAt}>{new Intl.DateTimeFormat("en-CA", { month: "short", year: "numeric", timeZone: "America/Toronto" }).format(new Date(pov.publishedAt))}</time></div>
          <h3>{pov.title}</h3><p>{pov.summary}</p>
          {pov.experience && <details className="pov-experience"><summary>The experience behind it <span aria-hidden="true">+</span></summary><p>{pov.experience}</p></details>}
          {pov.hasPdf !== false && <a className="text-link" href={`/api/povs/${pov.id}`} target="_blank" rel="noreferrer" aria-label={`Read the ${pov.kind === "Paper" ? "paper" : "piece"} (PDF): ${pov.title} (opens in a new tab)`}>Read the {pov.kind === "Paper" ? "paper" : "piece"} (PDF) <Arrow diagonal /></a>}
        </article>
      ))}</div>
      </>}
    </>
  );
}
