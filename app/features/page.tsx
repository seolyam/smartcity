"use client";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Features() {
  const features = [
    {
      title: "McDonald's",
      desc: "Global fast-food chain providing quick service and convenience for the smart city community.",
      img: "/images/mcdo.png",
    },
    {
      title: "Landers",
      desc: "A premium membership shopping experience offering wholesale products and exclusive deals.",
      img: "/images/landers.png",
    },
    {
      title: "One Regis",
      desc: "A modern residential condominium providing upscale living in the heart of the smart city.",
      img: "/images/oneregis.png",
    },
  ];

  const animationTargets = [
    {
      trigger: "#features-title",
      target: "#features-title",
      start: "top 85%",
    },
    {
      trigger: "#features-desc",
      target: "#features-desc",
      start: "top 80%",
    },
    {
      trigger: "#features-cards",
      target: "#features-cards .feature-card",
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
          <div className="w-[600px] h-[400px] bg-gradient-radial from-blue-500/8 via-blue-600/4 to-transparent rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h2
            id="features-title"
            className="text-4xl md:text-5xl font-garamond font-semibold mb-4 text-white"
          >
            MegaWorld as of <br /> 2025{" "}
          </h2>
          <p
            id="features-desc"
            className="text-gray-300 mb-16 max-w-2xl mx-auto font-poppins font-light text-lg leading-relaxed"
          >
            Megaworld Smart City is a future-ready urban development built on
            innovation, sustainability, and intelligent design.
          </p>

          <div id="features-cards" className="grid md:grid-cols-3 gap-8">
            {features.map((item, index) => (
              <div
                key={index}
                className="feature-card bg-white/5 backdrop-blur-sm border border-white/12 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-28 h-28 mx-auto mb-6 relative">
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
