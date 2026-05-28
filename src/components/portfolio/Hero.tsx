import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

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

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-bold tracking-[-0.04em] text-[clamp(2.75rem,8vw,6.5rem)] leading-[0.95]"
        >
          Mohith Kumar
          <br />
          <span className="text-gradient-hero">Molleti.</span>
        </motion.h1>

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
