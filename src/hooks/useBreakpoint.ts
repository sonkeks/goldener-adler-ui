import {useEffect, useState } from "react";

const BREAKPOINTS = {
    xs: 480,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536,
  };

type Breakpoint = keyof typeof BREAKPOINTS;

export default function useBreakpoint() {
  const getBreakpoint = (): Breakpoint => {
    const width = window.innerWidth;
    if (width <= BREAKPOINTS.xs) return "xs";
    if (width <= BREAKPOINTS.sm) return "sm";
    if (width <= BREAKPOINTS.md) return "md";
    if (width <= BREAKPOINTS.lg) return "lg";
    if (width <= BREAKPOINTS.xl) return "xl";
    if (width <= BREAKPOINTS["2xl"]) return "2xl";
    return "2xl"; // fallback for large screens
  };
  
  const [breakpoint, setBreakpoint] = useState<Breakpoint>(getBreakpoint);
  
  useEffect(() => {
    const handleResize = () => {
      const currentBreakpoint = getBreakpoint();
      setBreakpoint((prevBreakpoint) => (prevBreakpoint === currentBreakpoint ? prevBreakpoint : currentBreakpoint))
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  return breakpoint;
}

