import Link from "next/link";
import { Arrow } from "./arrow";
import { SiteNavigation } from "./site-navigation";

export function SiteHeader({ anchorId = "top" }: { anchorId?: string | null }) {
  const HomeLink = anchorId === null ? "a" : Link;
  return (
    <header id={anchorId ?? undefined} className="site-header wrap">
      <HomeLink href={anchorId === null ? "#top" : "/#top"} className="wordmark" aria-label="Michelle Ching home">
        <span className="monogram">mc<span>.</span></span>
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
        <a href="https://www.linkedin.com/in/chingmichelle/" target="_blank" rel="noreferrer">LinkedIn <Arrow diagonal /></a>
        {process.env.NODE_ENV === "development" && <Link href="/studio">Publishing studio <Arrow diagonal /></Link>}
        <a href="#top" className="back-to-top">Back to top <Arrow /></a>
      </div>
    </footer>
  );
}
