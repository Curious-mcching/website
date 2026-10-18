"use client";

import { useId, useRef, useState, type ReactNode } from "react";
import { Arrow } from "./arrow";
import { contactEmail as email } from "@/lib/contact";


export function ContactLink({ children, className, subject = "Let's connect", ariaLabel }: {
  children: ReactNode;
  className: string;
  subject?: string;
  ariaLabel?: string;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const addressId = useId();
  const descriptionId = useId();
  const [copyStatus, setCopyStatus] = useState("");
  const recipient = encodeURIComponent(email);
  const encodedSubject = encodeURIComponent(subject);
  const mailto = `mailto:${email}?subject=${encodedSubject}`;
  const providers = [
    { title: "Outlook", detail: "Work or school", href: `https://outlook.office.com/mail/deeplink/compose?to=${recipient}&subject=${encodedSubject}` },
    { title: "Outlook.com", detail: "Personal account", href: `https://outlook.live.com/mail/0/deeplink/compose?to=${recipient}&subject=${encodedSubject}` },
    { title: "Gmail", detail: "Google account", href: `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${encodedSubject}` },
    { title: "Email app", detail: "Your default app", href: mailto },
  ];

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopyStatus("Email address copied.");
    } catch {
      addressRef.current?.focus();
      addressRef.current?.select();
      setCopyStatus("Select and copy the email address above.");
    }
  }

  return (
    <>
      <button ref={triggerRef} type="button" className={className} aria-label={ariaLabel} aria-haspopup="dialog" onClick={() => { setCopyStatus(""); dialogRef.current?.showModal(); }}>{children}</button>
      <dialog className="contact-dialog" ref={dialogRef} aria-labelledby={titleId} aria-describedby={descriptionId} onClose={() => triggerRef.current?.focus()} onKeyDown={(event) => {
        if (event.key !== "Tab") return;
        const controls = event.currentTarget.querySelectorAll<HTMLElement>("a[href], button:not([disabled]), input:not([disabled])");
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }}>
        <div className="contact-dialog-top"><span>LET’S EXCHANGE IDEAS</span><button type="button" className="contact-dialog-close" aria-label="Close contact options" onClick={() => dialogRef.current?.close()}>Close <span aria-hidden="true">×</span></button></div>
        <h3 id={titleId}>Let’s start a conversation.</h3>
        <div className="contact-dialog-intro" id={descriptionId}>Choose where to write your email, or copy my address. You may need to sign in to your email account.</div>
        <div className="contact-provider-options">
          {providers.map((provider) => <a key={provider.title} href={provider.href} target={provider.title === "Email app" ? undefined : "_blank"} rel={provider.title === "Email app" ? undefined : "noopener noreferrer"}><span>{provider.title}<small>{provider.detail}</small>{provider.title !== "Email app" && <span className="sr-only"> (opens in a new tab)</span>}</span><Arrow diagonal /></a>)}
        </div>
        <label className="contact-address-label" htmlFor={addressId}>Email address</label>
        <div className="contact-address-row"><input id={addressId} ref={addressRef} value={email} readOnly /><button type="button" onClick={copyEmail}>Copy email</button></div>
        <div className="contact-copy-status" role="status">{copyStatus}</div>
      </dialog>
    </>
  );
}
