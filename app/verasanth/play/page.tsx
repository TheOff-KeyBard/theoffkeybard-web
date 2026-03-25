"use client";

import { useState } from "react";

/** ~header + link row + main pb-12 + footer block (mt-16 + py-8 + content) */
const IFRAME_HEIGHT =
  "min-h-0 flex-1 h-[calc(100dvh-22rem)] sm:h-[calc(100dvh-19rem)]";

export default function VerasanthPlayPage() {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  const raw = process.env.NEXT_PUBLIC_VERASANTH_GAME_URL?.replace(/\/$/, "");
  const gameUrl = raw && raw.length > 0 ? raw : "";

  if (!gameUrl) {
    return (
      <div className="w-full overflow-hidden bg-okb-bg px-3 py-3">
        <p className="text-sm text-okb-faint">
          Set{" "}
          <code className="text-okb-text">NEXT_PUBLIC_VERASANTH_GAME_URL</code>{" "}
          to your deployed game URL.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full overflow-hidden bg-okb-bg">
      <div className="flex flex-col px-3 py-2">
        <a
          href={gameUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="self-end text-sm text-okb-faint hover:text-okb-text"
        >
          Open Verasanth in a new tab ↗
        </a>
      </div>
      <div className={`relative flex flex-col ${IFRAME_HEIGHT}`}>
        {!iframeLoaded && (
          <div
            className="absolute inset-0 z-10 flex items-center justify-center bg-okb-bg text-sm text-okb-faint"
            aria-live="polite"
          >
            Loading…
          </div>
        )}
        <iframe
          title="Verasanth"
          src={gameUrl}
          className="h-full w-full min-h-0 flex-1 border-0"
          onLoad={() => setIframeLoaded(true)}
          allow="fullscreen"
        />
      </div>
    </div>
  );
}
