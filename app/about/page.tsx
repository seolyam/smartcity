"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([titleRef.current, descRef.current], {
        opacity: 0,
        y: 60,
      });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 80%",
        onEnter: () => {
          const tl = gsap.timeline();

          tl.to(titleRef.current, {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power2.out",
          }).to(
            descRef.current,
            {
              opacity: 1,
              y: 0,
              duration: 1.0,
              ease: "power2.out",
            },
            "-=0.7"
          );
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-44 md:py-52 px-6 relative">
      {/* Subtle section glow */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="w-[500px] h-[350px] bg-gradient-radial from-blue-400/8 via-blue-500/4 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl font-serif font-semibold mb-12 text-white"
        >
          ABOUT
        </h2>

        <p
          ref={descRef}
          className="text-lg text-gray-300 leading-relaxed mb-16 font-light"
        >
          As a pioneering force in urban innovation, Megaworld Smart City stands
          as a flagship development that combines sustainable design, advanced
          digital infrastructure, and people-first planning. Covering over 500
          hectares, the city showcases Megaworld&apos;s commitment to smart
          growth through integrated green spaces, intelligent transport systems,
          and energy-efficient architecture. With 5G connectivity, IoT-powered
          utilities, smart mobility, and AI-enhanced public services, the
          development aims to redefine how people live, work, and thrive. Backed
          by impressive figures — from 200,000+ jobs created to 1.2 million sqm
          of commercial space — Megaworld Smart City is a bold step toward a
          future-ready Philippines.
        </p>
      </div>
    </section>
  );
}
