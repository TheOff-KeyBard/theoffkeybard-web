type ContainerSize = "text" | "wide" | "hero";

const maxWidthClass: Record<ContainerSize, string> = {
  text: "max-w-3xl",
  wide: "max-w-5xl",
  hero: "max-w-2xl",
};

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  size?: ContainerSize;
};

export function Container({
  children,
  className,
  size = "text",
}: ContainerProps) {
  return (
    <div
      className={[
        "mx-auto w-full px-4 md:px-8",
        maxWidthClass[size],
        className ?? "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}
