"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-title",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: ".about-section",
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        },
      )

      gsap.fromTo(
        ".about-text",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.0,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: ".about-section",
            start: "top 75%",
            toggleActions: "play reverse play reverse",
          },
        },
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="py-44 md:py-52 px-6 relative about-section">
      {/* Subtle section glow */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="w-[500px] h-[350px] bg-gradient-radial from-blue-400/8 via-blue-500/4 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="about-title text-4xl md:text-5xl font-semibold mb-12 text-white">ABOUT</h2>
        <p className="about-text text-lg text-gray-300 leading-relaxed mb-16 font-light">
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
