"use client";

import { usePathname } from "next/navigation";
import { SiteChrome } from "@/components/SiteChrome";
import { SiteMobileBottomNav, SiteSidebar } from "@/components/SiteSidebar";

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isPlay = pathname === "/verasanth/play";

  if (isPlay) {
    return <SiteChrome>{children}</SiteChrome>;
  }

  return (
    <div className="grid min-h-screen grid-cols-1 md:grid-cols-[90px_1fr] lg:grid-cols-[70px_1fr]">
      <SiteSidebar />
      <div className="flex min-h-screen min-w-0 flex-col pb-16 md:pb-0">
        <SiteChrome>{children}</SiteChrome>
        <SiteMobileBottomNav />
      </div>
    </div>
  );
}
