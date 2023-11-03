import "./App.scss";
import Hero from "./assets/components/Hero/Hero";
import Navbar from "./assets/components/Navbar/Navbar";

function App() {
  return (
    <div>
      <section>
        <Navbar />
        <Hero />
      </section>
      <section>Second</section>
      <section>Third</section>
    </div>
  );
}

export default App;
