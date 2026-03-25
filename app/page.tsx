import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function HomePage() {
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
          </div>
        </Container>
      </section>

      <section className="bg-okb-bg py-16 md:py-24">
        <Container className="space-y-6">
          <SectionHeading title="From the Archives" />
          <div className="border border-dashed border-okb-border bg-okb-bg px-6 py-10 text-center">
            <p className="okb-body">
              Featured content will appear here.
            </p>
          </div>
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
                excerpt="History, myth, and bardic mischief. The main archive — where the stories live."
                href="/tales"
                tag="Archive"
              />
            </li>
            <li>
              <Card
                className="bg-okb-bg"
                title="Commentary"
                excerpt="Sharp takes on culture, technology, and the modern world. Thoughtful, occasionally biting, never boring."
                href="/tales"
                tag="Commentary"
              />
            </li>
            <li>
              <Card
                className="bg-okb-bg"
                title="Verasanth"
                excerpt="A world built from history's wreckage. Factions, lore, and a map that keeps changing."
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
