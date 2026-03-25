import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "Verasanth — The Off-Key Bard" },
};

export default function VerasanthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="-mb-12 flex min-h-0 flex-col">{children}</div>
  );
}
