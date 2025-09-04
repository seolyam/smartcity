"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
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
  const [slides, setSlides] = useState(() => [
    ...galleryImages,
    ...galleryImages,
  ]);
  const [api, setApi] = useState<CarouselApi | null>(null);
  const autoplayIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const AUTOPLAY_DELAY = 4000; // 4 seconds

  useScrollAnimation([
    {
      trigger: ".gallery-animate",
      target: ".gallery-animate",
      start: "top 80%",
    },
  ]);

  useEffect(() => {
    const elements = document.querySelectorAll(".gallery-animate");
    elements.forEach((el, index) => {
      el.classList.add("animate-fade-in-up");
      (el as HTMLElement).style.animationDelay = `${index * 0.2}s`;
    });
  }, []);

  const handleSelect = useCallback(() => {
    if (!api) return;
    const lastIndex = slides.length - 1;
    const current = api.selectedScrollSnap();
    if (current >= lastIndex - 3) {
      setSlides((prev) => [...prev, ...galleryImages]);
    }
  }, [api, slides.length]);

  // Autoplay functionality
  const startAutoplay = useCallback(() => {
    if (!api) return;

    autoplayIntervalRef.current = setInterval(() => {
      api.scrollNext();
    }, AUTOPLAY_DELAY);
  }, [api]);

  const stopAutoplay = useCallback(() => {
    if (autoplayIntervalRef.current) {
      clearInterval(autoplayIntervalRef.current);
      autoplayIntervalRef.current = null;
    }
  }, []);

  // Handle mouse events for autoplay pause/resume
  const handleMouseEnter = useCallback(() => {
    stopAutoplay();
  }, [stopAutoplay]);

  const handleMouseLeave = useCallback(() => {
    startAutoplay();
  }, [startAutoplay]);

  // Setup autoplay and event listeners
  useEffect(() => {
    if (!api) return;

    api.on("select", handleSelect);
    startAutoplay();

    return () => {
      api.off("select", handleSelect);
      stopAutoplay();
    };
  }, [api, handleSelect, startAutoplay, stopAutoplay]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopAutoplay();
    };
  }, [stopAutoplay]);

  return (
    <section className="relative py-20 px-4 md:px-8 min-h-screen flex items-center justify-center overflow-hidden">
      {/* Layered Radial Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[240px]"
          style={{
            width: 1400,
            height: 1400,
            background:
              "radial-gradient(circle, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.55) 28%, rgba(0,0,0,0.35) 48%, rgba(0,0,0,0.18) 66%, rgba(0,0,0,0.05) 82%, rgba(0,0,0,0) 100%)",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[200px]"
          style={{
            width: 1100,
            height: 1100,
            background:
              "radial-gradient(circle, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.42) 30%, rgba(0,0,0,0.22) 55%, rgba(0,0,0,0.1) 75%, rgba(0,0,0,0) 95%)",
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[160px]"
          style={{
            width: 900,
            height: 900,
            background:
              "radial-gradient(circle, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.34) 26%, rgba(0,0,0,0.18) 48%, rgba(0,0,0,0.06) 70%, rgba(0,0,0,0) 100%)",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto w-full z-10">
        <div className="text-center mb-16 gallery-animate">
          <h1 className="text-4xl md:text-6xl font-garamond mb-4 text-white">
            MegaWorld Gallery
          </h1>
          <p className="text-lg md:text-xl font-poppins text-gray-300 max-w-2xl mx-auto">
            Explore the stunning architecture and vibrant lifestyle of MegaWorld
            Smart City
          </p>
        </div>

        <div className="gallery-animate">
          <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Carousel
              opts={{
                align: "start",
                loop: false,
              }}
              setApi={setApi}
              className="w-full max-w-5xl mx-auto"
            >
              <CarouselContent>
                {slides.map((image, index) => (
                  <CarouselItem
                    key={index}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="p-2">
                      <div className="relative group overflow-hidden rounded-lg bg-gray-900/50 backdrop-blur-sm border border-white/10">
                        <div className="aspect-[4/3] relative">
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            priority={index === 0}
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            quality={90}
                          />
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
        </div>

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
