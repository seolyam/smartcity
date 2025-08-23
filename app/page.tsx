"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dynamic from "next/dynamic";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import BackgroundElements from "./components/BackgroundElements";
import { Loader } from "./components/Loader";

const Hero = dynamic(() => import("./hero/page"));
const About = dynamic(() => import("./about/page"));
const Services = dynamic(() => import("./services/page"));
const Community = dynamic(() => import("./community/page"));
const Features = dynamic(() => import("./features/page"));

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [loaderComplete, setLoaderComplete] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.history.scrollRestoration = "manual";
      window.scrollTo(0, 0);
    }

    const ctx = gsap.context(() => {
      gsap.set("body", { overflow: "visible" });
    });
    return () => ctx.revert();
  }, []);

  const handleLoaderComplete = () => {
    setLoaderComplete(true);
  };

  return (
    <>
      <Loader onComplete={handleLoaderComplete} />
      <div className="min-h-screen bg-black text-white overflow-visible relative">
        <Navigation />
        <Hero loaderComplete={loaderComplete} />
        <Features />
        <About />
        <Services />
        <Community />
        <BackgroundElements />
        <Footer />
      </div>
    </>
  );
}
