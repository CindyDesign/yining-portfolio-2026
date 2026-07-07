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
