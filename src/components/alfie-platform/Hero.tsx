import { useEffect, useRef } from "react";
import heroImage from "@/assets/alfie-hero.jpg";
import RollingHeadline from "./RollingHeadline";
import ChatDemo from "./ChatDemo";
import { Reveal } from "./Reveal";

/* ---------------- hero ---------------- */

export default function Hero() {
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!imgRef.current) return;
      const rect = imgRef.current.parentElement?.getBoundingClientRect();
      if (!rect) return;
      const offset = Math.max(-60, Math.min(60, (window.innerHeight - rect.top) * 0.06));
      imgRef.current.style.transform = `translateY(${offset}px) scale(1.12)`;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="pt-36 md:pt-44">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 text-center">
        <RollingHeadline text={["The intelligence layer for financial", "systems."]} />
        <Reveal delay={200}>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#E0E0E0]">
            Alfie gives organizations the ability to understand financial information, reason across complex financial
            context, and turn intelligence into action.
          </p>
        </Reveal>
        <Reveal delay={320} className="mt-10 w-full max-w-2xl">
          <ChatDemo />
        </Reveal>
        <Reveal delay={420}>
          <p className="mt-10 text-[14px] text-white/90">
            For financial institutions, fintechs, enterprises, and government.
          </p>
        </Reveal>
      </div>

      <Reveal className="mt-20 md:mt-28">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="alfie-image-frame relative aspect-[16/9] w-full overflow-hidden md:aspect-[21/9]">
            <img
              ref={imgRef}
              src={heroImage}
              alt="Financial intelligence infrastructure"
              className="h-full w-full object-cover will-change-transform"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#000000] via-transparent to-[#000000]" />
          </div>
        </div>
      </Reveal>
    </section>
  );
}

