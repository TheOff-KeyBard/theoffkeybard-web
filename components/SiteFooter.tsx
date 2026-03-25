import { Container } from "@/components/ui/Container";
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
            className="text-okb-muted underline decoration-okb-border underline-offset-4 hover:text-okb-text"
          >
            Join the Tavern on Discord
          </a>
        </p>
        <p>The Off-Key Bard {new Date().getFullYear()}</p>
      </Container>
    </footer>
  );
}
