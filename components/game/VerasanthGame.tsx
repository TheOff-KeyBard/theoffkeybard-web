"use client";

import { useCallback, useEffect, useState } from "react";
import { CommandInput } from "@/components/game/CommandInput";
import { GameOutput } from "@/components/game/GameOutput";
import { PlayerPanel } from "@/components/game/PlayerPanel";
import { Button } from "@/components/ui/Button";
import type { GameMessage, GameStatePayload } from "@/lib/game/types";

const TOKEN_KEY = "okb_verasanth_token";
const NAME_KEY = "okb_verasanth_name";

function apiBase(): string {
  return (process.env.NEXT_PUBLIC_VERASANTH_API_URL ?? "").replace(/\/$/, "");
}

export function VerasanthGame() {
  const [messages, setMessages] = useState<GameMessage[]>([]);
  const [state, setState] = useState<GameStatePayload | null>(null);
  const [pending, setPending] = useState(false);
  const [gate, setGate] = useState(true);
  const [name, setName] = useState("");
  const [passphrase, setPassphrase] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  const push = useCallback((type: GameMessage["type"], text: string) => {
    setMessages((prev) => [...prev, { type, text, timestamp: Date.now() }]);
  }, []);

  const request = useCallback(
    async (path: string, init?: RequestInit) => {
      const base = apiBase();
      if (!base) {
        throw new Error("NEXT_PUBLIC_VERASANTH_API_URL is not set.");
      }
      const token =
        typeof window !== "undefined"
          ? localStorage.getItem(TOKEN_KEY)
          : null;
      const headers: Record<string, string> = {
        "Content-Type": "application/json",
        ...(init?.headers as Record<string, string>),
      };
      if (token) headers.Authorization = `Bearer ${token}`;
      return fetch(`${base}${path}`, { ...init, headers });
    },
    [],
  );

  const refreshState = useCallback(async () => {
    const r = await request("/api/state", { method: "GET" });
    if (!r.ok) return null;
    return (await r.json()) as GameStatePayload;
  }, [request]);

  const applyState = useCallback(
    (data: GameStatePayload, narrateRoom: boolean) => {
      setState(data);
      if (narrateRoom && data.node?.description) {
        push("narration", data.node.description);
      }
      if (data.message) push("narration", data.message);
    },
    [push],
  );

  useEffect(() => {
    const base = apiBase();
    if (!base) {
      push(
        "error",
        "Set NEXT_PUBLIC_VERASANTH_API_URL (e.g. http://127.0.0.1:8787).",
      );
      return;
    }
    const saved = localStorage.getItem(NAME_KEY);
    if (saved) setName(saved);
    const token = localStorage.getItem(TOKEN_KEY);
    if (!token) {
      push("system", "Create a character or log in to enter Verasanth.");
      return;
    }
    let cancelled = false;
    setPending(true);
    push("system", "…");
    request("/api/state", { method: "GET" })
      .then(async (r) => {
        if (!r.ok) throw new Error("bad");
        return r.json() as Promise<GameStatePayload>;
      })
      .then((data) => {
        if (cancelled) return;
        setMessages((m) => m.filter((x) => x.text !== "…"));
        setGate(false);
        applyState(data, true);
      })
      .catch(() => {
        if (cancelled) return;
        setMessages((m) => m.filter((x) => x.text !== "…"));
        localStorage.removeItem(TOKEN_KEY);
        push("error", "Session ended. Log in again.");
      })
      .finally(() => {
        if (!cancelled) setPending(false);
      });
    return () => {
      cancelled = true;
    };
  }, [push, request, applyState]);

  async function start(action: "create" | "login") {
    const base = apiBase();
    if (!base) {
      push("error", "API URL not configured.");
      return;
    }
    if (!name.trim() || !passphrase) {
      push("error", "Name and passphrase required.");
      return;
    }
    setPending(true);
    push("system", "…");
    try {
      const r = await fetch(`${base}/api/start`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action,
          name: name.trim(),
          passphrase,
        }),
      });
      const j = (await r.json()) as {
        token?: string;
        state?: GameStatePayload;
        error?: string;
      };
      setMessages((m) => m.filter((x) => x.text !== "…"));
      if (!r.ok || !j.token || !j.state) {
        push("error", j.error ?? "Could not start session.");
        return;
      }
      localStorage.setItem(TOKEN_KEY, j.token);
      localStorage.setItem(NAME_KEY, name.trim());
      setGate(false);
      setMessages([]);
      applyState(j.state, true);
      push(
        "system",
        "Commands: n · s · e · w · look · take <id> · use <id> · talk <npc> · inspect <id> · attack · flee · use healing_draught (in combat)",
      );
    } catch {
      setMessages((m) => m.filter((x) => x.text !== "…"));
      push("error", "Network error.");
    } finally {
      setPending(false);
    }
  }

  async function runCommand(raw: string) {
    if (pending || gate || !state) return;
    const cmd = raw.trim();
    if (!cmd) return;
    setPending(true);
    push("system", `> ${cmd}`);
    try {
      const lower = cmd.toLowerCase();
      const dirMatch = lower.match(/^(n|north|s|south|e|east|w|west)$/);
      const goMatch = lower.match(/^go\s+(north|south|east|west)$/);
      let direction: string | null = null;
      if (dirMatch) {
        const d = dirMatch[1];
        direction =
          d === "n"
            ? "north"
            : d === "s"
              ? "south"
              : d === "e"
                ? "east"
                : d === "w"
                  ? "west"
                  : d;
      } else if (goMatch) {
        direction = goMatch[1];
      }

      if (direction) {
        const r = await request("/api/move", {
          method: "POST",
          body: JSON.stringify({ direction }),
        });
        const j = (await r.json()) as {
          message?: string;
          state?: GameStatePayload;
          error?: string;
        };
        if (!r.ok) {
          push("error", j.error ?? "Move failed.");
          return;
        }
        if (j.message) push("narration", j.message);
        if (j.state) applyState(j.state, true);
        return;
      }

      if (lower === "look" || lower === "l") {
        const r = await request("/api/interact", {
          method: "POST",
          body: JSON.stringify({ verb: "look" }),
        });
        const j = (await r.json()) as { message?: string; error?: string };
        if (!r.ok) {
          push("error", j.error ?? "Look failed.");
          return;
        }
        if (j.message) push("narration", j.message);
        const next = await refreshState();
        if (next) setState(next);
        return;
      }

      const takeM = lower.match(/^take\s+([\w_]+)$/);
      if (takeM) {
        const r = await request("/api/interact", {
          method: "POST",
          body: JSON.stringify({ verb: "take", target: takeM[1] }),
        });
        const j = (await r.json()) as { message?: string; error?: string };
        if (!r.ok) {
          push("error", j.error ?? "Cannot take that.");
          return;
        }
        if (j.message) push("narration", j.message);
        const next = await refreshState();
        if (next) setState(next);
        return;
      }

      const talkM = lower.match(/^talk\s+([\w_]+)$/);
      if (talkM) {
        const r = await request("/api/interact", {
          method: "POST",
          body: JSON.stringify({ verb: "talk", target: talkM[1] }),
        });
        const j = (await r.json()) as { message?: string; error?: string };
        if (!r.ok) {
          push("error", j.error ?? "No reply.");
          return;
        }
        if (j.message) push("narration", j.message);
        return;
      }

      const useM = lower.match(/^use\s+([\w_]+)$/);
      if (useM) {
        const inCombat = state.encounter?.status === "active";
        if (inCombat && useM[1] === "healing_draught") {
          const r = await request("/api/combat", {
            method: "POST",
            body: JSON.stringify({
              action: "use_item",
              itemId: "healing_draught",
            }),
          });
          const j = (await r.json()) as {
            log?: string[];
            outcome?: string;
            state?: GameStatePayload;
            error?: string;
          };
          if (!r.ok) {
            push("error", j.error ?? "Combat action failed.");
            return;
          }
          for (const line of j.log ?? []) push("combat", line);
          if (j.state) setState(j.state);
          if (j.outcome && j.outcome !== "ongoing") {
            push("system", `Outcome: ${j.outcome}`);
            const next = await refreshState();
            if (next) setState(next);
          }
          return;
        }
        const r = await request("/api/interact", {
          method: "POST",
          body: JSON.stringify({ verb: "use", target: useM[1] }),
        });
        const j = (await r.json()) as { message?: string; error?: string };
        if (!r.ok) {
          push("error", j.error ?? "Cannot use that.");
          return;
        }
        if (j.message) push("narration", j.message);
        const next = await refreshState();
        if (next) setState(next);
        return;
      }

      const inspectM = lower.match(/^inspect\s+([\w_]+)$/);
      if (inspectM) {
        const r = await request("/api/interact", {
          method: "POST",
          body: JSON.stringify({ verb: "inspect", target: inspectM[1] }),
        });
        const j = (await r.json()) as { message?: string; error?: string };
        if (!r.ok) {
          push("error", j.error ?? "Nothing to inspect.");
          return;
        }
        if (j.message) push("narration", j.message);
        return;
      }

      if (lower === "attack" || lower === "a") {
        const r = await request("/api/combat", {
          method: "POST",
          body: JSON.stringify({ action: "attack" }),
        });
        const j = (await r.json()) as {
          log?: string[];
          outcome?: string;
          state?: GameStatePayload;
          error?: string;
        };
        if (!r.ok) {
          push("error", j.error ?? "Combat failed.");
          return;
        }
        for (const line of j.log ?? []) push("combat", line);
        if (j.state) setState(j.state);
        if (j.outcome && j.outcome !== "ongoing") {
          push("system", `Outcome: ${j.outcome}`);
          const next = await refreshState();
          if (next) setState(next);
        }
        return;
      }

      if (lower === "flee") {
        const r = await request("/api/combat", {
          method: "POST",
          body: JSON.stringify({ action: "flee" }),
        });
        const j = (await r.json()) as {
          log?: string[];
          outcome?: string;
          state?: GameStatePayload;
          error?: string;
        };
        if (!r.ok) {
          push("error", j.error ?? "Flee failed.");
          return;
        }
        for (const line of j.log ?? []) push("combat", line);
        if (j.state) setState(j.state);
        if (j.outcome) push("system", `Outcome: ${j.outcome}`);
        return;
      }

      push(
        "error",
        "Unknown command. Try: n s e w · look · take item · use item · talk npc · inspect thing · attack · flee",
      );
    } catch {
      push("error", "Request failed.");
    } finally {
      setPending(false);
    }
  }

  if (gate) {
    return (
      <section className="bg-okb-bg py-16 md:py-24">
        <div className="mx-auto max-w-md px-4 md:px-8">
          <h1 className="okb-h1 mb-6">Verasanth</h1>
          <GameOutput messages={messages} />
          <div className="mt-6 space-y-4 border border-okb-border bg-okb-bg-elevated p-4">
            <label className="block">
              <span className="okb-meta">Name</span>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 w-full border border-okb-border bg-okb-bg-soft px-3 py-2 text-okb-text"
              />
            </label>
            <label className="block">
              <span className="okb-meta">Passphrase</span>
              <input
                type="password"
                value={passphrase}
                onChange={(e) => setPassphrase(e.target.value)}
                className="mt-1 w-full border border-okb-border bg-okb-bg-soft px-3 py-2 text-okb-text"
              />
            </label>
            <div className="flex flex-wrap gap-3">
              <Button
                variant="accent"
                disabled={pending}
                onClick={() => start("create")}
              >
                Create
              </Button>
              <Button
                variant="outline"
                disabled={pending}
                onClick={() => start("login")}
              >
                Log in
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!state) {
    return (
      <section className="bg-okb-bg py-16 md:py-24">
        <p className="okb-body px-4">…</p>
      </section>
    );
  }

  return (
    <section className="min-h-[calc(100vh-8rem)] bg-okb-bg pb-28 pt-8 md:pt-12">
      <div className="mx-auto max-w-5xl px-4 md:px-8">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
          <h1 className="okb-h1">Verasanth</h1>
          <button
            type="button"
            className="text-sm text-okb-muted hover:text-okb-text md:hidden"
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? "Hide sheet" : "Character sheet"}
          </button>
        </div>
        <div className="grid gap-4 md:grid-cols-[1fr_16rem]">
          <GameOutput messages={messages} />
          <div className="hidden md:block">
            <PlayerPanel
              player={state.player}
              inventory={state.inventory}
            />
          </div>
        </div>
        {mobileOpen ? (
          <div className="mt-4 md:hidden">
            <PlayerPanel
              player={state.player}
              inventory={state.inventory}
            />
          </div>
        ) : null}
      </div>
      <CommandInput onSubmit={runCommand} disabled={pending} />
    </section>
  );
}
