import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="mb-14 max-w-3xl"
    >
      <div className="inline-flex items-center gap-2 mb-4 font-mono text-xs text-muted-foreground">
        <span className="h-px w-8 bg-gradient-to-r from-electric to-transparent" />
        <span className="uppercase tracking-[0.2em]">{eyebrow}</span>
      </div>
      <h2 className="font-display font-bold tracking-[-0.03em] text-4xl md:text-5xl leading-[1.05]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base md:text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}

export function Section({
  id,
  children,
  className = "",
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative mx-auto max-w-6xl px-6 py-24 md:py-32 ${className}`}>
      {children}
    </section>
  );
}
