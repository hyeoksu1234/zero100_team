"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { footerContent, type Language } from "@/data/content";

type FooterSectionProps = {
  language: Language;
};

export function FooterSection({ language }: FooterSectionProps) {
  const content = footerContent[language];

  return (
    <footer className="border-t border-border bg-surface py-12 shadow-inner">
      <div className="container flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <h4 className="text-xl font-semibold">Project Palette</h4>
          <p className="mt-2 text-sm text-muted">{content.tagline}</p>
        </div>

        <motion.ul
          className="flex flex-wrap gap-4 text-sm text-muted"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {content.links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="hover:text-accent transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </motion.ul>
      </div>
      <div className="container mt-8 border-t border-border pt-4 text-xs text-muted/70">
        © {new Date().getFullYear()} Project Palette. All rights reserved.
      </div>
    </footer>
  );
}
