import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getAllTales } from "@/lib/tales";

export default function HomePage() {
  const allTales = getAllTales();
  const featuredTale =
    allTales.find((t) => t.featured) ?? allTales[0] ?? null;

  return (
    <div>
      <section className="bg-okb-bg py-16 md:py-24">
        <Container size="hero" className="space-y-6 text-center sm:text-left">
          <h1 className="okb-h1">
            Enter the city that remembers you
          </h1>
          <p className="okb-hero-intro mx-auto sm:mx-0">
            Verasanth is not a place you visit. It is a place that keeps you.
          </p>
          <p className="okb-body mx-auto sm:mx-0">
            Every story here is a leak — a memory the city failed to contain.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <Button variant="accent" href="/verasanth">
              Enter Verasanth
            </Button>
            <Button variant="outline" href="/tales">
              Read the Tales
            </Button>
          </div>
        </Container>
      </section>

      <section className="bg-okb-bg-elevated py-16 md:py-24">
        <Container className="space-y-6">
          <div className="space-y-4">
            <p className="okb-body">
              Verasanth is a city built over something older than the structures
              above it. The guilds, the sewers, the firelight — all of it is
              maintenance. All of it is containment.
            </p>
            <p className="okb-body">The Tales are what leak out.</p>
            <p className="okb-body">
              Stories from inside the walls. Lore fragments. Rumor and record.
              The kind of writing that happens when a world starts remembering
              itself.
            </p>
            <p className="okb-body">
              Because some worlds aren&apos;t built — they grow. Verasanth began
              as a story, became a system, and now exists as something closer to a
              living structure. This site is where its surface cracks. Where
              fragments rise. Where you decide whether to look deeper.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-okb-bg py-16 md:py-24">
        <Container className="space-y-6">
          <SectionHeading title="From the Archives" />
          {featuredTale ? (
            <Card
              className="bg-okb-bg"
              title={featuredTale.title}
              excerpt={featuredTale.excerpt}
              href={`/tales/${featuredTale.slug}`}
              tag={featuredTale.tag}
            />
          ) : (
            <div className="border border-dashed border-okb-border bg-okb-bg px-6 py-10 text-center">
              <p className="okb-body">
                The Archive is never empty. You just haven&apos;t found what
                it&apos;s willing to show you yet.
              </p>
            </div>
          )}
        </Container>
      </section>

      <section className="bg-okb-bg-elevated py-16 md:py-24">
        <Container size="wide" className="space-y-6">
          <SectionHeading title="Explore the Table" />
          <ul className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <li>
              <Card
                className="bg-okb-bg"
                title="The Tales"
                excerpt="Stories that slipped through the cracks. Fragments, rumors, and the kind of writing a city produces when it starts remembering itself."
                href="/tales"
                tag="Archive"
              />
            </li>
            <li>
              <Card
                className="bg-okb-bg"
                title="Commentary"
                excerpt="Notes from the bard's desk — reflections, craft, and the occasional sharp edge. Not Verasanth… but shaped by the same firelight."
                href="/tales"
                tag="Commentary"
              />
            </li>
            <li>
              <Card
                className="bg-okb-bg"
                title="Verasanth"
                excerpt="Maps, factions, and the living architecture beneath the streets. A world built to contain something older than itself."
                href="/verasanth"
                tag="Lore"
              />
            </li>
          </ul>
        </Container>
      </section>

      <section className="bg-okb-bg py-16 md:py-24">
        <Container className="space-y-6 text-center sm:text-left">
          <h2 className="okb-h2">There&apos;s more where that came from.</h2>
          <p className="okb-body mx-auto max-w-2xl sm:mx-0">
            The archive runs deep. New tales are added when the bard finds
            something worth saying.
          </p>
          <div>
            <Button variant="accent" href="/tales">
              Read the Tales
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
