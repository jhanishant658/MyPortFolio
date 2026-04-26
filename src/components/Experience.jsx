// src/components/Experience.jsx
// ── Edit experiences array in src/data/portfolioData.js ──

import { experiences } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <p className="font-mono text-orange-500 text-xs uppercase tracking-[0.2em] mb-4">
          // 03. Experience
        </p>
        <h2
          className="font-['Syne'] font-black leading-[0.92] tracking-tight text-white mb-14"
          style={{ fontSize: "clamp(3rem,6vw,5rem)" }}
        >
          Where I've
          <br />
          <span className="text-orange-500">Shipped</span>
        </h2>

        <div className="flex flex-col">
          {experiences.map((exp, i) => (
            <div
              key={i}
              className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 md:gap-12 py-10 border-t border-white/5 group"
            >
              {/* Left: date + location */}
              <div className="pt-1">
                <div className="flex items-center gap-2 mb-1">
                  {exp.upcoming && (
                    <span className="font-mono text-[10px] bg-orange-500/15 text-orange-400 border border-orange-500/30 px-2 py-0.5 rounded-[2px] uppercase tracking-wider">
                      Upcoming
                    </span>
                  )}
                </div>
                <p className="font-mono text-xs text-zinc-500 leading-relaxed">{exp.period}</p>
                <p className="font-mono text-[11px] text-zinc-600 mt-1">{exp.location}</p>
              </div>

              {/* Right: content */}
              <div>
                <h3 className="font-['Syne'] font-bold text-xl text-white mb-1 group-hover:text-orange-100 transition-colors">
                  {exp.company}
                </h3>
                <p className="font-mono text-xs text-orange-500 tracking-wide mb-5">{exp.role}</p>
                <ul className="flex flex-col gap-3">
                  {exp.bullets.map((b, j) => (
                    <li
                      key={j}
                      className="flex gap-3 text-zinc-400 text-sm leading-relaxed"
                    >
                      <span className="text-orange-500 mt-0.5 shrink-0 text-xs">→</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
          {/* Bottom border */}
          <div className="border-t border-white/5" />
        </div>
      </div>
    </section>
  );
}
