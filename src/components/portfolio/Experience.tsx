import { motion } from "framer-motion";
import { Section, SectionHeader } from "./Section";

const timeline = [
  {
    when: "Aug 2025 — Feb 2026",
    role: "Google Student Ambassador",
    org: "Google",
    points: [
      "Led campus-wide initiatives for Google developer programs.",
      "Organized workshops driving measurable community engagement.",
    ],
  },
  {
    when: "2025",
    role: "Perplexity Campus Partner",
    org: "Perplexity AI",
    points: [
      "Drove adoption and outreach campaigns for the Perplexity platform.",
      "Earned $1,628 through performance-based contributions.",
    ],
  },
  {
    when: "Aug — Oct 2025",
    role: "Virtual Intern · AI Valuation System",
    org: "Infosys Springboard 6.0",
    points: [
      "Built an end-to-end ML pipeline for property valuation.",
      "Shipped ensemble models + ARIMA forecasting + Gemini assistant.",
    ],
  },
  {
    when: "Jun — Jul 2025",
    role: "SOC Analyst Intern",
    org: "Cyberthreya",
    points: [
      "Investigated security signals across a live monitored estate.",
      "Authored runbooks for repeat triage scenarios.",
    ],
  },
  {
    when: "May — Jul 2025",
    role: "Full-Stack Developer Intern",
    org: "RoboCoupler Pvt. Ltd.",
    points: [
      "Shipped real-time CV systems and a face-recognition module.",
      "Built a multilingual TTS translator for Indian languages.",
    ],
  },
  {
    when: "Ongoing",
    role: "Design Head & Outreach Coordinator",
    org: "GeeksforGeeks SC",
    points: [
      "Owns design system and branding for chapter campaigns.",
      "Coordinates outreach lifting event participation.",
    ],
  },
];

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeader
        eyebrow="Trajectory"
        title={<>An <span className="text-gradient">operating history</span> across research, product and community.</>}
      />

      <div className="relative">
        <div className="absolute left-[7px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent" />

        <div className="space-y-10">
          {timeline.map((t, i) => (
            <motion.div
              key={t.role}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55 }}
              className={`relative md:grid md:grid-cols-2 md:gap-12 ${i % 2 === 0 ? "" : "md:[direction:rtl]"}`}
            >
              <div className={`pl-8 md:pl-0 md:[direction:ltr] ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-1.5 size-3.5 rounded-full bg-background border-2 border-electric shadow-glow" />
                <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-2">
                  {t.when}
                </div>
                <h3 className="font-display font-semibold text-lg md:text-xl">{t.role}</h3>
                <div className="text-sm text-cyan-glow mt-0.5">{t.org}</div>
                <ul className={`mt-3 space-y-1.5 text-sm text-muted-foreground ${i % 2 === 0 ? "md:ml-auto" : ""} max-w-md`}>
                  {t.points.map((p) => (
                    <li key={p} className="leading-relaxed">— {p}</li>
                  ))}
                </ul>
              </div>
              <div className="hidden md:block md:[direction:ltr]" />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
