"use client";

import { motion } from "framer-motion";
import { CTAButton } from "@/components/cta-button";
import { heroContent } from "@/data/content";

const heroVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 }
};

export function HeroSection() {
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
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.4em] text-accent backdrop-blur">
            Project Palette
          </span>
          <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
            {heroContent.subtitle}
          </h1>
          <p className="max-w-xl text-lg text-white/70 md:text-xl">
            {heroContent.description}
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <CTAButton
              href={heroContent.ctas[0].href}
              label={heroContent.ctas[0].label}
              variant="primary"
            />
            <CTAButton
              href={heroContent.ctas[1].href}
              label={heroContent.ctas[1].label}
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
          <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-accent/40 via-transparent to-transparent blur-3xl" />
          <div className="relative flex h-full w-full flex-col justify-between rounded-[32px] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-10 backdrop-blur-md">
            <div className="flex flex-col gap-2">
              <span className="text-sm uppercase tracking-[0.3em] text-accent">
                Calendar-first
              </span>
              <h3 className="text-2xl font-semibold">
                Automation for Builders
              </h3>
            </div>
            <div className="grid gap-6">
              {["Zero-input logging", "Flow automation", "Block data OS"].map(
                (item) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/80"
                  >
                    {item}
                  </motion.div>
                )
              )}
            </div>
            <div className="flex flex-col gap-2 text-xs text-white/40">
              <span>AI Builderthon Ready</span>
              <span>Responsive · Multi-language Ready · Automation Native</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

