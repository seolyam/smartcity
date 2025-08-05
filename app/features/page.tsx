"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"

gsap.registerPlugin(ScrollTrigger)

export default function Features() {
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Cards animation on scroll
      gsap.fromTo(
        ".feature-card",
        { opacity: 0, y: 50, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".feature-cards",
            start: "top 80%",
            end: "bottom 20%",
          },
        },
      )

      // Section glow effect
      gsap.fromTo(
        ".features-glow",
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".features-section",
            start: "top 70%",
          },
        },
      )
    }, cardsRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={cardsRef} className="py-20 px-6 relative features-section">
      {/* Section Glow Effect */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="features-glow w-[800px] h-[600px] bg-gradient-radial from-blue-500/8 via-blue-600/4 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-medium mb-4 text-white">MegaWorld as of 2025</h2>
        <p className="text-gray-300 mb-16 max-w-2xl mx-auto font-light text-lg leading-relaxed">
          Megaworld Smart City is a future-ready urban development built on innovation, sustainability, and intelligent
          design.
        </p>

        <div className="grid md:grid-cols-3 gap-8 feature-cards">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="feature-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-6">
                <Image
                  src="/images/house.png"
                  alt="House Icon"
                  width={64}
                  height={64}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-2xl font-medium mb-4 text-white">500+ Hectares</h3>
              <p className="text-gray-300 leading-relaxed font-light">
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
