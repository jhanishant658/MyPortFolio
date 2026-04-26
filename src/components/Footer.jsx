// src/components/Footer.jsx

import { personal } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 md:px-12 py-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-mono text-xs text-zinc-600">
          © {new Date().getFullYear()} {personal.name} · Built with React & Tailwind
        </p>
        <p className="font-mono text-xs text-zinc-600">
          Full Stack Developer · Java & Spring Boot Specialist
        </p>
      </div>
    </footer>
  );
}
