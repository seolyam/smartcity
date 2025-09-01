"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const galleryImages = [
  {
    src: "/images/megaworld1.png",
    alt: "MegaWorld McDonald's Building",
    title: "Modern Commercial Architecture",
  },
  {
    src: "/images/megaworld2.png",
    alt: "MegaWorld The Upper East Entertainment District",
    title: "Vibrant Entertainment Hub",
  },
  {
    src: "/images/megaworld3.png",
    alt: "MegaWorld Aerial City View at Sunset",
    title: "Smart City Development",
  },
  {
    src: "/images/megaworld4.png",
    alt: "MegaWorld The Upper East House",
    title: "Premium Residential Living",
  },
  {
    src: "/images/megaworld5.png",
    alt: "MegaWorld Landers Superstore",
    title: "Retail & Commercial Spaces",
  },
];

export default function Gallery() {
  // Use scroll animation hook with .gallery-animate
  useScrollAnimation([
    {
      trigger: ".gallery-animate",
      target: ".gallery-animate",
      stagger: 0.2,
      start: "top 80%",
    },
  ]);

  // Optional: Add fallback fade-in with CSS
  useEffect(() => {
    const elements = document.querySelectorAll(".gallery-animate");
    elements.forEach((el, index) => {
      el.classList.add("animate-fade-in-up");
      (el as HTMLElement).style.animationDelay = `${index * 0.2}s`;
    });
  }, []);

  return (
    <section className="relative py-20 px-4 md:px-8 min-h-screen flex items-center justify-center bg-black">
      <div className="max-w-6xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-16 gallery-animate">
          <h1 className="text-4xl md:text-6xl font-garamond mb-4 text-white">
            MegaWorld Gallery
          </h1>
          <p className="text-lg md:text-xl font-poppins text-gray-300 max-w-2xl mx-auto">
            Explore the stunning architecture and vibrant lifestyle of MegaWorld
            Smart City
          </p>
        </div>

        {/* Carousel */}
        <div className="gallery-animate">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <div className="relative group overflow-hidden rounded-lg bg-gray-900/50 backdrop-blur-sm border border-white/10">
                      <div className="aspect-[4/3] relative">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          priority={index === 0} // first image loads faster
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <div className="p-4">
                        <h3 className="font-garamond text-lg text-white mb-2">
                          {image.title}
                        </h3>
                        <p className="font-poppins text-sm text-gray-400">
                          {image.alt}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-white/10 border-white/20 text-white hover:bg-white/20 -left-12" />
            <CarouselNext className="bg-white/10 border-white/20 text-white hover:bg-white/20 -right-12" />
          </Carousel>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 gallery-animate">
          <p className="font-poppins text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From modern commercial buildings to vibrant entertainment districts,
            MegaWorld Smart City represents the future of urban living with
            sustainable design and innovative architecture.
          </p>
        </div>
      </div>
    </section>
  );
}
