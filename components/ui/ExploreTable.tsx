"use client";

import { useLayoutEffect, useState } from "react";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const CANONICAL = [0, 1, 2, 3] as const;
const CARD_KEYS = ["archives", "tavern", "verasanth", "discord"] as const;
const ATMOSPHERIC = [
  "Something has moved.",
  "The table looks different tonight.",
  "You don't remember it arranged like this.",
] as const;

function shuffleIndices(n: number): number[] {
  const a = Array.from({ length: n }, (_, i) => i);
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const t = a[i]!;
    a[i] = a[j]!;
    a[j] = t;
  }
  return a;
}

function sameOrder(a: readonly number[], b: readonly number[]) {
  return a.length === b.length && a.every((v, i) => v === b[i]);
}

type ExploreTableProps = { discordUrl: string };

export function ExploreTable({ discordUrl }: ExploreTableProps) {
  const [order, setOrder] = useState<number[]>([0, 1, 2, 3]);
  const [showHint, setShowHint] = useState(false);
  const [hintLine, setHintLine] = useState("");

  useLayoutEffect(() => {
    try {
      const cached = sessionStorage.getItem("okb_table_variant");
      if (cached) {
        const parsed = JSON.parse(cached) as unknown;
        if (Array.isArray(parsed) && parsed.length === 4 && parsed.every((x) => typeof x === "number")) {
          const o = parsed as number[];
          setOrder(o);
          const shuffled = !sameOrder(o, CANONICAL);
          setShowHint(shuffled);
          if (shuffled) setHintLine(ATMOSPHERIC[Math.floor(Math.random() * ATMOSPHERIC.length)]!);
          return;
        }
      }
      let nextOrder: number[] = [...CANONICAL];
      let shuffled = false;
      if (localStorage.getItem("okb_visited") === "true" && Math.random() < 0.3) {
        const perm = shuffleIndices(4);
        if (!sameOrder(perm, CANONICAL)) {
          nextOrder = perm;
          shuffled = true;
        }
      }
      sessionStorage.setItem("okb_table_variant", JSON.stringify(nextOrder));
      setOrder(nextOrder);
      setShowHint(shuffled);
      if (shuffled) setHintLine(ATMOSPHERIC[Math.floor(Math.random() * ATMOSPHERIC.length)]!);
    } catch {}
  }, []);

  const cards = [
    <Card key="archives" className="bg-okb-bg" title="The Ashen Ledger" excerpt="Entries that slipped through the cracks. Fragments, rumors, and the kind of writing a city produces when it starts remembering itself." href="/ledger" emphasizeTitle />,
    <Card key="tavern" className="bg-okb-bg" title="The Bards Journal" excerpt="Where the Bard keeps their notes — design sketches, reflections, and half‑formed ideas. Not the city itself, but the fire that feeds it." href="/journal" emphasizeTitle />,
    <Card key="verasanth" className="bg-okb-bg" title="The World of Verasanth" excerpt="Maps, factions, and the living architecture beneath the streets. A world built to contain something older than itself." href="/verasanth" emphasizeTitle />,
    <Card key="discord" className="bg-okb-bg" title="Join the Tavern" excerpt="A hearth out of the wind. Quiet voices, stray threads of lore, and the sense that something in the city is still listening." href={discordUrl} emphasizeTitle external />,
  ];

  return (
    <section className="bg-okb-bg-elevated py-16 md:py-24">
      <Container size="wide" className="space-y-6">
        <div>
          <SectionHeading title="The table is set." />
          {showHint ? (
            <p className="mt-2 text-center font-serif text-sm italic text-okb-faint/80 sm:text-left">{hintLine}</p>
          ) : null}
        </div>
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {order.map((i) => (
            <li key={CARD_KEYS[i]}>{cards[i]}</li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
