"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

function pathIsActive(pathname: string, href: string): boolean {
  if (href === "/tales") {
    return pathname === "/tales" || pathname.startsWith("/tales/");
  }
  if (href === "/verasanth") {
    return pathname === "/verasanth" || pathname.startsWith("/verasanth/");
  }
  return pathname === href;
}

export function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname();
  const active = pathIsActive(pathname, href);
  return (
    <Link
      href={href}
      className={
        active
          ? "text-sm text-okb-accent"
          : "text-sm text-okb-muted hover:text-okb-text"
      }
    >
      {children}
    </Link>
  );
}
