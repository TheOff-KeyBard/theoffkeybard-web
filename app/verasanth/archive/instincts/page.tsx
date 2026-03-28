import type { Metadata } from "next";
import { ArchiveBreadcrumb } from "@/components/world-archive/ArchiveCatalog";
import { VERASANTH_INSTINCT_LORE } from "@/content/verasanth-instincts-lore";

export const metadata: Metadata = {
  title: "Instincts",
  description:
    "What the city repeats often enough to name — memories it plants or finds in you.",
};

const SHELL =
  "rounded-sm border border-okb-border bg-okb-bg-elevated p-5";

export default function InstinctsArchivePage() {
  return (
    <div>
      <ArchiveBreadcrumb sectionTitle="Instincts" />
      <h1 className="okb-h1 mb-6">Instincts</h1>
      <p className="okb-body mb-10 max-w-3xl">
        Not every gift has a name yet. These are the ones the city has repeated
        often enough to recognize — memories it plants, or that it finds
        already sleeping in you.
      </p>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {VERASANTH_INSTINCT_LORE.map((row) => (
          <div key={row.name} className={SHELL}>
            <h2 className="okb-h3">{row.name}</h2>
            <p className="okb-body mt-3 text-sm">{row.description}</p>
          </div>
        ))}
      </div>
      <p className="okb-meta mt-8 italic text-okb-faint">
        Phase 1 record. The list will grow when the city admits more.
      </p>
    </div>
  );
}
