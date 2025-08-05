"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export default function Community() {
  const communityRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Community hub search animation
      gsap.fromTo(
        ".community-search",
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".community-hub",
            start: "top 60%",
          },
        },
      )

      // Community glow effect - the main feature
      gsap.fromTo(
        ".community-glow",
        { opacity: 0, scale: 0.6 },
        {
          opacity: 1,
          scale: 1,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".community-hub",
            start: "top 70%",
          },
        },
      )
    }, communityRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={communityRef} className="py-20 px-6 community-hub relative">
      {/* Community Hub Glow Effect - Centered behind content */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="community-glow w-[900px] h-[700px] bg-gradient-radial from-blue-500/15 via-blue-600/8 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-medium mb-4 text-white">The Community Hub</h2>
        <p className="text-gray-300 mb-12 text-xl font-light">Ask Something</p>

        <div className="community-search max-w-2xl mx-auto mb-20">
          <div className="relative">
            <Input
              placeholder="Search something..."
              className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 h-14 text-lg px-6 pr-12 backdrop-blur-sm rounded-lg transition-all duration-300 focus:bg-white/10 focus:border-white/30"
            />
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
        </div>
      </div>
    </section>
  )
}
