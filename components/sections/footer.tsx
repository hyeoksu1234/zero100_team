"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { footerLinks } from "@/data/content";

export function FooterSection() {
  return (
    <footer className="border-t border-white/10 bg-black/40 py-12">
      <div className="container flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <h4 className="text-xl font-semibold">Project Palette</h4>
          <p className="mt-2 text-sm text-white/60">
            Calendar-first · Zero-input · Automation Builder Team
          </p>
        </div>

        <motion.ul
          className="flex flex-wrap gap-4 text-sm text-white/70"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {footerLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="hover:text-accent-foreground transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </motion.ul>
      </div>
      <div className="container mt-8 border-t border-white/10 pt-4 text-xs text-white/40">
        © {new Date().getFullYear()} Project Palette. All rights reserved.
      </div>
    </footer>
  );
}

