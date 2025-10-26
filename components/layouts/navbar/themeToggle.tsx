"use client";

import { AnimatedThemeToggler, Button } from "@/components/common";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Button variant="outline" size="icon" />;
  }

  return <AnimatedThemeToggler />;
};

export default ThemeToggle;
