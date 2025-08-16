"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function About() {
  const animationTargets = [
    {
      trigger: "#about-title",
      target: "#about-title",
      start: "top 85%",
    },
    {
      trigger: "#about-desc",
      target: "#about-desc",
      start: "top 80%",
    },
  ];

  const comp = useScrollAnimation(animationTargets);

  return (
    <div ref={comp}>
      <section className="py-44 md:py-52 px-6 relative">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2
            id="about-title"
            className="text-4xl md:text-5xl font-garamond font-semibold mb-12 text-white"
          >
            ABOUT
          </h2>

          <p
            id="about-desc"
            className="text-lg text-gray-300 leading-relaxed mb-16 font-poppins font-light"
          >
            As a pioneering force in urban innovation, Megaworld Smart City
            stands as a flagship development that combines sustainable design,
            advanced digital infrastructure, and people-first planning. Covering
            over 500 hectares, the city showcases Megaworld&apos;s commitment to
            smart growth through integrated green spaces, intelligent transport
            systems, and energy-efficient architecture. With 5G connectivity,
            IoT-powered utilities, smart mobility, and AI-enhanced public
            services, the development aims to redefine how people live, work,
            and thrive. Backed by impressive figures — from 200,000+ jobs
            created to 1.2 million sqm of commercial space — Megaworld Smart
            City is a bold step toward a future-ready Philippines.
          </p>
        </div>
      </section>
    </div>
  );
}
