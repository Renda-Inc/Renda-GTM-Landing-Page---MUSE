

/* ---------------- marquee ---------------- */

const marqueeItems = [
  "Financial reasoning",
  "Context across systems",
  "Audit intelligence",
  "Tax analysis",
  "Authorized actions",
  "APIs & SDKs",
  "Risk understanding",
  "Forecasting",
];

export default function Marquee() {
  return (
    <section className="border-y border-white/[0.07] py-6">
      <div className="relative flex overflow-hidden">
        <div className="flex shrink-0 animate-[alfie-marquee_38s_linear_infinite] items-center gap-14 pr-14">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="whitespace-nowrap text-[15px] text-[#A0A0A0]">
              {item}
            </span>
          ))}
        </div>
        <div
          aria-hidden
          className="flex shrink-0 animate-[alfie-marquee_38s_linear_infinite] items-center gap-14 pr-14"
        >
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={`b-${i}`} className="whitespace-nowrap text-[15px] text-[#A0A0A0]">
              {item}
            </span>
          ))}
        </div>
      </div>
      <style>{`@keyframes alfie-marquee { from { transform: translateX(0);} to { transform: translateX(-100%);} }`}</style>
    </section>
  );
}

