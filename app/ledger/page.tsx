import type { Metadata } from "next";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { formatVerasanthDate, type TurnIndex } from "@/lib/calendar";
import { getAllTales } from "@/lib/tales";

export const metadata: Metadata = {
  title: "The Ashen Ledger",
};

export default function LedgerIndexPage() {
  const entries = getAllTales();

  return (
    <section className="bg-okb-bg py-16 md:py-24">
      <Container>
        <div className="space-y-10">
          <header className="space-y-3">
            <h1 className="okb-h1">The Ashen Ledger</h1>
            <p className="okb-body max-w-2xl">
              Longer pieces and serial notes from the ledger. New entries arrive
              as they are finished.
            </p>
          </header>

          {entries.length === 0 ? (
            <p className="okb-body">Nothing in the ledger yet.</p>
          ) : (
            <ul className="grid gap-6 sm:grid-cols-1">
              {entries.map(({ slug, title, date, cycle, turn, mark, excerpt, tag }) => (
                <li key={slug} className="space-y-2">
                  <time
                    dateTime={
                      cycle != null && turn != null && mark != null
                        ? `${cycle}-${turn}-${mark}`
                        : (date ?? "")
                    }
                    className="okb-meta block uppercase tracking-wide"
                  >
                    {cycle != null && turn != null && mark != null
                      ? formatVerasanthDate({
                          cycle,
                          turn: turn as TurnIndex,
                          mark,
                        })
                      : date}
                  </time>
                  <Card
                    title={title}
                    excerpt={excerpt}
                    href={`/ledger/${slug}`}
                    tag={tag}
                  />
                </li>
              ))}
            </ul>
          )}
        </div>
      </Container>
    </section>
  );
}
