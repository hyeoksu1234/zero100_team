"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { projectOverview, type Language } from "@/data/content";

type ProjectOverviewSectionProps = {
  language: Language;
};

export function ProjectOverviewSection({
  language
}: ProjectOverviewSectionProps) {
  const content = projectOverview[language];

  return (
    <section id="project">
      <div className="container">
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.name}
          description={content.summary}
          align="center"
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto mt-10 max-w-4xl rounded-[32px] border border-border bg-surface p-8 shadow-lg"
        >
          <h3 className="text-xl font-semibold text-accent">
            {content.differentiatorHeading}
          </h3>
          <p className="mt-3 text-sm text-muted">
            {content.differentiator}
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {content.modules.map((module, index) => (
            <motion.article
              key={module.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1 }}
              className="flex h-full flex-col gap-3 rounded-3xl border border-border bg-surface p-6 shadow-md"
            >
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-semibold">{module.name}</h4>
                <span className="text-xs uppercase tracking-[0.2em] text-accent/80">
                  Module 0{index + 1}
                </span>
              </div>
              <p className="text-sm text-muted">{module.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
