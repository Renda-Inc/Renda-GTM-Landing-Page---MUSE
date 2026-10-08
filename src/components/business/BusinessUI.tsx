import { SF_FONT } from "@/lib/typography";
import type { ReactNode } from "react";
import { useFadeIn } from "@/hooks/use-fade-in";

export function Fade({ children, className = "" }: { children: ReactNode; className?: string }) {
  const { ref, isVisible } = useFadeIn();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
    >
      {children}
    </div>
  );
}

export function Divider() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="border-t border-border/70" />
    </div>
  );
}

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p className={`text-[15px] font-semibold tracking-[0.08em] mb-8 ${light ? "text-white" : "text-brand-orange"}`}>
      {children}
    </p>
  );
}

export function H2({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <h2
      className={`text-3xl md:text-4xl font-semibold tracking-tight transition-colors duration-300 leading-tight ${
        light ? "text-white/90 hover:text-white" : "text-black/80 hover:text-black"
      }`}
      style={{ fontFamily: SF_FONT }}
    >
      {children}
    </h2>
  );
}

