"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export default function Community() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".community-title",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: ".community-hub",
            start: "top 80%",
            toggleActions: "play reverse play reverse",
          },
        },
      )

      gsap.fromTo(
        ".community-subtitle",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.0,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: ".community-hub",
            start: "top 78%",
            toggleActions: "play reverse play reverse",
          },
        },
      )

      gsap.fromTo(
        ".community-search",
        { opacity: 0, y: 40, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.0,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: ".community-hub",
            start: "top 76%",
            toggleActions: "play reverse play reverse",
          },
        },
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="py-44 md:py-56 px-6 community-hub relative">
      {/* Subtle section glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none -z-10">
        <div className="w-[700px] h-[500px] bg-gradient-radial from-blue-500/12 via-blue-600/6 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-20">
        <h2 className="community-title text-4xl md:text-6xl font-semibold mb-4 text-white">The Community Hub</h2>
        <p className="community-subtitle text-gray-300 mb-12 text-xl font-light">Ask Something</p>
        <div className="community-search max-w-2xl mx-auto">
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
  )
}
