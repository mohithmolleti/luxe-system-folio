import { motion } from "framer-motion";
import { Section, SectionHeader } from "./Section";
import { Award, GraduationCap, Trophy, Users } from "lucide-react";

const items = [
  { icon: Trophy, title: "$1,628 earned", sub: "Perplexity Campus Partner program" },
  { icon: Users, title: "Google Student Ambassador", sub: "Selected cohort · 2025–26" },
  { icon: Award, title: "IBM Professional Certificate", sub: "Plus Graphic Design · RPA · Infosys Springboard" },
  { icon: GraduationCap, title: "SSC: 99% · Inter: 80.6%", sub: "B.Tech CSE (AI & ML) · ANITS · CGPA 7.33" },
];

export function Achievements() {
  return (
    <Section id="achievements">
      <SectionHeader
        eyebrow="Achievements"
        title={<>Recognized for <span className="text-gradient">building and leading.</span></>}
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((a, i) => (
          <motion.div
            key={a.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            className="glass rounded-2xl p-5 hover-lift"
          >
            <div className="size-10 rounded-xl bg-gradient-to-br from-electric/30 to-plasma/20 border border-border flex items-center justify-center mb-4">
              <a.icon className="size-5 text-cyan-glow" />
            </div>
            <div className="font-display font-semibold text-base leading-snug">{a.title}</div>
            <div className="text-xs text-muted-foreground mt-1.5 leading-relaxed">{a.sub}</div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
