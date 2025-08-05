"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const aboutRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // About section glow effect
      gsap.fromTo(
        ".about-glow",
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-section",
            start: "top 70%",
          },
        },
      )
    }, aboutRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={aboutRef} className="py-20 px-6 relative about-section">
      {/* Section Glow Effect */}
      <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="about-glow w-[600px] h-[400px] bg-gradient-radial from-blue-400/6 via-blue-500/3 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-medium mb-12 text-white">ABOUT</h2>
        <p className="text-lg text-gray-300 leading-relaxed mb-16 font-light">
          As a pioneering force in urban innovation, Megaworld Smart City stands as a flagship development that combines
          sustainable design, advanced digital infrastructure, and people-first planning. Covering over 500 hectares,
          the city showcases Megaworld's commitment to smart growth through integrated green spaces, intelligent
          transport systems, and energy-efficient architecture. With 5G connectivity, IoT-powered utilities, smart
          mobility, and AI-enhanced public services, the development aims to redefine how people live, work, and thrive.
          Backed by impressive figures — from 200,000+ jobs created to 1.2 million sqm of commercial space — Megaworld
          Smart City is a bold step toward a future-ready Philippines.
        </p>
      </div>
    </section>
  )
}
