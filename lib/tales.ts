import fs from "fs";
import path from "path";
import matter from "gray-matter";

/** MDX lives under content/tales/; URL is /ledger (see next.config redirects). */
const CONTENT_DIR = path.join(process.cwd(), "content", "tales");

export type TaleFrontmatter = {
  title: string;
  date: string;
  excerpt: string;
  tag?: string;
  featured?: boolean;
};

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
        date: data.date as string,
        excerpt: data.excerpt as string,
        ...(typeof data.tag === "string" ? { tag: data.tag } : {}),
        ...(data.featured === true ? { featured: true } : {}),
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getTaleSource(slug: string): string | null {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) {
    return null;
  }
  return fs.readFileSync(filePath, "utf8");
}
