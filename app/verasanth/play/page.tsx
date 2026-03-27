"use client";

import { useState } from "react";

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
    <div className="flex h-full min-h-0 flex-1 flex-col overflow-hidden bg-okb-bg">
      <div className="hidden shrink-0 flex-col px-3 py-2 md:flex">
        <a
          href={gameUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="self-end text-sm text-okb-faint hover:text-okb-text"
        >
          Open Verasanth in a new tab ↗
        </a>
      </div>
      <div className="relative h-[100dvh] min-h-0 w-full flex-1 overflow-hidden md:h-[calc(100dvh-19rem)] md:min-h-[320px]">
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
          className="absolute inset-0 h-full w-full border-0"
          onLoad={() => setIframeLoaded(true)}
          allow="fullscreen"
        />
      </div>
    </div>
  );
}
