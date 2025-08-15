"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function BackgroundElements() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Subtle grid animation
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
    <div ref={gridRef}>
      {/* Pure black background */}
      <div className="fixed inset-0 bg-black -z-50" />

      {/* Main Grid Pattern - Exactly 11-12 boxes horizontally as requested */}
      <div className="fixed inset-0 opacity-75 pointer-events-none -z-40">
        <div
          className="absolute inset-0 grid-main"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.45) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.45) 1px, transparent 1px)
            `,
            backgroundSize: "calc(100vw / 11.5) calc(100vh / 7)",
          }}
        />
      </div>

      {/* Center grid illumination effect - making grid more visible in central area */}
      <div className="fixed inset-0 pointer-events-none -z-35">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-white/5 via-transparent to-transparent rounded-full" />
      </div>

      {/* Enhanced lighting effects matching the image exactly */}
      <div className="fixed inset-0 pointer-events-none -z-30">
        {/* Central glow emanating from 3D object position */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-blue-400/20 via-blue-500/10 to-transparent rounded-full blur-3xl" />

        {/* Additional layered central glow for intensity */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-cyan-400/15 via-cyan-500/8 to-transparent rounded-full blur-2xl" />

        {/* Subtle top darkening for contrast */}
        <div className="absolute top-0 left-0 right-0 h-[40vh] bg-gradient-to-b from-black/30 to-transparent" />

        {/* Corner vignette effects for depth */}
        <div className="absolute top-0 left-0 w-[50vw] h-[50vh] bg-gradient-radial from-transparent via-transparent to-black/40 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-gradient-radial from-transparent via-transparent to-black/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[50vw] h-[50vh] bg-gradient-radial from-transparent via-transparent to-black/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[50vw] h-[50vh] bg-gradient-radial from-transparent via-transparent to-black/40 rounded-full blur-3xl" />
      </div>
    </div>
  );
}
