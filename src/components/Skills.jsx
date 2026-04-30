// src/components/Skills.jsx
// ── Edit skills array in src/data/portfolioData.js ──

import { skills } from "../data/portfolioData";

export default function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28 px-4 sm:px-6 md:px-10 lg:px-12 bg-zinc-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <p className="font-mono text-orange-500 text-xs uppercase tracking-[0.2em] mb-4">
          // 02. Skills
        </p>
        <h2
          className="font-['Syne'] font-black leading-[0.92] tracking-tight text-white mb-14"
          style={{ fontSize: "clamp(3rem,6vw,5rem)" }}
        >
          Technical
          <br />
          <span className="text-orange-500">Arsenal</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
          {skills.map((cat) => (
            <div
              key={cat.category}
              className="bg-zinc-950 p-7 hover:bg-zinc-900/50 transition-colors duration-300 group"
            >
              <h3 className="font-mono text-[11px] text-orange-500 uppercase tracking-[0.18em] mb-5 group-hover:text-orange-400 transition-colors">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className={`font-mono text-[11px] px-2.5 py-1.5 rounded-[2px] border transition-all duration-200 ${
                      cat.featured.includes(item)
                        ? "border-orange-500/40 text-orange-300 bg-orange-500/8"
                        : "border-white/8 text-zinc-500 hover:border-white/20 hover:text-zinc-300"
                    }`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
