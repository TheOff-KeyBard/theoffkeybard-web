import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  GuildLoreEntryArticle,
  guildEntryMetadata,
} from "@/components/guild-lore/GuildLoreEntryArticle";
import {
  getGuildEntrySlugs,
  GUILD_KEYS,
  isGuildKey,
} from "@/lib/guildContent";

type PageProps = {
  params: { guild: string; slug: string };
};

export function generateStaticParams() {
  const out: { guild: string; slug: string }[] = [];
  for (const guild of GUILD_KEYS) {
    for (const slug of getGuildEntrySlugs(guild)) {
      out.push({ guild, slug });
    }
  }
  return out;
}

export function generateMetadata({ params }: PageProps): Metadata {
  const { guild, slug } = params;
  if (!isGuildKey(guild)) {
    return { title: "Not found" };
  }
  const meta = guildEntryMetadata(guild, slug);
  if (!meta) {
    return { title: "Not found" };
  }
  return {
    title: meta.title,
    description: meta.description,
  };
}

export default async function GuildLoreEntryPage({ params }: PageProps) {
  const { guild, slug } = params;
  if (!isGuildKey(guild)) {
    notFound();
  }
  const article = await GuildLoreEntryArticle({ guildKey: guild, slug });
  if (!article) {
    notFound();
  }
  return article;
}
