import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "The World of Verasanth",
};

export default function VerasanthLorePage() {
  return (
    <section className="bg-okb-bg py-16 md:py-24">
      <Container>
        <article className="space-y-8">
          <h1 className="okb-h1">The World of Verasanth</h1>
          <div className="space-y-4">
            <p className="okb-hero-intro">
              Verasanth is not a place you visit. It is a place that keeps you.
            </p>
            <p className="okb-body">
              A city built over something older than the structures above it. The
              guilds, the sewers, the firelight — all of it is maintenance. All of
              it is containment.
            </p>
            <p className="okb-body">
              The deeper you go, the less the city feels like something built…
              and the more it feels like something that grew.
            </p>
          </div>
          <hr className="border-okb-border" />
          <div className="space-y-4">
            <h2 className="okb-h2">What Lies Within</h2>
            <ul className="list-disc space-y-2 pl-6 okb-body text-okb-text">
              <li>Guilds that function like organs</li>
              <li>Streets that remember who walks them</li>
              <li>A descent that does not end where it should</li>
              <li>Systems designed to hold something in place</li>
            </ul>
          </div>
          <div>
            <Button variant="accent" href="/verasanth/play">
              Enter Verasanth
            </Button>
          </div>
          <p className="text-sm text-okb-faint">The city does not forget.</p>
          <div>
            <Link
              href="/"
              className="text-sm text-okb-muted hover:text-okb-text"
            >
              ← Return to the main page
            </Link>
          </div>
        </article>
      </Container>
    </section>
  );
}
