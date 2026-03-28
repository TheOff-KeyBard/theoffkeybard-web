import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ARCHIVE_BASE, archivePath, liveArchiveSections } from "@/lib/world-archive";

export const metadata: Metadata = {
  title: "The City in Fragments",
  description: "A record of what can still be named.",
};

export default function VerasanthLorePage() {
  const shelves = liveArchiveSections();

  return (
    <>
      <section className="bg-okb-bg py-16 md:py-24">
        <Container size="text" className="space-y-7">
          <h1 className="okb-h1">The City in Fragments</h1>
          <p className="okb-hero-intro max-w-xl">
            A record of what can still be named.
          </p>
          <p className="okb-body max-w-2xl">
            Verasanth is not a place you visit. It is a place that keeps you. The
            guilds, the sewers, the firelight — all of it is maintenance. All of
            it is containment.
          </p>
          <div className="flex flex-col gap-4 pt-1 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
            <Button variant="accent" href="/verasanth/play">
              Enter Verasanth
            </Button>
            <Link href="/ledger" className="okb-meta hover:text-okb-text">
              Open the Ledger
            </Link>
          </div>
        </Container>
      </section>

      <section className="bg-okb-bg-elevated py-16 md:py-24">
        <Container size="wide" className="space-y-8">
          <p className="okb-body max-w-2xl">
            Lore is shelved by topic. Open the index for every entry — including
            shelves still being prepared.
          </p>
          <ul className="grid grid-cols-1 gap-7 md:grid-cols-2 md:gap-8">
            {shelves.map((s) => (
              <li key={s.slug}>
                <Card
                  className="bg-okb-bg h-full min-h-[7.5rem] md:min-h-0"
                  title={s.title}
                  excerpt={s.excerpt}
                  href={archivePath(s.slug)}
                  emphasizeTitle
                />
              </li>
            ))}
          </ul>
          <div className="border-t border-okb-border pt-8 md:pt-10">
            <p className="okb-meta">
              <Link
                href={ARCHIVE_BASE}
                className="text-okb-accent hover:text-okb-accent-h"
              >
                Full archive index
              </Link>{" "}
              <span className="text-okb-faint">
                — reserved shelves and navigation.
              </span>
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-okb-bg py-16 md:py-24">
        <Container size="text" className="space-y-7">
          <SectionHeading title="Enter the City" />
          <div className="max-w-xl space-y-4">
            <p className="okb-body">Some stories are safer at a distance.</p>
            <p className="okb-body">Verasanth is not one of them.</p>
          </div>
          <div className="space-y-3">
            <Button variant="accent" href="/verasanth/play">
              Enter Verasanth
            </Button>
            <p className="okb-meta italic text-okb-faint">
              The city remembers everything.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
