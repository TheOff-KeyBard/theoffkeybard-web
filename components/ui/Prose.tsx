type ProseProps = {
  children: React.ReactNode;
  className?: string;
};

export function Prose({ children, className }: ProseProps) {
  return (
    <div
      className={[
        "prose prose-invert max-w-none font-sans prose-headings:font-serif",
        "prose-headings:text-okb-text prose-p:mb-4 prose-p:text-okb-muted prose-p:leading-7 prose-a:text-okb-accent",
        "prose-strong:text-okb-text prose-blockquote:border-okb-accent-dim",
        className ?? "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}
