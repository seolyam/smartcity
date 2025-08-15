"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function BackgroundElements() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [pageHeight, setPageHeight] = useState(0);

  // Measure page height on mount and when resized
  useEffect(() => {
    const updateHeight = () => {
      setPageHeight(document.documentElement.scrollHeight);
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    window.addEventListener("load", updateHeight);
    return () => {
      window.removeEventListener("resize", updateHeight);
      window.removeEventListener("load", updateHeight);
    };
  }, []);

  // Animate subtle grid movement
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".grid-main", {
        backgroundPosition: "2px 2px",
        duration: 20,
        ease: "none",
        repeat: -1,
        yoyo: true,
      });
    }, gridRef);
    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={gridRef}
      className="absolute top-0 left-0 w-full  pointer-events-none"
      style={{ height: `${pageHeight}px` }}
    >
      {/* Black background */}
      <div className="absolute inset-0 bg-black" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 grid-main opacity-90"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: `${100 / 11.5}vw calc(100vh / 7)`, // ~11–12 columns, adjustable row height
        }}
      />

      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-white/8 via-white/3 to-transparent rounded-full" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-blue-400/20 via-blue-500/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-cyan-400/15 via-cyan-500/8 to-transparent rounded-full blur-2xl" />

      <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-white/6 rounded-full blur-3xl" />
      <div className="absolute top-3/4 right-1/4 w-32 h-32 bg-white/8 rounded-full blur-2xl" />
      <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-white/10 rounded-full blur-xl" />
      <div className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-white/7 rounded-full blur-3xl" />

      {/* Top dark gradient */}
      <div className="absolute top-0 left-0 right-0 h-[40vh] bg-gradient-to-b from-black/30 to-transparent" />

      {/* Corner vignette effects */}
      <div className="absolute top-0 left-0 w-[50vw] h-[50vh] bg-gradient-radial from-transparent via-transparent to-black/40 rounded-full blur-3xl" />
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-gradient-radial from-transparent via-transparent to-black/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[50vw] h-[50vh] bg-gradient-radial from-transparent via-transparent to-black/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[50vw] h-[50vh] bg-gradient-radial from-transparent via-transparent to-black/40 rounded-full blur-3xl" />
    </div>
  );
}
