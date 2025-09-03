"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Community() {
  // make title, subtitle and search all start at the same point
  const animationTargets = [
    {
      trigger: "#community-title",
      target: "#community-title",
      start: "top 85%",
    },
    {
      trigger: "#community-subtitle",
      target: "#community-subtitle",
      start: "top 85%", // <- changed to match title
    },
    {
      trigger: "#community-search",
      target: "#community-search",
      start: "top 85%", // <- changed to match title
    },
  ];

  const compRef = useScrollAnimation(animationTargets);

  const glowRef1 = useRef<HTMLDivElement | null>(null);
  const glowRef2 = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (glowRef1.current && glowRef2.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#community-title",
          start: "top 85%", // sync glow trigger with the titles/search
        },
      });

      tl.fromTo(
        [glowRef1.current, glowRef2.current],
        { autoAlpha: 0, scale: 0.95 },
        {
          autoAlpha: 1,
          scale: 1,
          duration: 2,
          delay: 1,
          ease: "expo.out",
        }
      );
    }
  }, []);

  return (
    <div ref={compRef}>
      <section className="py-44 md:py-56 px-6 relative">
        <div className="absolute bottom-1/2 left-1/2 -translate-x-1/2 z-0">
          <div
            ref={glowRef1}
            className="absolute top-0 left-0 w-[900px] h-[900px] bg-gradient-radial from-[#6F8EC8]/30 via-[#6F8EC8]/15 to-transparent rounded-full blur-[220px] -translate-x-1/2 -translate-y-1/2 opacity-0"
          />
          <div
            ref={glowRef2}
            className="absolute top-0 left-0 w-[800px] h-[800px] bg-gradient-radial from-[#6F8EC8]/20 via-[#6F8EC8]/10 to-transparent rounded-full blur-[180px] -translate-x-1/2 -translate-y-1/2 opacity-0"
          />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2
            id="community-title"
            className="text-4xl md:text-6xl font-garamond font-semibold mb-4 text-white"
          >
            The Community Hub
          </h2>

          <p
            id="community-subtitle"
            className="text-gray-300 mb-12 text-xl font-poppins font-light"
          >
            Ask Something
          </p>

          <div id="community-search" className="max-w-2xl mx-auto">
            <div className="relative">
              <Input
                placeholder="Search something..."
                className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 h-14 text-lg px-6 pr-12 backdrop-blur-sm rounded-lg transition-all duration-300 focus:bg-white/10 focus:border-white/30"
              />
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
