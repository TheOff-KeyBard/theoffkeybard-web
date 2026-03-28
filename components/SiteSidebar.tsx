"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { DISCORD_INVITE_URL } from "@/lib/discord";

function pathIsActive(pathname: string, href: string): boolean {
  if (href === "/ledger") {
    return pathname === "/ledger" || pathname.startsWith("/ledger/");
  }
  if (href === "/verasanth") {
    return pathname === "/verasanth" || pathname.startsWith("/verasanth/");
  }
  return pathname === href;
}

const NAV: { href: string; label: string; external?: boolean }[] = [
  { href: "/ledger", label: "The Ashen Ledger" },
  { href: "/journal", label: "The Bard’s Journal" },
  { href: "/verasanth", label: "Verasanth" },
  { href: DISCORD_INVITE_URL, label: "Tavern", external: true },
];

function LedgerIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
      />
    </svg>
  );
}

function JournalIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
      />
    </svg>
  );
}

function VerasanthIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75m0-9h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75"
      />
    </svg>
  );
}

function TavernIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-3.89-.16-1.036-.094-1.85-.852-1.993-1.885A61.082 61.082 0 0 1 12 18.184a61.122 61.122 0 0 1-3.109-2.25 2.001 2.001 0 0 1-1.993-1.884A61.122 61.122 0 0 1 4 18.184v-4.286c0-.969.616-1.813 1.5-2.097V6.75a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 20.25 6.75v1.761Z"
      />
    </svg>
  );
}

const ICONS = [LedgerIcon, JournalIcon, VerasanthIcon, TavernIcon] as const;

const iconClass = "h-5 w-5 shrink-0";

function SidebarNavRows() {
  const pathname = usePathname();

  return (
    <>
      {NAV.map((item, i) => {
        const Icon = ICONS[i];
        const active = !item.external && pathIsActive(pathname, item.href);
        const baseClass =
          "flex w-full flex-col items-center justify-center gap-1 px-1 py-3 text-sm transition-colors";
        const stateClass = active
          ? "text-okb-accent"
          : "text-okb-muted hover:text-okb-text";

        const labelSpan = (
          <span className="hidden text-center text-xs transition-opacity duration-150 lg:hidden xl:block">
            {item.label}
          </span>
        );

        if (item.external) {
          return (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              title="Opens Discord in a new tab"
              className={`${baseClass} ${stateClass}`}
              aria-label={item.label}
            >
              <span className="flex items-center justify-center">
                <Icon className={iconClass} />
              </span>
              {labelSpan}
            </a>
          );
        }

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`${baseClass} ${stateClass}`}
            aria-label={item.label}
            aria-current={active ? "page" : undefined}
          >
            <span className="flex items-center justify-center">
              <Icon className={iconClass} />
            </span>
            {labelSpan}
          </Link>
        );
      })}
    </>
  );
}

export function SiteSidebar() {
  return (
    <aside
      className="sticky top-0 hidden h-screen shrink-0 border-r border-okb-border bg-okb-bg py-4 transition-all duration-200 ease-in-out md:flex md:flex-col"
      aria-label="Site navigation"
    >
      <nav className="flex w-full flex-col items-stretch">
        <SidebarNavRows />
      </nav>
    </aside>
  );
}

export function SiteMobileBottomNav() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-around border-t border-okb-border bg-okb-bg px-2 py-2 transition-all duration-200 ease-in-out md:hidden"
      aria-label="Site navigation"
    >
      {NAV.map((item, i) => {
        const Icon = ICONS[i];
        const active = !item.external && pathIsActive(pathname, item.href);
        const baseClass =
          "flex items-center justify-center py-2 transition-colors";
        const stateClass = active
          ? "text-okb-accent"
          : "text-okb-muted hover:text-okb-text";

        if (item.external) {
          return (
            <a
              key={item.href}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              title="Opens Discord in a new tab"
              className={`${baseClass} ${stateClass}`}
              aria-label={item.label}
            >
              <span className="flex items-center justify-center">
                <Icon className={iconClass} />
              </span>
            </a>
          );
        }

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`${baseClass} ${stateClass}`}
            aria-label={item.label}
            aria-current={active ? "page" : undefined}
          >
            <span className="flex items-center justify-center">
              <Icon className={iconClass} />
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
