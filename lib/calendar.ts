export const TURNS = [
  "Embers",
  "Veils",
  "Stone",
  "Echoes",
  "Shadows",
  "Ashfall",
] as const;

export type TurnIndex = 0 | 1 | 2 | 3 | 4 | 5;

export interface AshenDate {
  cycle: number;
  turn: TurnIndex;
  mark: number;
}

export function formatVerasanthDate({ cycle, turn, mark }: AshenDate): string {
  return `Mark ${mark}, Turn of ${TURNS[turn]}, Cycle ${cycle}`;
}

export function formatVerasanthDateShort({ cycle, turn, mark }: AshenDate): string {
  return `${mark} ${TURNS[turn]}, C${cycle}`;
}

export function compareAshenDates(a: AshenDate, b: AshenDate): number {
  if (a.cycle !== b.cycle) return b.cycle - a.cycle;
  if (a.turn !== b.turn) return b.turn - a.turn;
  return b.mark - a.mark;
}
