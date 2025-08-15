"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"

gsap.registerPlugin(ScrollTrigger)

export default function Features() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".features-title",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: ".features-section",
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        },
      )

      gsap.fromTo(
        ".features-subtitle",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.0,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: ".features-section",
            start: "top 75%",
            toggleActions: "play reverse play reverse",
          },
        },
      )

      const cards = gsap.utils.toArray<HTMLElement>(".feature-card")
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
          },
        )

        // Animate card text elements
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
          },
        )

        gsap.fromTo(
          card.querySelector("p"),
          { opacity: 0, y: 20 },
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
            delay: index * 0.15 + 0.3,
          },
        )
      })
    }, ref)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="py-44 md:py-52 px-6 relative features-section">
      {/* Subtle section glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="w-[600px] h-[400px] bg-gradient-radial from-blue-500/8 via-blue-600/4 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 className="features-title text-4xl md:text-5xl font-semibold mb-4 text-white">MegaWorld as of 2025</h2>
        <p className="features-subtitle text-gray-300 mb-16 max-w-2xl mx-auto font-light text-lg leading-relaxed">
          Megaworld Smart City is a future-ready urban development built on innovation, sustainability, and intelligent
          design.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="feature-card bg-white/5 backdrop-blur-sm border border-white/12 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-6">
                <Image src="/images/house.png" alt="House Icon" width={64} height={64} />
              </div>
              <h3 className="text-2xl font-medium mb-4 text-white opacity-0">500+ Hectares</h3>
              <p className="text-gray-300 leading-relaxed font-light opacity-0">
                Megaworld Smart City is a future-ready urban development built on innovation, sustainability, and
                intelligent design.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
