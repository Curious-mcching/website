"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { getCurrentNavigationId, navigationItems, type NavigationId } from "@/lib/navigation";
import { Arrow } from "./arrow";

export function SiteNavigation({ isHome }: { isHome: boolean }) {
  const navRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const panelId = useId();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [current, setCurrent] = useState<NavigationId | null>(null);

  useEffect(() => {
    const mobile = window.matchMedia("(max-width: 760px)");
    const syncViewport = () => {
      setIsMobile(mobile.matches);
      if (!mobile.matches) setMenuOpen(false);
      else if (panelRef.current?.contains(document.activeElement)) menuButtonRef.current?.focus();
    };
    syncViewport();
    mobile.addEventListener("change", syncViewport);
    return () => mobile.removeEventListener("change", syncViewport);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setMenuOpen(false);
      menuButtonRef.current?.focus();
    };
    const closeOutside = (event: PointerEvent) => {
      if (event.target instanceof Node && !panelRef.current?.contains(event.target) && !menuButtonRef.current?.contains(event.target)) {
        if (panelRef.current?.contains(document.activeElement)) menuButtonRef.current?.focus();
        setMenuOpen(false);
      }
    };
    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOutside);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOutside);
    };
  }, [menuOpen]);

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
  const navigateTo = (id: NavigationId) => {
    setMenuOpen(false);
    if (isHome && id === "connect") window.dispatchEvent(new CustomEvent("contact-intent"));
    if (isHome) requestAnimationFrame(() => {
      const section = document.getElementById(id);
      section?.focus({ preventScroll: true });
      if (id === "connect") section?.scrollIntoView({ block: "start" });
    });
  };

  return (
    <>
      <button ref={menuButtonRef} type="button" className="mobile-menu-toggle" aria-expanded={menuOpen} aria-controls={panelId} aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? "Close" : "Menu"}<span aria-hidden="true" /></button>
      <div ref={panelRef} id={panelId} className="site-navigation-panel" data-open={menuOpen ? "" : undefined} inert={isMobile && !menuOpen} aria-hidden={isMobile && !menuOpen ? true : undefined}>
      <nav ref={navRef} aria-label="Main navigation">
        {navigationItems.filter(({ id }) => id !== "connect").map(({ id, label }) => (
          <Link key={id} href={hrefFor(id)} onClick={() => navigateTo(id)} aria-current={current === id ? "location" : undefined}>{label}</Link>
        ))}
      </nav>
      <Link href={hrefFor("connect")} className="header-contact" onClick={() => navigateTo("connect")} aria-current={current === "connect" ? "location" : undefined}>Let’s connect <Arrow /></Link>
      </div>
    </>
  );
}
