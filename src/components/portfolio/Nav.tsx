import { motion } from "framer-motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#research", label: "Research" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[min(960px,calc(100%-2rem))]"
    >
      <nav className="glass-strong rounded-full px-5 py-2.5 flex items-center justify-between">
        <a href="#top" className="font-display font-bold text-sm tracking-tight">
          <span className="text-gradient-hero">MM</span>
          <span className="text-muted-foreground font-mono text-xs ml-2">/ research engineer</span>
        </a>
        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="px-3 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground rounded-full transition-colors hover:bg-accent/40"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="text-xs font-medium px-3.5 py-1.5 rounded-full bg-foreground text-background hover:opacity-90 transition-opacity"
        >
          Get in touch
        </a>
      </nav>
    </motion.header>
  );
}
