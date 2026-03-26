"use client";

import { useEffect, useState } from "react";

const lines = [
  "The ledger is deeper than it looks.",
  "The city remembers everything.",
  "The walls are listening.",
  "You've been here before.",
  "Something followed you in.",
  "You can still leave.",
];

export function RotatingLine() {
  const [line, setLine] = useState(lines[0]);

  useEffect(() => {
    setLine(lines[Math.floor(Math.random() * lines.length)]);
  }, []);

  return (
    <p className="text-center font-serif text-sm italic text-okb-faint sm:text-left">
      {line}
    </p>
  );
}
