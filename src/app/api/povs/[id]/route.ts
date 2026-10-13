import { getPovPdf } from "@/lib/povs";

export async function GET(_request: Request, context: RouteContext<"/api/povs/[id]">) {
  const { id } = await context.params;
  const pdf = await getPovPdf(id);
  if (!pdf) return new Response(null, { status: 404 });
  return new Response(new Uint8Array(pdf), { headers: {
    "Content-Type": "application/pdf",
    "Content-Disposition": `inline; filename="michelle-ching-${id}.pdf"`,
    "X-Content-Type-Options": "nosniff",
    "Content-Security-Policy": "sandbox",
  } });
}
