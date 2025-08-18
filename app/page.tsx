"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "./hero/page";
import About from "./about/page";
import Services from "./services/page";
import Community from "./community/page";
import Features from "./features/page";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import BackgroundElements from "./components/BackgroundElements";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set("body", { overflow: "visible" });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-visible relative">
      <Navigation />
      <Hero />
      <Features />
      <About />
      <Services />
      <Community />
      <BackgroundElements />
      <Footer />
    </div>
  );
}
