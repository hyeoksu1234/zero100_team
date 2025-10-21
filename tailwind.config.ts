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
        background: "#050505",
        surface: "#0F0F12",
        accent: {
          DEFAULT: "#8B5CF6",
          foreground: "#F5F3FF"
        },
        muted: "#A1A1AA"
      },
      fontFamily: {
        sans: ["var(--font-pretendard)", "var(--font-inter)", "system-ui"]
      },
      boxShadow: {
        glow: "0 0 50px rgba(139, 92, 246, 0.35)"
      }
    }
  },
  plugins: []
};

export default config;

