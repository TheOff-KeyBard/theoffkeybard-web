import type { Metadata } from "next";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import Link from "next/link";
import remarkBreaks from "remark-breaks";

import { taleMdxComponents } from "@/mdx-components";
import { Container } from "@/components/ui/Container";
import { Prose } from "@/components/ui/Prose";
import { TavernDivider } from "@/components/ui/TavernDivider";
import { formatVerasanthDate, type TurnIndex } from "@/lib/calendar";
import {
  getTaleSlugs,
  getTaleSource,
  type TaleFrontmatter,
} from "@/lib/tales";

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return getTaleSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const { slug } = params;
  const source = getTaleSource(slug);

  if (!source) {
    return { title: "Not found" };
  }

  const { data } = matter(source);
  const fm = data as TaleFrontmatter;

  return {
    title: fm.title,
    description: fm.excerpt,
  };
}

export default async function LedgerEntryPage({ params }: PageProps) {
  const { slug } = params;
  const source = getTaleSource(slug);

  if (!source) {
    notFound();
  }

  const { content, frontmatter } = await compileMDX<TaleFrontmatter>({
    source,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkBreaks],
      },
    },
    components: taleMdxComponents,
  });

  return (
    <section className="bg-okb-bg py-16 md:py-24">
      <Container>
        <article>
          <header className="mb-8 space-y-3 pb-8">
            <time
              dateTime={
                frontmatter.cycle != null &&
                frontmatter.turn != null &&
                frontmatter.mark != null
                  ? `${frontmatter.cycle}-${frontmatter.turn}-${frontmatter.mark}`
                  : (frontmatter.date ?? "")
              }
              className="okb-meta block uppercase tracking-wide"
            >
              {frontmatter.cycle != null &&
              frontmatter.turn != null &&
              frontmatter.mark != null
                ? formatVerasanthDate({
                    cycle: frontmatter.cycle,
                    turn: frontmatter.turn as TurnIndex,
                    mark: frontmatter.mark,
                  })
                : frontmatter.date}
            </time>

            <h1 className="okb-h1">{frontmatter.title}</h1>
            <p className="okb-body">{frontmatter.excerpt}</p>
          </header>

          <TavernDivider />

          <Prose className="mt-8">{content}</Prose>

          <div className="mt-12 space-y-6 border-t border-okb-border pt-8">
            <p className="okb-body text-okb-text">
              Seen this in the city?{" "}
              <Link
                href="/verasanth"
                className="text-okb-accent hover:text-okb-accent-h"
              >
                Enter Verasanth
              </Link>{" "}
              or{" "}
              <Link
                href="/ledger"
                className="text-okb-accent hover:text-okb-accent-h"
              >
                return to the Ledger
              </Link>
              .
            </p>
            <Link
              href="/ledger"
              className="okb-meta block text-okb-accent hover:text-okb-accent-h"
            >
              ← Back to the Ledger
            </Link>
          </div>
        </article>
      </Container>
    </section>
  );
}
