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
        background: "#F4F5F7",
        surface: "#FFFFFF",
        accent: {
          DEFAULT: "#4B5563",
          foreground: "#F9FAFB"
        },
        foreground: "#1F2937",
        muted: "#6B7280",
        border: "#D1D5DB"
      },
      fontFamily: {
        sans: ["var(--font-pretendard)", "var(--font-inter)", "system-ui"]
      },
      boxShadow: {
        glow: "0 0 35px rgba(107, 114, 128, 0.2)"
      }
    }
  },
  plugins: []
};

export default config;
