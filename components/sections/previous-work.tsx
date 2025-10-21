"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { previousWorks } from "@/data/content";

export function PreviousWorkSection() {
  if (!previousWorks.length) {
    return null;
  }

  return (
    <section id="previous-work">
      <div className="container">
        <SectionHeading
          eyebrow="Previous Work"
          title="실행력으로 증명한 운영 자동화 사례"
          description="졸업 전시 운영부터 브랜드 리디자인까지, 복잡한 캘린더 기반 워크플로를 자동화한 경험을 공유합니다."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {previousWorks.map((work, index) => (
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
                  자세히 보기 →
                </Link>
              ) : null}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

