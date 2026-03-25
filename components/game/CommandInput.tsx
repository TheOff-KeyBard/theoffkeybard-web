"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

type CommandInputProps = {
  onSubmit: (cmd: string) => void;
  disabled?: boolean;
};

export function CommandInput({ onSubmit, disabled }: CommandInputProps) {
  const [value, setValue] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const cmd = value.trim();
    if (!cmd || disabled) return;
    onSubmit(cmd);
    setValue("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="fixed inset-x-0 bottom-0 z-10 border-t border-okb-border bg-okb-bg px-4 py-3 md:px-8"
    >
      <div className="mx-auto flex max-w-5xl gap-2">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          disabled={disabled}
          placeholder="Command…"
          className="min-w-0 flex-1 border border-okb-border bg-okb-bg-soft px-3 py-2.5 text-okb-text placeholder:text-okb-faint focus:border-okb-accent focus:outline-none"
          autoComplete="off"
          aria-label="Game command"
        />
        <Button variant="accent" buttonType="submit" disabled={disabled}>
          Send
        </Button>
      </div>
    </form>
  );
}
