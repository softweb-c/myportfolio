"use client";

import { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="glass-panel rounded-2xl overflow-hidden transition-colors duration-300 hover:border-white/10">
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 text-left flex items-center justify-between font-semibold text-base group"
      >
        <span className={`transition-colors duration-300 ${isOpen ? "text-white" : "text-white group-hover:text-white"}`}>
          {question}
        </span>
        <span 
          className={`transition-transform duration-300 text-[#D4FF24] group-hover:text-[#D4FF24] ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </span>
      </button>
      
      {/* 
        Using CSS Grid for the animation instead of max-height. 
        This ensures it never cuts off text and animates perfectly smoothly.
      */}
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-6 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4 mt-1 mx-6">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
}

export function FAQSection() {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const faqs = [
    {
      question: "What types of projects do you take on?",
      answer: "I specialize in custom web applications, mobile apps, fintech platforms, cooperative management systems, government portals, and SaaS MVPs. I accept up to 2 client projects per month to ensure dedicated focus."
    },
    {
      question: "How does our initial consultation work?",
      answer: "We schedule a free 30-minute discovery call to discuss your project scope, technical challenges, and deliverables. There is no obligation to proceed."
    },
    {
      question: "How long does a typical project take?",
      answer: "Timelines vary based on complexity. A production-ready MVP usually takes 4-8 weeks, while enterprise systems or complex mobile apps can take 3-6 months. We will establish a clear roadmap with milestones before any code is written."
    },
    {
      question: "How do you handle pricing and payments?",
      answer: "I work on a fixed-scope, milestone-based pricing model. We agree on the total cost upfront, and payments are broken into phases (e.g., deposit, mid-point, launch). This protects both parties and ensures transparency."
    },
    {
      question: "Do you work with existing codebases or only new builds?",
      answer: "I do both. I can audit, refactor, and scale an existing application, or build a completely new system from scratch. If you have an existing codebase, I'll review it during our discovery phase to ensure it's viable for your goals."
    },
    {
      question: "How do we communicate during the project?",
      answer: "You will have direct access to me via a dedicated Slack or WhatsApp channel. I provide weekly progress updates, staging links to test features as they are built, and scheduled check-in calls to ensure alignment."
    },
    {
      question: "Do you offer post-launch support and maintenance?",
      answer: "Yes. I offer ongoing retainer agreements for maintenance, security updates, and new feature rollouts. Alternatively, I provide comprehensive documentation and handover so your internal team can take over seamlessly."
    }
  ];

  return (
    <section id="faq" className="py-28 px-4 max-w-4xl mx-auto border-t border-white/5">
      <div className="text-center mb-16">
        <span className="text-xs uppercase tracking-widest text-[#1E90FF] font-mono mb-3 block">
          FAQ
        </span>
        <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
          Frequently asked questions.
        </h2>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openItem === index}
            onToggle={() => setOpenItem(openItem === index ? null : index)}
          />
        ))}
      </div>
    </section>
  );
}