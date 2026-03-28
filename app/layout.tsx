import type { Metadata } from "next";
import { AppShell } from "@/components/AppShell";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://theoffkeybard.com"),
  title: {
    default: "The Off-Key Bard",
    template: "%s | The Off-Key Bard",
  },
  description:
    "Sharp storytelling, original worlds, and bardic commentary from The Off-Key Bard.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
