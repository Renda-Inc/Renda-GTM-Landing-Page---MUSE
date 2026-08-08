import { useEffect, useState } from "react";
import oldBranch from "@/assets/old-bank-branch.jpg";
import oldPaperwork from "@/assets/old-paperwork.jpg";
import oldCalculator from "@/assets/old-calculator.jpg";
import oldQueue from "@/assets/old-bank-queue.jpg";
import oldCash from "@/assets/old-cash-ledger.jpg";
import newPhone from "@/assets/new-phone-street.jpg";
import newTap from "@/assets/new-tap-pay.jpg";
import newUi from "@/assets/new-finance-ui.jpg";
import lifestyleCafe from "@/assets/lifestyle-cafe-laptop.jpg";
import lifestyleGathering from "@/assets/lifestyle-casual-gathering.jpg";

const SF_FONT =
  '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "SF Pro", system-ui, "Helvetica Neue", Arial, sans-serif';

type Piece = { src: string; alt: string; cls: string };

const topPieces: Piece[] = [
  { src: oldBranch, alt: "Traditional bank branch", cls: "absolute left-[3%] top-[6%] w-[15%] max-w-[190px] rotate-[-4deg]" },
  { src: oldPaperwork, alt: "Paper bank statements", cls: "absolute left-[22%] top-[44%] w-[17%] max-w-[210px] rotate-[3deg]" },
  { src: oldCalculator, alt: "Calculating finances by hand", cls: "absolute left-[43%] top-[2%] w-[13%] max-w-[160px] rotate-[2deg]" },
  { src: oldQueue, alt: "People waiting inside a bank", cls: "absolute right-[19%] top-[40%] w-[18%] max-w-[220px] rotate-[-3deg]" },
  { src: oldCash, alt: "Cash and a paper ledger", cls: "absolute right-[3%] top-[4%] w-[13%] max-w-[160px] rotate-[5deg]" },
];

const bottomPieces: Piece[] = [
  { src: newPhone, alt: "Checking a banking app on the move", cls: "absolute left-[4%] bottom-[8%] w-[14%] max-w-[175px] rotate-[3deg]" },
  { src: lifestyleGathering, alt: "Friends splitting a bill", cls: "absolute left-[23%] bottom-[46%] w-[16%] max-w-[200px] rotate-[-3deg]" },
  { src: newUi, alt: "A clean financial interface", cls: "absolute left-[45%] bottom-[4%] w-[13%] max-w-[160px] rotate-[-2deg]" },
  { src: newTap, alt: "Paying by phone at a cafe", cls: "absolute right-[18%] bottom-[44%] w-[18%] max-w-[225px] rotate-[4deg]" },
  { src: lifestyleCafe, alt: "Managing money from a laptop", cls: "absolute right-[3%] bottom-[7%] w-[14%] max-w-[175px] rotate-[-4deg]" },
];

const eras = ["Old Banking", "Digital Banking", "Intelligent Banking"];
const eraPos = ["left-[6%] md:left-[10%]", "left-1/2 -translate-x-1/2", "right-[6%] md:right-[10%]"];

function Collage({ pieces }: { pieces: Piece[] }) {
  return (
    <>
      {pieces.map((p) => (
        <img
          key={p.src}
          src={p.src}
          alt={p.alt}
          loading="lazy"
          className={`${p.cls} rounded-xl object-cover aspect-[4/5] shadow-sm`}
        />
      ))}
    </>
  );
}

export default function FutureOfBanking() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setStep((s) => (s + 1) % eras.length), 3200);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative w-full overflow-hidden py-16 lg:py-24" style={{ fontFamily: SF_FONT }}>
      {/* Desktop / tablet collage composition */}
      <div className="hidden md:block relative w-full h-[880px] lg:h-[960px]">
        <div className="absolute inset-x-0 top-0 h-[34%]">
          <Collage pieces={topPieces} />
        </div>

        <div className="absolute inset-x-0 top-[34%] h-[32%] flex flex-col items-center justify-center text-center px-6">
          <div className="relative w-full h-8 mb-10">
            {eras.map((era, i) => (
              <span
                key={era}
                className={`absolute top-0 ${eraPos[i]} text-[15px] font-semibold tracking-[0.08em] text-black/45 transition-all duration-[1200ms] ease-in-out ${
                  step === i ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                }`}
              >
                {era}
              </span>
            ))}
          </div>
          <h2 className="text-4xl lg:text-6xl font-semibold tracking-tight text-black/85 leading-tight">
            The Future of Banking
          </h2>
          <p className="mt-5 text-lg lg:text-xl font-medium text-black/55">
            We're building what comes next.
          </p>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-[34%]">
          <Collage pieces={bottomPieces} />
        </div>
      </div>

      {/* Mobile: collage keeps its loose character in two scattered rows */}
      <div className="md:hidden px-4">
        <div className="flex gap-3 items-end justify-center">
          <img src={oldBranch} alt="Traditional bank branch" loading="lazy" className="w-[26%] aspect-[4/5] object-cover rounded-lg rotate-[-4deg]" />
          <img src={oldPaperwork} alt="Paper bank statements" loading="lazy" className="w-[30%] aspect-[4/5] object-cover rounded-lg rotate-[3deg] mb-5" />
          <img src={oldCash} alt="Cash and a paper ledger" loading="lazy" className="w-[24%] aspect-[4/5] object-cover rounded-lg rotate-[5deg]" />
        </div>

        <div className="py-12 text-center">
          <div className="relative h-6 mb-6">
            {eras.map((era, i) => (
              <span
                key={era}
                className={`absolute inset-x-0 text-[13px] font-semibold tracking-[0.08em] text-black/45 transition-all duration-[1200ms] ease-in-out ${
                  step === i ? "opacity-100 translate-x-0" : "opacity-0 translate-x-3"
                }`}
              >
                {era}
              </span>
            ))}
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-black/85 leading-tight">
            The Future of Banking
          </h2>
          <p className="mt-4 text-base font-medium text-black/55">We're building what comes next.</p>
        </div>

        <div className="flex gap-3 items-start justify-center">
          <img src={newPhone} alt="Checking a banking app on the move" loading="lazy" className="w-[28%] aspect-[4/5] object-cover rounded-lg rotate-[3deg] mt-4" />
          <img src={newTap} alt="Paying by phone at a cafe" loading="lazy" className="w-[30%] aspect-[4/5] object-cover rounded-lg rotate-[-3deg]" />
          <img src={newUi} alt="A clean financial interface" loading="lazy" className="w-[24%] aspect-[4/5] object-cover rounded-lg rotate-[4deg] mt-6" />
        </div>
      </div>
    </section>
  );
}
