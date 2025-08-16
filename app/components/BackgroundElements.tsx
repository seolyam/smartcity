"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function BackgroundElements() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

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

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    gsap.to(".flashlight", {
      background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.15) 0%, transparent 200px)`,
      duration: 0.4,
      ease: "power2.out",
    });
  }, [mousePos]);

  return (
    <div
      ref={gridRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
    >
      <div className="absolute inset-0 bg-black" />

      <div
        className="absolute inset-0 grid-main opacity-90"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: `${100 / 11.5}vw calc(100vh / 7)`,
        }}
      />

      <div className="absolute top-0 left-0 right-0 h-[40vh] bg-gradient-to-b from-black/30 to-transparent" />

      <div className="absolute top-0 left-0 w-[50vw] h-[50vh] bg-gradient-radial from-transparent via-transparent to-black/40 rounded-full blur-3xl" />
      <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-gradient-radial from-transparent via-transparent to-black/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[50vw] h-[50vh] bg-gradient-radial from-transparent via-transparent to-black/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[50vw] h-[50vh] bg-gradient-radial from-transparent via-transparent to-black/40 rounded-full blur-3xl" />

      <div
        className="absolute inset-0"
        style={{
          background: `
      radial-gradient(circle at center, rgba(0,0,0,0) 65%, rgba(0,0,0,0.7) 90%, rgba(0,0,0,1) 100%),
      radial-gradient(circle at center, rgba(0,0,0,0) 50%, rgba(0,0,0,0.5) 100%)
    `,
          pointerEvents: "none",
        }}
      />

      <div
        className="absolute inset-0 flashlight"
        style={{ mixBlendMode: "screen" }}
      />
    </div>
  );
}
