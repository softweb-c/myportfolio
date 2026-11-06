"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, List, X, GithubLogo, LinkedinLogo, XLogo } from "@phosphor-icons/react";
import { useState, useEffect, useRef, useMemo } from "react";
import type { RefObject } from "react";
import dynamic from "next/dynamic";
import { TaglineReveal } from "@/components/sections/TaglineReveal";
import { WorkSection } from "@/components/sections/WorkSection";
import { CapabilitiesSection } from "@/components/sections/CapabilitiesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import heroImage from "@/assets/hero.webp";


const FooterLottie = dynamic(() => import("@/components/sections/FooterLottie"), {
  ssr: false,
});

/* ------------------------------------------------------------------ */
/*  EDGE LIGHT — config                                                */
/* ------------------------------------------------------------------ */
const EDGE_LIME = "#D4FF24";
const EDGE_LAP_MS = 1000;
const EDGE_SPIN_MS = 4000;
const EDGE_CYCLE_MS = 24_000;
const EDGE_FIRST_DELAY_MS = 1_000;

const EDGE_CSS = `
@keyframes joEdgeTravel {
  from { stroke-dashoffset: var(--edge-from, 2000); }
  to   { stroke-dashoffset: var(--edge-to, 0); }
}
@keyframes joEdgeFade {
  0%   { opacity: 0; }
  10%  { opacity: 1; }
  85%  { opacity: 1; }
  100% { opacity: 0; }
}
`;

