import Link from "next/link";
import { LoreTag } from "./LoreTag";

type CardProps = {
  title: string;
  excerpt?: string;
  href: string;
  tag?: string;
  className?: string;
  /** External URL: renders `<a>` with `target="_blank"` and `rel="noopener noreferrer"`. */
  external?: boolean;
};

const cardClasses =
  "block border border-okb-border bg-okb-bg-elevated p-5 hover:border-okb-accent";

export function Card({
  title,
  excerpt,
  href,
  tag,
  className,
  external,
}: CardProps) {
  const classes = [cardClasses, className ?? ""].filter(Boolean).join(" ");

  const inner = (
    <>
      {tag ? (
        <div className="mb-2">
          <LoreTag label={tag} />
        </div>
      ) : null}
      <h3 className="okb-h3">{title}</h3>
      {excerpt ? <p className="okb-body mt-2">{excerpt}</p> : null}
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
      >
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {inner}
    </Link>
  );
}
