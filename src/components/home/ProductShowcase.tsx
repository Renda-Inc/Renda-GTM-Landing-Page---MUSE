import { useEffect, useRef, useState } from "react";
import { ArrowRight, IdCard, QrCode } from "lucide-react";
import { RotatingCards } from "@/components/landing/CardShowcase";
import lifestyleStudying from "@/assets/lifestyle-studying.jpg";

const SF_FONT =
  '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "SF Pro", system-ui, "Helvetica Neue", Arial, sans-serif';

const STORY_MS = 7000;
const TICK_MS = 50;

const stories = ["Cards", "Savings", "Transfer"];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="text-[15px] font-semibold tracking-[0.08em] mb-8 text-white">{children}</p>;
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight text-white"
      style={{ fontFamily: SF_FONT }}
    >
      {children}
    </h2>
  );
}

/* ─── Story 1: Cards ─── */
function CardsStory() {
  return (
    <div className="text-center">
      <Eyebrow>Renda Card</Eyebrow>
      <H2>Your card, made smarter.</H2>
      <p className="mt-6 text-base md:text-lg text-white/60 font-medium leading-relaxed max-w-2xl mx-auto">
        Your Renda Card works with Alfie to understand every purchase, provide intelligent insights,
        and give you complete control from your app.
      </p>
      <RotatingCards />
    </div>
  );
}

/* ─── Story 2: Savings ─── */
const goalCards = [
  { label: "Emergency fund", amount: "$4,200 / $6,000", pct: 70 },
  { label: "Trip to Lisbon", amount: "$1,850 / $3,000", pct: 62 },
  { label: "New laptop", amount: "$980 / $2,400", pct: 41 },
];

function SavingsStory() {
  return (
    <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
      <div className="order-last lg:order-first relative rounded-3xl overflow-hidden h-[320px] lg:h-[440px]">
        <img
          src={lifestyleStudying}
          alt="Planning savings goals"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative h-full p-6 lg:p-8 flex flex-col justify-center gap-3">
          {goalCards.map((g) => (
            <div key={g.label} className="rounded-xl bg-white/90 backdrop-blur px-5 py-4 shadow-lg">
              <div className="flex items-baseline justify-between">
                <p className="text-sm font-semibold text-black/80">{g.label}</p>
                <p className="text-xs font-medium text-black/50">{g.amount}</p>
              </div>
              <div className="mt-3 h-1.5 rounded-full bg-black/10 overflow-hidden">
                <div className="h-full rounded-full bg-[#EB8F00]" style={{ width: `${g.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <Eyebrow>Saving with purpose</Eyebrow>
        <H2>Build toward what matters.</H2>
        <p className="mt-6 text-base md:text-lg text-white/60 font-medium leading-relaxed">
          Create personalized Savings Goals with Alfie and adapt automatically as your finances
          change.
        </p>
      </div>
    </div>
  );
}

/* ─── Story 3: Transfer ─── */
const steps = [
  { icon: IdCard, title: "Add by Renda ID", desc: "@claudine" },
  { icon: QrCode, title: "Or scan a QR code", desc: "Instant contact" },
  { icon: ArrowRight, title: "Money moves", desc: "$100.00 sent" },
];

function TransferStory() {
  const [step, setStep] = useState(0);
  useEffect(() => {
    const id = window.setInterval(() => setStep((s) => (s + 1) % steps.length), 2000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
      <div>
        <Eyebrow>Peer-to-peer</Eyebrow>
        <H2>Send money instantly.</H2>
        <p className="mt-6 text-base md:text-lg text-white/60 font-medium leading-relaxed">
          Move money across the Renda network in seconds using a Renda ID or QR code.
        </p>
      </div>

      <div className="rounded-xl bg-white/[0.06] border border-white/10 backdrop-blur-xl p-8 lg:p-12">
        <div className="space-y-4">
          {steps.map((s, i) => {
            const Icon = s.icon;
            const on = i <= step;
            return (
              <div
                key={s.title}
                className={`flex items-center gap-4 rounded-xl bg-white/[0.07] border border-white/10 px-5 py-5 transition-all duration-500 ${
                  on ? "opacity-100 translate-x-0" : "opacity-40 translate-x-2"
                }`}
              >
                <div
                  className={`w-11 h-11 rounded-full flex items-center justify-center transition-colors duration-500 ${
                    on ? "bg-[#EB8F00]/20" : "bg-white/10"
                  }`}
                >
                  <Icon className={`w-5 h-5 ${on ? "text-[#EB8F00]" : "text-white/40"}`} />
                </div>
                <div>
                  <p className="text-base font-semibold text-white/90">{s.title}</p>
                  <p className="text-sm text-white/50 font-medium">{s.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ─── Showcase shell ─── */
export default function ProductShowcase() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const [shown, setShown] = useState(0);
  const [visible, setVisible] = useState(true);
  const startRef = useRef(Date.now());

  useEffect(() => {
    const id = window.setInterval(() => {
      const pct = Math.min(1, (Date.now() - startRef.current) / STORY_MS);
      setProgress(pct);
      if (pct >= 1) {
        startRef.current = Date.now();
        setActive((i) => (i + 1) % stories.length);
      }
    }, TICK_MS);
    return () => window.clearInterval(id);
  }, []);

  // Smooth crossfade when the active story changes
  useEffect(() => {
    if (active === shown) return;
    setVisible(false);
    const id = window.setTimeout(() => {
      setShown(active);
      setVisible(true);
    }, 320);
    return () => window.clearTimeout(id);
  }, [active, shown]);

  const select = (i: number) => {
    startRef.current = Date.now();
    setProgress(0);
    setActive(i);
  };

  return (
    <section className="bg-[#111111] py-16 lg:py-24" style={{ fontFamily: SF_FONT }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Liquid-glass capsule nav */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-1 rounded-full bg-white/[0.07] border border-white/15 backdrop-blur-xl p-1.5 shadow-[0_20px_50px_-25px_rgba(0,0,0,0.9)]">
            {stories.map((s, i) => {
              const isActive = i === active;
              return (
                <button
                  key={s}
                  type="button"
                  onClick={() => select(i)}
                  aria-current={isActive}
                  className={`relative overflow-hidden rounded-full px-6 py-2.5 text-sm font-semibold tracking-tight transition-colors duration-300 focus:outline-none ${
                    isActive ? "text-white bg-white/[0.14]" : "text-white/50 hover:text-white/80"
                  }`}
                >
                  <span className="relative z-10">{s}</span>
                  {isActive && (
                    <span
                      className="absolute left-0 bottom-0 h-[2px] bg-[#EB8F00] rounded-full"
                      style={{ width: `${progress * 100}%`, transition: "width 60ms linear" }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Story stage */}
        <div className="mt-14 lg:mt-20 flex items-center min-h-[760px] lg:min-h-[820px]">
          <div
            className={`w-full transition-all duration-500 ease-out ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
          >
            {shown === 0 && <CardsStory />}
            {shown === 1 && <SavingsStory />}
            {shown === 2 && <TransferStory />}
          </div>
        </div>
      </div>
    </section>
  );
}
