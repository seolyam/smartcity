"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Home, Zap, Settings, Users, Image } from "lucide-react";

export default function Navbar() {
  const navigationItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Features", href: "/features", icon: Zap },
    { name: "Services", href: "/services", icon: Settings },
    { name: "Gallery", href: "/gallery", icon: Image },
    { name: "Community", href: "/community", icon: Users },
  ];

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // scrolling down
        setShow(false);
      } else {
        // scrolling up
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 p-8 px-24 flex justify-between items-center transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <Link
        href="/"
        className="text-2xl font-semibold text-white hover:text-white/80 transition-colors duration-300 font-apple-garamond"
      >
        MegaWorld
      </Link>

      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10 transition-colors duration-300"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent className="w-[300px] sm:w-[350px] bg-black/95 backdrop-blur-md border-white/10">
          <SheetHeader className="mb-8">
            <SheetTitle className="text-white text-xl">Navigation</SheetTitle>
            <SheetDescription className="text-gray-400">
              Explore MegaWorld
            </SheetDescription>
          </SheetHeader>

          <div className="flex flex-col space-y-4">
            {navigationItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-3 p-3 rounded-lg text-white hover:bg-white/10 transition-all duration-300 group"
                >
                  <IconComponent className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
                  <span className="text-lg font-medium group-hover:text-white transition-colors">
                    {item.name}
                  </span>
                </Link>
              );
            })}
          </div>

          <div className="absolute bottom-6 left-6 right-6">
            <div className="border-t border-white/10 pt-6">
              <p className="text-sm text-gray-400 text-center">
                © 2024 MegaWorld
              </p>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
