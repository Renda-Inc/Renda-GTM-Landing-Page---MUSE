import { useFadeIn } from "@/hooks/use-fade-in";
import { Send, TrendingDown, TrendingUp, AlertTriangle, ArrowRight } from "lucide-react";

function PhoneFrame({ children, delay = "0s" }: { children: React.ReactNode; delay?: string }) {
  return (
    <div
      className="w-full max-w-[280px] mx-auto animate-fade-in-up"
      style={{ animationDelay: delay }}
    >
      <div className="rounded-[2rem] border border-border bg-card shadow-2xl overflow-hidden">
        {/* Status bar */}
        <div className="flex items-center justify-between px-6 pt-3 pb-1">
          <span className="text-[10px] font-semibold text-muted-foreground">9:41</span>
          <div className="flex items-center gap-1">
            <div className="w-3.5 h-2 rounded-sm border border-muted-foreground/40" />
          </div>
        </div>
        {/* Screen content */}
        <div className="px-4 pb-5 pt-2 min-h-[380px] flex flex-col">
          {children}
        </div>
        {/* Home indicator */}
        <div className="flex justify-center pb-2">
          <div className="w-28 h-1 rounded-full bg-muted-foreground/15" />
        </div>
      </div>
    </div>
  );
}

function AlfieAvatar({ size = "sm" }: { size?: "sm" | "md" }) {
  const s = size === "sm" ? "w-6 h-6" : "w-8 h-8";
  const dot = size === "sm" ? "w-2 h-2" : "w-2.5 h-2.5";
  return (
    <div className={`${s} rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shrink-0`}>
      <div className={`${dot} rounded-full bg-primary-foreground`} />
    </div>
  );
}

/* Screen 1: Asking a financial question */
function AskScreen() {
  return (
    <PhoneFrame delay="0s">
      <div className="flex items-center gap-2 mb-4">
        <AlfieAvatar size="md" />
        <div>
          <p className="text-sm font-semibold text-foreground">Alfie</p>
          <p className="text-[10px] text-accent font-medium">Online</p>
        </div>
      </div>

      <div className="flex-1 space-y-3">
        {/* User message */}
        <div className="flex justify-end">
          <div className="rounded-2xl rounded-br-md bg-primary text-primary-foreground px-4 py-2.5 max-w-[85%]">
            <p className="text-[13px] leading-relaxed">Can I afford a $1,200 vacation next month?</p>
          </div>
        </div>

        {/* Alfie response */}
        <div className="flex gap-2">
          <AlfieAvatar />
          <div className="space-y-2 max-w-[85%]">
            <div className="rounded-2xl rounded-bl-md bg-secondary px-4 py-2.5">
              <p className="text-[13px] text-foreground leading-relaxed">
                Based on your cash flow, you'll have <span className="font-semibold text-accent">$1,840</span> available after bills. A $1,200 trip is within reach.
              </p>
            </div>
            <div className="rounded-xl border border-primary/15 bg-primary/5 px-3 py-2.5">
              <p className="text-[10px] font-semibold text-primary uppercase tracking-wider mb-1">Suggestion</p>
              <p className="text-[12px] text-foreground/70 leading-relaxed">
                Set aside $300/week starting now to keep your emergency fund intact.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Input */}
      <div className="mt-3 flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-2.5">
        <p className="text-[12px] text-muted-foreground flex-1">Ask Alfie anything...</p>
        <Send className="w-4 h-4 text-primary" />
      </div>
    </PhoneFrame>
  );
}

