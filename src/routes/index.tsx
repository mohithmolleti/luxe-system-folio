import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Research } from "@/components/portfolio/Research";
import { Achievements } from "@/components/portfolio/Achievements";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mohith Kumar Molleti — Research Engineer · AI/ML · Systems" },
      { name: "description", content: "Portfolio of Mohith Kumar Molleti — AI/ML systems, distributed systems, and compiler & runtime engineering." },
      { property: "og:title", content: "Mohith Kumar Molleti — Research Engineer" },
      { property: "og:description", content: "AI/ML Systems · Distributed Systems · Compiler & Runtime Engineering." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Research />
      <Achievements />
      <Contact />
    </main>
  );
}
