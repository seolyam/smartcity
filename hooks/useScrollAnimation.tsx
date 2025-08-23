"use client";

import { useRef, useEffect, useMemo, useCallback } from "react";
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

  const scrollTrigText = useCallback(
    (trigger: string, target: string, stag?: number, start?: string) => {
      gsap.fromTo(
        target,
        {
          y: 150,
          opacity: 0,
        },
        {
          scrollTrigger: {
            start: start || "top bottom",
            trigger: trigger as string,
            toggleActions: "restart none none reset",
            fastScrollEnd: true,
            preventOverlaps: true,
            invalidateOnRefresh: false,
            refreshPriority: -1,
          },
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: stag,
          ease: "power3.out",
          force3D: true,
        }
      );
    },
    []
  );

  const memoizedTargets = useMemo(() => targets, [targets]);

  useEffect(() => {
    if (!comp.current) return;

    const ctx = gsap.context(() => {
      memoizedTargets.forEach(({ trigger, target, stagger, start }) => {
        scrollTrigText(trigger, target || trigger, stagger, start);
      });
    }, comp);

    return () => {
      ctx.revert();
      ScrollTrigger.refresh();
    };
  }, [memoizedTargets, scrollTrigText]);

  return comp;
};
