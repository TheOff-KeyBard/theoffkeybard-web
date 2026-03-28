"use client";

import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { ArchiveSidebar } from "./ArchiveSidebar";

export function ArchiveLayoutShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const currentSlug =
    pathname === "/verasanth/archive"
      ? ""
      : pathname.startsWith("/verasanth/archive/")
        ? (pathname.slice("/verasanth/archive/".length).split("/")[0] ?? "")
        : "";

  return (
    <div className="min-h-[50vh] bg-okb-bg py-12 md:py-16">
      <Container
        size="wide"
        className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,14rem)_1fr]"
      >
        <aside className="border-b border-okb-border pb-6 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-8 lg:sticky lg:top-28 lg:self-start">
          <ArchiveSidebar currentSlug={currentSlug} />
        </aside>
        <div className="min-w-0">{children}</div>
      </Container>
    </div>
  );
}
