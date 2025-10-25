"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import {
  teamMembers,
  teamSectionCopy,
  type Language
} from "@/data/content";

type TeamSectionProps = {
  language: Language;
};

export function TeamSection({ language }: TeamSectionProps) {
  const section = teamSectionCopy[language];
  const members = teamMembers[language];

  return (
    <section id="team">
      <div className="container">
        <SectionHeading
          eyebrow={section.eyebrow}
          title={section.title}
          description={section.description}
        />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {members.map((member, index) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: index * 0.15 }}
              className="flex h-full flex-col gap-6 rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-surface/80 to-surface/40 p-6 backdrop-blur-xl"
            >
              <div>
                <div className="relative h-48 w-full overflow-hidden rounded-3xl bg-accent/10">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 320px"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-4xl font-semibold text-accent">
                      {member.name
                        .split(" ")
                        .map((part) => part[0])
                        .join("")}
                    </div>
                  )}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                </div>
                <div className="mt-4 flex flex-col">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
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
