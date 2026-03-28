import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "The World of Verasanth",
};

/** Full-area link cards: equal height in grid, shared padding, safe text wrap. */
const GUILD_LORE_CARD_CLASS =
  "flex h-full min-h-0 min-w-0 w-full flex-col border border-okb-border bg-okb-bg-elevated p-5 transition-colors hover:border-okb-accent";
const GUILD_LORE_CARD_BODY_CLASS = "okb-body mt-2 min-w-0 flex-1 break-words";
const GUILD_LORE_CARD_LEADER_CLASS =
  "mt-4 font-serif text-sm font-semibold tracking-wide text-okb-text";
const GUILD_LORE_CARD_LEADER_META_CLASS = "okb-meta mt-1";

/** Guild hub cards: leader + race / title (canon Verasanth). */
const VERASANTH_GUILD_CARDS = [
  {
    href: "/verasanth/ashen-archive",
    title: "The Ashen Archive",
    body: "Keepers of memory, containment, and dangerous knowledge.",
    leader: "Vaelith Xyrelle",
    leaderMeta: "Dak'Aridari — High PyreKeeper",
  },
  {
    href: "/verasanth/broken-banner",
    title: "The Broken Banner",
    body: "Endurance, pressure, and survival given institutional form.",
    leader: "Garruk Stonehide",
    leaderMeta: "Silth — High WarMarshal",
  },
  {
    href: "/verasanth/quiet-sanctum",
    title: "The Quiet Sanctum",
    body: "Healers, shepherds of hope, and a quiet defiance against despair.",
    leader: "Halden Marr",
    leaderMeta: "Human — High FlameShepherd",
  },
  {
    href: "/verasanth/stone-watch",
    title: "The Stone Watch",
    body: "Wardens of structure, foundations, and failing walls.",
    leader: "Rhyla Thornshield",
    leaderMeta: "Cambral — High Warden",
  },
  {
    href: "/verasanth/veil-market",
    title: "The Veil Market",
    body: "Information, evasion, and the shadow-economy beneath the official city.",
    leader: "Lirael Quickstep",
    leaderMeta: "Pan'Aridari — Veil-Master",
  },
  {
    href: "/verasanth/umbral-covenant",
    title: "The Umbral Covenant",
    body: "Those who work closest to corruption, shadow, and the truths most people refuse to name.",
    leader: "Serix Vaunt",
    leaderMeta: "Ashborn — Voice of the Covenant",
  },
] as const;

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

      {/* TODO: individual race pages, stat display, lore depth */}
      <section className="bg-okb-bg-elevated py-16 md:py-24">
        <Container size="text" className="space-y-6">
          <SectionHeading title="The Races of Verasanth" />
          <p className="okb-body">
            Verasanth does not ask where you came from. It asks what you are
            becoming. The city has drawn many peoples into its walls — each
            shaped differently by what they found here.
          </p>
        </Container>
        <Container size="wide" className="mt-8 space-y-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-sm border border-okb-border bg-okb-bg-elevated p-5">
              <h3 className="okb-h3">Ashborn</h3>
              <p className="okb-meta italic">
                Ember-Touched • Shadowbound
              </p>
              <div className="space-y-3">
                <p className="okb-body text-sm">
                  Humans reshaped by Verasanth&apos;s ancient fires.
                  Ember-veins pulse faintly beneath their skin, brightening with
                  emotion. They aren&apos;t infernal — they are the city&apos;s
                  first adaptation.
                </p>
                <p className="okb-body text-sm">
                  The Pale Fires didn&apos;t kill the earliest arrivals. They
                  rewrote them. Their bodies learned to vent emotional overload
                  through ember-veins. Their senses sharpened to feel the
                  city&apos;s shifts. Their presence affects rooms in ways they
                  don&apos;t fully control.
                </p>
                <p className="okb-body text-sm">
                  The Ledger has no record of their origin. It began recording
                  after they arrived.
                </p>
                <p className="okb-body text-sm">
                  Some believe the city still recognizes them. They are probably
                  right.
                </p>
              </div>
            </div>
            <div className="rounded-sm border border-okb-border bg-okb-bg-elevated p-5">
              <h3 className="okb-h3">Dak&apos;Aridari</h3>
              <p className="okb-meta italic">Shadowbound • Streetcraft</p>
              <div className="space-y-3">
                <p className="okb-body text-sm">
                  The Dak&apos;Aridari were not born beneath Verasanth. They were
                  left there.
                </p>
                <p className="okb-body text-sm">
                  In the lightless strata where stone remembers more than people
                  do, they learned to see without light, to move without sound, and
                  to listen to the city in ways others cannot.
                </p>
                <p className="okb-body text-sm">
                  They do not fear the dark. They understand it.
                </p>
                <p className="okb-body text-sm">
                  The Ledger records them clearly. The demon cannot navigate
                  without them.
                </p>
                <p className="okb-body text-sm">
                  And somewhere beneath the city, there are places that will only
                  open to them.
                </p>
              </div>
            </div>
            <div className="rounded-sm border border-okb-border bg-okb-bg-elevated p-5">
              <h3 className="okb-h3">Pan&apos;Aridari</h3>
              <p className="okb-meta italic">Streetcraft • Ember-Touched</p>
              <div className="space-y-3">
                <p className="okb-body text-sm">
                  The Pan&apos;Aridari were not broken by Verasanth. They were
                  aligned.
                </p>
                <p className="okb-body text-sm">
                  Where others resist the city or endure it, the Pan&apos;Aridari
                  move with it — reading its shifting streets, its crowded
                  rhythms, its subtle intentions.
                </p>
                <p className="okb-body text-sm">
                  They do not predict the future.
                </p>
                <p className="okb-body text-sm">
                  They feel where it is about to go.
                </p>
                <p className="okb-body text-sm">
                  The demon cannot read the city&apos;s intent. The
                  Pan&apos;Aridari can follow it.
                </p>
                <p className="okb-body text-sm">
                  And somewhere within that flow, the city is hiding something it
                  does not want found.
                </p>
              </div>
            </div>
            <div className="rounded-sm border border-okb-border bg-okb-bg-elevated p-5">
              <h3 className="okb-h3">Cambral</h3>
              <p className="okb-meta italic">Ironblood • Warden</p>
              <div className="space-y-3">
                <p className="okb-body text-sm">
                  The Cambral were the first to answer the call beneath
                  Verasanth.
                </p>
                <p className="okb-body text-sm">
                  They came not for conquest, nor survival — but because
                  something in the deep stone resonated with purpose.
                </p>
                <p className="okb-body text-sm">
                  They built what they did not understand.
                </p>
                <p className="okb-body text-sm">
                  And now, as the city begins to wake, they are the only ones who
                  can feel where it is beginning to fail.
                </p>
                <p className="okb-body text-sm">They did not shape the city.</p>
                <p className="okb-body text-sm">They gave it form.</p>
                <p className="okb-body text-sm">
                  And something beneath it is still trying to finish what they
                  started.
                </p>
              </div>
            </div>
            <div className="rounded-sm border border-okb-border bg-okb-bg-elevated p-5">
              <h3 className="okb-h3">Silth</h3>
              <p className="okb-meta italic">Ironblood • Warden</p>
              <div className="space-y-3">
                <p className="okb-body text-sm">The Silth were not born.</p>
                <p className="okb-body text-sm">They were made.</p>
                <p className="okb-body text-sm">
                  Forged through alchemy by those who feared something was wrong
                  in the world — but did not understand what it was.
                </p>
                <p className="okb-body text-sm">
                  They were created to stand against a threat no one could name.
                </p>
                <p className="okb-body text-sm">And now they stand inside it.</p>
                <p className="okb-body text-sm">
                  The Coalition that built them has fractured. The people they
                  were made to protect no longer stand together.
                </p>
                <p className="okb-body text-sm">
                  And somewhere in Verasanth, the thing they were designed to
                  face is still waiting to be understood.
                </p>
              </div>
            </div>
            <div className="rounded-sm border border-okb-border bg-okb-bg-elevated p-5">
              <h3 className="okb-h3">Human</h3>
              <p className="okb-meta italic">All Instincts</p>
              <div className="space-y-3">
                <p className="okb-body text-sm">
                  Adaptable and unpredictable, shaped by choice rather than
                  lineage.
                </p>
                <p className="okb-body text-sm">
                  In a city that reshapes everyone who enters it, humans are the
                  ones who walked in without being pushed.
                </p>
                <p className="okb-body text-sm">
                  They are not here because something brought them. They are here
                  because they found a door that shouldn&apos;t exist — and
                  opened it.
                </p>
                <p className="okb-body text-sm">
                  Every other race in Verasanth was defined by something that
                  happened to them.
                </p>
                <p className="okb-body text-sm">
                  Humans are still deciding what defines them.
                </p>
                <p className="okb-body text-sm">
                  That makes them the most dangerous thing in the city.
                </p>
              </div>
            </div>
            <div className="rounded-sm border border-okb-border bg-okb-bg-elevated p-5">
              <h3 className="okb-h3">Mal&apos;Aridari</h3>
              <p className="okb-meta italic">Hearthborn • Warden</p>
              <div className="space-y-3">
                <p className="okb-body text-sm">
                  The Mal&apos;Aridari were not taken by Verasanth. They came
                  because something in the world was hurting.
                </p>
                <p className="okb-body text-sm">
                  Where others endure the city or learn to navigate it, the
                  Mal&apos;Aridari listen for wounds — and answer them.
                </p>
                <p className="okb-body text-sm">
                  They do not see Verasanth as a prison.
                </p>
                <p className="okb-body text-sm">
                  They see it as something that needs care.
                </p>
                <p className="okb-body text-sm">
                  Something older than the city sent them here. It does not
                  understand what they walked into.
                </p>
                <p className="okb-body text-sm">Neither do they.</p>
                <p className="okb-body text-sm">But they came anyway.</p>
              </div>
            </div>
            <div className="rounded-sm border border-okb-border bg-okb-bg-elevated p-5">
              <h3 className="okb-h3">Darmerians</h3>
              <p className="okb-meta italic">Hearthborn • Ironblood</p>
              <div className="space-y-3">
                <p className="okb-body text-sm">
                  The Darmerians come from a coast that no longer exists.
                </p>
                <p className="okb-body text-sm">They did not flee the sea.</p>
                <p className="okb-body text-sm">
                  They followed the wound that made it betray them.
                </p>
                <p className="okb-body text-sm">
                  Broad-shouldered, loud-hearted, marked with faint salt-crystal
                  patterns on their skin — they carry the storm in their blood.
                  Not as a threat. As a reminder.
                </p>
                <p className="okb-body text-sm">
                  The same force that drowned their coast created Verasanth.
                </p>
                <p className="okb-body text-sm">They don&apos;t know that yet.</p>
                <p className="okb-body text-sm">
                  But they followed the pressure here. And they are not leaving
                  until they understand what broke their world.
                </p>
              </div>
            </div>
          </div>
          <p className="okb-meta italic text-okb-faint">
            The city keeps everyone. What it does with them varies.
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
          <ul className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
            {VERASANTH_GUILD_CARDS.map((g) => (
              <li key={g.href} className="flex min-h-0 min-w-0">
                <Link href={g.href} className={GUILD_LORE_CARD_CLASS}>
                  <h3 className="okb-h3 shrink-0">{g.title}</h3>
                  <p className={GUILD_LORE_CARD_BODY_CLASS}>{g.body}</p>
                  <p className={GUILD_LORE_CARD_LEADER_CLASS}>{g.leader}</p>
                  <p className={GUILD_LORE_CARD_LEADER_META_CLASS}>{g.leaderMeta}</p>
                </Link>
              </li>
            ))}
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
