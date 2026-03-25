"use client";

import { useEffect, useRef } from "react";
import type { GameMessage } from "@/lib/game/types";

type GameOutputProps = {
  messages: GameMessage[];
};

export function GameOutput({ messages }: GameOutputProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages]);

  return (
    <div
      ref={containerRef}
      className="max-h-[min(60vh,32rem)] overflow-y-auto rounded-sm border border-okb-border bg-okb-bg-elevated p-4 font-sans text-sm leading-relaxed md:max-h-[min(70vh,40rem)]"
      role="log"
      aria-live="polite"
    >
      <ul className="space-y-2">
        {messages.map((m, i) => (
          <li
            key={`${m.timestamp}-${i}`}
            className={
              m.type === "narration"
                ? "text-okb-text"
                : m.type === "combat"
                  ? "text-okb-accent"
                  : m.type === "system"
                    ? "text-okb-faint"
                    : "text-red-500"
            }
          >
            {m.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
