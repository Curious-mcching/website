"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { getCurrentNavigationId, navigationItems, type NavigationId } from "@/lib/navigation";
import { Arrow } from "./arrow";

export function SiteNavigation({ isHome }: { isHome: boolean }) {
  const navRef = useRef<HTMLElement>(null);
  const [current, setCurrent] = useState<NavigationId | null>(null);

  useEffect(() => {
    if (!isHome) return;
    const header = navRef.current?.closest<HTMLElement>(".home-header");
    const main = document.querySelector<HTMLElement>(".editorial-home");
    if (!header || !main) return;

    let frame = 0;
    let lastOffset = 0;
    const previousOffset = main.style.getPropertyValue("--navigation-offset");
    const update = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const offset = Math.ceil(header.getBoundingClientRect().height) + 16;
        if (offset !== lastOffset) {
          main.style.setProperty("--navigation-offset", `${offset}px`);
          lastOffset = offset;
        }
        const sections = navigationItems.flatMap(({ id }) => {
          const section = document.getElementById(id);
          return section ? [{ id, top: section.getBoundingClientRect().top }] : [];
        });
        const atPageEnd = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2;
        setCurrent(getCurrentNavigationId(sections, offset + 28, atPageEnd));
      });
    };

    const observer = new ResizeObserver(update);
    observer.observe(header);
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    window.addEventListener("hashchange", update);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      window.removeEventListener("hashchange", update);
      window.cancelAnimationFrame(frame);
      if (previousOffset) main.style.setProperty("--navigation-offset", previousOffset);
      else main.style.removeProperty("--navigation-offset");
    };
  }, [isHome]);

  const hrefFor = (id: NavigationId) => isHome ? `#${id}` : `/#${id}`;

  return (
    <>
      <nav ref={navRef} aria-label="Main navigation">
        {navigationItems.filter(({ id }) => id !== "connect").map(({ id, label }) => (
          <Link key={id} href={hrefFor(id)} aria-current={current === id ? "location" : undefined}>{label}</Link>
        ))}
      </nav>
      <Link href={hrefFor("connect")} className="header-contact" aria-current={current === "connect" ? "location" : undefined}>Let’s connect <Arrow /></Link>
    </>
  );
}
