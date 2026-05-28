import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { Github, Linkedin } from "./icons";
import portrait from "@/assets/mohith.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute inset-0 aurora-bg animate-aurora pointer-events-none opacity-80" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-electric/20 blur-[120px] animate-glow-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-plasma/20 blur-[120px] animate-glow-pulse" style={{ animationDelay: "1.5s" }} />

      <div className="relative mx-auto max-w-6xl px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 glass rounded-full px-3.5 py-1.5 mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-glow opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-glow" />
          </span>
          <span className="text-xs font-mono text-muted-foreground">
            Available for research collaborations
          </span>
        </motion.div>

        <div className="flex flex-col md:flex-row md:items-center md:gap-10 gap-8">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-bold tracking-[-0.04em] text-[clamp(2.75rem,8vw,6.5rem)] leading-[0.95] flex-1"
          >
            Mohith Kumar
            <br />
            <span className="text-gradient-hero">Molleti.</span>
          </motion.h1>

          {/* Profile portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="group relative shrink-0 self-start md:self-center"
          >
            {/* Animated conic ring */}
            <div className="absolute -inset-[6px] rounded-full opacity-90 blur-[2px] group-hover:opacity-100 transition-opacity"
              style={{
                background:
                  "conic-gradient(from 0deg, var(--electric), var(--plasma), var(--cyan-glow), var(--electric))",
                animation: "spin 8s linear infinite",
              }}
            />
            {/* Outer glow */}
            <div className="absolute -inset-8 rounded-full bg-electric/30 blur-3xl opacity-60 group-hover:opacity-90 transition-opacity" />

            <div className="relative size-44 md:size-56 rounded-full overflow-hidden ring-1 ring-white/15 bg-background">
              <img
                src={portrait}
                alt="Mohith Kumar Molleti"
                className="absolute inset-0 h-full w-full object-cover scale-110 group-hover:scale-125 transition-transform duration-[1200ms] ease-out"
              />
              {/* Soft top vignette for premium feel */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />

              {/* Hover MMK overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-[2px] bg-background/35">
                <span
                  className="font-display font-bold text-5xl md:text-6xl tracking-tight text-gradient-hero"
                  style={{
                    textShadow:
                      "0 0 24px color-mix(in oklab, var(--cyan-glow) 60%, transparent), 0 0 60px color-mix(in oklab, var(--electric) 40%, transparent)",
                  }}
                >
                  MMK
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed"
        >
          Research engineer building at the boundary of{" "}
          <span className="text-foreground font-medium">AI/ML systems</span>,{" "}
          <span className="text-foreground font-medium">distributed runtimes</span>, and{" "}
          <span className="text-foreground font-medium">compiler infrastructure</span>. I design
          intelligent systems that are fast at the metal and clear at the interface.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-3 text-sm font-semibold hover:opacity-90 transition-all shadow-glow"
          >
            View selected work
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full glass px-5 py-3 text-sm font-semibold hover:bg-accent/40 transition-colors"
          >
            Start a conversation
          </a>
          <div className="flex items-center gap-1 ml-2">
            {[
              { Icon: Github, href: "https://github.com/mohithmolleti", label: "GitHub" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/mohithkumar-molleti-682219329/", label: "LinkedIn" },
              { Icon: Mail, href: "mailto:mohithmolleti369@gmail.com", label: "Email" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="size-10 inline-flex items-center justify-center rounded-full text-muted-foreground hover:text-foreground hover:bg-accent/40 transition-colors"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px glass rounded-2xl overflow-hidden"
        >
          {[
            ["12+", "Production projects"],
            ["6", "Languages spoken by RIA"],
            ["$1.6K", "Earned · Perplexity Partner"],
            ["3", "Active research tracks"],
          ].map(([n, l]) => (
            <div key={l} className="p-5 md:p-6 bg-background/40">
              <div className="font-display text-2xl md:text-3xl font-semibold text-gradient">{n}</div>
              <div className="text-xs text-muted-foreground mt-1 font-mono uppercase tracking-wider">{l}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
