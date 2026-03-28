import Link from "next/link";
import { Card } from "@/components/ui/Card";
import {
  ARCHIVE_SECTIONS,
  archivePath,
  type ArchiveSection,
} from "@/lib/world-archive";

export function ArchiveCatalog() {
  return (
    <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {ARCHIVE_SECTIONS.map((s: ArchiveSection) => {
        if (s.status === "coming") {
          return (
            <li key={s.slug}>
              <div className="rounded-sm border border-dashed border-okb-border bg-okb-bg-elevated/50 p-5">
                <h3 className="font-serif text-lg font-semibold text-okb-muted">
                  {s.title}
                </h3>
                <p className="okb-body mt-2 text-sm text-okb-faint">{s.excerpt}</p>
                <p className="okb-meta mt-3 uppercase tracking-wide text-okb-faint">
                  Reserved for the archive
                </p>
              </div>
            </li>
          );
        }
        return (
          <li key={s.slug}>
            <Card
              className="bg-okb-bg h-full"
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
