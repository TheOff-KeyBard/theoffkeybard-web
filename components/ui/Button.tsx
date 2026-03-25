import Link from "next/link";

type ButtonProps = {
  variant: "accent" | "outline";
  href?: string;
  children: React.ReactNode;
  className?: string;
  /** Used when rendering a native button (no href). */
  buttonType?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
  /** If true with `href`, renders `<a>` with `target="_blank"` and `rel="noopener noreferrer"`. */
  external?: boolean;
};

const base =
  "inline-flex items-center justify-center px-5 py-3 text-center text-sm font-medium sm:text-base";

const variants: Record<ButtonProps["variant"], string> = {
  accent:
    "border border-okb-accent bg-okb-accent text-okb-bg hover:border-okb-accent-h hover:bg-okb-accent-h",
  outline:
    "border border-okb-border text-okb-text hover:border-okb-accent",
};

export function Button({
  variant,
  href,
  children,
  className,
  buttonType = "button",
  disabled,
  onClick,
  external,
}: ButtonProps) {
  const classes = [base, variants[variant], className ?? ""]
    .filter(Boolean)
    .join(" ");

  if (href && external) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={buttonType}
      className={classes}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
