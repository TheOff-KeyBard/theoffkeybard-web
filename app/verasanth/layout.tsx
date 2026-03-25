import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Verasanth",
};

export default function VerasanthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
