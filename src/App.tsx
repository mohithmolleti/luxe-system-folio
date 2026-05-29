import { Nav } from "./components/portfolio/Nav";
import { Hero } from "./components/portfolio/Hero";
import { About } from "./components/portfolio/About";
import { Skills } from "./components/portfolio/Skills";
import { Projects } from "./components/portfolio/Projects";
import { Experience } from "./components/portfolio/Experience";
import { Research } from "./components/portfolio/Research";
import { Achievements } from "./components/portfolio/Achievements";
import { Contact } from "./components/portfolio/Contact";

export function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Research />
        <Achievements />
        <Contact />
      </main>
    </>
  );
}
