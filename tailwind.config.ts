import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        okb: {
          bg: "#1a1714",
          "bg-soft": "#1c1815",
          "bg-elevated": "#231f1a",
          accent: "#c0622a",
          "accent-h": "#a85523",
          "accent-dim": "rgba(192, 98, 42, 0.45)",
          text: "#f0e6d3",
          muted: "#9a8a7a",
          faint: "#71665c",
          border: "rgba(240, 230, 211, 0.14)",
          "border-soft": "rgba(240, 230, 211, 0.09)",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ['"Playfair Display"', "Georgia", "serif"],
      },
      typography: ({ theme }: PluginAPI) => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": theme("colors.okb.text"),
            "--tw-prose-headings": theme("colors.okb.text"),
            "--tw-prose-lead": theme("colors.okb.muted"),
            "--tw-prose-links": theme("colors.okb.accent"),
            "--tw-prose-bold": theme("colors.okb.text"),
            "--tw-prose-quotes": theme("colors.okb.muted"),
            "--tw-prose-quote-borders": theme("colors.okb.accent"),
            "--tw-prose-bullets": theme("colors.okb.muted"),
            "--tw-prose-hr": theme("colors.okb.muted"),
            "--tw-prose-th-borders": theme("colors.okb.muted"),
            "--tw-prose-td-borders": theme("colors.okb.muted"),
            maxWidth: "42rem",
            a: {
              "&:hover": {
                color: theme("colors.okb.text"),
              },
            },
          },
        },
      }),
    },
  },
  plugins: [typography],
};
export default config;
