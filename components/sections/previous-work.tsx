"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import {
  previousWorkContent,
  type Language
} from "@/data/content";

type PreviousWorkSectionProps = {
  language: Language;
};

export function PreviousWorkSection({
  language
}: PreviousWorkSectionProps) {
  const content = previousWorkContent[language];
  const projects = content.projects;

  if (!projects.length) {
    return null;
  }

  return (
    <section id="previous-work">
      <div className="container">
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          description={content.description}
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {projects.map((work, index) => (
            <motion.article
              key={work.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1 }}
              className="flex h-full flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <h3 className="text-lg font-semibold">{work.title}</h3>
              <p className="text-sm text-white/70">{work.summary}</p>
              {work.href ? (
                <Link
                  href={work.href}
                  className="mt-auto text-sm font-medium text-accent hover:text-accent-foreground"
                >
                  {content.ctaLabel}
                </Link>
              ) : null}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
