import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { randomUUID } from "node:crypto";
import type { PillarId, WritingFormat } from "./thought-leadership";

export type Pov = {
  id: string;
  title: string;
  kind: WritingFormat;
  topic: string;
  pillar?: PillarId;
  hasPdf?: boolean;
  summary: string;
  experience: string;
  publishedAt: string;
};

const directory = path.join(process.cwd(), "content", "povs");
const validId = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/;

export async function getPovs(): Promise<Pov[]> {
  let entries;
  try {
    entries = await readdir(directory, { withFileTypes: true });
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") return [];
    throw error;
  }
  const records = await Promise.all(entries.filter((entry) => entry.isDirectory() && validId.test(entry.name)).map(async (entry) => {
    try {
      return JSON.parse(await readFile(path.join(directory, entry.name, "metadata.json"), "utf8")) as Pov;
    } catch (error) {
      // An upload becomes visible only after its metadata file is written.
      if ((error as NodeJS.ErrnoException).code === "ENOENT") return null;
      throw error;
    }
  }));
  return records.filter((record): record is Pov => record !== null).sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export async function savePov(fields: Omit<Pov, "id" | "publishedAt">, pdf?: Buffer) {
  const record: Pov = { ...fields, id: randomUUID(), publishedAt: new Date().toISOString() };
  const recordDirectory = path.join(directory, record.id);
  await mkdir(recordDirectory, { recursive: true });
  if (pdf) await writeFile(path.join(recordDirectory, "paper.pdf"), pdf, { flag: "wx" });
  await writeFile(path.join(recordDirectory, "metadata.json"), JSON.stringify(record, null, 2) + "\n", { flag: "wx" });
  return record;
}

export async function getPovPdf(id: string) {
  if (!validId.test(id)) return null;
  try {
    return await readFile(path.join(directory, id, "paper.pdf"));
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") return null;
    throw error;
  }
}
