import "./App.scss";
import BgParticles from "./assets/components/BgParticles/BgParticles";
import Hero from "./assets/components/Hero/Hero";
import Navbar from "./assets/components/Navbar/Navbar";
import Skills from "./assets/components/About/About";
import Projects from "./assets/components/Projects/Projects";
import Contact from "./assets/components/Contact/Contact";

function App() {
  return (
    <div>
      <section>
        <BgParticles />
        <Navbar />
        <Hero />
      </section>
      <section>
        <Skills />
      </section>
      <section>
        <Projects />
      </section>
      <section>
        <Contact />
      </section>
    </div>
  );
}

export default App;
