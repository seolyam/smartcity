"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"

gsap.registerPlugin(ScrollTrigger)

export default function Features() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  const features = [
    {
      title: "500+ Hectares",
      desc: "Expansive smart city development with integrated green spaces and sustainable infrastructure.",
    },
    {
      title: "5G Connectivity",
      desc: "Ultra-fast wireless network enabling IoT devices and smart city applications.",
    },
    {
      title: "200K+ Jobs",
      desc: "Employment opportunities across technology, business, and innovation sectors.",
    },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([titleRef.current, descRef.current], {
        opacity: 0,
        y: 60,
      })

      gsap.set(cardsRef.current?.children || [], {
        opacity: 0,
        y: 80,
        scale: 0.95,
      })

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 80%",
        onEnter: () => {
          const tl = gsap.timeline()

          tl.to(titleRef.current, {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power2.out",
          })
            .to(
              descRef.current,
              {
                opacity: 1,
                y: 0,
                duration: 1.0,
                ease: "power2.out",
              },
              "-=0.8",
            )
            .to(
              cardsRef.current?.children || [],
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 1.2,
                stagger: 0.3,
                ease: "power2.out",
              },
              "-=0.6",
            )
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-44 md:py-52 px-6 relative">
      <div className="absolute top-10 right-10 w-36 h-36 bg-white/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-16 w-28 h-28 bg-white/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute top-1/3 left-8 w-20 h-20 bg-white/12 rounded-full blur-xl pointer-events-none" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="w-[600px] h-[400px] bg-gradient-radial from-blue-500/8 via-blue-600/4 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 ref={titleRef} className="text-4xl md:text-5xl font-serif font-semibold mb-4 text-white">
          MegaWorld as of 2025
        </h2>

        <p ref={descRef} className="text-gray-300 mb-16 max-w-2xl mx-auto font-light text-lg leading-relaxed">
          Megaworld Smart City is a future-ready urban development built on innovation, sustainability, and intelligent
          design.
        </p>

        <div ref={cardsRef} className="grid md:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/12 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-6">
                <Image src="/images/house.png" alt="Feature Icon" width={64} height={64} />
              </div>

              <h3 className="text-2xl font-serif font-medium mb-4 text-white">{item.title}</h3>

              <p className="text-gray-300 leading-relaxed font-light">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
