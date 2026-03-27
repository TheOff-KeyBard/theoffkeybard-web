import type { Metadata } from "next";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { getAllJournalEntries } from "@/lib/journal";

export const metadata: Metadata = {
  title: "The Bard’s Journal",
};

export default function JournalPage() {
  const entries = getAllJournalEntries();

  return (
    <section className="bg-okb-bg py-16 md:py-24">
      <Container>
        <div className="space-y-10">
          <header className="space-y-3">
            <h1 className="okb-h1">The Bard’s Journal</h1>
            <p className="okb-body max-w-2xl">
              Not every story belongs to the city. Some are told beside it — in
              firelight, over a drink, between people who have seen enough to know
              better.
            </p>
            <p className="okb-body max-w-2xl">
              This is where the bard speaks plainly. Reflections, notes, and the
              occasional sharp edge. Not Verasanth — but shaped by the same
              instinct.
            </p>
          </header>

          <div className="border-t border-okb-border/50 pt-10">
            <Card
              title="Behind the Quill"
              excerpt="Who writes here, and what this place is for — in plain voice, outside the fiction."
              href="/about"
            />
          </div>

          {entries.length === 0 ? (
            <div className="border border-dashed border-okb-border bg-okb-bg-elevated px-6 py-10 text-center">
              <p className="okb-body text-okb-muted">Nothing written yet.</p>
            </div>
          ) : (
            <ul className="grid gap-6 sm:grid-cols-1">
              {entries.map(({ slug, title, date, excerpt }) => (
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
                    href={`/journal/${slug}`}
                  />
                </li>
              ))}
            </ul>
          )}

          <p className="text-sm text-okb-faint">
            Some things are easier to say outside the walls.
          </p>
        </div>
      </Container>
    </section>
  );
}