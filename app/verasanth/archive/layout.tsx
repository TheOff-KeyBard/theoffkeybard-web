import type { Metadata } from "next";
import { ArchiveLayoutShell } from "@/components/world-archive/ArchiveLayoutShell";

export const metadata: Metadata = {
  title: "World Archive",
  description:
    "Curated shelves: the city, guilds, peoples, instincts, and recorded echoes.",
};

export default function VerasanthArchiveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ArchiveLayoutShell>{children}</ArchiveLayoutShell>;
}
