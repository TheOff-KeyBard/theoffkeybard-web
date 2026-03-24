import { MDXProvider } from "@mdx-js/react";
import Link from "next/link";
import type { ComponentProps } from "react";

type MdxProvidedComponents = NonNullable<
  ComponentProps<typeof MDXProvider>["components"]
>;

export const taleMdxComponents: MdxProvidedComponents = {
  a: ({ href, children, ...props }) => {
    if (href?.startsWith("/")) {
      return (
        <Link href={href} className="text-okb-accent underline-offset-2 hover:text-okb-text hover:underline" {...props}>
          {children}
        </Link>
      );
    }
    return (
      <a
        href={href}
        className="text-okb-accent underline-offset-2 hover:text-okb-text hover:underline"
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    );
  },
};
