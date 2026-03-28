import type { Metadata } from "next";
import Link from "next/link";
import { ArchiveBreadcrumb } from "@/components/world-archive/ArchiveCatalog";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ABOUT_THE_CITY } from "@/content/world-archive/about-the-city";

export const metadata: Metadata = {
  title: "About the City",
  description: "What Verasanth is — and what the map does not show.",
};

export default function AboutTheCityArchivePage() {
  return (
    <div>
      <ArchiveBreadcrumb sectionTitle="About the City" />
      <h1 className="okb-h1 mb-8">About the City</h1>

      <section className="mb-14 space-y-6">
        <SectionHeading title="What Is Verasanth?" />
        <div className="space-y-4">
          {ABOUT_THE_CITY.whatIs.map((p) => (
            <p key={p.slice(0, 40)} className="okb-body">
              {p}
            </p>
          ))}
        </div>
      </section>

      <section className="mb-14 space-y-6">
        <SectionHeading title="What Lies Within" />
        <ul className="okb-body list-disc space-y-2 pl-6 text-okb-text">
          {ABOUT_THE_CITY.whatLiesWithin.map((item) => (
            <li key={item.slice(0, 32)}>{item}</li>
          ))}
        </ul>
        <div className="space-y-4">
          {ABOUT_THE_CITY.whatLiesClosing.map((p) => (
            <p key={p.slice(0, 40)} className="okb-body">
              {p}
            </p>
          ))}
        </div>
        <p className="okb-meta mt-6">
          <Link
            href="/ledger"
            className="text-okb-accent hover:text-okb-accent-h"
          >
            Fragments of this surface in the ledger.
          </Link>
        </p>
      </section>

      <section className="space-y-6">
        <SectionHeading title="The Descent" />
        <div className="space-y-4">
          {ABOUT_THE_CITY.descent.map((p) => (
            <p key={p.slice(0, 40)} className="okb-body">
              {p}
            </p>
          ))}
        </div>
        <p className="okb-meta italic text-okb-muted">
          {ABOUT_THE_CITY.descentClosing}
        </p>
      </section>
    </div>
  );
}
