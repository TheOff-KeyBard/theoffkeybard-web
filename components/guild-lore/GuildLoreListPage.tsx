import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import {
  getAllGuildEntries,
  GUILD_LORE_META,
  type GuildKey,
} from "@/lib/guildContent";

export function GuildLoreListPage({ guildKey }: { guildKey: GuildKey }) {
  const meta = GUILD_LORE_META[guildKey];
  const entries = getAllGuildEntries(guildKey);

  return (
    <section className="bg-okb-bg py-16 md:py-24">
      <Container>
        <div className="space-y-10">
          <header className="space-y-3">
            <h1 className="okb-h1">{meta.title}</h1>
            <p className="okb-body max-w-2xl">{meta.intro}</p>
          </header>

          {entries.length === 0 ? (
            <div className="border border-dashed border-okb-border bg-okb-bg-elevated px-6 py-10 text-center">
              <p className="okb-body text-okb-muted">
                Nothing here bears the Ledger&apos;s mark — yet.
              </p>
            </div>
          ) : (
            <ul className="grid gap-6 sm:grid-cols-1">
              {entries.map(({ slug, title, excerpt, tag, ashenLabel, ashenToken }) => (
                <li key={slug} className="space-y-2">
                  <time
                    dateTime={ashenToken}
                    className="okb-meta block uppercase tracking-wide"
                  >
                    {ashenLabel}
                  </time>

                  <Card
                    title={title}
                    excerpt={excerpt}
                    href={`/verasanth/${guildKey}/${slug}`}
                    tag={tag}
                  />
                </li>
              ))}
            </ul>
          )}

          <p className="text-sm text-okb-faint">
            <Link
              href="/verasanth/archive/guilds"
              className="text-okb-accent hover:text-okb-accent-h"
            >
              All orders named together
            </Link>
            <span className="mx-2 text-okb-border">·</span>
            <Link
              href="/verasanth"
              className="text-okb-accent hover:text-okb-accent-h"
            >
              Verasanth
            </Link>
          </p>
        </div>
      </Container>
    </section>
  );
}
