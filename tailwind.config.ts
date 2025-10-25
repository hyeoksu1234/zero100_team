import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B0B0D",
        surface: "#161618",
        accent: {
          DEFAULT: "#A3A3A3",
          foreground: "#E5E7EB"
        },
        muted: "#9CA3AF"
      },
      fontFamily: {
        sans: ["var(--font-pretendard)", "var(--font-inter)", "system-ui"]
      },
      boxShadow: {
        glow: "0 0 50px rgba(163, 163, 163, 0.25)"
      }
    }
  },
  plugins: []
};

export default config;
