import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "The Bards Journal",
};

export default function TavernPage() {
  return (
    <section className="bg-okb-bg py-16 md:py-24">
      <Container>
        <article className="space-y-8">
          <h1 className="okb-h1">The Bards Journal</h1>
          <div className="space-y-4">
            <p className="okb-body">
              Not every story belongs to the city. Some are told beside it — in
              firelight, over a drink, between people who have seen enough to know
              better.
            </p>
            <p className="okb-body">
              This is where the bard speaks plainly. Reflections, notes, and the
              occasional sharp edge. Not Verasanth — but shaped by the same
              instinct.
            </p>
          </div>
          <div className="border border-dashed border-okb-border bg-okb-bg-elevated px-6 py-10 text-center">
            <p className="okb-body text-okb-muted">
              Journal entries are coming soon.
            </p>
          </div>
          <p className="text-sm text-okb-faint">
            Some things are easier to say outside the walls.
          </p>
          <div>
            <Link
              href="/"
              className="text-sm text-okb-muted hover:text-okb-text"
            >
              ← Return to the main page
            </Link>
          </div>
        </article>
      </Container>
    </section>
  );
}
