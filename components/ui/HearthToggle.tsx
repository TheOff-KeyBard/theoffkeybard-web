"use client";

import { useEffect, useRef, useState } from "react";

/** Persists homepage tavern ambience preference only; audio never continues on other routes. */
const STORAGE_KEY = "okb_hearth_homepage";

export function HearthToggle() {
  const [on, setOn] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const loopTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const mountedRef = useRef(true);

  useEffect(() => {
    try {
      let stored = localStorage.getItem(STORAGE_KEY);
      if (stored !== "on" && stored !== "off") {
        const legacy = localStorage.getItem("okb_sound");
        if (legacy === "on" || legacy === "off") {
          stored = legacy;
          localStorage.setItem(STORAGE_KEY, legacy);
        }
      }
      if (stored === "on") setOn(true);
    } catch {
      /* ignore */
    }
  }, []);

  const clearLoopTimeout = () => {
    if (loopTimeoutRef.current != null) {
      clearTimeout(loopTimeoutRef.current);
      loopTimeoutRef.current = null;
    }
  };

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
      clearLoopTimeout();
      const a = audioRef.current;
      if (a) {
        a.pause();
        a.onended = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!on) {
      clearLoopTimeout();
      const audio = audioRef.current;
      if (audio) {
        audio.pause();
        audio.onended = null;
      }
      return;
    }

    function playAmbient() {
      const audio = audioRef.current;
      if (!audio || !mountedRef.current) return;
      audio.currentTime = 0;
      audio.play().catch(() => {});
      audio.onended = () => {
        clearLoopTimeout();
        loopTimeoutRef.current = setTimeout(() => {
          loopTimeoutRef.current = null;
          if (mountedRef.current) playAmbient();
        }, 2000 + Math.random() * 3000);
      };
    }

    if (!audioRef.current) {
      const audio = new Audio("/audio/tavern-ambience.mp3");
      audio.volume = 0.06;
      audioRef.current = audio;
    }
    playAmbient();

    return () => {
      clearLoopTimeout();
      const audio = audioRef.current;
      if (audio) {
        audio.pause();
        audio.onended = null;
      }
    };
  }, [on]);

  function handleClick() {
    const next = !on;
    setOn(next);
    try {
      localStorage.setItem(STORAGE_KEY, next ? "on" : "off");
    } catch {
      /* ignore */
    }
  }

  const title = on
    ? "Tavern ambience on — only on the homepage; stops when you leave"
    : "Play tavern ambience on the homepage (stops when you navigate away)";

  return (
    <button
      type="button"
      onClick={handleClick}
      title={title}
      className={[
        "fixed bottom-7 right-6 z-50 max-w-[9.5rem]",
        "flex flex-col items-end gap-0.5 rounded-md border px-2.5 py-2",
        "border-okb-border/50 bg-okb-bg/95 shadow-sm backdrop-blur-sm",
        "m-0 cursor-pointer text-left font-serif text-xs",
        "appearance-none",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-okb-accent focus-visible:ring-offset-2 focus-visible:ring-offset-okb-bg",
        on
          ? "border-okb-accent/40 text-okb-accent opacity-90 hover:opacity-100"
          : "text-okb-faint opacity-80 hover:opacity-100",
      ].join(" ")}
      aria-pressed={on}
      aria-label={title}
    >
      <span aria-hidden>🔥</span>
      <span className="tracking-wide">Tavern hearth</span>
      <span className="font-sans text-[10px] uppercase tracking-wider text-okb-muted">
        {on ? "On" : "Off"}
      </span>
      <span className="text-right font-sans text-[9px] leading-tight text-okb-faint">
        Homepage only
      </span>
    </button>
  );
}
