import { Container } from "@/components/ui/Container";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-okb-border">
      <Container className="py-8 text-center text-sm text-okb-faint">
        <p>
          The Off-Key Bard {new Date().getFullYear()}
        </p>
      </Container>
    </footer>
  );
}
