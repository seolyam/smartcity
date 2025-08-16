"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".services-title",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: ".services-section",
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      const cards = gsap.utils.toArray<HTMLElement>(".service-card");
      cards.forEach((card, index) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 80 },
          {
            opacity: 1,
            y: 0,
            duration: 1.0,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play reverse play reverse",
            },
            delay: index * 0.15,
          }
        );

        gsap.fromTo(
          card.querySelector("h3"),
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play reverse play reverse",
            },
            delay: index * 0.15 + 0.2,
          }
        );
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      className="py-44 md:py-52 px-6 relative services-section"
    >
      <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="w-[600px] h-[400px] bg-gradient-radial from-blue-500/8 via-blue-600/4 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="services-title text-4xl md:text-5xl font-semibold text-center mb-16 text-white">
          MegaWorld&apos;s Smart Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="service-card bg-white/5 backdrop-blur-sm border border-white/12 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-6">
                <Image
                  src="/images/house.png"
                  alt="House Icon"
                  width={64}
                  height={64}
                />
              </div>
              <h3 className="text-2xl font-medium mb-6 text-center text-white opacity-0">
                5G Wi-Fi
              </h3>
              <div className="flex gap-3 justify-center">
                <Button className="bg-blue-600 hover:bg-blue-700 font-medium transition-all duration-300">
                  Explore
                </Button>
                <Button
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 bg-transparent font-medium transition-all duration-300"
                >
                  About
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
