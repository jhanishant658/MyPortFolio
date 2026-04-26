// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        syne: ["Syne", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
        sans: ["Instrument Sans", "sans-serif"],
      },
      colors: {
        orange: {
          400: "#fb923c",
          500: "#f97316",
        },
      },
      animation: {
        fadeUp: "fadeUp 0.8s ease both",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
