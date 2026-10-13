import { getPovs, savePov } from "@/lib/povs";
import { pillars, writingFormats, type WritingFormat } from "@/lib/thought-leadership";

export async function GET() {
  return Response.json(await getPovs(), { headers: { "Cache-Control": "no-store" } });
}

export async function POST(request: Request) {
  // The studio is local only. npm run dev binds to loopback; production is read-only.
  if (process.env.NODE_ENV !== "development") return new Response(null, { status: 404 });
  const url = new URL(request.url);
  if (!["localhost", "127.0.0.1"].includes(url.hostname) || request.headers.get("origin") !== url.origin) {
    return Response.json({ error: "Please publish from the local studio on this website." }, { status: 403 });
  }
  if (Number(request.headers.get("content-length")) > 11 * 1024 * 1024) {
    return Response.json({ error: "Please choose a PDF smaller than 10 MB." }, { status: 413 });
  }
  let form: FormData;
  try { form = await request.formData(); }
  catch { return Response.json({ error: "The upload could not be read. Please try again." }, { status: 400 }); }

  const title = String(form.get("title") ?? "").trim();
  const summary = String(form.get("summary") ?? "").trim();
  const experience = String(form.get("experience") ?? "").trim();
  const kind = String(form.get("kind") ?? "");
  const pillar = pillars.find((item) => item.id === form.get("pillar"));
  const file = form.get("file");
  if (title.length < 3 || title.length > 120 || summary.length < 20 || summary.length > 600 || (experience.length > 0 && experience.length < 20) || experience.length > 1500 || !writingFormats.includes(kind as WritingFormat) || !pillar) {
    return Response.json({ error: "Choose a pillar and format, add a title and introduction (20–600 characters), and use 20–1,500 characters for any experience notes." }, { status: 400 });
  }
  const hasPdf = file instanceof File && file.size > 0;
  if (kind === "Paper" && !hasPdf) {
    return Response.json({ error: "Add a PDF for a paper, or choose another format to share a short piece without one." }, { status: 400 });
  }
  if ((file !== null && !(file instanceof File)) || (hasPdf && (file.size > 10 * 1024 * 1024 || !file.name.toLowerCase().endsWith(".pdf")))) {
    return Response.json({ error: "Choose a PDF file smaller than 10 MB." }, { status: 400 });
  }
  const pdf = hasPdf ? Buffer.from(await file.arrayBuffer()) : undefined;
  if (pdf && pdf.subarray(0, 5).toString() !== "%PDF-") {
    return Response.json({ error: "This file does not appear to be a PDF. Please export your paper as a PDF and try again." }, { status: 400 });
  }
  try {
    const record = await savePov({ title, summary, experience, kind: kind as WritingFormat, topic: pillar.title, pillar: pillar.id, hasPdf }, pdf);
    return Response.json(record, { status: 201 });
  } catch {
    return Response.json({ error: "The piece could not be saved. Please try again." }, { status: 500 });
  }
}
