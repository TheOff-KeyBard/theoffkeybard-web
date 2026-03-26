import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { compareAshenDates, type TurnIndex } from "./calendar";

/** MDX lives under content/tales/; URL is /ledger (see next.config redirects). */
const CONTENT_DIR = path.join(process.cwd(), "content", "tales");

export type TaleFrontmatter = {
  title: string;
  excerpt: string;
  tag?: string;
  featured?: boolean;
  date?: string;
  cycle?: number;
  turn?: number;
  mark?: number;
};

function hasFullAshen(
  e: TaleFrontmatter,
): e is TaleFrontmatter & { cycle: number; turn: number; mark: number } {
  return (
    typeof e.cycle === "number" &&
    typeof e.turn === "number" &&
    typeof e.mark === "number"
  );
}

export function getTaleSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) {
    return [];
  }
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getAllTales(): (TaleFrontmatter & { slug: string })[] {
  return getTaleSlugs()
    .map((slug) => {
      const raw = fs.readFileSync(path.join(CONTENT_DIR, `${slug}.mdx`), "utf8");
      const { data } = matter(raw);
      return {
        slug,
        title: data.title as string,
        excerpt: data.excerpt as string,
        ...(typeof data.date === "string" ? { date: data.date } : {}),
        cycle: typeof data.cycle === "number" ? data.cycle : undefined,
        turn: typeof data.turn === "number" ? data.turn : undefined,
        mark: typeof data.mark === "number" ? data.mark : undefined,
        ...(typeof data.tag === "string" ? { tag: data.tag } : {}),
        ...(data.featured === true ? { featured: true } : {}),
      };
    })
    .sort((a, b) => {
      if (hasFullAshen(a) && hasFullAshen(b)) {
        return compareAshenDates(
          {
            cycle: a.cycle,
            turn: a.turn as TurnIndex,
            mark: a.mark,
          },
          {
            cycle: b.cycle,
            turn: b.turn as TurnIndex,
            mark: b.mark,
          },
        );
      }
      if (hasFullAshen(a) && !hasFullAshen(b)) return -1;
      if (!hasFullAshen(a) && hasFullAshen(b)) return 1;
      const da = a.date ?? "";
      const db = b.date ?? "";
      if (da < db) return 1;
      if (da > db) return -1;
      return 0;
    });
}

export function getTaleSource(slug: string): string | null {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) {
    return null;
  }
  return fs.readFileSync(filePath, "utf8");
}
