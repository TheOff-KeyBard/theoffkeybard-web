import type { Metadata } from "next";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import Link from "next/link";
import remarkBreaks from "remark-breaks";

import { taleMdxComponents } from "@/mdx-components";
import { LoreTag } from "@/components/ui/LoreTag";
import { Container } from "@/components/ui/Container";
import { Prose } from "@/components/ui/Prose";
import { TavernDivider } from "@/components/ui/TavernDivider";
import {
  getArchiveSlugs,
  getArchiveSource,
  type AshenArchiveFrontmatter,
} from "@/lib/ashenArchive";

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return getArchiveSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const { slug } = params;
  const source = getArchiveSource(slug);

  if (!source) {
    return { title: "Not found" };
  }

  const { data } = matter(source);
  const fm = data as AshenArchiveFrontmatter;

  return {
    title: `${fm.title} — Ashen Archive`,
    description: fm.excerpt,
  };
}

export default async function AshenArchiveEntryPage({ params }: PageProps) {
  const { slug } = params;
  const source = getArchiveSource(slug);

  if (!source) {
    notFound();
  }

  const { content, frontmatter } = await compileMDX<AshenArchiveFrontmatter>({
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
              dateTime={frontmatter.date}
              className="okb-meta block uppercase tracking-wide"
            >
              {frontmatter.date}
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
                The World of Verasanth
              </Link>
            </p>
            <Link
              href="/verasanth/ashen-archive"
              className="okb-meta block text-okb-accent hover:text-okb-accent-h"
            >
              ← Back to the Ashen Archive
            </Link>
          </div>
        </article>
      </Container>
    </section>
  );
}
