import { useEffect, useState } from "react";

/* ---------------- chat bar demo ---------------- */

const demoScript: { q: string; a: string }[] = [
  {
    q: "Flag any transactions in Q3 that fall outside our audit thresholds.",
    a: "412 transactions reviewed. 6 exceed the $250k single-approval threshold, 2 lack supporting documentation. Prepared for auditor review.",
  },
  {
    q: "What is our estimated corporate tax exposure this quarter?",
    a: "Estimated $1.84M across three jurisdictions, up 7% on last quarter — driven by deferred revenue recognized in September.",
  },
  {
    q: "Summarize the audit trail for vendor payments over $100k.",
    a: "38 payments, 36 with complete approval chains. 2 exceptions routed to the controller with full document history attached.",
  },
];

export default function ChatDemo() {
  const [step, setStep] = useState(0);
  const [typed, setTyped] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    const question = demoScript[step].q;
    let i = 0;
    setTyped("");
    setShowAnswer(false);
    const typer = window.setInterval(() => {
      i += 1;
      setTyped(question.slice(0, i));
      if (i >= question.length) {
        window.clearInterval(typer);
        window.setTimeout(() => setShowAnswer(true), 500);
      }
    }, 34);
    const next = window.setTimeout(() => setStep((s) => (s + 1) % demoScript.length), 9500);
    return () => {
      window.clearInterval(typer);
      window.clearTimeout(next);
    };
  }, [step]);

  return (
    <div className="w-full max-w-2xl">
      <div
        onMouseEnter={() => setFocused(true)}
        onMouseLeave={() => setFocused(false)}
        className={`flex items-center gap-3 rounded-2xl border bg-white/[0.04] px-5 py-4 transition-all duration-500 ${
          focused ? "border-white/25 shadow-[0_0_40px_-12px_rgba(255,255,255,0.35)]" : "border-white/10"
        }`}
      >
        <span className="text-[15px] leading-relaxed text-[#E0E0E0]">
          {typed}
          <span className="ml-0.5 inline-block h-[1.05em] w-[2px] translate-y-[3px] animate-pulse bg-white/70" />
        </span>
      </div>
      <div
        className={`mt-3 rounded-2xl border border-white/[0.07] bg-white/[0.02] px-5 py-4 transition-all duration-700 ${
          showAnswer ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
        }`}
      >
        <p className="text-[13px] font-medium tracking-wide text-[#7BE0A5]">Alfie</p>
        <p className="mt-2 text-[15px] leading-relaxed text-white/90">{demoScript[step].a}</p>
      </div>
      <p className="mt-3 text-[13px] text-white/90">Coming soon.</p>
    </div>
  );
}

