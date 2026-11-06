"use client";

import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";

export function CTASection() {
  return (
    <section className="py-28 px-4 bg-gradient-to-b from-midnight to-dark-800 text-center relative overflow-hidden">
      <div className="max-w-3xl mx-auto relative z-10">
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E90FF]/10 border border-[#1E90FF]/30 text-xs font-medium text-[#1E90FF] mb-6">
          <span className="text-[#D4FF24] text-base leading-none">●</span>
          Taking on 2 client projects this month
        </span>
        <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white mb-6">
          Let's build something useful together.
        </h2>
        <p className="text-gray-400 text-base mb-10 max-w-xl mx-auto">
          Whether you have an exciting project, a technical co-founder role, or a complex software system to engineer — my inbox is open.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="mailto:contact@josephdev.com?subject=Project%20Inquiry" 
            className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-[#D4FF24] text-black px-8 py-4 text-base font-semibold hover:bg-[#C8FF19] active:scale-[0.98] transition-all duration-300 shadow-xl shadow-[#D4FF24]/20"
          >
            <span>Book a discovery call</span>
            <ArrowRight className="ml-2 text-lg" />
          </a>
        </div>
      </div>
    </section>
  );
}