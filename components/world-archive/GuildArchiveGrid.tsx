import Link from "next/link";
import { VERASANTH_GUILD_CARDS } from "@/content/world-archive/guild-cards";

const CARD_CLASS =
  "flex h-full min-h-0 min-w-0 w-full flex-col border border-okb-border bg-okb-bg-elevated p-5 transition-colors hover:border-okb-accent";
const BODY_CLASS = "okb-body mt-2 min-w-0 flex-1 break-words";
const LEADER_CLASS =
  "mt-4 font-serif text-sm font-semibold tracking-wide text-okb-text";
const LEADER_META_CLASS = "okb-meta mt-1";

export function GuildArchiveGrid() {
  return (
    <ul className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
      {VERASANTH_GUILD_CARDS.map((g) => (
        <li key={g.href} className="flex min-h-0 min-w-0">
          <Link href={g.href} className={CARD_CLASS}>
            <h3 className="okb-h3 shrink-0">{g.title}</h3>
            <p className={BODY_CLASS}>{g.body}</p>
            <p className={LEADER_CLASS}>{g.leader}</p>
            <p className={LEADER_META_CLASS}>{g.leaderMeta}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
