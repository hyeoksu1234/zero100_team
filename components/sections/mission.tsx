"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { missionContent } from "@/data/content";

export function MissionSection() {
  return (
    <section id="mission">
      <div className="container">
        <SectionHeading
          eyebrow="Our Mission"
          title={missionContent.headline}
          description="우리가 풀고자 하는 문제와 설계 철학을 세 가지 키워드로 요약합니다."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {missionContent.statements.map((statement, index) => (
            <motion.article
              key={statement}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1 }}
              className="flex h-full flex-col gap-3 rounded-2xl border border-white/10 bg-surface/60 p-6 backdrop-blur-xl"
            >
              <span className="text-sm font-semibold text-accent">
                0{index + 1}
              </span>
              <p className="text-base text-white/80">{statement}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

