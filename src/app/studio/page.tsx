import { notFound } from "next/navigation";
import { PublishForm } from "@/components/publish-form";
import { SiteFooter, SiteHeader } from "@/components/site-shell";

export default function StudioPage() {
  if (process.env.NODE_ENV !== "development") notFound();
  return (
    <><SiteHeader /><main id="main" tabIndex={-1} className="studio wrap"><p className="eyebrow">YOUR LOCAL PUBLISHING STUDIO</p><h1>A home for your<br /><em>next perspective.</em></h1><p className="studio-intro">Choose a pillar and share a question, an idea, or a developed point of view. Start with a short piece, or add a PDF for longer writing. Your collection can grow with your thinking.</p><PublishForm /></main><SiteFooter /></>
  );
}
