import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { ExploreTable } from "@/components/ui/ExploreTable";
import { HeroEnterVerasanth } from "@/components/ui/HeroEnterVerasanth";
import { HeroText } from "@/components/ui/HeroText";
import { RotatingLine } from "@/components/ui/RotatingLine";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getDiscordInviteUrl } from "@/lib/discord";
import { getAllTales } from "@/lib/tales";

export default function HomePage() {
  const allTales = getAllTales();
  const featuredTale =
    allTales.find((t) => t.featured) ?? allTales[0] ?? null;
  const discordUrl = getDiscordInviteUrl();

  return (
    <div>
      <section className="bg-okb-bg py-16 md:py-24">
        <Container size="hero" className="space-y-6 text-center sm:text-left">
          <HeroText />
          <p className="okb-body mx-auto sm:mx-0">
            Every story here is a leak — a memory the city failed to contain.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <HeroEnterVerasanth>
              <Button variant="accent" href="/verasanth/play">
                Enter Verasanth
              </Button>
            </HeroEnterVerasanth>
            <Button variant="outline" href="/ledger">
              Open the Ledger
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
            <p className="okb-body">
              <Link
                href="/ledger"
                className="text-okb-accent hover:text-okb-accent-h"
              >
                The Ashen Ledger is what leaks out.
              </Link>
            </p>
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

      <div className="bg-okb-bg px-4 py-6 text-center">
        <p className="font-serif text-sm italic text-okb-faint">
          Most people stop here. The city remembers the ones who don&apos;t.
        </p>
      </div>

      <section className="bg-okb-bg py-16 md:py-24">
        <Container className="space-y-6">
          <SectionHeading title="From the Ledger" />
          {featuredTale ? (
            <Card
              className="bg-okb-bg"
              title={featuredTale.title}
              excerpt={featuredTale.excerpt}
              href={`/ledger/${featuredTale.slug}`}
              tag={featuredTale.tag}
            />
          ) : (
            <div className="border border-dashed border-okb-border bg-okb-bg px-6 py-10 text-center">
              <p className="okb-body">
                The Ledger is never empty. You just haven&apos;t found what
                it&apos;s willing to show you yet.
              </p>
            </div>
          )}
        </Container>
      </section>

      <ExploreTable discordUrl={discordUrl} />

      <section className="border-t border-okb-border/60 bg-okb-bg py-8 md:py-10">
        <Container>
          <RotatingLine />
        </Container>
      </section>
    </div>
  );
}