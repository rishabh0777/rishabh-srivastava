import { useRef } from "react";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Skill from "./components/Skill";
import Work from "./components/Work";
import About from "./components/About";
import Footer from "./components/Footer";

const App = () => {
  const heroRef = useRef(null);
  const skillRef = useRef(null);
  const workRef = useRef(null);
  const aboutRef = useRef(null);

  const scrollToSection = (section) => {
    const refs = { hero: heroRef, skill: skillRef, work: workRef, about: aboutRef };
    refs[section]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="xsm:w-full xsm:min-h-[100svh] relative overflow-x-hidden">
      <Nav scrollToSection={scrollToSection} />
      <section ref={heroRef}>
        <Hero />
      </section>
      <section ref={skillRef}>
        <Skill />
      </section>
      <section ref={workRef}>
        <Work />
      </section>
      <section ref={aboutRef}>
        <About />
      </section>
      <Footer />
    </main>
  );
};

export default App;
