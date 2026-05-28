import { motion } from "framer-motion";
import { Section, SectionHeader } from "./Section";
import { Atom, Network, Terminal } from "lucide-react";

const interests = [
  {
    icon: Atom,
    title: "AI / ML Systems",
    body: "Inference efficiency, model serving topology, quantization pipelines, on-device intelligence and the cost-curve of large model deployment.",
    tags: ["Inference", "Quantization", "Serving", "RAG"],
  },
  {
    icon: Network,
    title: "Distributed Systems",
    body: "Consensus, replication and the failure semantics of large stateful workloads. Especially: scheduling decisions for ML workloads at scale.",
    tags: ["Consensus", "Scheduling", "State", "Observability"],
  },
  {
    icon: Terminal,
    title: "Compilers & Runtimes",
    body: "IR-level optimizations, JIT compilation strategies, memory models, and runtime co-design with hardware accelerators.",
    tags: ["LLVM", "JIT", "Memory", "Codegen"],
  },
];

export function Research() {
  return (
    <Section id="research">
      <SectionHeader
        eyebrow="Research interests"
        title={<>Where I'm <span className="text-gradient">spending the next decade.</span></>}
        description="Three open problems I find most worth chasing — and where my next body of work is forming."
      />

      <div className="grid md:grid-cols-3 gap-5">
        {interests.map((r, i) => (
          <motion.article
            key={r.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: i * 0.08 }}
            className="relative overflow-hidden rounded-3xl glass p-7 hover-lift glow-border"
          >
            <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_top_right,white,transparent_60%)]" />
            <r.icon className="size-7 text-cyan-glow mb-5" />
            <h3 className="font-display font-semibold text-xl mb-3">{r.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">{r.body}</p>
            <div className="flex flex-wrap gap-1.5">
              {r.tags.map((t) => (
                <span key={t} className="font-mono text-[10px] px-2 py-0.5 rounded-md bg-secondary/60 text-muted-foreground border border-border/60">
                  {t}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
