"use client";

import { useEffect, useRef, useState } from "react";
import { Lottie } from "lottie-react";
import footerAnimation from "@/assets/footer.json";

export default function FooterLottie() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lottieRef = useRef<any>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { rootMargin: "100px 0px", threshold: 0 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Play when on screen, pause when off screen (preserves current frame)
  useEffect(() => {
    if (!lottieRef.current) return;
    
    if (visible) {
      lottieRef.current.play();
    } else {
      lottieRef.current.pause();
    }
  }, [visible]);

  return (
    <div ref={containerRef} style={{ width: "100%", height: "100%" }}>
      <Lottie
        lottieRef={lottieRef}
        src={footerAnimation}
        loop
        autoplay={false} // We manually start it via the IntersectionObserver
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}