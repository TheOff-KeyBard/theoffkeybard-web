import type { Metadata } from "next";
import Link from "next/link";
import { ArchiveCatalog } from "@/components/world-archive/ArchiveCatalog";

export const metadata: Metadata = {
  title: "World Archive — Index",
  description:
    "Index of Verasanth lore: open shelves, and those still being prepared.",
};

export default function ArchiveIndexPage() {
  return (
    <div>
      <p className="okb-meta mb-8">
        <Link href="/verasanth" className="hover:text-okb-text">
          Verasanth
        </Link>
        <span className="mx-2 text-okb-faint">/</span>
        <span className="text-okb-text">World Archive</span>
      </p>
      <h1 className="okb-h1 mb-4 md:mb-5">World Archive</h1>
      <p className="okb-body mb-10 max-w-xl text-okb-muted md:mb-12">
        A single index. Each shelf opens on its own page — nothing here is meant
        to be read in one sitting.
      </p>
      <ArchiveCatalog />
    </div>
  );
}
