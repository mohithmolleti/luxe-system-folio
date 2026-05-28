import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { Section, SectionHeader } from "./Section";

const projects = [
  {
    name: "AI-Based Real Estate Valuation System",
    tag: "Infosys Springboard · 2025",
    blurb:
      "Real-time property pricing engine combining Decision Trees, Random Forest and XGBoost with ARIMA forecasting and a Gemini-powered conversational layer.",
    stack: ["Python", "XGBoost", "ARIMA", "Streamlit", "Gemini API"],
    metrics: [["Models", "Ensemble × 3"], ["Forecast", "ARIMA"], ["UI", "Streamlit"]],
    repo: "https://github.com/mohithmolleti/AI-Based-Real-Estate-Valuation-System_August_2025",
    accent: "from-electric/40 via-cyan-glow/20 to-transparent",
  },
  {
    name: "RIA — Real-Time Intelligent Assistant",
    tag: "Voice · NLP · ASR · TTS",
    blurb:
      "Multilingual voice assistant supporting 6 languages with custom wake-word detection, low-latency streaming ASR and modular synthesis pipelines.",
    stack: ["Whisper", "spaCy", "TTS", "Wake-word", "Python"],
    metrics: [["Languages", "6"], ["Latency", "Streaming"], ["Modes", "Hands-free"]],
    repo: "https://github.com/mohithmolleti",
    accent: "from-plasma/40 via-electric/20 to-transparent",
  },
  {
    name: "RoboCoupler · AI/ML Systems",
    tag: "Computer Vision · Production",
    blurb:
      "Real-time object detection, multi-frame face recognition with improved accuracy, and an Indian-language TTS translator deployed for industrial use.",
    stack: ["CV", "Face ID", "TTS", "Edge"],
    metrics: [["Throughput", "Real-time"], ["Accuracy", "Multi-frame"], ["Scope", "Production"]],
    repo: "https://github.com/mohithmolleti",
    accent: "from-cyan-glow/40 via-plasma/20 to-transparent",
  },
  {
    name: "VetCare",
    tag: "Full-stack · TypeScript",
    blurb:
      "Practice-management surface for veterinary clinics — scheduling, patient records and a typed API layer with end-to-end type safety.",
    stack: ["TypeScript", "React", "Node"],
    metrics: [["Type-safe", "End-to-end"], ["Surface", "Clinic ops"]],
    repo: "https://github.com/mohithmolleti/VetCare",
    accent: "from-electric/30 via-plasma/20 to-transparent",
  },
  {
    name: "Student Feedback System",
    tag: "Systems · Backend",
    blurb:
      "Structured feedback pipeline with normalization, aggregation and a dashboard surface for institutional decision-making.",
    stack: ["Python", "SQL", "Dashboards"],
    metrics: [["Pipeline", "ETL"], ["Surface", "Dashboard"]],
    repo: "https://github.com/mohithmolleti/student-feedback-system",
    accent: "from-plasma/30 via-cyan-glow/20 to-transparent",
  },
  {
    name: "Cloud Project",
    tag: "Infra · Web",
    blurb:
      "Lightweight cloud-deployed web surface exploring static delivery, caching strategy and edge response patterns.",
    stack: ["HTML", "Cloud", "Edge"],
    metrics: [["Delivery", "Static + Edge"]],
    repo: "https://github.com/mohithmolleti/cloud-project",
    accent: "from-cyan-glow/30 via-electric/20 to-transparent",
  },
];

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeader
        eyebrow="Selected work"
        title={<>Projects built for <span className="text-gradient">real systems, real users.</span></>}
        description="A subset of recent work spanning ML pipelines, voice systems, computer vision and full-stack platforms."
      />

      <div className="grid md:grid-cols-2 gap-5">
        {projects.map((p, i) => (
          <motion.a
            key={p.name}
            href={p.repo}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
            className="group relative overflow-hidden rounded-3xl glass glow-border p-7 hover-lift block"
          >
            <div
              className={`absolute -top-24 -right-24 size-64 rounded-full bg-gradient-to-br ${p.accent} blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-700`}
            />
            <div className="relative flex items-start justify-between gap-4 mb-4">
              <div>
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground mb-2">
                  {p.tag}
                </div>
                <h3 className="font-display font-semibold text-xl md:text-2xl leading-tight">
                  {p.name}
                </h3>
              </div>
              <div className="size-10 shrink-0 rounded-full glass-strong flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors">
                <ArrowUpRight className="size-4" />
              </div>
            </div>

            <p className="relative text-sm md:text-[15px] text-muted-foreground leading-relaxed mb-5">
              {p.blurb}
            </p>

            <div className="relative grid grid-cols-3 gap-3 mb-5">
              {p.metrics.map(([k, v]) => (
                <div key={k} className="rounded-xl bg-background/40 border border-border/60 p-3">
                  <div className="text-[10px] font-mono uppercase text-muted-foreground tracking-wider">{k}</div>
                  <div className="text-sm font-semibold mt-0.5">{v}</div>
                </div>
              ))}
            </div>

            <div className="relative flex flex-wrap gap-1.5">
              {p.stack.map((s) => (
                <span key={s} className="font-mono text-[10px] px-2 py-0.5 rounded-md bg-secondary/60 text-muted-foreground border border-border/60">
                  {s}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-10 text-center"
      >
        <a
          href="https://github.com/mohithmolleti"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-foreground transition-colors"
        >
          <Github className="size-4" />
          explore the full repository graph
          <ArrowUpRight className="size-3.5" />
        </a>
      </motion.div>
    </Section>
  );
}
