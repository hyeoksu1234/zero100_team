"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { teamMembers } from "@/data/content";

export function TeamSection() {
  return (
    <section id="team">
      <div className="container">
        <SectionHeading
          eyebrow="Meet the Team"
          title="실력 있는 빌더들이 캘린더 자동화를 현실로 만듭니다"
          description="제품 설계, UX 엔지니어링, 자동화 아키텍처까지. 서로 다른 역량이 하나의 빌더톤 팀으로 모였습니다."
        />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {teamMembers.map((member, index) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: index * 0.15 }}
              className="flex h-full flex-col gap-6 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-surface/80 to-surface/40 p-6 backdrop-blur-xl"
            >
              <div className="flex items-center gap-4">
                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/20 text-lg font-semibold text-accent">
                  {member.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")}
                </div>
                <div className="flex flex-col">
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <span className="text-sm text-muted">{member.role}</span>
                </div>
              </div>

              <p className="text-sm leading-relaxed text-white/70">
                {member.focus}
              </p>

              <div className="flex flex-wrap gap-2">
                {member.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex flex-wrap gap-3">
                {member.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-xs font-medium uppercase tracking-[0.2em] text-accent hover:text-accent-foreground"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

