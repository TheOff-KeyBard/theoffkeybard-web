type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";

  return (
    <div className={alignClass}>
      <h2 className="okb-h2">{title}</h2>
      {subtitle ? (
        <p className="okb-body mt-2">{subtitle}</p>
      ) : null}
    </div>
  );
}
