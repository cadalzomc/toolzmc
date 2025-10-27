"use client";

import { cn } from "@/lib/utils";
import { Loader } from "lucide-react";
import { useEffect } from "react";

interface IFullScreenLoaderSpinner {
  className?: string;
  parentClassName?: string;
}
export const FullScreenLoaderSpinner = ({ className, parentClassName }: IFullScreenLoaderSpinner) => {
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalStyle; // restore on unmount
    };
  }, []);

  return (
    <div
      className={cn(
        "fixed  inset-0 bg-background flex z-900 items-center justify-center min-h-screen",
        parentClassName
      )}
    >
      <Loader className={cn("w-7 h-7 animate-spin", className)} />
    </div>
  );
};
