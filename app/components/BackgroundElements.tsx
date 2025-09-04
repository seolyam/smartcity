"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";

export default function BackgroundElements() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [windowHeight, setWindowHeight] = useState(0);
  const [documentHeight, setDocumentHeight] = useState(0);
  const animationFrameRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    setMounted(true);

    if (typeof window !== "undefined") {
      setWindowHeight(window.innerHeight);
      setDocumentHeight(document.documentElement.scrollHeight);

      const handleResize = () => {
        setWindowHeight(window.innerHeight);
        setDocumentHeight(document.documentElement.scrollHeight);
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".grid-main", {
        backgroundPosition: "2px 2px",
        duration: 20,
        ease: "none",
        repeat: -1,
        yoyo: true,
      });
    }, gridRef);
    return () => ctx.revert();
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    animationFrameRef.current = requestAnimationFrame(() => {
      setMousePos({ x: e.clientX, y: e.clientY + window.scrollY });
    });
  }, []);

  const handleScroll = useCallback(() => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    animationFrameRef.current = requestAnimationFrame(() => {
      setScrollY(window.scrollY);
      setMousePos((prev) => ({
        ...prev,
        y: prev.y - scrollY + window.scrollY,
      }));
    });
  }, [scrollY]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [handleMouseMove, handleScroll]);

  useEffect(() => {
    if (mounted) {
      gsap.to(".flashlight", {
        background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.15) 0%, transparent 200px)`,
        duration: 0.4,
        ease: "power2.out",
      });
    }
  }, [mousePos, mounted]);

  const scrollSpeed = 0.5;
  const gridOffset = scrollY * scrollSpeed;

  const visibleWindowHeight = 50;
  const windowTop = windowHeight ? (gridOffset / windowHeight) * 100 : 0;
  const windowBottom = windowTop + visibleWindowHeight;

  return (
    <>
      <div
        ref={gridRef}
        className="fixed inset-0 w-full h-full pointer-events-none z-0"
      >
        <div className="absolute inset-0 bg-black" />
        <div
          className="absolute inset-0 grid-main"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: `${100 / 11.5}vw calc(100vh / 7)`,
          }}
        />
        // curtain effect
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(
              to bottom,
              transparent 0%,
              transparent ${Math.max(0, Math.min(100, windowTop))}%,
              black ${Math.max(0, Math.min(100, windowTop))}%,
              black ${Math.min(100, windowBottom)}%,
              transparent ${Math.min(100, windowBottom)}%,
              transparent 100%
            )`,
          }}
        />
        <div className="absolute top-0 left-0 right-0 h-[40vh] bg-gradient-to-b from-black/30 to-transparent" />
        <div className="absolute top-0 left-0 w-[50vw] h-[50vh] bg-gradient-radial from-transparent via-transparent to-black/40 rounded-full blur-3xl" />
        <div className="absolute top-0 right-0 w-[50vw] h-[50vh] bg-gradient-radial from-transparent via-transparent to-black/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[50vw] h-[50vh] bg-gradient-radial from-transparent via-transparent to-black/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[50vw] h-[50vh] bg-gradient-radial from-transparent via-transparent to-black/40 rounded-full blur-3xl" />
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(circle at center, rgba(0,0,0,0) 65%, rgba(0,0,0,0.7) 90%, rgba(0,0,0,1) 100%),
              radial-gradient(circle at center, rgba(0,0,0,0) 50%, rgba(0,0,0,0.5) 100%)
            `,
            pointerEvents: "none",
          }}
        />
      </div>
      //flashlight
      {mounted && (
        <div
          className="absolute top-0 left-0 w-full flashlight pointer-events-none z-50"
          style={{
            height: `${Math.max(documentHeight, windowHeight)}px`,
            mixBlendMode: "screen",
            background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.15) 0%, transparent 200px)`,
          }}
        />
      )}
    </>
  );
}
