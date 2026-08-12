import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#ffffff",
        ink: {
          DEFAULT: "#344054",
          muted: "#667085",
          // Figma color/grey/900 — case-study H1, a step darker than body ink
          strong: "#101828",
          // Figma color/grey/600 — pill badge borders
          hairline: "#475467",
          // Figma Gray (light mode)/800 — outcome stat figures and labels
          stat: "#182230",
        },
        accent: "#bc532b",
        // Figma color/grey/200 — every divider, rule and hairline border.
        // Was #d8d5cc, a warm beige from the cream-background era; it read as
        // out of place once the page went white and the palette went cool.
        line: "#eaecf0",
        // Figma color/grey/100 — thumbnail panel behind project images
        surface: "#f2f4f7",
      },
      borderRadius: {
        // Figma corner radius/32 — project thumbnail panels
        panel: "32px",
        // Figma corner radius/48 — case-study image panels
        "panel-lg": "48px",
        // Figma corner radius/16 — stat cards
        card: "16px",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        shell: "1200px",
      },
      fontSize: {
        // Eyebrow/meta label size. Bare string sets font-size only, matching
        // the arbitrary `text-[13px]` it replaces (no line-height side effect).
        label: "13px",
      },
      letterSpacing: {
        label: "0.06em",
      },
      transitionTimingFunction: {
        soft: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
