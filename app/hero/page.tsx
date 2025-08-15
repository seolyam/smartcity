"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(
        [
          titleRef.current,
          subtitleRef.current,
          descRef.current,
          buttonsRef.current,
        ],
        {
          opacity: 0,
          y: 60,
        }
      );

      gsap.set(imageRef.current, {
        opacity: 0,
        scale: 0.95,
      });

      const tl = gsap.timeline();

      tl.to(imageRef.current, {
        opacity: 1,
        scale: 1,
        duration: 1.3,
        ease: "power2.out",
      })
        .to(
          subtitleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1.1,
            ease: "power2.out",
          },
          "-=0.8"
        )
        .to(
          titleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power2.out",
          },
          "-=0.6"
        )
        .to(
          descRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1.1,
            ease: "power2.out",
          },
          "-=0.4"
        )
        .to(
          buttonsRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1.0,
            ease: "power2.out",
          },
          "-=0.2"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex flex-col items-center justify-center px-6 relative py-28 md:py-36"
    >
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-40 right-20 w-24 h-24 bg-white/8 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-white/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-white/12 rounded-full blur-2xl pointer-events-none" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
        <div className="-translate-y-16 md:-translate-y-20">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[500px] h-[400px] md:h-[500px] bg-gradient-radial to-transparent rounded-full blur-2xl" />
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] md:w-[300px] h-[250px] md:h-[300px] bg-gradient-radial to-transparent rounded-full blur-xl" />

          <div ref={imageRef} className="relative">
            <Image
              src="/images/3d.png"
              alt="3D Futuristic Structure"
              width={615}
              height={615}
              className="mx-auto"
              priority
            />
          </div>
        </div>
      </div>

      <div className="text-center max-w-5xl mx-auto relative z-10 mt-20 md:mt-28">
        <p
          ref={subtitleRef}
          className="text-gray-200 font-medium text-base md:text-lg"
        >
          MegaWorld: Innovation in Every Corner
        </p>

        <h1
          ref={titleRef}
          className="text-[40px] md:text-[64px] leading-[1.1] font-serif font-semibold mb-6 text-white"
        >
          A living city that evolves with its people and the world around it.
        </h1>

        <p
          ref={descRef}
          className="text-lg md:text-xl text-gray-300 mb-10 max-w-[50%] mx-auto font-light leading-relaxed"
        >
          Creating a dynamic ecosystem driven by intelligent systems, green
          infrastructure, and forward-thinking solutions.
        </p>

        <div ref={buttonsRef} className="flex gap-4 justify-center">
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
