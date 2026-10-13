import { useCallback, useEffect, useState } from "react";
import { Reveal } from "./Reveal";
import { useInView } from "@/hooks/use-in-view";
import orgFinancial from "@/assets/alfie-org-financial.jpg";
import orgFintech from "@/assets/alfie-org-fintech.jpg";
import orgInsurance from "@/assets/alfie-org-insurance.jpg";
import orgEnterprise from "@/assets/alfie-org-enterprise.jpg";
import orgGovernment from "@/assets/alfie-org-government.jpg";

/* ---------------- organizations showcase ---------------- */

const organizations = [
  {
    name: "Financial institutions",
    text: "Build financial experiences that understand customers, not just accounts.",
    image: orgFinancial,
  },
  {
    name: "Fintechs",
    text: "Give financial products intelligence without building the entire intelligence layer themselves.",
    image: orgFintech,
  },
  {
    name: "Insurance",
    text: "Bring financial context and intelligence into underwriting, claims, risk, and customer experiences.",
    image: orgInsurance,
  },
  {
    name: "Enterprise",
    text: "Make complex financial operations easier to understand and act on.",
    image: orgEnterprise,
  },
  {
    name: "Government",
    text: "Help teams analyze financial information at scale and make complex workflows more intelligent.",
    image: orgGovernment,
  },
];

export default function Organizations() {
  const { ref, inView } = useInView<HTMLDivElement>(0.25);
  const [hovered, setHovered] = useState(0);
  const [expanded, setExpanded] = useState<number | null>(null);

  const close = useCallback(() => setExpanded(null), []);

  useEffect(() => {
    if (expanded === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [expanded, close]);

  return (
    <section id="organizations" className="scroll-mt-20 border-t border-white/[0.07] py-24 md:py-32">
      <div ref={ref} className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden">
          <h2
            className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-white transition-all duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] md:text-4xl"
            style={{
              transform: inView ? "translateX(0)" : "translateX(-8%)",
              opacity: inView ? 1 : 0,
              clipPath: inView ? "inset(0 0 0 0)" : "inset(0 100% 0 0)",
            }}
          >
            Built for organizations that operate on financial complexity.
          </h2>
        </div>
        <Reveal delay={200}>
          <p className="mt-5 max-w-xl text-lg text-white/90">
            Select an organization to see how the intelligence layer applies.
          </p>
        </Reveal>

        {expanded === null ? (
          <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-start">
            <div className="border-t border-white/[0.07]">
              {organizations.map((org, i) => (
                <button
                  key={org.name}
                  type="button"
                  onMouseEnter={() => setHovered(i)}
                  onFocus={() => setHovered(i)}
                  onClick={() => setExpanded(i)}
                  className={`flex w-full items-center justify-between border-b border-white/[0.07] py-6 text-left transition-colors ${
                    hovered === i ? "text-white" : "text-white/90"
                  }`}
                >
                  <span className="text-xl font-medium md:text-2xl">{org.name}</span>
                  <span className="text-[13px] text-white/90">0{i + 1}</span>
                </button>
              ))}
            </div>

            <div className="relative h-[300px] overflow-hidden rounded-2xl md:h-[440px]">
              {organizations.map((org, i) => (
                <div
                  key={org.name}
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    hovered === i ? "opacity-100" : "opacity-0"
                  }`}
                  aria-hidden={hovered !== i}
                >
                  <img src={org.image} alt={org.name} className="h-full w-full object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/90 to-transparent" />
                  <p className="absolute bottom-7 left-7 right-7 text-[15px] leading-relaxed text-[#E0E0E0]">
                    {org.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div
            className="mt-14 cursor-pointer animate-in fade-in duration-500"
            onClick={close}
            role="presentation"
          >
            <h3 className="text-2xl font-semibold text-white md:text-4xl">{organizations[expanded].name}</h3>
            <div className="mt-8 overflow-hidden rounded-2xl">
              <img
                src={organizations[expanded].image}
                alt={organizations[expanded].name}
                className="h-[320px] w-full object-cover md:h-[560px]"
              />
            </div>
            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-[#E0E0E0]">{organizations[expanded].text}</p>
            <p className="mt-6 text-[13px] text-white/90">Click anywhere or press Esc to go back.</p>
          </div>
        )}
      </div>
    </section>
  );
}

