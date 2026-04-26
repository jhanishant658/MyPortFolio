// src/App.jsx
// ── This file just assembles all sections ──
// ── To add/remove a section, import & add it here ──

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen font-['Instrument_Sans',sans-serif] antialiased">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}
