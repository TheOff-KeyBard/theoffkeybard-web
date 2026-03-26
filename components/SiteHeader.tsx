import Link from "next/link";
import { NavLink } from "@/components/NavLink";
import { Container } from "@/components/ui/Container";
import { DISCORD_INVITE_URL } from "@/lib/discord";

const nav = [
  { href: "/ledger", label: "The Ashen Ledger" },
  { href: "/about", label: "Behind the Quill" },
  { href: "/verasanth", label: "Verasanth" },
] as const;

export function SiteHeader() {
  return (
    <header className="border-b border-okb-border bg-okb-bg">
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
            title="Join the Discord server"
            className="text-sm text-okb-muted hover:text-okb-text"
          >
            Tavern
          </a>
        </nav>
      </Container>
    </header>
  );
}
