"use client";

import type { InventoryItem, PlayerState } from "@/lib/game/types";

type PlayerPanelProps = {
  player: PlayerState;
  inventory: InventoryItem[];
};

export function PlayerPanel({ player, inventory }: PlayerPanelProps) {
  const hpPct =
    player.maxHp > 0 ? Math.round((player.hp / player.maxHp) * 100) : 0;
  const equippedEntries = Object.entries(player.equipped || {});

  return (
    <aside className="space-y-4 rounded-sm border border-okb-border bg-okb-bg-elevated p-4 text-sm">
      <h2 className="okb-h3 border-b border-okb-border pb-2">Character</h2>
      <div>
        <p className="text-okb-text">{player.name}</p>
        <p className="okb-meta mt-1">
          Level {player.level} · {player.xp} xp
        </p>
      </div>
      <div>
        <p className="okb-meta mb-1">Vitality</p>
        <div className="h-2 w-full bg-okb-bg-soft">
          <div
            className="h-full bg-okb-accent"
            style={{ width: `${hpPct}%` }}
          />
        </div>
        <p className="okb-meta mt-1">
          {player.hp} / {player.maxHp}
        </p>
      </div>
      <div>
        <p className="okb-meta mb-1">Equipped</p>
        {equippedEntries.length === 0 ? (
          <p className="text-okb-muted">Nothing equipped.</p>
        ) : (
          <ul className="list-inside list-disc text-okb-muted">
            {equippedEntries.map(([slot, id]) => (
              <li key={slot}>
                {slot}: {id}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div>
        <p className="okb-meta mb-1">Inventory</p>
        {inventory.length === 0 ? (
          <p className="text-okb-muted">Empty.</p>
        ) : (
          <ul className="space-y-1 text-okb-muted">
            {inventory.map((row) => (
              <li key={row.item_id}>
                {row.item_id.replace(/_/g, " ")} ×{row.quantity}
              </li>
            ))}
          </ul>
        )}
      </div>
    </aside>
  );
}
