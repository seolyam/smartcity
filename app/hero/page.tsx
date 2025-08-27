"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Image from "next/image";
import { useMemo, useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";

interface HeroProps {
  loaderComplete?: boolean;
}

export default function Hero({ loaderComplete = false }: HeroProps) {
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [showDesc, setShowDesc] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    if (!loaderComplete) return;

    const timers: number[] = [];

    timers.push(
      window.setTimeout(() => {
        timers.push(window.setTimeout(() => setShowSubtitle(true), 300));
        timers.push(window.setTimeout(() => setShowTitle(true), 600));
        timers.push(window.setTimeout(() => setShowDesc(true), 900));
        timers.push(window.setTimeout(() => setShowButtons(true), 1200));
      }, 300)
    );

    return () => {
      timers.forEach((id) => clearTimeout(id));
    };
  }, [loaderComplete]);

  const animationTargets = useMemo(
    () => [
      { trigger: "#hero-subtitle", target: "#hero-subtitle", start: "top 90%" },
      { trigger: "#hero-title", target: "#hero-title", start: "top 85%" },
      { trigger: "#hero-desc", target: "#hero-desc", start: "top 80%" },
      { trigger: "#hero-buttons", target: "#hero-buttons", start: "top 75%" },
    ],
    []
  );

  const comp: any = useScrollAnimation(animationTargets);
  const router = useRouter();

  const animateScrollTo = (targetY: number, duration = 3000) => {
    const startY = window.scrollY || window.pageYOffset;
    const diff = targetY - startY;
    if (diff === 0) return;
    let start: number | null = null;

    const linear = (t: number) => t;

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const t = Math.min(1, elapsed / duration);
      const eased = linear(t);
      window.scrollTo(0, Math.round(startY + diff * eased));
      if (elapsed < duration) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  const handleExplore = useCallback(() => {
    if (typeof window === "undefined") {
      router.push("/features");
      return;
    }

    const candidates = ["features-title", "features", "features-cards"];
    let el: HTMLElement | null = null;
    for (const id of candidates) {
      const found = document.getElementById(id);
      if (found) {
        el = found as HTMLElement;
        break;
      }
    }

    const SCROLL_OFFSET = 300;
    const SCROLL_DURATION_MS = 3000;

    if (el) {
      const rect = el.getBoundingClientRect();
      const targetTop = Math.max(0, rect.top + window.scrollY - SCROLL_OFFSET);
      animateScrollTo(targetTop, SCROLL_DURATION_MS);
    } else {
      router.push("/features");
    }
  }, [router]);

  return (
    <div ref={comp}>
      <section className="min-h-screen flex flex-col items-center justify-center px-6 relative py-28 md:py-36">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="-translate-y-56 md:-translate-y-72">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[500px] h-[400px] md:h-[500px] bg-gradient-radial to-transparent rounded-full blur-2xl" />
            <div className="relative">
              <div
                className="relative overflow-hidden"
                style={{
                  WebkitMaskImage:
                    "linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,0.25) 18%, rgba(0,0,0,0.6) 38%, rgba(0,0,0,1) 100%)",
                  maskImage:
                    "linear-gradient(to top, rgba(0,0,0,0) 0%, rgba(0,0,0,0.25) 18%, rgba(0,0,0,0.6) 38%, rgba(0,0,0,1) 100%)",
                  WebkitMaskSize: "100% 100%",
                  maskSize: "100% 100%",
                  WebkitMaskRepeat: "no-repeat",
                  maskRepeat: "no-repeat",
                }}
              >
                <Image
                  src="/images/3d.png"
                  alt="3D Futuristic Structure"
                  width={615}
                  height={615}
                  className="mx-auto block will-change-auto"
                  priority
                  sizes="(max-width: 768px) 300px, 615px"
                  quality={75}
                />

                <div
                  className="absolute bottom-0 left-0 right-0 pointer-events-none"
                  style={{
                    height: "30%",
                    background:
                      "linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.0) 100%)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="text-center max-w-5xl mx-auto relative z-30 mt-20 md:mt-28">
          <div
            id="hero-subtitle"
            className={`text-gray-200 font-poppins font-medium text-base md:text-lg transition-all duration-\[1200ms\] ease-out translate-y-6 will-change-transform ${
              showSubtitle
                ? "[clip-path:polygon(0%_0%,_100%_0%,_100%_100%,_0%_100%)] translate-y-0"
                : "[clip-path:polygon(0%_100%,_100%_100%,_100%_100%,_0%_100%)]"
            }`}
          >
            <p>MegaWorld: Innovation in Every Corner</p>
          </div>

          <div
            id="hero-title"
            className={`text-[40px] md:text-[64px] leading-[1.1] font-garamond font-semibold mb-6 text-white transition-all duration-\[1200ms\] ease-out translate-y-8 will-change-transform ${
              showTitle
                ? "[clip-path:polygon(0%_0%,_100%_0%,_100%_100%,_0%_100%)] translate-y-0"
                : "[clip-path:polygon(0%_100%,_100%_100%,_100%_100%,_0%_100%)]"
            }`}
          >
            <h1>
              A living city that evolves with its people and the world around
              it.
            </h1>
          </div>

          <div
            id="hero-desc"
            className={`text-lg md:text-xl text-gray-300 mb-10 max-w-[50%] mx-auto font-poppins font-light leading-relaxed transition-all duration-\[1200ms\] ease-out translate-y-6 will-change-transform ${
              showDesc
                ? "[clip-path:polygon(0%_0%,_100%_0%,_100%_100%,_0%_100%)] translate-y-0"
                : "[clip-path:polygon(0%_100%,_100%_100%,_100%_100%,_0%_100%)]"
            }`}
          >
            <p>
              Creating a dynamic ecosystem driven by intelligent systems, green
              infrastructure, and forward-thinking solutions.
            </p>
          </div>

          <div
            id="hero-buttons"
            className={`flex gap-4 justify-center transition-all duration-\[1200ms\] ease-out translate-y-4 will-change-transform ${
              showButtons
                ? "[clip-path:polygon(0%_0%,_100%_0%,_100%_100%,_0%_100%)] translate-y-0"
                : "[clip-path:polygon(0%_100%,_100%_100%,_100%_100%,_0%_100%)]"
            }`}
          >
            <Button
              onClick={handleExplore}
              className="bg-blue-600 hover:bg-blue-700 px-8 py-3 text-lg font-poppins font-medium rounded-lg transition-all duration-\[400ms\] shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
            >
              Explore
            </Button>

            <Button
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-3 text-lg bg-transparent font-poppins font-medium rounded-lg transition-all duration-\[400ms\]"
            >
              <Link href="/about">About</Link>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-1/2 left-1/2 -translate-x-1/2 z-10">
          <div className="absolute top-0 left-0 w-[900px] h-[900px] bg-gradient-radial from-[#6F8EC8]/30 via-[#6F8EC8]/15 to-transparent rounded-full blur-[220px] -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-gradient-radial from-[#6F8EC8]/20 via-[#6F8EC8]/10 to-transparent rounded-full blur-[180px] -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-radial from-[#6F8EC8]/15 via-[#6F8EC8]/8 to-transparent rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute top-12 left-12 w-56 h-56 bg-[#6F8EC8]/10 rounded-full blur-[180px]" />
          <div className="absolute top-24 -right-12 w-40 h-40 bg-[#6F8EC8]/10 rounded-full blur-[140px]" />
          <div className="absolute -top-6 right-16 w-32 h-32 bg-[#6F8EC8]/12 rounded-full blur-[120px]" />
          <div className="absolute top-32 -left-8 w-48 h-48 bg-[#6F8EC8]/8 rounded-full blur-[160px]" />
        </div>
      </section>
    </div>
  );
}
