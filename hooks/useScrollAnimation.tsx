"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollAnimationTarget {
  trigger: string;
  target: string;
  stagger?: number;
  start?: string;
}

export const useScrollAnimation = (targets: ScrollAnimationTarget[]) => {
  const comp = useRef<HTMLDivElement>(null);

  function scrollTrigText(
    trigger: string,
    target: string,
    stag?: number,
    start?: string
  ) {
    gsap.fromTo(
      target,
      {
        y: 250,
        opacity: 0,
      },
      {
        scrollTrigger: {
          markers: process.env.NODE_ENV === "production",
          start: start || "top bottom",
          trigger: trigger as string,
          toggleActions: "restart none none reset",
        },
        opacity: 1,
        y: 0,
        duration: 1.5,
        stagger: stag,
        ease: "power4.out",
      }
    );
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      targets.forEach(({ trigger, target, stagger, start }) => {
        scrollTrigText(trigger, target || trigger, stagger, start);
      });
    }, comp);

    return () => ctx.revert();
  }, [targets]);

  return comp;
};
