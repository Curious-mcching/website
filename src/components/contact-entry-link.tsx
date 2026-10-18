"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { contactHref, type ConversationType } from "@/lib/contact";

export function ContactEntryLink({ children, className, conversation, ariaLabel }: { children: ReactNode; className: string; conversation?: ConversationType; ariaLabel?: string }) {
  return <Link href={contactHref(conversation)} className={className} aria-label={ariaLabel} onClick={(event) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || window.location.pathname !== "/") return;
    window.dispatchEvent(new CustomEvent("contact-intent", { detail: conversation }));
    requestAnimationFrame(() => {
      const section = document.getElementById("connect");
      section?.focus({ preventScroll: true });
      section?.scrollIntoView({ block: "start" });
    });
  }}>{children}</Link>;
}
