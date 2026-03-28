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
    <div className="min-h-screen">
      <SiteSidebar />
      <div className="flex min-h-screen min-w-0 flex-col pl-[90px] pb-16 md:pl-0 md:pb-0">
        <SiteChrome>{children}</SiteChrome>
        <SiteMobileBottomNav />
      </div>
    </div>
  );
}
