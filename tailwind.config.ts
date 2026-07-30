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
        },
        accent: "#bc532b",
        line: {
          DEFAULT: "#d8d5cc",
          // Figma color/grey/200 — hairline border on stat cards
          soft: "#eaecf0",
        },
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
