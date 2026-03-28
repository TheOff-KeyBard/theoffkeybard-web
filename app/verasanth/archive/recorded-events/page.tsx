import type { Metadata } from "next";
import Link from "next/link";
import { ArchiveBreadcrumb } from "@/components/world-archive/ArchiveCatalog";
import { RecordedEventsFragments } from "@/components/verasanth/RecordedEventsFragments";

export const metadata: Metadata = {
  title: "Recorded Events",
  description:
    "Splinters the ledger allowed out — and where to read longer accounts.",
};

export default function RecordedEventsArchivePage() {
  return (
    <div>
      <ArchiveBreadcrumb sectionTitle="Recorded Events" />
      <h1 className="okb-h1 mb-6">Recorded Events</h1>
      <p className="okb-body mb-6 max-w-3xl">
        Not everything that happens in Verasanth is recorded. The ledger keeps
        what it chooses. Below are a few things it has let slip — not the whole
        chronicle, only splinters.
      </p>
      <RecordedEventsFragments />
      <p className="okb-meta mt-6 italic text-okb-faint">
        Refresh the page; the city may offer a different shard.
      </p>
      <div className="okb-body mt-12 max-w-3xl space-y-4 border-t border-okb-border pt-10 text-sm text-okb-muted">
        <p className="font-serif text-base font-semibold text-okb-text">
          Longer records
        </p>
        <p>
          <Link href="/ledger" className="text-okb-accent hover:text-okb-accent-h">
            The Ashen Ledger
          </Link>{" "}
          holds formal entries.{" "}
          <Link href="/journal" className="text-okb-accent hover:text-okb-accent-h">
            The Bard&apos;s Journal
          </Link>{" "}
          carries essays and reckonings with the city.
        </p>
        <p>
          <Link
            href="/journal/where_verasanth_stands"
            className="text-okb-accent hover:text-okb-accent-h"
          >
            Where Verasanth Stands
          </Link>{" "}
          — one thread on the city as it is now.
        </p>
      </div>
    </div>
  );
}
