// src/components/Contact.jsx
// ── Edit personal info in src/data/portfolioData.js ──

import { personal } from "../data/portfolioData";

const contactCards = [
  { icon: "@", label: "Email", value: personal.email, href: `mailto:${personal.email}` },
  { icon: "#", label: "Phone", value: personal.phone, href: `tel:${personal.phone.replace(/\s/g, "")}` },
  { icon: "⌥", label: "GitHub", value: personal.githubHandle, href: personal.github },
  { icon: "⊞", label: "LinkedIn", value: personal.linkedinHandle, href: personal.linkedin },
  { icon: "◈", label: "LeetCode", value: personal.leetcodeHandle, href: personal.leetcode },
];

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 md:px-12 bg-zinc-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left */}
          <div>
            <p className="font-mono text-orange-500 text-xs uppercase tracking-[0.2em] mb-4">
              // 06. Contact
            </p>
            <h2
              className="font-['Syne'] font-black leading-[0.92] tracking-tight text-white mb-8"
              style={{ fontSize: "clamp(3rem,6vw,5.5rem)" }}
            >
              Let's
              <br />
              <span
                style={{ WebkitTextStroke: "2px white", color: "transparent" }}
              >
                Build
              </span>
              <br />
              Together.
            </h2>
            <p className="text-zinc-400 text-base leading-relaxed max-w-md">
              Open to internship opportunities, freelance projects, and interesting
              collaborations. Don't hesitate to reach out — let's talk!
            </p>

            <a
              href={`mailto:${personal.email}`}
              className="mt-8 inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-400 text-white font-['Syne'] font-bold px-8 py-3.5 rounded-sm transition-all duration-200 hover:-translate-y-1 text-sm"
            >
              Send me an Email →
            </a>
          </div>

          {/* Right — contact cards */}
          <div className="flex flex-col gap-3">
            {contactCards.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : "_self"}
                rel="noreferrer"
                className="flex items-center gap-4 border border-white/8 bg-white/[0.01] px-5 py-4 rounded-[2px] text-white hover:border-orange-500 hover:bg-orange-500/5 hover:translate-x-1 transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-[2px] bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500 font-bold text-sm shrink-0">
                  {c.icon}
                </div>
                <div className="min-w-0">
                  <p className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-0.5">
                    {c.label}
                  </p>
                  <p className="text-sm text-white font-medium truncate">{c.value}</p>
                </div>
                <span className="ml-auto text-zinc-600 group-hover:text-orange-500 transition-colors shrink-0">
                  →
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
