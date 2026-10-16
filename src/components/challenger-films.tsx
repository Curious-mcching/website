"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { resetOnStoryClose } from "@/lib/challenger-films";
import { Arrow } from "./arrow";

type ChallengerFilmsProps = {
  id: string;
  eyebrow: string;
  title: string;
  intro: string;
  films: readonly { id: string; title: string; context: string }[];
};

export function ChallengerFilms({ id, eyebrow, title, intro, films }: ChallengerFilmsProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [playingId, setPlayingId] = useState<string | null>(null);

  useEffect(() => {
    const story = sectionRef.current?.closest("details");
    if (!story) return;
    return resetOnStoryClose(story, () => setPlayingId(null));
  }, []);

  return (
    <section ref={sectionRef} className="leadership-campaigns" aria-labelledby={`${id}-title`}>
      <p className="campaign-eyebrow">{eyebrow}</p>
      <h4 id={`${id}-title`}>{title}</h4>
      <p className="campaign-intro">{intro}</p>
      <div className="campaign-grid">
        {films.map((film, index) => (
          <figure className="campaign-film" key={film.id}>
            <div className="campaign-player">
              {playingId === film.id ? (
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${film.id}?autoplay=1&playsinline=1&rel=0`}
                  title={film.title}
                  allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              ) : (
                <button type="button" className="campaign-poster" onClick={() => setPlayingId(film.id)} aria-label={`Play ${film.title}`}>
                  <Image src={`https://i.ytimg.com/vi/${film.id}/hqdefault.jpg`} alt="" fill sizes={index === 0 ? "(max-width: 760px) 100vw, (max-width: 1280px) 80vw, 850px" : "(max-width: 760px) 100vw, (max-width: 1280px) 40vw, 420px"} />
                  <span className="campaign-play" aria-hidden="true"><svg viewBox="0 0 24 24" width="24" height="24"><path d="M9 5 19 12 9 19Z" fill="currentColor" /></svg></span>
                  <span className="campaign-play-label" aria-hidden="true">Play film</span>
                </button>
              )}
            </div>
            <figcaption>
              <p className="campaign-eyebrow">{film.context}</p>
              <h5>{film.title}</h5>
              <a href={`https://www.youtube.com/watch?v=${film.id}`} target="_blank" rel="noopener noreferrer" className="text-link">Watch on YouTube <Arrow diagonal /></a>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
