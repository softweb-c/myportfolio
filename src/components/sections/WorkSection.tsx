"use client";

import Image from "next/image";
import { ReactNode } from "react";

/* ------------------------------------------------------------------ */
/*  MACBOOK MOCKUP COMPONENT                                           */
/* ------------------------------------------------------------------ */
interface LaptopMockupProps {
  imageSrc: string;
  url: string;
  alt: string;
}

function LaptopMockup({ imageSrc, url, alt }: LaptopMockupProps) {
  return (
    <div className="relative group max-w-3xl mx-auto w-full transition-transform duration-500 hover:-translate-y-2">
      {/* Laptop Screen / Body */}
      <div className="relative bg-[#1c1c1e] rounded-t-xl md:rounded-t-2xl p-[2px] md:p-3 pb-0 shadow-2xl border-t border-x border-white/10 z-10">
        
        {/* Camera Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 md:w-32 h-4 md:h-5 bg-[#1c1c1e] rounded-b-lg z-20 flex items-center justify-center gap-2">
          {/* Camera dot */}
          <div className="w-1.5 h-1.5 rounded-full bg-[#111] border border-white/10 flex items-center justify-center">
            <div className="w-0.5 h-0.5 rounded-full bg-emerald-500/80"></div>
          </div>
        </div>

        {/* Screen / Browser Area */}
        <div className="relative bg-[#28282b] rounded-md md:rounded-lg overflow-hidden aspect-[16/10] border border-black/50">
          
          {/* Browser Chrome (Safari style) */}
          <div className="h-7 md:h-9 bg-[#2c2c2e] flex items-center px-2 md:px-4 gap-2 md:gap-4 border-b border-black/40">
            {/* Window Controls */}
            <div className="flex items-center gap-1.5 md:gap-2">
              <div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-[#FF5F56]"></div>
              <div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-[#FFBD2E]"></div>
              <div className="w-2 md:w-2.5 h-2 md:h-2.5 rounded-full bg-[#27C93F]"></div>
            </div>

            {/* URL Bar */}
            <div className="flex-1 max-w-sm mx-auto h-4 md:h-6 bg-[#1c1c1e] rounded md:rounded-md flex items-center justify-center gap-1.5 text-[9px] md:text-[11px] text-gray-400 font-sans shadow-inner border border-white/5">
              <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
              {url}
            </div>

            {/* Safari Icons Placeholder */}
            <div className="flex items-center gap-2 text-gray-500">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line></svg>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line></svg>
            </div>
          </div>

          {/* The Website Screenshot */}
          <div className="relative w-full h-[calc(100%-1.75rem)] md:h-[calc(100%-2.25rem)] bg-white">
            <Image
              src={imageSrc}
              alt={alt}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
        </div>
      </div>

      {/* Laptop Base / Bottom Lip */}
      <div className="relative h-3 md:h-5 bg-gradient-to-b from-[#2a2a2c] to-[#121213] rounded-b-xl md:rounded-b-2xl w-[102%] -ml-[1%] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.7)] flex justify-center z-0">
        {/* Opening Notch */}
        <div className="w-12 md:w-20 h-0.5 md:h-1 bg-[#111] rounded-b-md mt-auto mb-0"></div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  WORK SECTION                                                       */
/* ------------------------------------------------------------------ */
export function WorkSection() {
  const projects = [
    {
      title: "Ministry of Physical Planning & Urban Development",
      category: "Government Portal",
      description: "Engineered a robust digital portal for Ogun State streamlining land planning approvals, zoning requests, and regulatory compliance workflows.",
      tech: ["React", "Node.js", "PostgreSQL"],
      status: "Production Live",
      domain: "mppud.ogunstate.gov.ng",
      imageSrc: "/projects/mppud.webp",
      link: "https://mppud.ogunstate.gov.ng"
    },
    {
      title: "OLARMS Land & Revenue Management",
      category: "Revenue & Land System",
      description: "Developed the Ogun State Land and Revenue Management System, modernizing property registration, automated billing, and secure state revenue reconciliation.",
      tech: ["Python / Django", "Financial Ledger", "Automated Reconciliation"],
      status: "Enterprise Scale",
      domain: "olarms.ogunstate.gov.ng",
      imageSrc: "/projects/olarms.webp",
      link: "https://olarms.ogunstate.gov.ng"
    },
    {
      title: "SmartGate Africa",
      category: "PropTech / Multi-Tenant",
      description: "A multi-tenant mobile and web application empowering residents to securely manage entry requests, schedule verified artisans, and monitor visitor access.",
      tech: ["React Native", "WebSockets", "Access Control"],
      status: "iOS & Android",
      domain: "smartgate.africa",
      imageSrc: "/projects/smartgate.webp",
      link: "https://smartgate.africa"
    },
    {
      title: "Promix Accounting",
      category: "Cloud Accounting / Financial Management",
      description: "A smart cloud accounting and financial management software built for SMEs, non-profits, and medium-sized businesses in Nigeria—streamlining bookkeeping, reporting, budgeting, and cash visibility.",
      tech: ["Cloud Accounting", "Financial Reporting", "SME Finance"],
      status: "Built for SMEs",
      domain: "promixaccounting.com",
      imageSrc: "/projects/promix.webp",
      link: "https://promixaccounting.com/"
    }
  ];

  return (
    <section id="work" className="py-24 px-4 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
        <div>
          <span className="text-xs uppercase tracking-widest text-[#1E90FF] font-mono mb-3 block">
            Selected Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
            Products engineered for scale and impact.
          </h2>
        </div>
        <p className="text-blue-grey max-w-md mt-4 md:mt-0 text-sm">
          A showcase of government portals, cloud accounting platforms, and community proptech applications built with precision.
        </p>
      </div>

      {/* Grid Layout for Laptops */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-24">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col">
            
            {/* The MacBook */}
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="block w-full mb-8">
              <LaptopMockup 
                imageSrc={project.imageSrc} 
                url={project.domain} 
                alt={project.title} 
              />
            </a>

            {/* Project Details Below Laptop */}
            <div className="px-2">
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono tracking-wider text-gray-300 uppercase">
                  {project.category}
                </span>
                <span className="text-[11px] text-gray-500 font-mono flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  {project.status}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              
              <p className="text-gray-400 text-sm mb-5 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap items-center justify-between gap-4">
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs font-mono text-gray-500">
                      {t}{i !== project.tech.length - 1 ? " /" : ""}
                    </span>
                  ))}
                </div>

                {/* View Live Link */}
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-1.5 text-xs font-medium text-white hover:text-lime transition-colors"
                  >
                    View live
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17l9-9M7 7h9v9" />
                    </svg>
                  </a>
                )}
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}