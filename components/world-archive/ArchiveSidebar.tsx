import Link from "next/link";
import {
  ARCHIVE_BASE,
  ARCHIVE_SECTIONS,
  archivePath,
  type ArchiveSection,
} from "@/lib/world-archive";

function navClass(active: boolean, muted: boolean) {
  const base =
    "block rounded-sm px-2 py-1.5 text-sm transition-colors border-l-2 -ml-px pl-3";
  if (muted) {
    return `${base} border-transparent text-okb-faint cursor-default`;
  }
  if (active) {
    return `${base} border-okb-accent bg-okb-bg-elevated/80 text-okb-text font-medium`;
  }
  return `${base} border-transparent text-okb-muted hover:border-okb-border hover:bg-okb-bg-elevated/50 hover:text-okb-text`;
}

export function ArchiveSidebar({ currentSlug }: { currentSlug: string }) {
  return (
    <nav aria-label="World archive shelves" className="space-y-1">
      <Link
        href={ARCHIVE_BASE}
        className={navClass(currentSlug === "", false)}
      >
        All shelves
      </Link>
      {ARCHIVE_SECTIONS.map((s: ArchiveSection) => {
        const muted = s.status === "coming";
        const href = muted ? undefined : archivePath(s.slug);
        const active = s.slug === currentSlug;
        if (muted) {
          return (
            <span
              key={s.slug}
              className={navClass(false, true)}
              title="Not yet set down"
            >
              {s.title}
              <span className="okb-meta ml-1 text-[0.65rem] uppercase tracking-wide">
                quiet
              </span>
            </span>
          );
        }
        return (
          <Link
            key={s.slug}
            href={href!}
            className={navClass(active, false)}
          >
            {s.title}
          </Link>
        );
      })}
    </nav>
  );
}
