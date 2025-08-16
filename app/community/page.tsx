"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Community() {
  const animationTargets = [
    {
      trigger: "#community-title",
      target: "#community-title",
      start: "top 85%",
    },
    {
      trigger: "#community-subtitle",
      target: "#community-subtitle",
      start: "top 80%",
    },
    {
      trigger: "#community-search",
      target: "#community-search",
      start: "top 75%",
    },
  ];

  const comp = useScrollAnimation(animationTargets);

  return (
    <div ref={comp}>
      <section className="py-44 md:py-56 px-6 relative">
        <div className="absolute bottom-1/2 left-1/2 -translate-x-1/2 z-10">
          {" "}
          <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-gradient-radial from-white/8 via-white/3 to-transparent rounded-full -translate-x-1/2 -translate-y-1/2" />{" "}
          <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-gradient-radial from-blue-400/20 via-blue-500/10 to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />{" "}
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-radial from-cyan-400/15 via-cyan-500/8 to-transparent rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2" />{" "}
          <div className="absolute top-12 left-12 w-48 h-48 bg-white/6 rounded-full blur-3xl" />{" "}
          <div className="absolute top-24 -right-12 w-32 h-32 bg-white/8 rounded-full blur-2xl" />{" "}
          <div className="absolute -top-6 right-16 w-24 h-24 bg-white/10 rounded-full blur-xl" />{" "}
          <div className="absolute top-32 -left-8 w-40 h-40 bg-white/7 rounded-full blur-3xl" />{" "}
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2
            id="community-title"
            className="text-4xl md:text-6xl font-garamond font-semibold mb-4 text-white"
          >
            The Community Hub
          </h2>

          <p
            id="community-subtitle"
            className="text-gray-300 mb-12 text-xl font-poppins font-light"
          >
            Ask Something
          </p>

          <div id="community-search" className="max-w-2xl mx-auto">
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
    </div>
  );
}
