import { motion } from "framer-motion";
import { Section, SectionHeader } from "./Section";

export function About() {
  return (
    <Section id="about">
      <SectionHeader
        eyebrow="About"
        title={<>Engineering the layer<br />between <span className="text-gradient">intelligence and infrastructure.</span></>}
      />

      <div className="grid md:grid-cols-5 gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-3 space-y-5 text-muted-foreground text-base md:text-lg leading-relaxed"
        >
          <p>
            I'm an AI &amp; ML engineering student at{" "}
            <span className="text-foreground">ANITS</span>, building intelligent systems that
            actually ship — from multilingual voice assistants to ML pipelines serving real-time
            predictions. My work sits at the intersection of model performance, runtime efficiency
            and the human interface.
          </p>
          <p>
            I care about the things most people abstract away: cache lines, scheduler decisions,
            IR-level optimizations, and the cost of every token. The goal isn't novelty for its
            own sake — it's systems that are{" "}
            <span className="text-foreground">measurably better</span>, end to end.
          </p>
          <p>
            Off the keyboard I lead developer communities as a Google Student Ambassador and
            Perplexity Campus Partner, and design for clarity at GeeksforGeeks SC.
          </p>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="md:col-span-2 glass rounded-2xl p-6 space-y-4"
        >
          {[
            ["Based in", "Vizianagaram, India"],
            ["Currently", "B.Tech CSE · AI & ML"],
            ["Focus", "AI Systems · Runtimes"],
            ["Languages", "English · Telugu · Hindi"],
          ].map(([k, v]) => (
            <div key={k} className="flex items-baseline justify-between gap-4 border-b border-border/60 pb-3 last:border-0 last:pb-0">
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{k}</span>
              <span className="text-sm font-medium text-right">{v}</span>
            </div>
          ))}
        </motion.aside>
      </div>
    </Section>
  );
}
