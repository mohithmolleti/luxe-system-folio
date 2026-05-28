import { motion } from "framer-motion";
import { Brain, Cpu, Code2, Layers, Sparkles, Wrench } from "lucide-react";
import { Section, SectionHeader } from "./Section";

const groups = [
  {
    icon: Brain,
    title: "AI / ML Systems",
    items: ["PyTorch", "Transformers", "HuggingFace", "spaCy", "Whisper", "OpenAI / Gemini", "Model Optimization", "RAG"],
  },
  {
    icon: Cpu,
    title: "Distributed Systems",
    items: ["Microservices", "Message Queues", "Caching", "Load Balancing", "Observability", "Consensus"],
  },
  {
    icon: Layers,
    title: "Compiler & Runtime",
    items: ["LLVM IR", "AST traversal", "JIT concepts", "Memory models", "Performance profiling", "Bytecode"],
  },
  {
    icon: Code2,
    title: "Languages",
    items: ["Python", "C", "TypeScript", "JavaScript", "Kotlin", "SQL"],
  },
  {
    icon: Wrench,
    title: "Tooling",
    items: ["Git", "Docker", "Streamlit", "FastAPI", "Node.js", "Linux"],
  },
  {
    icon: Sparkles,
    title: "Craft",
    items: ["Figma", "UI/UX systems", "Technical writing", "Research synthesis"],
  },
];

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeader
        eyebrow="Capabilities"
        title={<>A stack tuned for <span className="text-gradient">research-grade systems.</span></>}
        description="From IR-level optimizations to user-facing inference. The toolkit I reach for when shipping production AI."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {groups.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="glass glow-border rounded-2xl p-6 hover-lift group"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="size-10 rounded-xl bg-gradient-to-br from-electric/30 to-plasma/20 flex items-center justify-center border border-border">
                <g.icon className="size-5 text-cyan-glow" />
              </div>
              <h3 className="font-display font-semibold text-base">{g.title}</h3>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {g.items.map((it) => (
                <span
                  key={it}
                  className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-secondary/60 text-muted-foreground border border-border/60 group-hover:text-foreground transition-colors"
                >
                  {it}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
