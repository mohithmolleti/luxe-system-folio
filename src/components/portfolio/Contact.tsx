import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Section } from "./Section";

export function Contact() {
  return (
    <Section id="contact" className="!pb-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden rounded-[2rem] glass-strong p-10 md:p-16 noise"
      >
        <div className="absolute -top-32 -left-32 size-96 rounded-full bg-electric/30 blur-[120px]" />
        <div className="absolute -bottom-32 -right-32 size-96 rounded-full bg-plasma/30 blur-[120px]" />
        <div className="absolute inset-0 grid-bg opacity-50" />

        <div className="relative">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground mb-5">
            ⟶ contact
          </div>
          <h2 className="font-display font-bold tracking-[-0.03em] text-4xl md:text-6xl leading-[1.02] max-w-3xl">
            Let's build something that <span className="text-gradient-hero">outlives the demo.</span>
          </h2>
          <p className="mt-5 text-muted-foreground text-base md:text-lg max-w-xl leading-relaxed">
            Research collaborations, systems work, internships, or just a sharp question — my
            inbox is open.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="mailto:mohithmolleti369@gmail.com"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3.5 text-sm font-semibold hover:opacity-90 transition-opacity shadow-glow"
            >
              <Mail className="size-4" />
              mohithmolleti369@gmail.com
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="https://github.com/mohithmolleti"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full glass px-5 py-3.5 text-sm font-semibold hover:bg-accent/40 transition-colors"
            >
              <Github className="size-4" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/mohithkumar-molleti-682219329/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full glass px-5 py-3.5 text-sm font-semibold hover:bg-accent/40 transition-colors"
            >
              <Linkedin className="size-4" /> LinkedIn
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-border/60 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-mono text-muted-foreground uppercase tracking-wider">
            <span className="inline-flex items-center gap-2"><MapPin className="size-3.5" /> Vizianagaram, IN</span>
            <span>+91 90142 47180</span>
            <span className="ml-auto">© {new Date().getFullYear()} Mohith Kumar Molleti</span>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
