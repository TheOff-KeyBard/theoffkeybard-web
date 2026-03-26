import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "The World of Verasanth",
};

function GuildPanel({ title, children }: { title: string; children: string }) {
  return (
    <div className="border border-okb-border bg-okb-bg-elevated p-5">
      <h3 className="okb-h3">{title}</h3>
      <p className="okb-body mt-2">{children}</p>
    </div>
  );
}

const VERASANTH_TIMELINE_ENTRIES: { ashenDate: string; description: string }[] = [
  {
    ashenDate: "Mark 3, Turn of Embers, Cycle 6312",
    description:
      "The first light recorded. The city opened its eyes. Something noticed.",
  },
  {
    ashenDate: "Mark 4, Turn of Veils, Cycle 6312",
    description:
      "Echoes noted in the stone walls of the lower passages. The walls were already listening.",
  },
  {
    ashenDate: "Mark 6, Turn of Shadows, Cycle 6312",
    description:
      "A descender passed the last door and did not come back the same.",
  },
  {
    ashenDate: "Mark 7, Turn of Embers, Cycle 6312",
    description:
      "A stranger arrived at the tavern. The ledger already had their name.",
  },
  {
    ashenDate: "Mark 8, Turn of Stone, Cycle 6312",
    description:
      "The Archive's containment flame shifted. The ash did not settle.",
  },
  {
    ashenDate: "Mark 11, Turn of Echoes, Cycle 6312",
    description:
      "The Sanctum flame responded to something it should not have been able to hear.",
  },
  {
    ashenDate: "Mark 17, Turn of Embers, Cycle 6312",
    description:
      "The quiet step noticed in the southern alleys. Something learned to move without disturbing the dust.",
  },
  {
    ashenDate: "Mark 19, Turn of Stone, Cycle 6312",
    description:
      "The Veil Market made its first recorded move. No one saw it happen.",
  },
  {
    ashenDate: "Mark 22, Turn of Veils, Cycle 6312",
    description:
      "The Warden's ledger recorded a name twice. The second entry had a different date.",
  },
];

