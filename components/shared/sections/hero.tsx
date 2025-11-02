"use client";

import { Badge, Button } from "@/components/common";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import Placeholder from "@/public/svg/placeholder.svg";
import Image from "next/image";
import { BackgroundPattern } from "@/components/common";
import Link from "next/link";

export const HomeHero = () => {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] w-full flex items-center justify-center overflow-hidden border-b border-accent">
      <BackgroundPattern />

      <div className="max-w-(--breakpoint-xl) w-full flex flex-col lg:flex-row mx-auto items-center justify-between gap-y-14 gap-x-10 px-6 py-12 lg:py-0">
        <div className="max-w-2xl lg:max-w-xl">
          <Badge className="rounded-full py-1 border-none">Just released v1.0.0</Badge>
          <h1 className="mt-6 max-w-[20ch] text-3xl sm:text-5xl lg:text-[2.75rem] xl:text-5xl font-bold leading-[1.2]! tracking-tight">
            All-in-One Developer & Productivity Tools — Smarter, Faster, Online.
          </h1>
          <p className="mt-6 max-w-[60ch] sm:text-lg">
            Build, convert, and generate smarter — everything you need, all in one place. Free tools for everyone. Pro
            power for developers.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center gap-4">
            <Button size="lg" className="w-full sm:w-auto rounded-full text-base" asChild>
              <Link href="/auth/signup">
                Get Started <ArrowUpRight className="h-5! w-5!" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-full text-base shadow-none">
              <CirclePlay className="h-5! w-5!" /> Explore Tools
            </Button>
          </div>
        </div>
        <div className="relative max-w-2xl lg:max-w-lg xl:max-w-xl bg-accent rounded-xl aspect-square">
          <Image src={Placeholder.src} width={700} height={700} alt="" className="object-cover rounded-xl" />
        </div>
      </div>
    </section>
  );
};
