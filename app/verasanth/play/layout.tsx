import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enter Verasanth",
};

export default function VerasanthPlayLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="-mb-12 flex min-h-0 flex-col">{children}</div>
  );
}
