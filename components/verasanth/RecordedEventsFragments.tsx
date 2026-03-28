"use client";

import { useMemo } from "react";

/** Lore fragments for #recorded-events. Add strings here to expand the pool. */
const RECORDED_EVENT_FRAGMENTS = [
  "A door appeared in the Low Quarter. It was gone by morning. The people who entered it have not returned.",
  "The Still Scale reported hearing waves beneath the floorboards.",
  "A name was removed from the Ledger. No one remembers writing it.",
  "A section of the South Road now leads somewhere that is not on any map.",
  "Three people reported the same dream. None of them had met.",
  "A trader sold an item they could not see.",
  "Footprints appeared in ash where no one had walked. They stopped at a wall that was not there yesterday.",
  "The Archive's flame burned blue for one breath. No one claimed to have seen it.",
] as const;

/** Renders 1–2 random entries on each mount (page load). */
export function RecordedEventsFragments() {
  const lines = useMemo(() => {
    const pool = [...RECORDED_EVENT_FRAGMENTS];
    const count = 1 + Math.floor(Math.random() * 2);
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j]!, pool[i]!];
    }
    return pool.slice(0, count);
  }, []);

  return (
    <ul className="list-none space-y-6 p-0">
      {lines.map((text, i) => (
        <li
          key={i}
          className="border-b border-okb-border pb-6 last:border-b-0 last:pb-0"
        >
          <p className="okb-body">{text}</p>
        </li>
      ))}
    </ul>
  );
}
