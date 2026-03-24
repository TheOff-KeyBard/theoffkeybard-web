import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Verasanth",
};

export default function VerasanthPlaceholderPage() {
  return (
    <section className="bg-okb-bg py-16 md:py-24">
      <Container>
        <article className="space-y-8">
          <h1 className="okb-h1">Verasanth</h1>
          <div className="space-y-4">
            <p className="okb-body">
              The city remembers you. It doesn&apos;t care that you&apos;ve
              forgotten it.
            </p>
            <p className="okb-body">
              Verasanth is a world built from history&apos;s recurring patterns —
              the rise of factions, the weight of old decisions, the way power
              moves when no one is looking. It is not a world of chosen heroes.
              It is a world of consequences.
            </p>
            <p className="okb-body">
              The lore is in development. The map is being drawn. Come back when
              the fire&apos;s higher.
            </p>
          </div>
          <div>
            <Button variant="outline" href="/tales">
              Read the Tales in the meantime
            </Button>
          </div>
        </article>
      </Container>
    </section>
  );
}
