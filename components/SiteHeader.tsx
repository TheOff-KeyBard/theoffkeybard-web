import Link from "next/link";
import { NavLink } from "@/components/NavLink";
import { Container } from "@/components/ui/Container";
import { ExternalLinkGlyph } from "@/components/ui/ExternalLinkGlyph";
import { DISCORD_INVITE_URL } from "@/lib/discord";

const nav = [
  { href: "/ledger", label: "The Ashen Ledger" },
  { href: "/journal", label: "The Bard’s Journal" },
  { href: "/verasanth", label: "Verasanth" },
  { href: "/verasanth/archive", label: "World Archive" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-okb-border bg-okb-bg">
      <Container className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/"
          className="font-serif text-xl font-semibold tracking-tight text-okb-text hover:text-okb-accent"
        >
          The Off-Key Bard
        </Link>
        <nav className="flex flex-col gap-y-2 sm:flex-row sm:flex-wrap sm:gap-x-5 sm:gap-y-2">
          {nav.map(({ href, label }) => (
            <NavLink key={href} href={href}>
              {label}
            </NavLink>
          ))}
          <a
            href={DISCORD_INVITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            title="Opens Discord in a new tab"
            className="inline-flex items-center gap-1 text-sm text-okb-muted hover:text-okb-text"
          >
            <span>Tavern</span>
            <ExternalLinkGlyph className="shrink-0 opacity-70" />
          </a>
        </nav>
      </Container>
    </header>
  );
}
