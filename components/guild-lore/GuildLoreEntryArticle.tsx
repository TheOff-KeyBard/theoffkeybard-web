import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import Link from "next/link";
import remarkBreaks from "remark-breaks";

import { taleMdxComponents } from "@/mdx-components";
import { LoreTag } from "@/components/ui/LoreTag";
import { Container } from "@/components/ui/Container";
import { Prose } from "@/components/ui/Prose";
import { TavernDivider } from "@/components/ui/TavernDivider";
import {
  ashenDateTimeToken,
  formatVerasanthDate,
  getGuildEntrySource,
  GUILD_LORE_META,
  type GuildEntryFrontmatter,
  type GuildKey,
} from "@/lib/guildContent";

export async function GuildLoreEntryArticle({
  guildKey,
  slug,
}: {
  guildKey: GuildKey;
  slug: string;
}) {
  const source = getGuildEntrySource(guildKey, slug);
  if (!source) return null;

  const { content, frontmatter } = await compileMDX<GuildEntryFrontmatter>({
    source,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkBreaks],
      },
    },
    components: taleMdxComponents,
  });

  const ashenLabel = formatVerasanthDate({
    cycle: frontmatter.cycle,
    turn: frontmatter.turn,
    mark: frontmatter.mark,
  });

  return (
    <section className="bg-okb-bg py-16 md:py-24">
      <Container>
        <article>
          <header className="mb-8 space-y-3 pb-8">
            <time
              dateTime={ashenDateTimeToken(frontmatter)}
              className="okb-meta block uppercase tracking-wide"
            >
              {ashenLabel}
            </time>

            {frontmatter.tag ? (
              <div className="mb-1">
                <LoreTag label={frontmatter.tag} />
              </div>
            ) : null}
            <h1 className="okb-h1">{frontmatter.title}</h1>
            <p className="okb-body">{frontmatter.excerpt}</p>
          </header>

          <TavernDivider />

          <Prose className="mt-8">{content}</Prose>

          <div className="mt-12 space-y-6 border-t border-okb-border pt-8">
            <p className="okb-body text-okb-text">
              <Link
                href="/verasanth"
                className="text-okb-accent hover:text-okb-accent-h"
              >
                Verasanth
              </Link>
              <span className="mx-2 text-okb-faint">·</span>
              <Link
                href="/verasanth/archive/guilds"
                className="text-okb-accent hover:text-okb-accent-h"
              >
                All orders named together
              </Link>
            </p>
            <Link
              href={`/verasanth/${guildKey}`}
              className="okb-meta block text-okb-accent hover:text-okb-accent-h"
            >
              More from this order
            </Link>
          </div>
        </article>
      </Container>
    </section>
  );
}

export function guildEntryMetadata(
  guildKey: GuildKey,
  slug: string,
): { title: string; description: string } | null {
  const source = getGuildEntrySource(guildKey, slug);
  if (!source) return null;
  const { data } = matter(source);
  const fm = data as GuildEntryFrontmatter;
  const guildTitle = GUILD_LORE_META[guildKey].title;
  return {
    title: `${fm.title} — ${guildTitle}`,
    description: fm.excerpt,
  };
}
