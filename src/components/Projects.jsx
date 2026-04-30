// src/components/Projects.jsx
// ── Edit projects array in src/data/portfolioData.js ──

import { projects } from "../data/portfolioData";

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28 px-4 sm:px-6 md:px-10 lg:px-12 bg-zinc-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <p className="font-mono text-orange-500 text-xs uppercase tracking-[0.2em] mb-4">
          // 04. Projects
        </p>
        <h2
          className="font-['Syne'] font-black leading-[0.92] tracking-tight text-white mb-14"
          style={{ fontSize: "clamp(3rem,6vw,5rem)" }}
        >
          Things I've
          <br />
          <span className="text-orange-500">Built</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
          {projects.map((p) => (
            <div
              key={p.num}
              className="relative bg-zinc-950 p-8 flex flex-col overflow-hidden group hover:bg-zinc-900/60 transition-colors duration-300"
            >
              {/* Ghost number */}
              <span className="absolute -top-2 right-3 font-['Syne'] font-black text-8xl text-white/[0.025] leading-none select-none pointer-events-none">
                {p.num}
              </span>

              {/* Stack tags */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="font-mono text-[10px] px-2 py-1 bg-orange-500/10 border border-orange-500/20 text-orange-400 rounded-[2px]"
                  >
                    {s}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3 className="font-['Syne'] font-bold text-xl text-white mb-3 leading-snug group-hover:text-orange-100 transition-colors">
                {p.title}
              </h3>

              {/* Description */}
              <p className="text-zinc-500 text-sm leading-relaxed flex-1 mb-8">
                {p.description}
              </p>

              {/* Links */}
              <div className="flex flex-wrap gap-4 mt-auto">
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-xs text-zinc-400 hover:text-orange-400 uppercase tracking-widest flex items-center gap-1.5 transition-colors"
                  >
                    Live Demo
                    <span className="inline-block transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                  </a>
                )}
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-xs text-zinc-400 hover:text-orange-400 uppercase tracking-widest flex items-center gap-1.5 transition-colors"
                >
                  GitHub
                  <span className="inline-block transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
