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
  /** Larger title when category tags are omitted (e.g. Explore the Table). */
  emphasizeTitle?: boolean;
};

const cardClasses =
  "flex min-h-0 flex-col border border-okb-border bg-okb-bg-elevated p-5 transition-[border-color,box-shadow] duration-200 hover:border-okb-accent hover:shadow-sm";

export function Card({
  title,
  excerpt,
  href,
  tag,
  className,
  external,
  emphasizeTitle,
}: CardProps) {
  const classes = [cardClasses, className ?? ""].filter(Boolean).join(" ");

  const titleClass = emphasizeTitle
    ? "font-serif text-xl font-semibold leading-tight text-okb-text md:text-2xl"
    : "okb-h3";

  const inner = (
    <>
      {tag ? (
        <div className="mb-2">
          <LoreTag label={tag} />
        </div>
      ) : null}
      <h3 className={titleClass}>{title}</h3>
      {excerpt ? (
        <p
          className={
            tag
              ? "okb-body mt-2"
              : emphasizeTitle
                ? "okb-body mt-4 max-w-prose text-pretty"
                : "okb-body mt-3"
          }
        >
          {excerpt}
        </p>
      ) : null}
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
