import { useEffect, useRef, useState } from "react";
import businessHero from "@/assets/business-hero.jpg";
import businessAlfie from "@/assets/business-alfie.jpg";
import businessAccess from "@/assets/business-access.jpg";
import businessVision from "@/assets/business-vision.jpg";
import { Fade, Eyebrow, H2 } from "./BusinessUI";
import { SF_FONT } from "@/lib/typography";

/* ── One connected system: Bank → Spend → Manage → Understand ── */
const stages = [
  {
    stage: "Bank",
    title: "Business Account",
    desc: "The foundation. Where business money lives and moves.",
    image: businessHero,
  },
  {
    stage: "Spend",
    title: "Expense Management",
    desc: "Company spending captured and explained as it happens.",
    image: businessAlfie,
  },
  {
    stage: "Manage",
    title: "Bookkeeping & Tax Readiness",
    desc: "Records and obligations kept in order, not rebuilt at year end.",
    image: businessVision,
  },
  {
    stage: "Understand",
    title: "Financial Insights",
    desc: "A clear read on performance, cash flow, and what comes next.",
    image: businessAccess,
  },
];

const STEP = 360 / stages.length;

export default function ConnectedSystem() {
  const [rotation, setRotation] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [dragging, setDragging] = useState(false);
  const dragRef = useRef<{ startX: number; startOffset: number; moved: boolean } | null>(null);

  const active =
    ((Math.round(-(rotation + dragOffset) / STEP) % stages.length) + stages.length) % stages.length;

  useEffect(() => {
    if (dragging) return;
    const id = window.setInterval(() => setRotation((r) => r - STEP), 4000);
    return () => window.clearInterval(id);
  }, [dragging]);

  const snap = (offset: number) => {
    const delta = Math.round(offset / STEP) * STEP;
    setRotation((r) => r + delta);
    setDragOffset(0);
  };

  const onPointerDown = (e: React.PointerEvent) => {
    dragRef.current = { startX: e.clientX, startOffset: dragOffset, moved: false };
    setDragging(true);
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const drag = dragRef.current;
    if (!drag) return;
    const delta = e.clientX - drag.startX;
    if (Math.abs(delta) > 6) drag.moved = true;
    setDragOffset(drag.startOffset + delta * 0.4);
  };

  const onPointerUp = () => {
    if (!dragRef.current) return;
    if (Math.abs(dragOffset) > 36) {
      setRotation((r) => r + (dragOffset > 0 ? STEP : -STEP));
      setDragOffset(0);
    } else {
      snap(dragOffset);
    }
    dragRef.current = null;
    setDragging(false);
  };

  const total = rotation + dragOffset;
  const virtualIndex = -total / STEP;

  return (
    <section className="bg-[#111111] py-16 lg:py-24 overflow-hidden" style={{ fontFamily: SF_FONT }}>
      <Fade className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <Eyebrow light>One connected system</Eyebrow>
          <H2 light>Every part of your business finances, connected.</H2>
          <p className="mt-6 text-base md:text-lg text-white/80 font-medium leading-relaxed">
            Not five separate tools to switch between. One financial system, connected through
            Renda's banking infrastructure and Alfie.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-3" role="tablist" aria-label="Connected system stages">
          {stages.map((stage, index) => (
            <button
              key={stage.stage}
              type="button"
              role="tab"
              aria-selected={index === active}
              onClick={() => setRotation(-index * STEP)}
              className={`border-b py-2 text-sm md:text-base font-semibold transition-colors duration-300 ${
                index === active ? "border-primary text-white" : "border-transparent text-white/40 hover:text-white/70"
              }`}
            >
              {stage.stage}
            </button>
          ))}
        </div>

        {/* Perspective carousel */}
        <div
          className="mt-8 relative h-[520px] lg:h-[640px] select-none cursor-grab active:cursor-grabbing touch-pan-y"
          style={{ perspective: "1800px" }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          onPointerLeave={onPointerUp}
        >
          <div
            className="absolute inset-0"
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {stages.map((s, i) => {
              let distance = i - virtualIndex;
              while (distance > stages.length / 2) distance -= stages.length;
              while (distance < -stages.length / 2) distance += stages.length;
              const isActive = i === active;
              return (
                <div
                  key={s.stage}
                  className="absolute left-1/2 top-0 h-[520px] w-[82vw] max-w-[640px] lg:h-[640px]"
                  style={{
                    transform: `translateX(-50%) translateX(${distance * 58}%) translateZ(${-Math.abs(distance) * 150}px) rotateY(${distance * -24}deg) scale(${1 - Math.min(Math.abs(distance) * 0.12, 0.24)})`,
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                    transition: dragging ? "none" : "transform 0.9s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.5s ease, filter 0.5s ease",
                    opacity: isActive ? 1 : Math.abs(distance) < 1.6 ? 0.62 : 0,
                    filter: isActive ? "brightness(1)" : "brightness(0.62)",
                    zIndex: 10 - Math.round(Math.abs(distance) * 2),
                  }}
                >
                  <div className="relative h-full overflow-hidden rounded-3xl border border-white/15 bg-foreground shadow-2xl">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="absolute inset-0 h-full w-full object-cover"
                      draggable={false}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-foreground/80 via-foreground/35 to-transparent" />
                    <div className="relative flex h-full flex-col items-start p-8 text-left lg:p-12">
                      <h3 className="max-w-lg text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-white leading-[1.15]">
                        {s.title}
                      </h3>
                      <p className="mt-6 max-w-md text-base md:text-lg font-medium leading-relaxed text-white/85">
                        {s.desc}
                      </p>
                      <div className="mt-6 h-[3px] w-16 rounded-full bg-primary" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dots */}
        <div className="mt-8 flex justify-center gap-2" aria-label="Carousel position">
          {stages.map((s, i) => (
            <button
              key={s.stage}
              type="button"
              aria-label={s.title}
              onClick={() => setRotation(-i * STEP)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === active ? "w-6 bg-white" : "w-2 bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>

        <p className="mt-14 text-center text-sm font-medium text-white">
          Capabilities shown are part of the Renda Business roadmap and not yet available.
        </p>
      </Fade>
    </section>
  );
}

