import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Leadership from "./components/Leadership";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ParticleField from "./components/ParticleField";

function App() {
  return (
    <>
      <ParticleField />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Leadership />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
