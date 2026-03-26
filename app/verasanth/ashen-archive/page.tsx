import type { Metadata } from "next";
import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { getAllArchiveEntries } from "@/lib/ashenArchive";

export const metadata: Metadata = {
  title: "The Ashen Archive",
  description:
    "Guild lore from the Ashen Archive — memory, containment, and dangerous knowledge.",
};

export default function AshenArchivePage() {
  const entries = getAllArchiveEntries();

  return (
    <section className="bg-okb-bg py-16 md:py-24">
      <Container>
        <div className="space-y-10">
          <header className="space-y-3">
            <h1 className="okb-h1">The Ashen Archive</h1>
            <p className="okb-body max-w-2xl">
              The Ashen Archive keeps what the city cannot afford to lose — and
              what it cannot afford to remember openly. These fragments are
              offered as the guild permits: cold, precise, incomplete.
            </p>
          </header>

          {entries.length === 0 ? (
            <div className="border border-dashed border-okb-border bg-okb-bg-elevated px-6 py-10 text-center">
              <p className="okb-body text-okb-muted">No entries released yet.</p>
            </div>
          ) : (
            <ul className="grid gap-6 sm:grid-cols-1">
              {entries.map(({ slug, title, date, excerpt, tag }) => (
                <li key={slug} className="space-y-2">
                  <time
                    dateTime={date}
                    className="okb-meta block uppercase tracking-wide"
                  >
                    {date}
                  </time>

                  <Card
                    title={title}
                    excerpt={excerpt}
                    href={`/verasanth/ashen-archive/${slug}`}
                    tag={tag}
                  />
                </li>
              ))}
            </ul>
          )}

          <p className="text-sm text-okb-faint">
            <Link
              href="/verasanth"
              className="text-okb-accent hover:text-okb-accent-h"
            >
              ← Back to Verasanth
            </Link>
          </p>
        </div>
      </Container>
    </section>
  );
}
