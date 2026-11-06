"use client";

import { ReactNode } from "react";

interface Capability {
  icon: ReactNode;
  title: string;
  description: string;
}

export function CapabilitiesSection() {
  const capabilities: Capability[] = [
    {
      icon: (
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
      title: "Full-Stack Engineering",
      description: "Building responsive, accessible web interfaces and bulletproof backend services using modern TypeScript, React, Next.js, Node.js, and Python."
    },
    {
      icon: (
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M3 5V19A9 3 0 0 0 21 19V5" />
          <path d="M3 12A9 3 0 0 0 21 12" />
        </svg>
      ),
      title: "Financial & Data Systems",
      description: "Designing complex reconciliation engines, asset registers, accounting software, and secure ledgers that guarantee data integrity and auditability."
    },
    {
      icon: (
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
          <path d="M12 18h.01" />
        </svg>
      ),
      title: "Mobile & Product Builder",
      description: "Taking ideas from concept to production-ready MVP. Experienced in cross-platform mobile apps (React Native) and translating user needs into clean software."
    }
  ];

  return (
    <section id="capabilities" className="py-28 px-4 bg-dark-800/30 border-y border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-[#1E90FF] font-mono mb-3 block">
            Technical Depth
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
            Built for performance, reliability, and scale.
          </h2>
          <p className="text-gray-400 text-sm mt-3">
            Combining rigorous software engineering with a product-first mindset.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {capabilities.map((cap, index) => (
            <div 
              key={index} 
              className="glass-panel p-8 rounded-2xl group transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.03] hover:border-white/10"
            >
              {/* Icon Container - Now styled with the lime accent */}
              <div className="w-12 h-12 rounded-xl bg-lime/10 border border-lime/20 flex items-center justify-center text-lime mb-6 shadow-[0_0_15px_-3px_rgba(212,255,36,0.15)] group-hover:shadow-[0_0_20px_-3px_rgba(212,255,36,0.3)] transition-all duration-300">
                {cap.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-lime transition-colors">
                {cap.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {cap.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}