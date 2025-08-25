"use client";

import { useEffect, useState, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dynamic from "next/dynamic";
import Footer from "./components/Footer";
import BackgroundElements from "./components/BackgroundElements";
import { Loader } from "./components/Loader";
import Navbar from "./components/Navbar";

const Hero = dynamic(() => import("./hero/page"), {
  loading: () => <div className="min-h-screen" />,
});
const About = dynamic(() => import("./about/page"), {
  loading: () => <div className="min-h-[50vh]" />,
});
const Services = dynamic(() => import("./services/page"), {
  loading: () => <div className="min-h-[50vh]" />,
});
const Community = dynamic(() => import("./community/page"), {
  loading: () => <div className="min-h-[50vh]" />,
});
const Features = dynamic(() => import("./features/page"), {
  loading: () => <div className="min-h-[50vh]" />,
});

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [loaderComplete, setLoaderComplete] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.history.scrollRestoration = "manual";
      window.scrollTo(0, 0);
    }

    const ctx = gsap.context(() => {
      gsap.set("body", {
        overflow: "visible",

        force3D: true,
      });

      ScrollTrigger.config({
        autoRefreshEvents: "visibilitychange,DOMContentLoaded,load",
        ignoreMobileResize: true,
      });
    });

    return () => {
      ctx.revert();
      ScrollTrigger.killAll();
    };
  }, []);

  const handleLoaderComplete = useMemo(
    () => () => {
      setLoaderComplete(true);
    },
    []
  );

  return (
    <>
      <Loader onComplete={handleLoaderComplete} />
      <div className="min-h-screen bg-black text-white overflow-visible relative">
        <Navbar />
        <BackgroundElements />
        <Hero loaderComplete={loaderComplete} />
        <Features />
        <About />
        <Services />
        <Community />

        <Footer />
      </div>
    </>
  );
}
