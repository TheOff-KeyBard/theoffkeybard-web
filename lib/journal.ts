import fs from "fs";
import path from "path";
import matter from "gray-matter";

/** MDX lives under content/journal/; public URL is /journal */
const CONTENT_DIR = path.join(process.cwd(), "content", "journal");

export type JournalFrontmatter = {
  title: string;
  date: string;
  excerpt: string;
};

export function getJournalSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) {
    return [];
  }

  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getAllJournalEntries(): (JournalFrontmatter & { slug: string })[] {
  return getJournalSlugs()
    .map((slug) => {
      const raw = fs.readFileSync(path.join(CONTENT_DIR, `${slug}.mdx`), "utf8");
      const { data } = matter(raw);

      return {
        slug,
        title: data.title as string,
        date: data.date as string,
        excerpt: data.excerpt as string,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getJournalSource(slug: string): string | null {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  return fs.readFileSync(filePath, "utf8");
}