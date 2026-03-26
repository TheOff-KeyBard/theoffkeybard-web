import type { Metadata } from "next";
import { BardsNote } from "@/components/ui/BardsNote";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Behind the Quill",
};

export default function AboutPage() {
  return (
    <section className="bg-okb-bg py-16 md:py-24">
      <Container>
        <article className="space-y-8">
          <h1 className="okb-h1">The Off-Key Bard</h1>
          <div className="space-y-4">
            <p className="okb-hero-intro">
              The Off-Key Bard is a place for stories that do not sit quietly.
            </p>
            <p className="okb-body">
              Some are essays — direct, curious, occasionally sideways. Some are tales — fragments of worlds that feel remembered rather than invented. Most live somewhere in between.
            </p>
            <p className="okb-body">
              The aim is simple: clarity without flattening what is strange or difficult. No sanding down the edges. No pretending the world is cleaner than it is.
            </p>
            <p className="okb-body">
              Verasanth grew out of that same instinct. What began as worldbuilding became something more persistent: a city with memory, structure, and intent. A containment system disguised as a place. A world that does not just exist — it keeps.
            </p>
            <p className="okb-body">
              This site is the campfire outside its gates. Stories surface here first. Fragments. Rumors. Things that slipped past whatever the city was trying to hold.
            </p>
            <p className="okb-body">
              And sometimes, it is just commentary. The world is strange. It deserves more than a headline.
            </p>
          </div>
          <BardsNote>
            This is not a news feed. It is a campfire. Pull up a chair—the stories
            take their time.
          </BardsNote>
          <div>
            <Button variant="accent" href="/ledger">
              Open the Ledger
            </Button>
          </div>
        </article>
      </Container>
    </section>
  );
}
