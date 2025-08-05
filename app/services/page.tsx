"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"
import Image from "next/image"

gsap.registerPlugin(ScrollTrigger)

export default function Services() {
  const servicesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Service cards animation
      gsap.fromTo(
        ".service-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".service-cards",
            start: "top 80%",
          },
        },
      )

      // Services section glow effect
      gsap.fromTo(
        ".services-glow",
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".services-section",
            start: "top 70%",
          },
        },
      )
    }, servicesRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={servicesRef} className="py-20 px-6 relative services-section">
      {/* Section Glow Effect */}
      <div className="absolute top-1/2 right-1/4 transform translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="services-glow w-[700px] h-[500px] bg-gradient-radial from-blue-500/7 via-blue-600/4 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-medium text-center mb-16 text-white">MegaWorld's Smart Services</h2>

        <div className="grid md:grid-cols-3 gap-8 service-cards">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="service-card bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
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
              <h3 className="text-2xl font-medium mb-6 text-center text-white">5G Wi-Fi</h3>
              <div className="flex gap-3 justify-center">
                <Button className="bg-blue-600 hover:bg-blue-700 font-medium transition-all duration-300">
                  Explore
                </Button>
                <Button
                  variant="outline"
                  className="border-gray-400 text-white hover:bg-white/10 bg-transparent font-medium transition-all duration-300"
                >
                  About
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
