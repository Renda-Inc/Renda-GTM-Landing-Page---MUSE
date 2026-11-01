import { useEffect, useState } from "react";
import { Reveal } from "./Reveal";
import capIntelligence from "@/assets/alfie-cap-intelligence.jpg";
import capAssistant from "@/assets/alfie-cap-assistant.jpg";
import capActions from "@/assets/alfie-cap-actions.jpg";
import capPlatform from "@/assets/alfie-cap-platform.jpg";

/* ---------------- capabilities carousel ---------------- */

const capabilities = [
  {
    title: "Intelligence",
    text: "Financial context, analysis, reasoning, forecasting and insights.",
    image: capIntelligence,
  },
  {
    title: "Assistant",
    text: "Conversational financial intelligence for customers and employees.",
    image: capAssistant,
  },
  {
    title: "Actions",
    text: "Connect intelligence to authorized workflows and systems.",
    image: capActions,
  },
  {
    title: "Platform",
    text: "APIs, SDKs, integrations and infrastructure for building with Alfie.",
    image: capPlatform,
  },
];

export default function Capabilities() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setActive((v) => (v + 1) % capabilities.length), 5000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="capabilities" className="scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Alfie: One layer. Four ways to build with it.
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-white/90">
            Intelligence for your products. Infrastructure for your teams. Every capability shares the same financial
            understanding underneath.
          </p>
        </Reveal>

        <Reveal className="mt-14">
          <div className="alfie-image-frame relative h-[380px] w-full overflow-hidden rounded-2xl md:h-[560px]">
            {capabilities.map((cap, i) => (
              <div
                key={cap.title}
                className={`absolute inset-0 transition-all duration-[1100ms] ease-out ${
                  active === i ? "scale-100 opacity-100" : "scale-[1.04] opacity-0"
                }`}
                aria-hidden={active !== i}
              >
                <img src={cap.image} alt={cap.title} className="h-full w-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/90 via-[#000000]/25 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 md:bottom-12 md:left-12">
                  <p className="text-2xl font-semibold text-white md:text-4xl">{cap.title}</p>
                  <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-[#E0E0E0] md:text-lg">{cap.text}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
          {capabilities.map((cap, i) => (
            <button
              key={cap.title}
              type="button"
              onClick={() => setActive(i)}
              className={`text-[15px] transition-colors ${
                active === i ? "text-white" : "text-white/90 hover:text-white"
              }`}
            >
              {cap.title}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

