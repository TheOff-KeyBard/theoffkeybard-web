"use client";

import { useEffect, useState } from "react";

const HOVER_LINES = [
  "The city does not hurry.",
  "The fog remembers footsteps.",
  "Stone holds heat longer than people admit.",
  "Some doors only open when you stop pretending you are a tourist.",
  "The mountain listens. The city answers.",
] as const;

type HeroEnterVerasanthProps = { children: React.ReactNode };

export function HeroEnterVerasanth({ children }: HeroEnterVerasanthProps) {
  const [hoverLine, setHoverLine] = useState("");

  useEffect(() => {
    setHoverLine(HOVER_LINES[Math.floor(Math.random() * HOVER_LINES.length)]!);
  }, []);

  return (
    <div className="group relative inline-block">
      {children}
      <span className="pointer-events-none absolute left-1/2 top-full z-10 mt-2 w-max max-w-[min(18rem,calc(100vw-2rem))] -translate-x-1/2 rounded border border-okb-border bg-okb-bg-elevated px-3 py-2 text-center font-serif text-xs italic leading-snug text-okb-muted opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
        {hoverLine}
      </span>
    </div>
  );
}
