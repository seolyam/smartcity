"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero section animations
      gsap.fromTo(
        ".hero-subtitle",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.2, ease: "power3.out" }
      );

      gsap.fromTo(
        ".hero-title",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, delay: 0.4, ease: "power3.out" }
      );

      gsap.fromTo(
        ".hero-description",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.6, ease: "power3.out" }
      );

      gsap.fromTo(
        ".hero-buttons",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.8, ease: "power3.out" }
      );

      // Static 3D image fade in
      gsap.fromTo(
        ".hero-3d-image",
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 1.5, delay: 0.3, ease: "power3.out" }
      );

      // Glow effect animation
      gsap.fromTo(
        ".hero-glow",
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 2, delay: 0.5, ease: "power3.out" }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex flex-col items-center justify-center px-6 relative"
    >
      {/* 3D Image Glow Effect */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 translate-y-[-80px] z-0">
        <div className="hero-glow absolute inset-0 w-[600px] h-[600px] bg-gradient-radial from-blue-400/20 via-blue-500/10 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Static 3D Image - positioned slightly above center */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 translate-y-[-80px] z-10">
        <div className="hero-3d-image">
          <Image
            src="/images/3d.png"
            alt="3D Futuristic Structure"
            width={500}
            height={500}
            className="opacity-90"
            priority
          />
        </div>
      </div>

      <div className="text-center max-w-4xl mx-auto relative z-20">
        <p className="text-gray-300 mb-4 hero-subtitle font-normal text-lg">
          MegaWorld: Innovation in Every Corner
        </p>

        <h1 className="text-5xl md:text-7xl font-normal mb-6 hero-title leading-tight text-white">
          A living city that evolves with its people and the world around it.
        </h1>

        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto hero-description font-light leading-relaxed">
          Creating a dynamic ecosystem driven by intelligent systems, green
          infrastructure, and forward-thinking solutions.
        </p>

        <div className="flex gap-4 justify-center hero-buttons">
          <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 text-lg font-medium rounded-lg transition-all duration-300">
            Explore
          </Button>
          <Button
            variant="outline"
            className="border-gray-400 text-white hover:bg-white/10 px-8 py-3 text-lg bg-transparent font-medium rounded-lg transition-all duration-300"
          >
            About
          </Button>
        </div>
      </div>
    </section>
  );
}
