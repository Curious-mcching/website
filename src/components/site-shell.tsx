import Link from "next/link";
import { Arrow } from "./arrow";

export function SiteHeader() {
  return (
    <header id="top" className="site-header wrap">
      <Link href="/#top" className="wordmark" aria-label="Michelle Ching home">
        <span className="monogram">mc<span>.</span></span>
        <span>Michelle Ching</span>
      </Link>
      <nav aria-label="Main navigation">
        <Link href="/#expertise">Expertise</Link>
        <Link href="/#experience">Selected work</Link>
        <Link href="/#challenger">Thought leadership</Link>
      </nav>
      <Link href="/#connect" className="header-contact">Let’s connect <Arrow diagonal /></Link>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer wrap">
      <span>© Michelle Ching</span>
      <span>Toronto, Canada · Always curious.</span>
      <div>
        <a href="https://www.linkedin.com/in/chingmichelle/" target="_blank" rel="noreferrer">LinkedIn <Arrow diagonal /></a>
        {process.env.NODE_ENV === "development" && <Link href="/studio">Publishing studio <Arrow diagonal /></Link>}
      </div>
    </footer>
  );
}
