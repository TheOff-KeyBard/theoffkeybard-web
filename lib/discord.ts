const DEFAULT_DISCORD_INVITE = "https://discord.gg/YhS2xK55pM";

/**
 * Discord server invite; set `NEXT_PUBLIC_DISCORD_INVITE_URL` in `.env.local`.
 * Empty/whitespace falls back to the default so the site never ships a broken link.
 */
export function getDiscordInviteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_DISCORD_INVITE_URL;
  if (typeof raw === "string" && raw.trim() !== "") return raw.trim();
  return DEFAULT_DISCORD_INVITE;
}

export const DISCORD_INVITE_URL = getDiscordInviteUrl();
