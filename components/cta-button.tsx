"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type CTAButtonProps = {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
};

export function CTAButton({
  href,
  label,
  variant = "primary"
}: CTAButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all";
  const variantStyles =
    variant === "primary"
      ? "bg-accent text-accent-foreground hover:text-accent-foreground/80 shadow-glow"
      : "border border-border bg-transparent text-foreground hover:border-accent hover:text-accent";

  return (
    <motion.div
      whileHover={{ y: -2 }}
      whileTap={{ y: 0 }}
      className="inline-flex"
    >
      <Link href={href} className={`${baseStyles} ${variantStyles}`}>
        {label}
      </Link>
    </motion.div>
  );
}
