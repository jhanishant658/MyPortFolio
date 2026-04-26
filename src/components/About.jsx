// src/components/About.jsx
// ── Edit bio & links in src/data/portfolioData.js ──

import { personal } from "../data/portfolioData";

const links = [
  { icon: "⌥", label: personal.githubHandle, href: personal.github },
  { icon: "⊞", label: personal.linkedinHandle, href: personal.linkedin },
  { icon: "◈", label: personal.leetcodeHandle, href: personal.leetcode },
];

export default function About() {
  return (
    <section id="about" className="py-28 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left — heading */}
        <div>
          <p className="font-mono text-orange-500 text-xs uppercase tracking-[0.2em] mb-4">
            // 01. About
          </p>
          <h2
            className="font-['Syne'] font-black leading-[0.92] tracking-tight text-white"
            style={{ fontSize: "clamp(3rem,6vw,5rem)" }}
          >
            Building
            <br />
            the Future,
            <br />
            <span className="text-orange-500">One API</span>
            <br />
            at a Time.
          </h2>

          {/* Education card */}
          <div className="mt-8 border border-white/8 rounded-sm p-5 bg-white/[0.02]">
            <p className="font-mono text-[10px] text-orange-500 uppercase tracking-widest mb-1">
              Education
            </p>
            <p className="text-white font-semibold text-sm">{personal.education}</p>
            <p className="text-zinc-500 font-mono text-xs mt-1">{personal.degree}</p>
          </div>
        </div>

        {/* Right — bio + links */}
        <div>
          <div className="space-y-5 text-zinc-400 text-[0.95rem] leading-[1.9]">
            <p>{personal.bio1}</p>
            <p>{personal.bio2}</p>
            <p>{personal.bio3}</p>
          </div>

          <div className="mt-8 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 border border-white/8 px-4 py-3 rounded-sm font-mono text-sm text-zinc-400 hover:text-white hover:border-orange-500 hover:bg-orange-500/5 transition-all duration-200 group"
              >
                <span className="text-orange-500 text-base w-5 shrink-0">{l.icon}</span>
                <span>{l.label}</span>
                <span className="ml-auto text-zinc-700 group-hover:text-orange-500 transition-colors">↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
