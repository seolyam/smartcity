"use client";

import { useState, useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";

interface LoaderProps {
  onComplete?: () => void;
}

export const Loader = ({ onComplete }: LoaderProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = "hidden";

    const tl = gsap.timeline({
      delay: 0.5,
      ease: "power3.inOut",
    });

    tl.to(".text-load p", {
      duration: 1.5,
      opacity: 1,
      y: 0,
      stagger: 0.2,
    })
      .to(
        "#megaworld-logo",
        {
          duration: 1,
          opacity: 1,
          scale: 1,
        },
        "-=0.8"
      )
      .to(
        "#megaworld-logo, .text-load p",
        {
          duration: 0.8,
          opacity: 0,
          y: -20,
        },
        "+=0.5"
      )
      .to(
        ".loader-color.bg-black",
        {
          duration: 0.4,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          ease: "power2.easeInOut",
        },
        "-=0.3"
      )
      .to(
        ".loader-color.bg-blue-900",
        {
          duration: 0.4,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          ease: "power2.easeInOut",
        },
        "-=0.2"
      )
      .to(
        ".loader-color.bg-cyan-900",
        {
          duration: 0.4,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          ease: "power2.easeInOut",
        },
        "-=0.1"
      )
      .to("#loader-bg", {
        duration: 0.6,
        opacity: 0,
        onComplete: () => {
          setIsLoading(false);
          document.body.style.overflow = "visible";
          onComplete?.();
        },
      });
  }, [onComplete]);

  const divColors = ["bg-cyan-900", "bg-blue-900", "bg-black"];

  return isLoading ? (
    <>
      <div
        id="loader-bg"
        className="fixed top-0 left-0 z-50 grid h-screen w-screen place-items-center bg-black"
      >
        <div className="text-center">
          <div className="text-load z-10 flex gap-6 font-garamond text-2xl text-white justify-center [&>p]:opacity-0 [&>p]:translate-y-4">
            <p>Smart</p>
            <p>City</p>
            <p>Future</p>
          </div>
        </div>
      </div>
      {divColors.map((color, index) => (
        <div
          key={color}
          className={`${color} loader-color fixed top-0 left-0 z-[49] h-screen w-screen`}
          style={{
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          }}
        />
      ))}
    </>
  ) : null;
};
