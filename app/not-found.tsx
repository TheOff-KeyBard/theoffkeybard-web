import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <section className="bg-okb-bg py-16 md:py-24">
      <Container>
        <div className="space-y-6 text-center sm:text-left">
          <h1 className="okb-h1">You&apos;ve wandered off the map.</h1>
          <p className="okb-body">
            Even bards get lost. This page doesn&apos;t exist — but the archive
            does.
          </p>
          <Button variant="outline" href="/tales">
            Back to the Tales
          </Button>
        </div>
      </Container>
    </section>
  );
}
