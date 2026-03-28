import type { Metadata } from "next";
import { ArchiveBreadcrumb } from "@/components/world-archive/ArchiveCatalog";
import { RACES_ARCHIVE } from "@/content/world-archive/races-data";

export const metadata: Metadata = {
  title: "Races of Verasanth",
  description:
    "Peoples drawn into the walls — each changed by what they found here.",
};

const SHELL =
  "rounded-sm border border-okb-border bg-okb-bg-elevated p-5";

export default function RacesArchivePage() {
  return (
    <div>
      <ArchiveBreadcrumb sectionTitle="Races of Verasanth" />
      <h1 className="okb-h1 mb-6">Races of Verasanth</h1>
      <p className="okb-body mb-10 max-w-3xl">
        Verasanth does not ask where you came from. It asks what you are
        becoming. The city has drawn many peoples into its walls — each shaped
        differently by what they found here.
      </p>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {RACES_ARCHIVE.map((race) => (
          <article key={race.id} className={SHELL}>
            <h2 className="okb-h3">{race.name}</h2>
            <p className="okb-meta italic">{race.instinctLine}</p>
            <div className="mt-3 space-y-3">
              {race.paragraphs.map((p) => (
                <p key={p.slice(0, 48)} className="okb-body text-sm">
                  {p}
                </p>
              ))}
            </div>
          </article>
        ))}
      </div>
      <p className="okb-meta mt-8 italic text-okb-faint">
        The city keeps everyone. What it does with them varies.
      </p>
    </div>
  );
}
