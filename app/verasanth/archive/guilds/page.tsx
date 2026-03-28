import type { Metadata } from "next";
import { ArchiveBreadcrumb } from "@/components/world-archive/ArchiveCatalog";
import { GuildArchiveGrid } from "@/components/world-archive/GuildArchiveGrid";

export const metadata: Metadata = {
  title: "Guilds of Verasanth",
  description:
    "Six orders — each a function the city relies on, whether they know it or not.",
};

export default function GuildsArchivePage() {
  return (
    <div>
      <ArchiveBreadcrumb sectionTitle="Guilds of Verasanth" />
      <h1 className="okb-h1 mb-6">Guilds of Verasanth</h1>
      <div className="mb-8 max-w-3xl">
        <p className="okb-body">
          The guilds are not simply political factions. They are functions. Each
          keeps some part of the city operating, whether they understand that
          role or not.
        </p>
      </div>
      <GuildArchiveGrid />
      <div className="mt-8 max-w-3xl space-y-6">
        <p className="okb-body">
          Each guild believes it serves its own purpose. The city may know
          better.
        </p>
        <p className="okb-meta">
          Deeper fictions for each order wait under their own sigil — the old
          doors still answer.
        </p>
      </div>
    </div>
  );
}
