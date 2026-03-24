type LoreTagProps = {
  label: string;
};

export function LoreTag({ label }: LoreTagProps) {
  return (
    <span className="okb-meta inline-block border border-okb-border-soft px-2 py-0.5 font-sans tracking-wide [font-variant:small-caps]">
      {label}
    </span>
  );
}
