import type { Metadata } from "next";
import { ArchiveLayoutShell } from "@/components/world-archive/ArchiveLayoutShell";

export const metadata: Metadata = {
  title: "World Archive",
  description:
    "The city, guilds, peoples, instincts, and what the ledger failed to swallow.",
};

export default function VerasanthArchiveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ArchiveLayoutShell>{children}</ArchiveLayoutShell>;
}
