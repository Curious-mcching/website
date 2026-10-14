"use client";

import { useEffect, useState, type ReactNode } from "react";

export function HomeHeader({ children }: { children: ReactNode }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let frame = 0;
    const updateVisibility = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const hero = document.querySelector(".editorial-home .hero");
        setVisible(Boolean(hero && hero.getBoundingClientRect().bottom <= 0));
      });
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);
    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return <div className="home-header" data-scrolled={visible ? "" : undefined}>{children}</div>;
}
