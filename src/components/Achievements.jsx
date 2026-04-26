// src/components/Achievements.jsx
// ── Edit achievements array in src/data/portfolioData.js ──

import { achievements } from "../data/portfolioData";

export default function Achievements() {
  return (
    <section id="achievements" className="py-28 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <p className="font-mono text-orange-500 text-xs uppercase tracking-[0.2em] mb-4">
          // 05. Achievements
        </p>
        <h2
          className="font-['Syne'] font-black leading-[0.92] tracking-tight text-white mb-14"
          style={{ fontSize: "clamp(3rem,6vw,5rem)" }}
        >
          Wins &amp;
          <br />
          <span className="text-orange-500">Certs</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {achievements.map((a, i) => (
            <div
              key={i}
              className="border border-white/8 rounded-[2px] p-7 bg-white/[0.01] hover:border-orange-500/50 hover:-translate-y-1 transition-all duration-300 group"
            >
              <span className="block text-orange-500 text-2xl mb-5">{a.icon}</span>
              <h3 className="font-['Syne'] font-bold text-white text-base mb-2 group-hover:text-orange-100 transition-colors">
                {a.title}
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
