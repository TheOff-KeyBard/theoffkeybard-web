import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuildLoreListPage } from "@/components/guild-lore/GuildLoreListPage";
import { GUILD_KEYS, GUILD_LORE_META, isGuildKey } from "@/lib/guildContent";

type PageProps = {
  params: { guild: string };
};

export function generateStaticParams() {
  return GUILD_KEYS.map((guild) => ({ guild }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const { guild } = params;
  if (!isGuildKey(guild)) {
    return { title: "Not found" };
  }
  const m = GUILD_LORE_META[guild];
  return {
    title: m.title,
    description: m.description,
  };
}

export default function GuildLoreIndexPage({ params }: PageProps) {
  if (!isGuildKey(params.guild)) {
    notFound();
  }
  return <GuildLoreListPage guildKey={params.guild} />;
}
