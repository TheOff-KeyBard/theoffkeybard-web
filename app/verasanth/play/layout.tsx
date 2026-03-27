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
    <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
      {children}
    </div>
  );
}
