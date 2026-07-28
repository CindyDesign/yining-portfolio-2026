import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#f4f2ec",
        ink: {
          DEFAULT: "#344054",
          muted: "#667085",
        },
        accent: "#bc532b",
        line: "#d8d5cc",
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
