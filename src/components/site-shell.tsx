import Link from "next/link";
import { Arrow } from "./arrow";
import { SiteNavigation } from "./site-navigation";
import { ContactEntryLink } from "./contact-entry-link";
import { contactLinkedIn } from "@/lib/contact";

export function SiteHeader({ anchorId = "top" }: { anchorId?: string | null }) {
  const HomeLink = anchorId === null ? "a" : Link;
  return (
    <header id={anchorId ?? undefined} className="site-header wrap">
      <HomeLink href={anchorId === null ? "#top" : "/#top"} className="wordmark" aria-label="mc. Michelle Ching home">
        <span className="monogram" aria-hidden="true">mc<span>.</span></span>
        <span>Michelle Ching</span>
      </HomeLink>
      <SiteNavigation isHome={anchorId === null} />
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer wrap">
      <span>© Michelle Ching</span>
      <span>Toronto, Canada · Always curious.</span>
      <div>
        <ContactEntryLink className="footer-contact">Let’s connect <Arrow /></ContactEntryLink>
        <a href={contactLinkedIn} target="_blank" rel="noreferrer">LinkedIn <span className="sr-only">(opens in a new tab)</span><Arrow diagonal /></a>
        {process.env.NODE_ENV === "development" && <Link href="/studio">Publishing studio <Arrow diagonal /></Link>}
        <a href="#top" className="back-to-top">Back to top <Arrow /></a>
      </div>
    </footer>
  );
}
