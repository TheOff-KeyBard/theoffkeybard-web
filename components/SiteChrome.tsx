"use client";

import { usePathname } from "next/navigation";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

/**
 * /verasanth/play: full viewport game on small screens (no site header/footer).
 * md+: header only; no site footer on any /verasanth/* route.
 */
export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isPlay = pathname === "/verasanth/play";
  const showFooter = !pathname?.startsWith("/verasanth");

  if (!isPlay) {
    return (
      <>
        <SiteHeader />
        <main className="pb-12">{children}</main>
        {showFooter && <SiteFooter />}
      </>
    );
  }

  return (
    <div className="flex max-h-[100dvh] min-h-[100dvh] flex-col overflow-hidden md:max-h-none md:min-h-[100dvh] md:overflow-visible">
      <div className="hidden shrink-0 md:block">
        <SiteHeader />
      </div>
      <main className="flex min-h-0 flex-1 flex-col overflow-hidden p-0 md:pb-12">
        {children}
      </main>
    </div>
  );
}
