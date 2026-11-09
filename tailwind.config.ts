import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: {
          DEFAULT: "#050609",
          elevated: "#0C0E16",
        },
        navy: {
          DEFAULT: "#121624",
          elevated: "#181C2E",
        },
        cobalt: {
          DEFAULT: "#245BFF",
          light: "#3878FF",
          muted: "rgba(36, 91, 255, 0.15)",
        },
        lime: {
          DEFAULT: "#C8FF19",
          light: "#DCFF50",
          muted: "rgba(200, 255, 25, 0.12)",
        },
        "blue-grey": {
          DEFAULT: "#64748B",
          muted: "rgba(100, 116, 139, 0.6)",
        },
        "soft-white": {
          DEFAULT: "#F8FAFC",
          muted: "rgba(248, 250, 252, 0.7)",
        },
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      transitionTimingFunction: {
        custom: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      boxShadow: {
        "cobalt-glow": "0 0 40px -10px rgba(36, 91, 255, 0.25), 0 0 80px -20px rgba(36, 91, 255, 0.1)",
        "lime-glow": "0 0 40px -10px rgba(200, 255, 25, 0.2), 0 0 80px -20px rgba(200, 255, 25, 0.08)",
        "inner-glow": "inset 0 0 40px -10px rgba(36, 91, 255, 0.1)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "mesh-gradient": "linear-gradient(135deg, rgba(36, 91, 255, 0.08) 0%, rgba(200, 255, 25, 0.05) 50%, rgba(36, 91, 255, 0.08) 100%)",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".text-cobalt": { color: "rgb(var(--cobalt))" },
        ".text-lime": { color: "rgb(var(--lime))" },
        ".text-blue-grey": { color: "rgb(var(--blue-grey))" },
        ".text-soft-white": { color: "rgb(var(--soft-white))" },
        ".bg-cobalt": { backgroundColor: "rgb(var(--cobalt))" },
        ".bg-lime": { backgroundColor: "rgb(var(--lime))" },
        ".bg-midnight": { backgroundColor: "rgb(var(--midnight))" },
        ".bg-midnight-elevated": { backgroundColor: "rgb(var(--midnight-elevated))" },
        ".bg-deep-navy": { backgroundColor: "rgb(var(--deep-navy))" },
      };

      addUtilities(newUtilities);
    }),
  ],
};

export default config;