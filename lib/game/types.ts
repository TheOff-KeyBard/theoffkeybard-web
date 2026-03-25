export type GameMessageType = "narration" | "combat" | "system" | "error";

export type GameMessage = {
  type: GameMessageType;
  text: string;
  timestamp: number;
};

export type PlayerState = {
  id: string;
  name: string;
  currentNode: string;
  hp: number;
  maxHp: number;
  level: number;
  xp: number;
  equipped: Record<string, string>;
};

export type InventoryItem = {
  item_id: string;
  quantity: number;
};

export type NodeData = {
  id: string;
  description: string;
  exits: Record<string, string>;
  items: string[];
  npcs: string[];
  enemy?: {
    id: string;
    name: string;
    hp: number;
    maxHp: number;
    attack: number;
    defense: number;
  };
};

export type EncounterSummary = {
  id: number;
  enemyId: string;
  enemyHp: number;
  enemyMaxHp: number;
  status: string;
} | null;

export type GameStatePayload = {
  player: PlayerState;
  node: NodeData;
  inventory: InventoryItem[];
  flags: Record<string, number>;
  encounter: EncounterSummary;
  message?: string;
};

export type CombatResult = {
  log: string[];
  outcome: "ongoing" | "victory" | "fled" | "defeat";
  playerHp: number;
  enemyHp: number;
  state?: GameStatePayload;
};
