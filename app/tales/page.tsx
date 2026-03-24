import type { Metadata } from "next";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { getAllTales } from "@/lib/tales";

export const metadata: Metadata = {
  title: "Tales",
};

export default function TalesIndexPage() {
  const tales = getAllTales();

  return (
    <section className="bg-okb-bg py-16 md:py-24">
      <Container>
        <div className="space-y-10">
          <header className="space-y-3">
            <h1 className="okb-h1">Tales</h1>
            <p className="okb-body max-w-2xl">
              Longer pieces and serial notes from the archive. New entries arrive
              as they are finished.
            </p>
          </header>

          {tales.length === 0 ? (
            <p className="okb-body">No tales published yet.</p>
          ) : (
            <ul className="grid gap-6 sm:grid-cols-1">
              {tales.map(({ slug, title, date, excerpt, tag }) => (
                <li key={slug} className="space-y-2">
                  <time dateTime={date} className="okb-meta block uppercase tracking-wide">
                    {date}
                  </time>
                  <Card
                    title={title}
                    excerpt={excerpt}
                    href={`/tales/${slug}`}
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
