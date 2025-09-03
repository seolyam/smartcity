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
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="relative p-6 px-8 md:px-24 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-semibold text-white hover:text-blue-400 transition-all duration-300 font-garamond"
        >
          MegaWorld
        </Link>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:bg-white/10 hover:text-blue-400 transition-all duration-300 rounded-lg"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>

          <SheetContent className="w-[300px] sm:w-[350px] bg-transparent backdrop-blur-xl flex flex-col border-none">
            <SheetHeader className="mb-8">
              <SheetTitle className="text-white text-xl font-garamond">
                Navigation
              </SheetTitle>
              <SheetDescription className="text-gray-400 font-poppins">
                Explore MegaWorld
              </SheetDescription>
            </SheetHeader>

            <div className="flex flex-col space-y-2 flex-1">
              {navigationItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center space-x-3 p-4 rounded-lg text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-300 group"
                  >
                    <IconComponent className="h-5 w-5 text-gray-400 group-hover:text-blue-400 transition-all duration-300" />
                    <span className="text-lg font-medium font-poppins group-hover:text-white transition-all duration-300">
                      {item.name}
                    </span>
                  </Link>
                );
              })}
            </div>

            <div className="flex items-center justify-center h-24">
              <p className="text-sm text-gray-400 text-center font-poppins">
                © 2025 MegaWorld
              </p>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
