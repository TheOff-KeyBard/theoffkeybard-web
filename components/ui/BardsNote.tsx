type BardsNoteProps = {
  children: React.ReactNode;
};

export function BardsNote({ children }: BardsNoteProps) {
  return (
    <blockquote className="border-l-2 border-okb-accent-dim pl-6 italic text-okb-muted">
      {children}
    </blockquote>
  );
}
