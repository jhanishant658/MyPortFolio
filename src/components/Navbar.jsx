// src/components/Navbar.jsx
// ── Edit nav links array below if you add/remove sections ──

import { useState, useEffect } from "react";
import { personal } from "../data/portfolioData";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = navLinks.map((l) => l.href.slice(1));
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 220) setActive(id);
      });
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-zinc-950/90 backdrop-blur-lg border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="font-['Syne'] font-extrabold text-xl tracking-tight">
          NJ<span className="text-orange-500">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`font-mono text-xs uppercase tracking-widest transition-colors duration-200 ${
                  active === l.href.slice(1) ? "text-white" : "text-zinc-500 hover:text-white"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href={`mailto:${personal.email}`}
          className="hidden md:inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-['Syne'] font-bold text-sm px-5 py-2 rounded-sm transition-all duration-200 hover:-translate-y-0.5"
        >
          Hire Me →
        </a>

        {/* Mobile hamburger */}
        <button
          aria-label="Toggle navigation menu"
          className="md:hidden text-zinc-400 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className={`w-5 h-0.5 bg-current mb-1 transition-all ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
          <div className={`w-5 h-0.5 bg-current mb-1 transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <div className={`w-5 h-0.5 bg-current transition-all ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-zinc-950 border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="font-mono text-sm text-zinc-400 hover:text-white uppercase tracking-widest transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
