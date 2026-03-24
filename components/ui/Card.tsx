import Link from "next/link";
import { LoreTag } from "./LoreTag";

type CardProps = {
  title: string;
  excerpt?: string;
  href: string;
  tag?: string;
  className?: string;
};

export function Card({ title, excerpt, href, tag, className }: CardProps) {
  return (
    <Link
      href={href}
      className={[
        "block border border-okb-border bg-okb-bg-elevated p-5 hover:border-okb-accent",
        className ?? "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {tag ? (
        <div className="mb-2">
          <LoreTag label={tag} />
        </div>
      ) : null}
      <h3 className="okb-h3">{title}</h3>
      {excerpt ? <p className="okb-body mt-2">{excerpt}</p> : null}
    </Link>
  );
}
