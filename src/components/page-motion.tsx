"use client";

import { useEffect, useRef } from "react";
import { setupPillarMotion, setupSectionEntrances } from "@/lib/section-motion";

export function PageMotion() {
  const progress = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const page = document.querySelector(".editorial-home");
    if (!page) return;

    const elements = [...page.querySelectorAll<HTMLElement>("[data-reveal]")];
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const stopEntrances = setupSectionEntrances(elements, preference);
    const stopPillars = setupPillarMotion([...page.querySelectorAll<HTMLElement>(".pillar-art")], preference);

    let frame = 0;
    const updateProgress = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        const distance = document.documentElement.scrollHeight - window.innerHeight;
        const fraction = distance > 0 ? Math.min(1, Math.max(0, window.scrollY / distance)) : 0;
        if (progress.current) progress.current.style.transform = `scaleX(${fraction})`;
        frame = 0;
      });
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      stopEntrances();
      stopPillars();
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return <div ref={progress} className="reading-progress" aria-hidden="true" />;
}
