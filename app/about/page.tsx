import type { Metadata } from "next";
import { BardsNote } from "@/components/ui/BardsNote";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <section className="bg-okb-bg py-16 md:py-24">
      <Container>
        <article className="space-y-8">
          <h1 className="okb-h1">The Off-Key Bard</h1>
          <div className="space-y-4">
            <p className="okb-hero-intro">
              The Off-Key Bard is a writing and storytelling project: essays,
              fiction, and the overlap between them. The voice is direct; the aim
              is clarity without flattening what is strange or difficult.
            </p>
            <p className="okb-body">
              Material here draws on history and myth, on close reading and
              invention. Nothing is offered as the last word—only as something
              worth sitting with.
            </p>
            <p className="okb-body">
              This site is a home for bardic history: real events told with
              narrative weight, emotional texture, and a refusal to sand down
              the interesting parts. It&apos;s also home to Verasanth — a game
              world built from the same instincts, where history&apos;s patterns
              play out in a world that never quite existed.
            </p>
            <p className="okb-body">
              And sometimes, it&apos;s just commentary. The world is strange. It
              deserves more than a headline.
            </p>
          </div>
          <BardsNote>
            This is not a news feed. It is a campfire. Pull up a chair—the stories
            take their time.
          </BardsNote>
          <div>
            <Button variant="accent" href="/tales">
              Read the Tales
            </Button>
          </div>
        </article>
      </Container>
    </section>
  );
}
