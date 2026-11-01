import { useCallback, useEffect, useState } from "react";
import { Reveal } from "./Reveal";
import { useInView } from "@/hooks/use-in-view";
import orgFinancial from "@/assets/alfie-org-financial.jpg";
import orgInsurance from "@/assets/alfie-org-insurance.jpg";
import orgEnterprise from "@/assets/alfie-org-enterprise.jpg";
import orgGovernment from "@/assets/alfie-org-government.jpg";

/* ---------------- organizations showcase ---------------- */

const organizations = [
  {
    name: "Financial Institutions",
    text: "Financial intelligence infrastructure for the institutions building and delivering financial services.",
    details: "From fintechs and payment providers to banks, investment firms, and wealth managers, Alfie provides financial data processing, transaction categorization, reasoning, forecasting, and conversational intelligence through APIs and SDKs. It gives product and technology teams the intelligence layer to build smarter financial products without assembling complex data and modelling infrastructure from scratch.",
    image: orgFinancial,
  },
  {
    name: "Insurance",
    text: "Better financial evidence. More informed decisions.",
    details: "Underwriting and claims processes depend on understanding complex financial information. Alfie analyzes statements, documents, and transaction histories, extracts relevant information, identifies patterns, and produces traceable findings with supporting evidence. This helps reduce manual review, improve consistency, and support more informed decisions while maintaining an auditable record.",
    image: orgInsurance,
  },
  {
    name: "Enterprise",
    text: "Complex financial operations, easier to understand and act on.",
    details: "Finance teams operate across ledgers, banks, entities, and spreadsheets. Alfie connects financial information across these environments to support reconciliation, identify anomalies, answer questions in natural language, and prepare or initiate authorized workflows. It gives organizations a more connected view of their financial operations and helps teams move from analysis to action.",
    image: orgEnterprise,
  },
  {
    name: "Government",
    text: "Financial analysis at scale, with intelligent workflows.",
    details: "Government organizations manage complex financial information across departments, programs, and public services. Alfie helps review, classify, reconcile, and explain financial activity at scale, supporting analysis, reporting, and operational workflows. Its architecture can support deployment, data residency, access controls, and audit requirements appropriate to regulated public-sector environments.",
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

            <div className="alfie-image-frame relative h-[300px] overflow-hidden rounded-2xl md:h-[440px]">
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
                  <p className="absolute bottom-7 left-7 right-7 text-lg leading-relaxed text-primary-foreground/90">
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
            <div className="alfie-image-frame relative mt-8 overflow-hidden rounded-2xl">
              <img
                src={organizations[expanded].image}
                alt={organizations[expanded].name}
                className="h-[320px] w-full object-cover md:h-[560px]"
              />
            </div>
            <p className="mt-8 max-w-3xl text-lg leading-relaxed text-primary-foreground/90">{organizations[expanded].details}</p>
          </div>
        )}
      </div>
    </section>
  );
}

