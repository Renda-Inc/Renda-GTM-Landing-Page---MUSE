import { useState } from "react";

const SF_FONT =
  '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "SF Pro", system-ui, "Helvetica Neue", Arial, sans-serif';

type Node = {
  key: string;
  title: string;
  desc: string;
  /* percentage coordinates inside the diagram box */
  x: number;
  y: number;
};

const NODES: Node[] = [
  {
    key: "accounts",
    title: "Smart Accounts",
    desc: "SmartSpend and SenseSave, continuously understood by Alfie.",
    x: 14,
    y: 20,
  },
  {
    key: "card",
    title: "Adaptive Card",
    desc: "A card that learns from every purchase you make.",
    x: 86,
    y: 20,
  },
  {
    key: "payments",
    title: "Seamless Payments",
    desc: "Renda ID, QR and Interac e-Transfers, all in one place.",
    x: 14,
    y: 80,
  },
  {
    key: "savings",
    title: "Personalized Savings",
    desc: "Goals that adapt to your real financial position.",
    x: 86,
    y: 80,
  },
];

export default function AlfieSystemDiagram() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="mt-14">
      {/* ── Desktop / tablet diagram ─────────────────────────── */}
      <div className="relative hidden md:block w-full max-w-4xl mx-auto aspect-[16/9]">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden
        >
          {NODES.map((n, i) => {
            const id = `path-${n.key}`;
            const d = `M 50 50 L ${n.x} ${n.y}`;
            const isOn = active === n.key;
            return (
              <g key={n.key}>
                <path id={id} d={d} fill="none" stroke="none" />
                <line
                  x1="50"
                  y1="50"
                  x2={n.x}
                  y2={n.y}
                  stroke="#EB8F00"
                  strokeWidth={isOn ? 0.5 : 0.25}
                  strokeOpacity={isOn ? 0.85 : 0.3}
                  vectorEffect="non-scaling-stroke"
                  className="transition-all duration-300"
                />
                <circle r="0.7" fill="#EB8F00" opacity="0.9">
                  <animateMotion
                    dur="3.2s"
                    begin={`${i * 0.8}s`}
                    repeatCount="indefinite"
                    path={d}
                  />
                  <animate
                    attributeName="opacity"
                    values="0;1;1;0"
                    dur="3.2s"
                    begin={`${i * 0.8}s`}
                    repeatCount="indefinite"
                  />
                </circle>
              </g>
            );
          })}
        </svg>

        {/* Alfie core */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            <div className="absolute inset-0 rounded-full blur-2xl bg-[#EB8F00]/40 animate-pulse" />
            <div
              className="relative w-28 h-28 lg:w-32 lg:h-32 rounded-full flex items-center justify-center text-white border border-white/20"
              style={{
                background:
                  "radial-gradient(circle at 30% 30%, rgba(235,143,0,0.95), rgba(235,143,0,0.55) 55%, rgba(17,17,17,0.9))",
                boxShadow: "0 0 60px rgba(235,143,0,0.35)",
                fontFamily: SF_FONT,
              }}
            >
              <span className="text-xl lg:text-2xl font-semibold tracking-tight">Alfie</span>
            </div>
          </div>
        </div>

        {/* Capsules */}
        {NODES.map((n) => {
          const isOn = active === n.key;
          const alignRight = n.x > 50;
          return (
            <div
              key={n.key}
              className="absolute -translate-x-1/2 -translate-y-1/2 w-[46%] max-w-[260px]"
              style={{ left: `${n.x}%`, top: `${n.y}%` }}
              onMouseEnter={() => setActive(n.key)}
              onMouseLeave={() => setActive(null)}
            >
              <div
                className={`rounded-full px-6 py-4 border backdrop-blur-md transition-all duration-300 ${
                  alignRight ? "text-right" : "text-left"
                } ${
                  isOn
                    ? "scale-105 border-[#EB8F00]/70 bg-white/15 shadow-[0_18px_45px_-15px_rgba(0,0,0,0.6)]"
                    : "border-white/20 bg-white/10"
                }`}
              >
                <span
                  className="block text-sm lg:text-base font-semibold text-white whitespace-nowrap"
                  style={{ fontFamily: SF_FONT }}
                >
                  {n.title}
                </span>
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isOn ? "max-h-24 opacity-100 mt-3" : "max-h-0 opacity-0"
                } ${alignRight ? "text-right" : "text-left"}`}
              >
                <p className="px-2 text-sm text-white/75 font-medium leading-relaxed">{n.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Mobile fallback ──────────────────────────────────── */}
      <div className="md:hidden">
        <div className="mx-auto w-24 h-24 rounded-full flex items-center justify-center text-white border border-white/20"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, rgba(235,143,0,0.95), rgba(235,143,0,0.55) 55%, rgba(17,17,17,0.9))",
            boxShadow: "0 0 50px rgba(235,143,0,0.35)",
            fontFamily: SF_FONT,
          }}
        >
          <span className="text-lg font-semibold">Alfie</span>
        </div>
        <div className="mt-8 grid gap-3">
          {NODES.map((n) => (
            <div key={n.key} className="rounded-2xl border border-white/20 bg-white/10 px-5 py-4 text-left">
              <p className="text-sm font-semibold text-white" style={{ fontFamily: SF_FONT }}>
                {n.title}
              </p>
              <p className="mt-1 text-sm text-white/70 font-medium leading-relaxed">{n.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
