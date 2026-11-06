"use client";

import { useEffect, useState, useRef } from "react";

const BULLETS = [
  "No missed deadlines.",
  "No mystery bugs.",
  "No endless rework.",
];

export function TaglineReveal() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const text = "Because the wrong partner will cost you time, trust, and momentum. I’m the person you call when you need your project done properly.";
  const words = text.split(/\s+/);

  return (
    <section className="py-28 px-4 border-y border-white/5 bg-dark-800/40">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-xs uppercase tracking-widest text-[#1E90FF] font-mono mb-6 block">
          Why Work With Me?
        </span>
        <h2 
        ref={ref}
          className="text-3xl sm:text-5xl font-semibold leading-tight tracking-tight mb-10"
        >
          {words.map((word, index) => (
            <span
              key={index}
              className={`inline-block mr-[0.3em] transition-all duration-500 ${
                isVisible ? "text-white" : "text-gray-600"
              }`}
              style={{ transitionDelay: `${index * 60}ms` }}
            >
              {word}
            </span>
          ))}
        </h2>

        <ul className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          {BULLETS.map((point, i) => (
            <li
              key={i}
              className={`flex items-center gap-2 text-sm sm:text-base font-mono transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              }`}
              style={{ transitionDelay: `${words.length * 60 + i * 120}ms` }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-lime flex-shrink-0" />
              <span className="text-blue-grey">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}