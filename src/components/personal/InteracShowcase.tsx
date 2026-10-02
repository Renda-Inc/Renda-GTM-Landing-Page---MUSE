import { useEffect, useState } from "react";
import { SF_FONT } from "@/lib/typography";
import interacEtransfer from "@/assets/interac-etransfer.jpg";
import interacAutodeposit from "@/assets/interac-autodeposit.jpg";
import interacSecurity from "@/assets/interac-security.jpg";
import interacTagging from "@/assets/interac-tagging.jpg";

/* ─── Interac rotating photo panel ─── */
const interacSlides = [
  { image: interacEtransfer, title: "e-Transfer", desc: "Send to other Canadian bank accounts in seconds." },
  { image: interacAutodeposit, title: "Auto-deposit", desc: "Funds land instantly, no security questions." },
  { image: interacTagging, title: "Smart categorization", desc: "Alfie tags and explains every transfer." },
  { image: interacSecurity, title: "Fraud protection", desc: "Built-in monitoring on every transaction." },
];

export default function InteracShowcase() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % interacSlides.length);
    }, 4000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div>
      <div className="relative rounded-xl overflow-hidden h-[264px] lg:h-[396px] shadow-[0_20px_50px_-20px_rgba(0,0,0,0.25)]">
        {interacSlides.map((s, i) => (
          <div
            key={s.title}
            className={`absolute inset-0 transition-opacity duration-700 ${i === active ? "opacity-100" : "opacity-0"}`}
          >
            <img
              src={s.image}
              alt={s.title}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
              width={1024}
              height={1280}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/20 to-black/40" />
            <div className="relative h-full p-8 lg:p-10 flex flex-col">
              <h3
                className="text-white text-2xl md:text-3xl font-medium leading-snug tracking-tight max-w-[85%]"
                style={{ fontFamily: SF_FONT }}
              >
                {s.title}
              </h3>
              <p className="mt-3 text-white/85 text-[15px] md:text-base font-medium leading-relaxed max-w-[85%]">
                {s.desc}
              </p>
              <div className="mt-6 h-[3px] w-16 rounded-full" style={{ backgroundColor: "#EB8F00" }} />
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-2 mt-6">
        {interacSlides.map((s, i) => (
          <button
            key={s.title}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Show ${s.title}`}
            className={`rounded-full transition-all duration-300 ${
              i === active ? "w-6 h-2 bg-black/70" : "w-2 h-2 bg-black/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
}




