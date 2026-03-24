import type { Metadata } from "next";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
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
        <SiteHeader />
        <main className="pb-12">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
