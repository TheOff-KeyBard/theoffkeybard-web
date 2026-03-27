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
    <div className="fixed inset-0 flex flex-col overflow-hidden">
      {children}
    </div>
  );
}