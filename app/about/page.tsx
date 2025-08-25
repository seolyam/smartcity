"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function About() {
  const animationTargets = [
    { trigger: "#about-title", target: "#about-title", start: "top 85%" },
    { trigger: "#about-desc", target: "#about-desc", start: "top 80%" },
  ];

  const comp = useScrollAnimation(animationTargets);

  return (
    <div ref={comp}>
      <section className="py-44 md:py-52 px-6 relative overflow-hidden">
        <div className="absolute bottom-1/2 left-1/2 -translate-x-1/2 z-0 pointer-events-none">
          <div
            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full blur-[240px]"
            style={{
              width: 1200,
              height: 1200,
              background:
                "radial-gradient(circle, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.42) 26%, rgba(0,0,0,0.24) 42%, rgba(0,0,0,0.10) 58%, rgba(0,0,0,0) 70%)",
            }}
          />

          <div
            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full blur-[200px]"
            style={{
              width: 1000,
              height: 1000,
              background:
                "radial-gradient(circle, rgba(0,0,0,0.50) 0%, rgba(0,0,0,0.34) 24%, rgba(0,0,0,0.20) 40%, rgba(0,0,0,0.06) 58%, rgba(0,0,0,0) 72%)",
            }}
          />

          <div
            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full blur-[180px]"
            style={{
              width: 800,
              height: 800,
              background:
                "radial-gradient(circle, rgba(0,0,0,0.44) 0%, rgba(0,0,0,0.28) 18%, rgba(0,0,0,0.16) 36%, rgba(0,0,0,0.05) 52%, rgba(0,0,0,0) 66%)",
            }}
          />

          <div
            className="absolute top-12 left-12 rounded-full blur-[180px]"
            style={{
              width: 220,
              height: 220,
              background:
                "radial-gradient(circle, rgba(0,0,0,0.20) 0%, rgba(0,0,0,0) 100%)",
            }}
          />
          <div
            className="absolute top-24 -right-12 rounded-full blur-[140px]"
            style={{
              width: 150,
              height: 150,
              background:
                "radial-gradient(circle, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0) 100%)",
            }}
          />
          <div
            className="absolute -top-6 right-16 rounded-full blur-[120px]"
            style={{
              width: 120,
              height: 120,
              background:
                "radial-gradient(circle, rgba(0,0,0,0.16) 0%, rgba(0,0,0,0) 100%)",
            }}
          />
          <div
            className="absolute top-32 -left-8 rounded-full blur-[160px]"
            style={{
              width: 180,
              height: 180,
              background:
                "radial-gradient(circle, rgba(0,0,0,0.14) 0%, rgba(0,0,0,0) 100%)",
            }}
          />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <h2
            id="about-title"
            className="text-4xl md:text-5xl font-garamond font-semibold mb-12 text-white md:-ml-8"
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
