import Skills from "./components/About/About";
import BgParticles from "./components/BgParticles/BgParticles";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";

export default function Home() {
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
      <Footer />
    </div>
  );
}
