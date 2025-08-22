"use client";

import { useRef, useEffect, useMemo } from "react";
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

  const scrollTrigText = useMemo(() => {
    return (trigger: string, target: string, stag?: number, start?: string) => {
      gsap.fromTo(
        target,
        {
          y: 250,
          opacity: 0,
        },
        {
          scrollTrigger: {
            start: start || "top bottom",
            trigger: trigger as string,
            toggleActions: "restart none none reset",
            fastScrollEnd: true,
            preventOverlaps: true,
          },
          opacity: 1,
          y: 0,
          duration: 1.5,
          stagger: stag,
          ease: "power4.out",
        }
      );
    };
  }, []);

  const memoizedTargets = useMemo(() => targets, [JSON.stringify(targets)]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      memoizedTargets.forEach(({ trigger, target, stagger, start }) => {
        scrollTrigText(trigger, target || trigger, stagger, start);
      });
    }, comp);

    return () => ctx.revert();
  }, [memoizedTargets, scrollTrigText]);

  return comp;
};
