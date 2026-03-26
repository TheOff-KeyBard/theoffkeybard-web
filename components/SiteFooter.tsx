import { Container } from "@/components/ui/Container";
import { ExternalLinkGlyph } from "@/components/ui/ExternalLinkGlyph";
import { DISCORD_INVITE_URL } from "@/lib/discord";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-okb-border">
      <Container className="space-y-3 py-8 text-center text-sm text-okb-faint">
        <p>The city remembers everything.</p>
        <p>
          <a
            href={DISCORD_INVITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            title="Opens Discord in a new tab"
            className="inline-flex items-center justify-center gap-1 text-okb-muted underline decoration-okb-border underline-offset-4 hover:text-okb-text"
          >
            <span>Join the Tavern on Discord</span>
            <ExternalLinkGlyph className="shrink-0 opacity-70" />
          </a>
        </p>
        <p>The Off-Key Bard {new Date().getFullYear()}</p>
      </Container>
    </footer>
  );
}
