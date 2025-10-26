"use client";

import { Button } from "@/components/common";

import { NavMenu } from "./navMenu";
import { NavigationSheet } from "./navSheet";
import ThemeToggle from "./themeToggle";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { LogoMain } from "@/components/shared/logo/main";
import Link from "next/link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "h-16 bg-background border-b border-accent fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled && "bg-background/80 backdrop-blur-lg shadow-md"
      )}
    >
      <div className="h-full flex items-center justify-between max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6">
        <LogoMain />

        {/* Desktop Menu */}
        <NavMenu className="hidden lg:block" />

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button variant="outline" className="hidden sm:inline-flex" asChild>
            <Link href="/signin">Sign In</Link>
          </Button>
          <Button className="hidden sm:inline-flex">Get Started</Button>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
