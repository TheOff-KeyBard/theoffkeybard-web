import fs from "fs";
import path from "path";
import matter from "gray-matter";

/**
 * Guild archive MDX under content/ashen-archive/; URLs under /verasanth/ashen-archive.
 * Other guilds can follow the same pattern with a sibling folder + small loader variant.
 */
const CONTENT_DIR = path.join(process.cwd(), "content", "ashen-archive");

export type AshenArchiveFrontmatter = {
  title: string;
  date: string;
  excerpt: string;
  /** Optional label for list cards (e.g. guild facet). */
  tag?: string;
};

export function getArchiveSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) {
    return [];
  }

  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getAllArchiveEntries(): (AshenArchiveFrontmatter & { slug: string })[] {
  return getArchiveSlugs()
    .map((slug) => {
      const raw = fs.readFileSync(path.join(CONTENT_DIR, `${slug}.mdx`), "utf8");
      const { data } = matter(raw);

      return {
        slug,
        title: data.title as string,
        date: data.date as string,
        excerpt: data.excerpt as string,
        tag: data.tag as string | undefined,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getArchiveSource(slug: string): string | null {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  return fs.readFileSync(filePath, "utf8");
}