export default function VerasanthLorePage() {
  return (
    <>
      <section className="bg-okb-bg py-16 md:py-24">
        <Container size="text" className="space-y-6">
          {/* TODO: expansion — map teaser, quick links to deep lore */}
          <h1 className="okb-h1">The World of Verasanth</h1>
          <p className="okb-hero-intro">
            Verasanth is not a place you visit. It is a place that keeps you.
          </p>
          <p className="okb-body">
            A city built over something older than the structures above it. The
            guilds, the sewers, the firelight — all of it is maintenance. All of
            it is containment.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
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
        <Container size="text" className="space-y-6">
          {/* TODO: expansion — illustrated primer, timeline, key terms */}
          <SectionHeading title="What Is Verasanth?" />
          <div className="space-y-4">
            <p className="okb-body">
              Verasanth is a living city disguised as architecture.
            </p>
            <p className="okb-body">
              Its streets remember. Its walls react. Its institutions do more
              than govern — they maintain something buried, something old enough
              that no one still living fully understands it.
            </p>
            <p className="okb-body">
              To most who arrive, Verasanth feels wrong in small ways first. The
              air narrows in certain corridors. Firelight behaves like it is
              listening. Doors open where there should be stone, and close where
              there should be memory.
            </p>
            <p className="okb-body">
              The deeper you go, the less the city feels built. The more it
              feels grown.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-okb-bg py-16 md:py-24">
        <Container size="text" className="space-y-6">
          {/* TODO: expansion — sewers, ledger, characters, district index */}
          <SectionHeading title="What Lies Within" />
          <ul className="list-disc space-y-2 pl-6 okb-body text-okb-text">
            <li>A city that records more than it reveals</li>
            <li>
              Guilds that function like organs in a body no one admits is alive
            </li>
            <li>
              Sewers that serve as the first descent into the machinery below
            </li>
            <li>
              A ledger that remembers names before their stories are finished
            </li>
            <li>
              Fractures, rumors, and signs that the structure is shifting from
              beneath itself
            </li>
          </ul>
          <div className="space-y-4">
            <p className="okb-body">
              Nothing in Verasanth exists in isolation. Every district, every
              guild, every corridor is part of something larger.
            </p>
            <p className="okb-body">The question is not whether the city is alive.</p>
            <p className="okb-body">
              The question is what it is trying to keep contained.
            </p>
          </div>
          <p className="okb-meta mt-6">
            <Link
              href="/ledger"
              className="text-okb-accent hover:text-okb-accent-h"
            >
              Fragments of this surface in the ledger.
            </Link>
          </p>
        </Container>
      </section>

      <section className="bg-okb-bg-elevated py-16 md:py-24">
        <Container size="text" className="space-y-6">
          {/* TODO: expansion — zone map, descent diagram, run hooks */}
          <SectionHeading title="The Descent" />
          <div className="space-y-4">
            <p className="okb-body">
              Every road in Verasanth eventually points downward.
            </p>
            <p className="okb-body">
              What begins in the inn and market gives way to sewer stone, then
              deeper chambers, then places where the city stops pretending to be
              a city at all.
            </p>
            <p className="okb-body">
              The descent is not just physical. It is structural. Psychological.
              Spiritual.
            </p>
            <p className="okb-body">You do not go deeper only into the world.</p>
            <p className="okb-body">You go deeper into what the world is.</p>
          </div>
          <p className="okb-meta italic text-okb-muted">
            The further down you travel, the less likely it is that the city will
            let you remain unchanged.
          </p>
        </Container>
      </section>

      <section className="bg-okb-bg py-16 md:py-24">
        <Container size="text" className="space-y-6">
          {/* TODO: expansion — guild subpages, roster teasers, faction standings */}
          <SectionHeading title="The Guilds of Verasanth" />
          <p className="okb-body">
            The guilds are not simply political factions. They are functions. Each
            keeps some part of the city operating, whether they understand that
            role or not.
          </p>
        </Container>
        <Container size="wide" className="mt-8">
          <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <li>
              <Link
                href="/verasanth/ashen-archive"
                className="block border border-okb-border bg-okb-bg-elevated p-5 transition-colors hover:border-okb-accent"
              >
                <h3 className="okb-h3">The Ashen Archive</h3>
                <p className="okb-body mt-2">
                  Keepers of memory, containment, and dangerous knowledge.
                </p>
              </Link>
            </li>
            <li>
              <GuildPanel title="The Broken Banner">
                Endurance, pressure, and survival given institutional form.
              </GuildPanel>
            </li>
            <li>
              <GuildPanel title="The Quiet Sanctum">
                Healers, shepherds of hope, and a quiet defiance against despair.
              </GuildPanel>
            </li>
            <li>
              <GuildPanel title="Stone Watch">
                Wardens of structure, foundations, and failing walls.
              </GuildPanel>
            </li>
            <li>
              <GuildPanel title="The Veil Market">
                Information, evasion, and the shadow-economy beneath the official
                city.
              </GuildPanel>
            </li>
            <li>
              <GuildPanel title="The Umbral Covenant">
                Those who work closest to corruption, shadow, and the truths most
                people refuse to name.
              </GuildPanel>
            </li>
          </ul>
        </Container>
        <Container size="text" className="mt-8">
          <p className="okb-body">
            Each guild believes it serves its own purpose. The city may know
            better.
          </p>
        </Container>
      </section>

      {/* TODO: pull timeline entries from content/timeline/ or API when volume
          warrants dynamic loading */}
      <section className="bg-okb-bg-elevated py-16 md:py-24">
        <Container size="text" className="space-y-6">
          <SectionHeading title="Recorded Events" />
          <p className="okb-body">
            Not everything that happens in Verasanth is recorded. The ledger
            keeps what it chooses. These are the events it has chosen — so far.
          </p>
          <ul className="list-none p-0">
            {VERASANTH_TIMELINE_ENTRIES.map((entry, index) => (
              <li
                key={entry.ashenDate}
                className={`flex flex-col gap-2 py-4 sm:flex-row sm:items-start sm:gap-8 ${
                  index < VERASANTH_TIMELINE_ENTRIES.length - 1
                    ? "border-b border-okb-border"
                    : ""
                }`}
              >
                <p className="okb-meta shrink-0 italic text-okb-muted sm:w-52">
                  {entry.ashenDate}
                </p>
                <p className="okb-body min-w-0 flex-1">{entry.description}</p>
              </li>
            ))}
          </ul>
          <p className="okb-meta italic text-okb-faint">
            The ledger is not finished.
          </p>
        </Container>
      </section>

      <section className="bg-okb-bg-elevated py-16 md:py-24">
        <Container size="text" className="space-y-6">
          {/* TODO: expansion — alternate CTAs, play requirements, lore catch-up */}
          <SectionHeading title="Enter the City" />
          <div className="space-y-4">
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
