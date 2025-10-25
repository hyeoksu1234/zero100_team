"use client";

import { type Language } from "@/data/content";

const LANGUAGE_OPTIONS: { label: string; value: Language }[] = [
  { label: "한국어", value: "ko" },
  { label: "English", value: "en" }
];

type LanguageToggleProps = {
  language: Language;
  onChange: (language: Language) => void;
};

export function LanguageToggle({ language, onChange }: LanguageToggleProps) {
  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 text-xs backdrop-blur">
      {LANGUAGE_OPTIONS.map((option) => {
        const isActive = option.value === language;

        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            className={`rounded-full px-3 py-1 font-medium transition-colors ${
              isActive
                ? "bg-accent text-background shadow-sm"
                : "text-white/60 hover:text-white"
            }`}
            aria-pressed={isActive}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
