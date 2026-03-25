"use client";

import { useEffect, useState } from "react";

const RETURN_VARIANTS = [
  { headline: "You again.", sub: "The city remembers the shape of your boots." },
  { headline: "Back so soon.", sub: "The fog thins for people who keep walking." },
  { headline: "The hearth is still warm.", sub: "Some stories only open after the second knock." },
  { headline: "Still listening.", sub: "Good. The archive likes a patient ear." },
  { headline: "The mountain has not moved.", sub: "Neither have the old questions beneath it." },
  { headline: "Welcome back, wanderer.", sub: "The streets keep their secrets… until they do not." },
] as const;

export function HeroText() {
  const [mounted, setMounted] = useState(false);
  const [variantIndex, setVariantIndex] = useState(0);

  useEffect(() => {
    try {
      const visited = localStorage.getItem("okb_visited") === "true";
      const countRaw = localStorage.getItem("okb_visit_count");
      const prev = countRaw ? parseInt(countRaw, 10) : 0;
      const nextCount = Number.isFinite(prev) ? prev + 1 : 1;
      localStorage.setItem("okb_visit_count", String(nextCount));
      localStorage.setItem("okb_visited", "true");
      if (visited) {
        setVariantIndex(Math.floor(Math.random() * RETURN_VARIANTS.length));
      }
    } catch {}
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <>
        <span className="sr-only">The Off-Key Bard</span>
        <span aria-hidden className="invisible block">
          Stories from the mountain&apos;s shadow.
          <span className="mt-4 block text-base font-normal text-okb-muted md:text-lg">A dark fantasy world where the city keeps its secrets close.</span>
        </span>
      </>
    );
  }

  const visited = typeof window !== "undefined" && localStorage.getItem("okb_visited") === "true";
  const countRaw = typeof window !== "undefined" ? localStorage.getItem("okb_visit_count") : null;
  const visitCount = countRaw ? parseInt(countRaw, 10) : 1;
  const isReturn = visited && visitCount > 1;

  if (isReturn) {
    const v = RETURN_VARIANTS[variantIndex]!;
    return (
      <>
        <span className="sr-only">The Off-Key Bard</span>
        <span aria-hidden>
          {v.headline}
          <span className="mt-4 block text-base font-normal text-okb-muted md:text-lg">{v.sub}</span>
        </span>
      </>
    );
  }

  return (
    <>
      <span className="sr-only">The Off-Key Bard</span>
      <span aria-hidden>
        Stories from the mountain&apos;s shadow.
        <span className="mt-4 block text-base font-normal text-okb-muted md:text-lg">A dark fantasy world where the city keeps its secrets close.</span>
      </span>
    </>
  );
}