/* Screen 2: Spending insights */
function InsightsScreen() {
  const categories = [
    { name: "Food & Drink", amount: "$482", pct: 72, trend: "up" as const },
    { name: "Transport", amount: "$218", pct: 44, trend: "down" as const },
    { name: "Subscriptions", amount: "$67", pct: 18, trend: "up" as const },
  ];

  return (
    <PhoneFrame delay="0.15s">
      <div className="flex items-center gap-2 mb-5">
        <AlfieAvatar size="md" />
        <div className="flex-1">
          <p className="text-sm font-semibold text-foreground">Spending Insights</p>
          <p className="text-[10px] text-muted-foreground">March 2026</p>
        </div>
      </div>

      {/* Summary card */}
      <div className="rounded-xl bg-secondary/60 p-4 mb-4">
        <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-medium">Total spent</p>
        <div className="flex items-end gap-2 mt-1">
          <p className="text-2xl font-bold text-foreground tracking-tight">$767</p>
          <div className="flex items-center gap-1 mb-1">
            <TrendingDown className="w-3 h-3 text-accent" />
            <span className="text-[11px] font-semibold text-accent">8% less</span>
          </div>
        </div>
        <p className="text-[11px] text-muted-foreground mt-1">vs. last month</p>
      </div>

      {/* Category breakdown */}
      <div className="space-y-3 flex-1">
        {categories.map((c) => (
          <div key={c.name}>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[12px] font-medium text-foreground">{c.name}</span>
              <div className="flex items-center gap-1.5">
                <span className="text-[12px] font-semibold text-foreground">{c.amount}</span>
                {c.trend === "up" ? (
                  <TrendingUp className="w-3 h-3 text-destructive/70" />
                ) : (
                  <TrendingDown className="w-3 h-3 text-accent" />
                )}
              </div>
            </div>
            <div className="h-1.5 rounded-full bg-secondary">
              <div
                className="h-full rounded-full bg-primary/70 transition-all duration-500"
                style={{ width: `${c.pct}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Alfie note */}
      <div className="mt-4 rounded-xl border border-primary/10 bg-primary/5 px-3 py-2.5">
        <p className="text-[12px] text-foreground/75 leading-relaxed">
          <span className="font-semibold text-primary">Alfie:</span> Your dining spend jumped 23%. I can set a smart limit if you'd like.
        </p>
      </div>
    </PhoneFrame>
  );
}

/* Screen 3: Financial signals */
function SignalsScreen() {
  const signals = [
    {
      type: "alert" as const,
      title: "Unusual charge detected",
      desc: "$89.99 from an unrecognized merchant in Montreal.",
      time: "2m ago",
    },
    {
      type: "insight" as const,
      title: "Savings milestone",
      desc: "You're $340 away from your emergency fund goal.",
      time: "1h ago",
    },
    {
      type: "action" as const,
      title: "Bill optimization",
      desc: "Switch your phone plan to save $18/mo based on your usage.",
      time: "Today",
    },
  ];

  return (
    <PhoneFrame delay="0.3s">
      <div className="flex items-center gap-2 mb-5">
        <AlfieAvatar size="md" />
        <div className="flex-1">
          <p className="text-sm font-semibold text-foreground">Financial Signals</p>
          <p className="text-[10px] text-muted-foreground">3 new signals</p>
        </div>
        <div className="w-5 h-5 rounded-full bg-destructive/15 flex items-center justify-center">
          <span className="text-[10px] font-bold text-destructive">3</span>
        </div>
      </div>

      <div className="flex-1 space-y-3">
        {signals.map((s, i) => (
          <div
            key={i}
            className={`rounded-xl border p-3.5 transition-all duration-200 ${
              s.type === "alert"
                ? "border-destructive/15 bg-destructive/[0.03]"
                : s.type === "insight"
                ? "border-accent/15 bg-accent/[0.03]"
                : "border-primary/15 bg-primary/[0.03]"
            }`}
          >
            <div className="flex items-start gap-2.5">
              <div
                className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
                  s.type === "alert"
                    ? "bg-destructive/10"
                    : s.type === "insight"
                    ? "bg-accent/10"
                    : "bg-primary/10"
                }`}
              >
                {s.type === "alert" ? (
                  <AlertTriangle className="w-3.5 h-3.5 text-destructive" />
                ) : s.type === "insight" ? (
                  <TrendingUp className="w-3.5 h-3.5 text-accent" />
                ) : (
                  <ArrowRight className="w-3.5 h-3.5 text-primary" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-[12px] font-semibold text-foreground">{s.title}</p>
                  <span className="text-[10px] text-muted-foreground shrink-0">{s.time}</span>
                </div>
                <p className="text-[11px] text-muted-foreground leading-relaxed mt-0.5">{s.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Action bar */}
      <div className="mt-4 flex gap-2">
        <button className="flex-1 h-9 rounded-lg bg-primary text-primary-foreground text-[12px] font-medium">
          Review all
        </button>
        <button className="flex-1 h-9 rounded-lg border border-border text-foreground text-[12px] font-medium">
          Dismiss
        </button>
      </div>
    </PhoneFrame>
  );
}

export default function AlfieMockups() {
  const { ref, isVisible } = useFadeIn();

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      <div
        ref={ref}
        className={`relative max-w-6xl mx-auto px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-4">
            Alfie in Action
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight text-foreground">
            Intelligence at every touchpoint.
          </h2>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            Ask questions, get insights, and receive real-time financial signals — all through Alfie.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {/* Labels + phones */}
          <div className="text-center">
            <AskScreen />
            <p className="mt-5 text-sm font-semibold text-foreground">Ask anything</p>
            <p className="text-[13px] text-muted-foreground mt-1">Natural language financial Q&A</p>
          </div>
          <div className="text-center">
            <InsightsScreen />
            <p className="mt-5 text-sm font-semibold text-foreground">Spending insights</p>
            <p className="text-[13px] text-muted-foreground mt-1">Categorized, contextual breakdowns</p>
          </div>
          <div className="text-center">
            <SignalsScreen />
            <p className="mt-5 text-sm font-semibold text-foreground">Financial signals</p>
            <p className="text-[13px] text-muted-foreground mt-1">Proactive alerts when it matters</p>
          </div>
        </div>
      </div>
    </section>
  );
}
