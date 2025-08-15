"use client"

import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" },
  viewport: { once: true, margin: "-100px" },
}

const fadeInUpDelay = (delay: number) => ({
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease: "easeOut" },
  viewport: { once: true, margin: "-100px" },
})

export default function Community() {
  return (
    <section className="py-44 md:py-56 px-6 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <div className="w-[700px] h-[500px] bg-gradient-radial from-blue-500/12 via-blue-600/6 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2
          className="text-4xl md:text-6xl font-serif font-semibold mb-4 text-white"
          style={{ textShadow: "0 0 30px rgba(255, 255, 255, 0.4)" }}
          {...fadeInUp}
        >
          The Community Hub
        </motion.h2>

        <motion.p
          className="text-gray-300 mb-12 text-xl font-light"
          style={{ textShadow: "0 0 15px rgba(255, 255, 255, 0.2)" }}
          {...fadeInUpDelay(0.2)}
        >
          Ask Something
        </motion.p>

        <motion.div className="max-w-2xl mx-auto" {...fadeInUpDelay(0.4)}>
          <div className="relative">
            <Input
              placeholder="Search something..."
              className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 h-14 text-lg px-6 pr-12 backdrop-blur-sm rounded-lg transition-all duration-300 focus:bg-white/10 focus:border-white/30"
            />
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
