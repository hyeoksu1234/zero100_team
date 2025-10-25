"use client";

import { motion } from "framer-motion";
import { CTAButton } from "@/components/cta-button";
import { heroContent, type Language } from "@/data/content";

const heroVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 }
};

type HeroSectionProps = {
  language: Language;
};

export function HeroSection({ language }: HeroSectionProps) {
  const content = heroContent[language];

  return (
    <section className="relative overflow-hidden pb-24 pt-24 md:pt-32">
      <div className="container grid gap-16 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <motion.div
          className="flex flex-col gap-6"
          initial="hidden"
          animate="visible"
          variants={heroVariants}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-surface px-4 py-1 text-xs uppercase tracking-[0.4em] text-accent shadow-sm">
            {content.badge}
          </span>
          <h1 className="text-5xl font-semibold leading-tight text-foreground md:text-6xl">
            {content.title}
          </h1>
          <p className="text-3xl font-semibold leading-tight text-foreground md:text-4xl">
            {content.subtitle}
          </p>
          <div className="max-w-xl text-lg text-muted md:text-xl leading-relaxed">
            {content.description.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <CTAButton
              href={content.ctas[0].href}
              label={content.ctas[0].label}
              variant="primary"
            />
            <CTAButton
              href={content.ctas[1].href}
              label={content.ctas[1].label}
              variant="secondary"
            />
          </div>
        </motion.div>

        <motion.div
          className="relative hidden h-[420px] items-center justify-center md:flex"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-accent/20 via-transparent to-transparent blur-3xl" />
          <div className="relative flex h-full w-full flex-col justify-between rounded-[32px] border border-border bg-gradient-to-br from-white via-surface to-surface p-10 shadow-lg">
            <div className="flex flex-col gap-2">
              <span className="text-sm uppercase tracking-[0.3em] text-accent">
                {content.highlightLabel}
              </span>
              <h3 className="text-2xl font-semibold">
                {content.highlightTitle}
              </h3>
            </div>
            <div className="grid gap-6">
              {content.highlightItems.map((item) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="rounded-2xl border border-border bg-surface p-4 text-sm text-muted"
                >
                  {item}
                </motion.div>
              ))}
            </div>
            <div className="flex flex-col gap-2 text-xs text-muted/70">
              <span>{content.highlightMetaPrimary}</span>
              <span>{content.highlightMetaSecondary}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
