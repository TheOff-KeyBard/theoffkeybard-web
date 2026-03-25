"use client";

import { useEffect, useRef, useState } from "react";

const STORAGE_KEY = "okb_sound";

export function HearthToggle() {
  const [on, setOn] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const loopTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const mountedRef = useRef(true);

  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY) === "on") setOn(true);
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

  function handleClick() {
    const next = !on;
    setOn(next);
    try {
      localStorage.setItem(STORAGE_KEY, next ? "on" : "off");
    } catch {
      /* ignore */
    }

    if (next) {
      if (!audioRef.current) {
        const audio = new Audio("/audio/tavern-ambience.mp3");
        audio.volume = 0.06;
        audioRef.current = audio;
      }
      playAmbient();
    } else {
      clearLoopTimeout();
      const audio = audioRef.current;
      if (audio) {
        audio.pause();
        audio.onended = null;
      }
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={[
        "fixed bottom-6 right-6 z-50",
        "flex flex-col items-end gap-0.5",
        "m-0 cursor-pointer border-0 bg-transparent p-0 text-left font-serif text-xs shadow-none",
        "appearance-none",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-okb-accent focus-visible:ring-offset-2 focus-visible:ring-offset-okb-bg",
        on
          ? "text-okb-accent opacity-80 hover:opacity-100"
          : "text-okb-faint opacity-60 hover:opacity-100",
      ].join(" ")}
      aria-pressed={on}
      aria-label={on ? "Turn hearth ambience off" : "Turn hearth ambience on"}
    >
      <span aria-hidden>🔥</span>
      <span>Hearth</span>
    </button>
  );
}
