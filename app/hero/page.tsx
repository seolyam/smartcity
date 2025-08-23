"use client";

import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Image from "next/image";
import { useMemo, useEffect, useState, useCallback } from "react";

interface HeroProps {
  loaderComplete?: boolean;
}

export default function Hero({ loaderComplete = false }: HeroProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [showDesc, setShowDesc] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  const startAnimationSequence = useCallback(() => {
    if (!loaderComplete) return;

    const timer = setTimeout(() => {
      setIsLoaded(true);

      setTimeout(() => setShowSubtitle(true), 200);
      setTimeout(() => setShowTitle(true), 400);
      setTimeout(() => setShowDesc(true), 600);
      setTimeout(() => setShowButtons(true), 800);
    }, 100);

    return () => clearTimeout(timer);
  }, [loaderComplete]);

  useEffect(() => {
    startAnimationSequence();
  }, [startAnimationSequence]);

  const animationTargets = useMemo(
    () => [
      {
        trigger: "#hero-subtitle",
        target: "#hero-subtitle",
        start: "top 90%",
      },
      {
        trigger: "#hero-title",
        target: "#hero-title",
        start: "top 85%",
      },
      {
        trigger: "#hero-desc",
        target: "#hero-desc",
        start: "top 80%",
      },
      {
        trigger: "#hero-buttons",
        target: "#hero-buttons",
        start: "top 75%",
      },
    ],
    []
  );
  const comp = useScrollAnimation(animationTargets);

  return (
    <div ref={comp}>
      <section className="min-h-screen flex flex-col items-center justify-center px-6 relative py-28 md:py-36">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="-translate-y-16 md:-translate-y-20">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[500px] h-[400px] md:h-[500px] bg-gradient-radial to-transparent rounded-full blur-2xl" />

            <div className="relative">
              <Image
                src="/images/3d.png"
                alt="3D Futuristic Structure"
                width={615}
                height={615}
                className="mx-auto will-change-auto"
                priority
                sizes="(max-width: 768px) 300px, 615px"
                quality={75}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
            </div>
          </div>
        </div>

        <div className="text-center max-w-5xl mx-auto relative z-30 mt-20 md:mt-28">
          <div
            id="hero-subtitle"
            className={`text-gray-200 font-poppins font-medium text-base md:text-lg transition-all duration-800 ease-out translate-y-6 will-change-transform ${
              showSubtitle
                ? "[clip-path:polygon(0%_0%,_100%_0%,_100%_100%,_0%_100%)] translate-y-0"
                : "[clip-path:polygon(0%_100%,_100%_100%,_100%_100%,_0%_100%)]"
            }`}
          >
            <p>MegaWorld: Innovation in Every Corner</p>
          </div>

          <div
            id="hero-title"
            className={`text-[40px] md:text-[64px] leading-[1.1] font-garamond font-semibold mb-6 text-white transition-all duration-800 ease-out translate-y-8 will-change-transform ${
              showTitle
                ? "[clip-path:polygon(0%_0%,_100%_0%,_100%_100%,_0%_100%)] translate-y-0"
                : "[clip-path:polygon(0%_100%,_100%_100%,_100%_100%,_0%_100%)]"
            }`}
          >
            <h1>
              A living city that evolves with its people and the world around
              it.
            </h1>
          </div>

          <div
            id="hero-desc"
            className={`text-lg md:text-xl text-gray-300 mb-10 max-w-[50%] mx-auto font-poppins font-light leading-relaxed transition-all duration-800 ease-out translate-y-6 will-change-transform ${
              showDesc
                ? "[clip-path:polygon(0%_0%,_100%_0%,_100%_100%,_0%_100%)] translate-y-0"
                : "[clip-path:polygon(0%_100%,_100%_100%,_100%_100%,_0%_100%)]"
            }`}
          >
            <p>
              Creating a dynamic ecosystem driven by intelligent systems, green
              infrastructure, and forward-thinking solutions.
            </p>
          </div>

          <div
            id="hero-buttons"
            className={`flex gap-4 justify-center transition-all duration-800 ease-out translate-y-4 will-change-transform ${
              showButtons
                ? "[clip-path:polygon(0%_0%,_100%_0%,_100%_100%,_0%_100%)] translate-y-0"
                : "[clip-path:polygon(0%_100%,_100%_100%,_100%_100%,_0%_100%)]"
            }`}
          >
            <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 text-lg font-poppins font-medium rounded-lg transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40">
              Explore
            </Button>
            <Button
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-3 text-lg bg-transparent font-poppins font-medium rounded-lg transition-all duration-300 "
            >
              About
            </Button>
          </div>
        </div>

        <div className="absolute bottom-1/2 left-1/2 -translate-x-1/2 z-10">
          <div className="absolute top-0 left-0 w-[900px] h-[900px] bg-gradient-radial from-[#6F8EC8]/30 via-[#6F8EC8]/15 to-transparent rounded-full blur-[220px] -translate-x-1/2 -translate-y-1/2" />

          <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-gradient-radial from-[#6F8EC8]/20 via-[#6F8EC8]/10 to-transparent rounded-full blur-[180px] -translate-x-1/2 -translate-y-1/2" />

          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-radial from-[#6F8EC8]/15 via-[#6F8EC8]/8 to-transparent rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" />

          <div className="absolute top-12 left-12 w-56 h-56 bg-[#6F8EC8]/10 rounded-full blur-[180px]" />
          <div className="absolute top-24 -right-12 w-40 h-40 bg-[#6F8EC8]/10 rounded-full blur-[140px]" />
          <div className="absolute -top-6 right-16 w-32 h-32 bg-[#6F8EC8]/12 rounded-full blur-[120px]" />
          <div className="absolute top-32 -left-8 w-48 h-48 bg-[#6F8EC8]/8 rounded-full blur-[160px]" />
        </div>
      </section>
    </div>
  );
}
