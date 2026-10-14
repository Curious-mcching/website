"use client";

import { useEffect, useRef } from "react";

export function PageMotion() {
  const progress = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const page = document.querySelector(".editorial-home");
    if (!page) return;

    const elements = [...page.querySelectorAll<HTMLElement>("[data-reveal]")];
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let observer: IntersectionObserver | undefined;
    const configureReveals = () => {
      observer?.disconnect();
      elements.forEach((element) => element.removeAttribute("data-motion"));
      if (preference.matches || !("IntersectionObserver" in window)) return;

      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.setAttribute("data-motion", "visible");
          observer?.unobserve(entry.target);
        });
      }, { rootMargin: "0px 0px -24px 0px" });

      elements.forEach((element) => {
        if (element.getBoundingClientRect().top < window.innerHeight - 24) return;
        element.setAttribute("data-motion", "pending");
        observer?.observe(element);
      });
    };

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

    configureReveals();
    updateProgress();
    preference.addEventListener("change", configureReveals);
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      observer?.disconnect();
      elements.forEach((element) => element.removeAttribute("data-motion"));
      preference.removeEventListener("change", configureReveals);
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return <div ref={progress} className="reading-progress" aria-hidden="true" />;
}
