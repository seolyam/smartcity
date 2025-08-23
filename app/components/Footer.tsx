"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);
  const copyrightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(
        [
          titleRef.current,
          linksRef.current,
          contactRef.current,
          socialRef.current,
          copyrightRef.current,
        ],
        {
          opacity: 0,
          y: 50,
        }
      );

      gsap.to(
        [
          titleRef.current,
          linksRef.current,
          contactRef.current,
          socialRef.current,
          copyrightRef.current,
        ],
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="py-16 px-6 border-t border-white/10 relative bg-black/50"
    >
      <div className="absolute top-10 left-20 w-40 h-40 bg-white/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-16 w-32 h-32 bg-white/6 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/10 rounded-full blur-xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div ref={titleRef} className="md:col-span-3">
            <h3 className="text-4xl md:text-5xl font-garamond font-light text-white leading-tight">
              MegaWorld
              <br />
              Smart
              <br />
              City
            </h3>
          </div>

          <div ref={linksRef} className="md:col-span-2 md:col-start-6">
            <div className="space-y-3">
              <p className="text-gray-300 font-poppins font-light hover:text-white transition-colors cursor-pointer">
                For designers
              </p>
              <p className="text-gray-300 font-poppins font-light hover:text-white transition-colors cursor-pointer">
                Articles
              </p>
              <p className="text-gray-300 font-poppins font-light hover:text-white transition-colors cursor-pointer">
                Contacts
              </p>
            </div>
          </div>

          <div
            ref={contactRef}
            className="md:col-span-2 md:col-start-6 md:row-start-2 mt-8 md:mt-0"
          >
            <p className="text-gray-400 mb-3 font-poppins text-sm tracking-wider">
              CONTACT US
            </p>
            <p className="text-gray-300 font-poppins font-light mb-1">
              +1 891 989-11-91
            </p>
            <p className="text-gray-300 font-poppins font-light">
              info@logoipsum.com
            </p>
          </div>

          <div
            ref={socialRef}
            className="md:col-span-4 md:col-start-9 md:row-start-2 flex flex-col justify-end items-end gap-4"
          >
            <p className="text-gray-400 font-poppins font-light text-right">
              © 2025 — Copyright
            </p>
            <div className="flex gap-3">
              <Button
                variant="outline"
                size="sm"
                className="border-gray-600 text-gray-300 hover:bg-white/10 bg-transparent font-poppins font-light transition-all duration-300 rounded-full px-4"
              >
                Instagram
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-gray-600 text-gray-300 hover:bg-white/10 bg-transparent font-poppins font-light transition-all duration-300 rounded-full px-4"
              >
                Facebook
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-gray-600 text-gray-300 hover:bg-white/10 bg-transparent font-poppins font-light transition-all duration-300 rounded-full px-4"
              >
                X
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
