import "./App.css";

import Navbar from "./components/Navbar";
import "./components/Navbar.css";

import Hero from "./components/Hero";
import "./components/Hero.css";

import About from "./components/About";
import "./components/About.css";

import Skills from "./components/Skills";
import "./components/Skills.css";

import Services from "./components/Services";
import "./components/Services.css";

import Contact from "./components/Contact";
import "./components/Contact.css";

import Footer from "./components/Footer";
import "./components/Footer.css";
import Projects from "./components/Projects"
import "./components/Projects.css";

function App() {
  return (
    <>
      <Navbar />

      <main>

        <Hero />

        <About />

        <Skills />

        <Projects />

        <Services />

        <Contact />

      </main>

      <Footer />
    </>
  );
}

export default App;