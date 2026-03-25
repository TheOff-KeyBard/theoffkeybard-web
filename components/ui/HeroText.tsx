"use client";

import { useEffect, useState } from "react";

export function HeroText() {
  const [isReturnVisitor, setIsReturnVisitor] = useState(false);

  useEffect(() => {
    try {
      const v = localStorage.getItem("okb_visited");
      if (v === "true") {
        setIsReturnVisitor(true);
      } else {
        localStorage.setItem("okb_visited", "true");
      }
    } catch {
      /* storage unavailable — stay on first-visit copy */
    }
  }, []);

  if (isReturnVisitor) {
    return (
      <>
        <h1 className="okb-h1">You again.</h1>
        <p className="okb-hero-intro mx-auto sm:mx-0">
          The city noticed. It always does.
        </p>
      </>
    );
  }

  return (
    <>
      <h1 className="okb-h1">Enter the city that remembers you</h1>
      <p className="okb-hero-intro mx-auto sm:mx-0">
        Verasanth is not a place you visit. It is a place that keeps you.
      </p>
    </>
  );
}
