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
    <div className="inline-flex items-center gap-1 rounded-full border border-border bg-surface p-1 text-xs shadow-sm">
      {LANGUAGE_OPTIONS.map((option) => {
        const isActive = option.value === language;

        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            className={`rounded-full px-3 py-1 font-medium transition-colors ${
              isActive
                ? "bg-accent text-accent-foreground shadow-sm"
                : "text-muted hover:text-foreground"
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