/* ------------------------------------------------------------------ */
/*  EDGE LIGHT — component                                             */
/* ------------------------------------------------------------------ */
function NavEdgeLight({ targetRef }: { targetRef: RefObject<HTMLElement | null> }) {
  const [box, setBox] = useState({ w: 0, h: 0, r: 16 });
  const [runId, setRunId] = useState(0);

  useEffect(() => {
    const el = targetRef.current;
    if (!el) return;

    const measure = () => {
      const rect = el.getBoundingClientRect();
      const cs = window.getComputedStyle(el);
      const bw = parseFloat(cs.borderTopWidth) || 0;

      const w = rect.width - bw * 2;
      const h = rect.height - bw * 2;
      const r = Math.max(0, (parseFloat(cs.borderTopLeftRadius) || 16) - bw);

      setBox((prev) =>
        Math.abs(prev.w - w) < 0.5 &&
        Math.abs(prev.h - h) < 0.5 &&
        Math.abs(prev.r - r) < 0.5
          ? prev
          : { w, h, r }
      );
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [targetRef]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let intervalId: number | undefined;
    const firstId = window.setTimeout(() => {
      setRunId((v) => v + 1);
      intervalId = window.setInterval(() => setRunId((v) => v + 1), EDGE_CYCLE_MS);
    }, EDGE_FIRST_DELAY_MS);

    return () => {
      clearTimeout(firstId);
      if (intervalId) clearInterval(intervalId);
    };
  }, []);

  const geometry = useMemo(() => {
    const { w, h, r } = box;
    if (w < 2 || h < 2) return null;

    const inset = 1;
    const W = w - inset * 2;
    const H = h - inset * 2;
    const R = Math.min(Math.max(r - inset, 0), Math.min(W, H) / 2);

    const P = 2 * (W - 2 * R) + 2 * (H - 2 * R) + 2 * Math.PI * R;

    return { x: inset, y: inset, W, H, R, P };
  }, [box]);

  if (!geometry) {
    return <style>{EDGE_CSS}</style>;
  }

  const { x, y, W, H, R, P } = geometry;
  const dashLen = P * 0.98;

  return (
    <>
      <style>{EDGE_CSS}</style>
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
        viewBox={`0 0 ${box.w} ${box.h}`}
        style={{ zIndex: -1 }}
      >
        {runId > 0 && (
          <g
            key={runId}
            style={{
              opacity: 0,
              animation: `joEdgeFade ${EDGE_SPIN_MS + 600}ms linear forwards`,
            }}
          >
            <rect
              x={x}
              y={y}
              width={W}
              height={H}
              rx={R}
              ry={R}
              fill="none"
              stroke={EDGE_LIME}
              strokeWidth={1}
              strokeLinecap="round"
              strokeDasharray={`${dashLen} ${P - dashLen}`}
              style={
                {
                  // Perf: removed `filter: drop-shadow(...)` — SVG filter on a
                  // composited element inside the fixed nav was compounding cost.
                  animation: `joEdgeTravel ${EDGE_LAP_MS}ms linear 4 forwards`,
                  "--edge-from": P,
                  "--edge-to": 0,
                } as React.CSSProperties
              }
            />
          </g>
        )}
      </svg>
    </>
  );
}

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */
export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);

  // Perf: matchMedia fires once per breakpoint crossing instead of once per
  // pixel of resize, so no more full-page re-renders while dragging the window.
  useEffect(() => {
    const mql = window.matchMedia("(max-width: 767px)");
    const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    setIsMobile(mql.matches);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white focus:text-black">
        Skip to content
      </a>

      <header className="fixed top-0 left-0 w-full z-50 px-4 pt-4">
        <nav
          ref={navRef}
          className="relative isolate glass-nav rounded-2xl px-4 md:px-6 py-3 flex items-center justify-between shadow-2xl max-w-6xl mx-auto w-full transition-all duration-500 ease-custom"
        >
          <NavEdgeLight targetRef={navRef} />

          <a href="#" className="font-semibold text-sm md:text-base tracking-tight text-white flex items-center gap-2.5 truncate">
            <Image
              src="/images/headshot.webp"
              alt="Joseph O."
              width={36}
              height={36}
              className="rounded-full object-cover border border-white/20 shadow-md flex-shrink-0"
            />
            <div className="flex flex-col truncate">
              <span className="flex items-center gap-1.5 truncate">
                Joseph O.
                {/* Perf: animate-pulse is cheaper than animate-ping in the fixed nav. */}
                <span className="w-2 h-2 rounded-full bg-lime animate-pulse flex-shrink-0"></span>
              </span>
              <span className="text-blue-grey font-mono text-[11px] font-normal truncate">
                Software Developer & Product Builder
              </span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-blue-grey">
            <Link href="#work" className="hover:text-white transition-all duration-300 hover:-translate-y-0.5" onClick={closeMobileMenu}>Work</Link>
            <Link href="#capabilities" className="hover:text-white transition-all duration-300 hover:-translate-y-0.5" onClick={closeMobileMenu}>Capabilities</Link>
            <Link href="#process" className="hover:text-white transition-all duration-300 hover:-translate-y-0.5" onClick={closeMobileMenu}>Process</Link>
            <Link href="#faq" className="hover:text-white transition-all duration-300 hover:-translate-y-0.5" onClick={closeMobileMenu}>FAQ</Link>
          </div>

          <div className="flex items-center gap-3">
            <a href="mailto:contact@josephdev.com?subject=Project%20Inquiry" className="hidden sm:inline-flex items-center justify-center rounded-xl btn-primary">
              Book a call
            </a>
            <button
              id="mobile-menu-btn"
              className="md:hidden p-2 text-blue-grey hover:text-white rounded-xl bg-midnight-elevated active:scale-95 transition-transform"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X /> : <List />}
            </button>
          </div>
        </nav>

        {isMobile && mobileMenuOpen && (
          <div className="absolute top-20 left-4 right-4 surface-navy rounded-2xl p-6 shadow-2xl flex flex-col gap-4 border border-white/10 z-50 animate-in slide-in-from-top-2 duration-300">
            <Link href="#work" className="text-lg font-medium text-soft-white hover:text-white transition-colors" onClick={closeMobileMenu}>Work</Link>
            <Link href="#capabilities" className="text-lg font-medium text-soft-white hover:text-white transition-colors" onClick={closeMobileMenu}>Capabilities</Link>
            <Link href="#process" className="text-lg font-medium text-soft-white hover:text-white transition-colors" onClick={closeMobileMenu}>Process</Link>
            <Link href="#faq" className="text-lg font-medium text-soft-white hover:text-white transition-colors" onClick={closeMobileMenu}>FAQ</Link>
            <a href="mailto:contact@josephdev.com?subject=Project%20Inquiry" className="mt-2 w-full text-center rounded-xl btn-primary" onClick={closeMobileMenu}>
              Book a call
            </a>
          </div>
        )}
      </header>

      <main id="main-content" className="pt-16 md:pt-20">
        <section className="relative min-h-[85vh] py-8 md:py-12 px-4 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="z-10 w-full">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-midnight-elevated border border-white/10 text-xs font-medium text-blue-grey mb-2 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-lime animate-pulse"></span>
              Available for Q2/Q3 · Taking on 2 client projects per month
            </div>

            <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight hero-gradient mb-6 leading-[1.1]">
              I build <span className="text-lime">SYSTEMS</span> that make <span className="text-lime">YOU</span> money.
            </h1>

            <p className="text-base sm:text-lg text-blue-grey mb-8 leading-relaxed font-normal">
              I am Joseph Odusanya, a Software Developer and Product Builder who designs, engineers, and ships robust web and mobile applications for startups and growing businesses.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a href="mailto:contact@josephdev.com?subject=Project%20Inquiry" className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl btn-primary">
                Book a discovery call <ArrowRight className="ml-2" />
              </a>
              <a href="#work" className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl btn-secondary" onClick={closeMobileMenu}>
                Explore selected work
              </a>
            </div>

            <p className="text-xs text-blue-grey-muted mt-10 uppercase tracking-wider font-mono">
              Trusted across government portals, fintech platforms, and proptech ecosystems
            </p>
          </div>

          <div className="z-10 w-full flex justify-center items-center">
            <div className="relative w-full max-w-lg">
              <Image
                src={heroImage}
                alt="Hero visual"
                width={600}
                height={450}
                className="w-full h-auto object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </section>
      </main>

      <TaglineReveal />
      <WorkSection />
      <CapabilitiesSection />
      <ProcessSection />
      <FAQSection />
      <CTASection />

      {/* Footer */}
      <footer className="relative pt-16 pb-8 px-4 border-t border-white/10 bg-[#0A0A0A] overflow-hidden">
        {/* Perf: replaced `blur-[120px]` glow with a cheap radial gradient (same look). */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[300px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, rgb(200 255 25 / 0.10) 0%, transparent 70%)" }}
        />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-4">
            <div className="md:col-span-5 flex flex-col items-start gap-4">
              <div className="flex items-center gap-2 text-soft-white text-xl font-semibold tracking-tight">
                <span className="w-2.5 h-2.5 rounded-full bg-lime"></span>
                Joseph O.
              </div>
              <p className="text-blue-grey text-sm leading-relaxed max-w-xs">
                Designing and engineering robust web and mobile applications that turn ideas into revenue-generating systems.
              </p>
              <div className="flex items-center gap-4 mt-2">
                <a href="https://github.com/softweb-c" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-lime/20 hover:text-lime text-blue-grey transition-all duration-300">
                  <GithubLogo size={20} weight="fill" />
                </a>
                <a href="https://www.linkedin.com/in/joseph-o-92218032b?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-lime/20 hover:text-lime text-blue-grey transition-all duration-300">
                  <LinkedinLogo size={20} weight="fill" />
                </a>
                <a href="https://x.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-lime/20 hover:text-lime text-blue-grey transition-all duration-300">
                  <XLogo size={20} weight="fill" />
                </a>
              </div>
            </div>

            <div className="md:col-span-3 flex flex-col gap-4">
              <h4 className="text-soft-white font-mono text-xs uppercase tracking-widest mb-2">Sitemap</h4>
              <Link href="#work" className="text-sm text-blue-grey hover:text-white transition-colors">Selected Work</Link>
              <Link href="#capabilities" className="text-sm text-blue-grey hover:text-white transition-colors">Capabilities</Link>
              <Link href="#process" className="text-sm text-blue-grey hover:text-white transition-colors">The Process</Link>
              <Link href="#faq" className="text-sm text-blue-grey hover:text-white transition-colors">FAQ</Link>
            </div>

            <div className="md:col-span-4 flex flex-col gap-4">
              <h4 className="text-soft-white font-mono text-xs uppercase tracking-widest mb-2">Get in touch</h4>
              <p className="text-sm text-blue-grey mb-2">Ready to build? Let's talk about your project.</p>
              <a href="mailto:contact@josephdev.com" className="inline-flex items-center gap-2 text-lime font-medium hover:text-white transition-colors group">
                softbyteweb@gmail.com
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          <div className="w-full flex justify-center items-center border-t border-white/5 pt-4 pb-2">
            <div className="w-full max-w-lg h-16 md:h-24 opacity-90 hover:opacity-100 transition-opacity duration-500">
              <FooterLottie />
            </div>
          </div>

          <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/5 text-xs text-blue-grey-muted">
            <p>© {new Date().getFullYear()} Joseph O. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}