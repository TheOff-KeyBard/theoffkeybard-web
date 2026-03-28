import Link from "next/link";
import { Card } from "@/components/ui/Card";
import {
  ARCHIVE_SECTIONS,
  archivePath,
  type ArchiveSection,
} from "@/lib/world-archive";

export function ArchiveCatalog() {
  return (
    <ul className="grid grid-cols-1 gap-7 md:grid-cols-2 md:gap-8">
      {ARCHIVE_SECTIONS.map((s: ArchiveSection) => {
        if (s.status === "coming") {
          return (
            <li key={s.slug}>
              <div className="flex h-full min-h-[6.5rem] flex-col rounded-sm border border-dashed border-okb-border bg-okb-bg-elevated/50 p-6">
                <h3 className="font-serif text-lg font-semibold leading-snug text-okb-muted">
                  {s.title}
                </h3>
                <p className="okb-body mt-3 flex-1 text-sm leading-relaxed text-okb-faint">
                  {s.excerpt}
                </p>
                <p className="okb-meta mt-4 uppercase tracking-wide text-okb-faint">
                  Unwritten — for now
                </p>
              </div>
            </li>
          );
        }
        return (
          <li key={s.slug}>
            <Card
              className="bg-okb-bg h-full min-h-[7rem] md:min-h-0"
              title={s.title}
              excerpt={s.excerpt}
              href={archivePath(s.slug)}
              emphasizeTitle
            />
          </li>
        );
      })}
    </ul>
  );
}

export function ArchiveBreadcrumb({
  sectionTitle,
}: {
  sectionTitle: string;
}) {
  return (
    <p className="okb-meta mb-6">
      <Link href="/verasanth" className="hover:text-okb-text">
        Verasanth
      </Link>
      <span className="mx-2 text-okb-faint">/</span>
      <Link href="/verasanth/archive" className="hover:text-okb-text">
        World Archive
      </Link>
      <span className="mx-2 text-okb-faint">/</span>
      <span className="text-okb-text">{sectionTitle}</span>
    </p>
  );
}
