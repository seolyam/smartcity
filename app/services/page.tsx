"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Services() {
  const services = [
    {
      title: "Energy-Efficient Lighting & Solar Streetlights",
      desc: "Sustainable and cost-effective lighting solutions that reduce energy use and keep the city bright and eco-friendly.",
      img: "/images/lighting.png",
    },
    {
      title: "Smart EV Charging",
      desc: "Convenient, fast, and smart charging stations across the city to support the transition to electric mobility.",
      img: "/images/ev-charging.png",
    },
    {
      title: "Fiber Optic Connectivity & Free Public Wi-Fi",
      desc: "High-speed fiber optic internet and reliable free public Wi-Fi for seamless connectivity everywhere.",
      img: "/images/connectivity.png",
    },
  ];

  const animationTargets = [
    {
      trigger: "#services-title",
      target: "#services-title",
      start: "top 85%",
    },
    {
      trigger: "#services-desc",
      target: "#services-desc",
      start: "top 80%",
    },
    {
      trigger: "#services-cards",
      target: "#services-cards .service-card",
      stagger: 0.3,
      start: "top 75%",
    },
  ];

  const comp = useScrollAnimation(animationTargets);

  return (
    <div ref={comp}>
      <section className="py-44 md:py-52 px-6 relative">
        <div className="absolute top-10 right-10 w-36 h-36 bg-white/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 left-16 w-28 h-28 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute top-1/3 left-8 w-20 h-20 bg-white/12 rounded-full blur-xl pointer-events-none" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <div className="w-[600px] h-[400px] bg-gradient-radial from-[#6F8EC8]/20 via-[#6F8EC8]/10 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h2
            id="services-title"
            className="text-4xl md:text-5xl font-garamond font-semibold mb-4 text-white"
          >
            Mega World Smart Services
          </h2>

          <p
            id="services-desc"
            className="text-gray-300 mb-16 max-w-2xl mx-auto font-poppins font-light text-lg leading-relaxed"
          >
            Explore essential services designed to provide convenience,
            sustainability, and a high quality of life in Megaworld Smart City.
          </p>

          <div id="services-cards" className="grid md:grid-cols-3 gap-8">
            {services.map((item, index) => (
              <div
                key={index}
                className="service-card bg-white/5 backdrop-blur-sm border border-white/12 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-20 h-20 mx-auto mb-6 relative">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </div>

                <h3 className="text-2xl font-garamond font-medium mb-4 text-white">
                  {item.title}
                </h3>

                <p className="text-gray-300 leading-relaxed font-poppins font-light">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
