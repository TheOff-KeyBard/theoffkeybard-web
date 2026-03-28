/**
 * Curated world-lore archive: routes under /verasanth/archive/*.
 * Add sections here first, then add app/verasanth/archive/[slug]/page.tsx.
 */

export type ArchiveSectionStatus = "live" | "coming";

export type ArchiveSection = {
  slug: string;
  title: string;
  excerpt: string;
  status: ArchiveSectionStatus;
};

export const ARCHIVE_BASE = "/verasanth/archive";

export const ARCHIVE_SECTIONS: ArchiveSection[] = [
  {
    slug: "about-the-city",
    title: "About the City",
    excerpt:
      "What Verasanth is — in brief — and what lies beneath the official map.",
    status: "live",
  },
  {
    slug: "guilds",
    title: "Guilds of Verasanth",
    excerpt:
      "The orders that hold the city together — or keep it from collapsing.",
    status: "live",
  },
  {
    slug: "races",
    title: "Races of Verasanth",
    excerpt:
      "Peoples shaped by fire, stone, storm, and choice. None remain unchanged.",
    status: "live",
  },
  {
    slug: "instincts",
    title: "Instincts",
    excerpt:
      "Memories the city wakes — or finds sleeping in you. Not roles; echoes.",
    status: "live",
  },
  {
    slug: "recorded-events",
    title: "Recorded Events",
    excerpt:
      "Splinters the ledger let slip — and accounts that remember more than a single night.",
    status: "live",
  },
  {
    slug: "places-beneath",
    title: "Places Beneath the Streets",
    excerpt:
      "Chambers and descents the stone has not yet learned to name aloud.",
    status: "coming",
  },
  {
    slug: "notable-figures",
    title: "Notable Figures",
    excerpt:
      "Names that recur in rumor, record, and flame — still gathering weight.",
    status: "coming",
  },
  {
    slug: "forces-at-work",
    title: "Forces at Work",
    excerpt:
      "Pressures, powers, and patterns the city does not explain aloud.",
    status: "coming",
  },
];

export function archivePath(slug: string): string {
  return `${ARCHIVE_BASE}/${slug}`;
}

export function liveArchiveSections(): ArchiveSection[] {
  return ARCHIVE_SECTIONS.filter((s) => s.status === "live");
}
