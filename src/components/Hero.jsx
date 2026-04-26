// src/components/Hero.jsx
// ── Edit personal info in src/data/portfolioData.js ──

import { personal, stats } from "../data/portfolioData";

export default function Hero() {
  const [firstName, ...rest] = personal.name.split(" ");
  const lastName = rest.join(" ");

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24 pb-16 px-6 md:px-12"
    >
      {/* Animated grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Orange glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Ghost bg text */}
      <span className="absolute right-[-1rem] top-1/2 -translate-y-1/2 font-['Syne'] font-black text-[22vw] text-white/[0.015] leading-none select-none pointer-events-none whitespace-nowrap">
        DEV
      </span>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Eyebrow */}
        <p className="font-mono text-orange-500 text-xs uppercase tracking-[0.25em] mb-6 animate-[fadeUp_0.8s_ease_0.2s_both]">
          // {personal.title} · {personal.subtitle}
        </p>

        {/* Name */}
        <h1 className="font-['Syne'] font-black leading-[0.88] tracking-tight mb-8 animate-[fadeUp_0.8s_ease_0.4s_both]">
          <span className="block text-white" style={{ fontSize: "clamp(4rem,10vw,9rem)" }}>
            {firstName}
          </span>
          <span
            className="block"
            style={{
              fontSize: "clamp(4rem,10vw,9rem)",
              WebkitTextStroke: "2px white",
              color: "transparent",
            }}
          >
            {lastName}
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-zinc-400 text-lg leading-relaxed max-w-xl mb-10 animate-[fadeUp_0.8s_ease_0.6s_both]">
          {personal.tagline}
          <br />
          <span className="text-zinc-500 text-sm font-mono mt-1 block">{personal.education}</span>
          <span className="text-zinc-500 text-sm font-mono mt-1 block">{personal.availability}</span>
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-4 mb-16 animate-[fadeUp_0.8s_ease_0.8s_both]">
          <a
            href="#projects"
            className="bg-orange-500 hover:bg-orange-400 text-white font-['Syne'] font-bold px-7 py-3 rounded-sm text-sm transition-all duration-200 hover:-translate-y-1 inline-flex items-center gap-2"
          >
            View Projects →
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="border border-white/10 text-white hover:border-orange-500 font-mono px-7 py-3 rounded-sm text-xs uppercase tracking-widest transition-all duration-200 hover:-translate-y-1"
          >
            Get In Touch
          </a>
          {personal.resume && (
            <a
              href={personal.resume}
              target="_blank"
              rel="noreferrer"
              className="border border-white/10 text-zinc-400 hover:text-white hover:border-white/30 font-mono px-7 py-3 rounded-sm text-xs uppercase tracking-widest transition-all duration-200 hover:-translate-y-1"
            >
              View Resume ↗
            </a>
          )}
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-10 animate-[fadeUp_0.8s_ease_1s_both]">
          {stats.map((s, i) => (
            <div key={i}>
              <div className="font-['Syne'] font-black text-4xl text-orange-500 leading-none">
                {s.num}
              </div>
              <div className="font-mono text-xs text-zinc-500 uppercase tracking-widest mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-[fadeUp_0.8s_ease_1.2s_both]">
        <span className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest">Scroll</span>
        <div className="w-0.5 h-12 bg-gradient-to-b from-orange-500 to-transparent" />
      </div>
    </section>
  );
}
