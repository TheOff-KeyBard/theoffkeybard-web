"use client";

import { useMemo } from "react";
import { RECORDED_EVENT_FRAGMENTS } from "@/content/world-archive/recorded-event-fragments";

/** Renders 1–2 random entries on each mount (page load). */
export function RecordedEventsFragments() {
  const lines = useMemo(() => {
    const pool = [...RECORDED_EVENT_FRAGMENTS] as string[];
    const count = 1 + Math.floor(Math.random() * 2);
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j]!, pool[i]!];
    }
    return pool.slice(0, count);
  }, []);

  return (
    <ul className="list-none space-y-6 p-0">
      {lines.map((text) => (
        <li
          key={text}
          className="border-b border-okb-border pb-6 last:border-b-0 last:pb-0"
        >
          <p className="okb-body">{text}</p>
        </li>
      ))}
    </ul>
  );
}
