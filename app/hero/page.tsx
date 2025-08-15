"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });

      tl.fromTo(
        ".hero-glow",
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 1.2, ease: "power2.inOut" },
        0
      )
        .fromTo(
          ".hero-3d-image",
          { opacity: 0, y: 60, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 1.3, ease: "power2.inOut" },
          0.1
        )
        .fromTo(
          ".hero-subtitle",
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1.1, ease: "power2.inOut" },
          0.4
        )
        .fromTo(
          ".hero-title",
          { opacity: 0, y: 60 },
          { opacity: 1, y: 0, duration: 1.2, ease: "power2.inOut" },
          0.6
        )
        .fromTo(
          ".hero-description",
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 1.1, ease: "power2.inOut" },
          0.8
        )
        .fromTo(
          ".hero-buttons",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1.0, ease: "power2.inOut" },
          1.0
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex flex-col items-center justify-center px-6 relative py-28 md:py-36"
    >
      {/* 3D Object positioned exactly as in the image - centrally and slightly above vertical center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
        <div className="-translate-y-16 md:-translate-y-20">
          {/* Main glow around 3D object - matching image exactly */}
          <div className="hero-glow absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[700px] h-[600px] md:h-[700px] bg-gradient-radial from-blue-400/25 via-blue-500/15 to-transparent rounded-full blur-3xl" />

          {/* Additional layered glows for depth */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[500px] h-[400px] md:h-[500px] bg-gradient-radial from-cyan-400/20 via-cyan-500/12 to-transparent rounded-full blur-2xl" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] md:w-[300px] h-[250px] md:h-[300px] bg-gradient-radial from-white/15 via-blue-300/10 to-transparent rounded-full blur-xl" />

          {/* Subtle light rays emanating from 3D object */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-1 h-64 bg-gradient-to-t from-blue-400/20 via-blue-400/10 to-transparent blur-sm" />
            <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-1 h-64 bg-gradient-to-b from-blue-400/20 via-blue-400/10 to-transparent blur-sm" />
            <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-64 h-1 bg-gradient-to-l from-blue-400/20 via-blue-400/10 to-transparent blur-sm" />
            <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-64 h-1 bg-gradient-to-r from-blue-400/20 via-blue-400/10 to-transparent blur-sm" />
          </div>

          <div className="relative hero-3d-image">
            <Image
              src="/images/3d.png"
              alt="3D Futuristic Structure"
              width={520}
              height={520}
              className="mx-auto opacity-95 drop-shadow-[0_0_40px_rgba(59,130,246,0.4)]"
              priority
            />
          </div>
        </div>
      </div>

      <div className="text-center max-w-5xl mx-auto relative z-10 mt-20 md:mt-28">
        <p className="text-gray-200 mb-4 hero-subtitle font-medium text-base md:text-lg drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)] opacity-0">
          MegaWorld: Innovation in Every Corner
        </p>
        <h1 className="text-[40px] md:text-[64px] leading-[1.1] font-semibold mb-6 hero-title text-white opacity-0 drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)]">
          A living city that evolves with its people and the world around it.
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto hero-description font-light leading-relaxed opacity-0 drop-shadow-[0_2px_8px_rgba(0,0,0,0.2)]">
          Creating a dynamic ecosystem driven by intelligent systems, green
          infrastructure, and forward-thinking solutions.
        </p>
        <div className="flex gap-4 justify-center hero-buttons opacity-0">
          <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 text-lg font-medium rounded-lg transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40">
            Explore
          </Button>
          <Button
            variant="outline"
            className="border-white/30 text-white hover:bg-white/10 px-8 py-3 text-lg bg-transparent font-medium rounded-lg transition-all duration-300 shadow-lg shadow-white/10 hover:shadow-white/20"
          >
            About
          </Button>
        </div>
      </div>
    </section>
  );
}
