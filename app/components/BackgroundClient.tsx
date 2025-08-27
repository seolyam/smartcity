"use client";

import dynamic from "next/dynamic";

const BackgroundElements = dynamic(() => import("./BackgroundElements"), {
  ssr: false,
});

export default function BackgroundClient() {
  return <BackgroundElements />;
}
