import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#f4f2ec",
        ink: {
          DEFAULT: "#16181d",
          muted: "#6b6e76",
        },
        accent: "#bc532b",
        line: "#d8d5cc",
        "image-bg": "#1a1c20",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        shell: "1200px",
      },
      letterSpacing: {
        label: "0.08em",
      },
      transitionTimingFunction: {
        soft: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0f0d23",
          800: "#161334",
          700: "#1e1a45",
          card: "#211d4d",
        },
        haze: {
          DEFAULT: "#a9a6c9",
          muted: "#7c7aa0",
        },
        glow: {
          violet: "#6d5efc",
          plum: "#b46bd8",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        shell: "1120px",
      },
      transitionTimingFunction: {
        soft: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
