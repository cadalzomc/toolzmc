"use client";

import { DotPattern, Particles } from "@/components/common";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

export const BackgroundPattern = () => {
  const { resolvedTheme } = useTheme();
  const isLightTheme = resolvedTheme === "light";

  return (
    <>
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={cn("mask-[radial-gradient(ellipse,rgba(0,0,0,0.3)_100%,black_20%)]", "dark:fill-slate-500")}
      />
      <Particles className="absolute inset-0" quantity={100} ease={70} color={isLightTheme ? "#000" : "#fff"} refresh />
    </>
  );
};
