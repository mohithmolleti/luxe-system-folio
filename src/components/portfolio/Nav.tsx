import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#research", label: "Research" },
  { href: "#contact", label: "Contact" },
];

const ROLES = ["Designer", "AI/ML Enthusiast", "Entrepreneur"];

function useTypingRoles(words: string[], typeSpeed = 90, deleteSpeed = 45, hold = 1400) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[i % words.length];
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), hold);
    } else if (deleting && text === "") {
      setDeleting(false);
      setI((p) => (p + 1) % words.length);
    } else {
      timeout = setTimeout(
        () => {
          setText(
            deleting
              ? current.slice(0, text.length - 1)
              : current.slice(0, text.length + 1),
          );
        },
        deleting ? deleteSpeed : typeSpeed,
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, i, words, typeSpeed, deleteSpeed, hold]);

  return text;
}

export function Nav() {
  const role = useTypingRoles(ROLES);

  return (
    <>
      {/* Top fade mask to hide content scrolling under the nav */}
      <div
        aria-hidden
        className="fixed top-0 left-0 right-0 h-24 z-40 pointer-events-none backdrop-blur-md"
        style={{
          background:
            "linear-gradient(to bottom, var(--background) 0%, color-mix(in oklab, var(--background) 85%, transparent) 55%, transparent 100%)",
          maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
        }}
      />

      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[min(960px,calc(100%-2rem))]"
      >
        <nav className="glass-strong rounded-full px-5 py-2.5 flex items-center justify-between">
          <a href="#top" className="font-display font-bold text-sm tracking-tight flex items-center">
            <span className="text-gradient-hero">MMK</span>
            <span className="text-muted-foreground font-mono text-xs ml-2 hidden sm:inline-flex items-center min-w-[140px]">
              / <span className="ml-1 text-foreground/80">{role}</span>
              <span className="ml-0.5 inline-block w-[1px] h-3 bg-foreground/70 animate-pulse" />
            </span>
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
    </>
  );
}
