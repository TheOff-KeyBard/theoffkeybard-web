/**
 * Guild lore MDX loaders. Add a folder under /content/<guildKey> and a row in GUILD_KEYS / GUILD_LORE_META.
 *
 * - getGuildEntrySlugs(guildKey)
 * - getAllGuildEntries(guildKey) — sorted newest first via lib/calendar compareAshenDates
 * - getGuildEntrySource(guildKey, slug)
 */
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import {
  compareAshenDates,
  formatVerasanthDate,
  type AshenDate,
  type TurnIndex,
} from "@/lib/calendar";

/** Content folder names under /content — must match route segment */
export const GUILD_KEYS = [
  "ashen-archive",
  "broken-banner",
  "quiet-sanctum",
  "stone-watch",
  "veil-market",
  "umbral-covenant",
] as const;

export type GuildKey = (typeof GUILD_KEYS)[number];

export function isGuildKey(s: string): s is GuildKey {
  return (GUILD_KEYS as readonly string[]).includes(s);
}

export type GuildEntryFrontmatter = {
  title: string;
  cycle: number;
  turn: TurnIndex;
  mark: number;
  excerpt: string;
  tag?: string;
};

export type GuildEntryListItem = GuildEntryFrontmatter & {
  slug: string;
  /** Preformatted for display */
  ashenLabel: string;
  /** Stable token for <time dateTime> (not Gregorian) */
  ashenToken: string;
};

export const GUILD_LORE_META: Record<
  GuildKey,
  {
    title: string;
    description: string;
    intro: string;
  }
> = {
  "ashen-archive": {
    title: "The Ashen Archive",
    description:
      "Guild lore from the Ashen Archive — memory, containment, and dangerous knowledge.",
    intro:
      "The Ashen Archive keeps what the city cannot afford to lose — and what it cannot afford to remember openly. These fragments are offered as the guild permits: cold, precise, incomplete.",
  },
  "broken-banner": {
    title: "The Broken Banner",
    description:
      "Guild lore from the Broken Banner — endurance, pressure, and survival given form.",
    intro:
      "The Broken Banner does not promise victory. It promises weight carried anyway — when walls hold, when bodies fail, when the city asks someone to stand between harm and habit. What follows is what the guild allows to be read.",
  },
  "quiet-sanctum": {
    title: "The Quiet Sanctum",
    description:
      "Guild lore from the Quiet Sanctum — healers, hope, and quiet defiance.",
    intro:
      "The Quiet Sanctum tends what breaks quietly: breath, nerve, the small reasons people choose to continue. Their records read like bedside observations — careful, unwilling to dramatize what already hurts.",
  },
  "stone-watch": {
    title: "The Stone Watch",
    description:
      "Guild lore from the Stone Watch — structure, foundations, and failing walls.",
    intro:
      "The Stone Watch speaks in load and stress. They know where the city leans, where mortar lies, where a crack is cosmetic and where it is a warning. These notes are what they release when silence would cost more than speech.",
  },
  "veil-market": {
    title: "The Veil Market",
    description:
      "Guild lore from the Veil Market — information, evasion, and the shadow economy.",
    intro:
      "The Veil Market trades in what official ink omits: names, routes, favors that leave no receipt. What appears here is curated — enough to suggest depth, never enough to expose a living source.",
  },
  "umbral-covenant": {
    title: "The Umbral Covenant",
    description:
      "Guild lore from the Umbral Covenant — shadow, corruption, and refused names.",
    intro:
      "The Umbral Covenant works where light is a liability. Their fragments read like testimony filed late — precise about sensation, careful about blame. The city pretends not to need them until it does.",
  },
};

function contentDir(guildKey: GuildKey): string {
  return path.join(process.cwd(), "content", guildKey);
}

function clampTurn(n: number): TurnIndex {
  const t = Math.max(0, Math.min(5, Math.floor(Number(n))));
  return t as TurnIndex;
}

function readFrontmatter(raw: string): GuildEntryFrontmatter {
  const { data } = matter(raw);
  return {
    title: String(data.title ?? ""),
    cycle: Number(data.cycle),
    turn: clampTurn(data.turn),
    mark: Number(data.mark),
    excerpt: String(data.excerpt ?? ""),
    tag: data.tag != null ? String(data.tag) : undefined,
  };
}

function toAshenDate(fm: GuildEntryFrontmatter): AshenDate {
  return { cycle: fm.cycle, turn: fm.turn, mark: fm.mark };
}

/** For <time> or sorting: stable non-Gregorian token */
export function ashenDateTimeToken(fm: GuildEntryFrontmatter): string {
  return `c${fm.cycle}-t${fm.turn}-m${fm.mark}`;
}

export function getGuildEntrySlugs(guildKey: GuildKey): string[] {
  const dir = contentDir(guildKey);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getAllGuildEntries(guildKey: GuildKey): GuildEntryListItem[] {
  return getGuildEntrySlugs(guildKey)
    .map((slug) => {
      const raw = fs.readFileSync(
        path.join(contentDir(guildKey), `${slug}.mdx`),
        "utf8",
      );
      const fm = readFrontmatter(raw);
      const ashen = toAshenDate(fm);
      return {
        slug,
        ...fm,
        ashenLabel: formatVerasanthDate(ashen),
        ashenToken: ashenDateTimeToken(fm),
      };
    })
    .sort((a, b) => compareAshenDates(toAshenDate(a), toAshenDate(b)));
}

export function getGuildEntrySource(
  guildKey: GuildKey,
  slug: string,
): string | null {
  const filePath = path.join(contentDir(guildKey), `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  return fs.readFileSync(filePath, "utf8");
}

export { formatVerasanthDate };
