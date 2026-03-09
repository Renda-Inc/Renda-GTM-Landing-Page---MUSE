import { useFadeIn } from "@/hooks/use-fade-in";
import { Send, ChevronLeft, ArrowRight, Shield, TrendingUp } from "lucide-react";

/* ── iPhone Frame ── */
function PhoneFrame({ children, delay = "0s" }: { children: React.ReactNode; delay?: string }) {
  return (
    <div
      className="w-full max-w-[300px] mx-auto animate-fade-in-up"
      style={{ animationDelay: delay }}
    >
      <div className="rounded-[2.5rem] border-[6px] border-foreground/90 bg-card shadow-2xl overflow-hidden relative">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[28px] bg-foreground/90 rounded-b-2xl z-10" />
        {/* Status bar */}
        <div className="flex items-center justify-between px-7 pt-3 pb-0 relative z-0">
          <span className="text-[11px] font-semibold text-foreground">9:41</span>
          <div className="flex items-center gap-1">
            <svg width="15" height="11" viewBox="0 0 15 11" className="text-foreground">
              <rect x="0" y="3" width="3" height="8" rx="1" fill="currentColor" opacity="0.4" />
              <rect x="4" y="2" width="3" height="9" rx="1" fill="currentColor" opacity="0.6" />
              <rect x="8" y="1" width="3" height="10" rx="1" fill="currentColor" opacity="0.8" />
              <rect x="12" y="0" width="3" height="11" rx="1" fill="currentColor" />
            </svg>
            <svg width="15" height="11" viewBox="0 0 15 11" className="text-foreground ml-0.5">
              <path d="M7.5 2C5.5 2 3.7 2.8 2.4 4.1L1 2.7C2.7 1 5 0 7.5 0S12.3 1 14 2.7L12.6 4.1C11.3 2.8 9.5 2 7.5 2Z" fill="currentColor" opacity="0.4" />
              <path d="M7.5 5C6.2 5 5 5.5 4.1 6.4L5.5 7.8C6.1 7.2 6.8 6.8 7.5 6.8S8.9 7.2 9.5 7.8L10.9 6.4C10 5.5 8.8 5 7.5 5Z" fill="currentColor" opacity="0.7" />
              <circle cx="7.5" cy="10" r="1.2" fill="currentColor" />
            </svg>
            <div className="w-[22px] h-[10px] rounded-[3px] border border-foreground/50 ml-0.5 relative">
              <div className="absolute inset-[1.5px] right-[2px] bg-foreground rounded-[1.5px]" />
            </div>
          </div>
        </div>
        {/* Content */}
        <div className="min-h-[480px] flex flex-col">
          {children}
        </div>
        {/* Home indicator */}
        <div className="flex justify-center pb-2 pt-1">
          <div className="w-32 h-1 rounded-full bg-foreground/20" />
        </div>
      </div>
    </div>
  );
}

/* ── Alfie Avatar ── */
function AlfieAvatar() {
  return (
    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center overflow-hidden shrink-0">
      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-foreground/60 to-foreground/30" />
    </div>
  );
}

/* ── Screen 1: Chat with Alfie ── */
function ChatScreen() {
  return (
    <PhoneFrame delay="0s">
      {/* Nav bar */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-border">
        <ChevronLeft className="w-5 h-5 text-foreground" />
        <p className="text-sm font-semibold text-foreground">Alfie</p>
        <div className="w-5" />
      </div>

      <div className="flex-1 px-4 py-4 flex flex-col">
        {/* Date */}
        <p className="text-[11px] text-muted-foreground text-center mb-5">Today</p>

        {/* User message */}
        <div className="flex justify-end mb-4">
          <div className="rounded-2xl rounded-br-sm bg-foreground text-background px-4 py-2.5 max-w-[80%]">
            <p className="text-[13px] leading-relaxed">Alfie, I'm thinking of taking a week off to travel. Any money advice?</p>
          </div>
        </div>

        {/* Alfie reply 1 */}
        <div className="flex gap-2.5 mb-4">
          <AlfieAvatar />
          <div>
            <p className="text-[11px] text-muted-foreground mb-1">Alfie</p>
            <p className="text-[13px] text-foreground leading-relaxed">
              Nice! Taking a week off? Based on your usual spending, you can safely budget <span className="font-semibold">$1,200</span> for the trip — no dip into savings needed.
            </p>
          </div>
        </div>

        {/* User message 2 */}
        <div className="flex justify-end mb-4">
          <div className="rounded-2xl rounded-br-sm bg-foreground text-background px-4 py-2.5 max-w-[80%]">
            <p className="text-[13px] leading-relaxed">Amazing. Can you help me save up for it?</p>
          </div>
        </div>

        {/* Alfie reply 2 */}
        <div className="flex gap-2.5">
          <AlfieAvatar />
          <div>
            <p className="text-[11px] text-muted-foreground mb-1">Alfie</p>
            <p className="text-[13px] text-foreground leading-relaxed">
              Already started. I'll move $200 weekly from your chequing account into a "Italy Getaway" goal wallet. ✈️
            </p>
          </div>
        </div>
      </div>

      {/* Input */}
      <div className="px-4 pb-3">
        <div className="flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-2.5">
          <p className="text-[12px] text-muted-foreground flex-1">Let's talk your finance!</p>
          <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
            <Send className="w-3.5 h-3.5 text-muted-foreground" />
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}

/* ── Screen 2: AI Insights ── */
function InsightsScreen() {
  return (
    <PhoneFrame delay="0.15s">
      {/* Nav bar */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-border">
        <ChevronLeft className="w-5 h-5 text-foreground" />
        <p className="text-sm font-semibold text-foreground">AI Insights</p>
        <div className="w-5" />
      </div>

      <div className="flex-1 px-4 py-5 flex flex-col gap-4">
        {/* Investment Growth card */}
        <div className="rounded-2xl bg-foreground text-background p-5">
          <div className="flex items-center gap-2 mb-4">
            <Shield className="w-4 h-4 text-background/60" />
            <div>
              <p className="text-[10px] text-background/50 uppercase tracking-wider">AI Insights</p>
              <p className="text-sm font-semibold text-background">Investment Growth</p>
            </div>
          </div>

          <div className="flex items-center justify-between mb-5">
            <div>
              <p className="text-2xl font-bold text-background">$8,500</p>
              <p className="text-[11px] text-background/50">current</p>
            </div>
            <ArrowRight className="w-4 h-4 text-background/30" />
            <div className="text-right">
              <p className="text-2xl font-bold text-background">$11,200</p>
              <p className="text-[11px] text-background/50">predicted</p>
            </div>
          </div>

          <div className="space-y-2.5 border-t border-background/10 pt-3">
            <div className="flex items-center justify-between">
              <span className="text-[12px] text-background/60">Stocks</span>
              <span className="text-[13px] font-semibold text-background">$5,000</span>
              <span className="text-[12px] text-accent">+12% YTD</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[12px] text-background/60">Crypto</span>
              <span className="text-[13px] font-semibold text-background">$3,500</span>
              <span className="text-[12px] text-accent">+38% YTD</span>
            </div>
          </div>
        </div>

        {/* Spending summary */}
        <div className="rounded-2xl border border-border p-4">
          <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">This month</p>
          <div className="flex items-end gap-2">
            <p className="text-xl font-bold text-foreground">$2,340</p>
            <div className="flex items-center gap-1 mb-0.5">
              <TrendingUp className="w-3 h-3 text-accent" />
              <span className="text-[11px] font-medium text-accent">On track</span>
            </div>
          </div>
          <p className="text-[11px] text-muted-foreground mt-1">$660 under your monthly budget</p>
        </div>

        {/* Alfie note */}
        <div className="rounded-xl bg-secondary/60 px-4 py-3">
          <p className="text-[12px] text-foreground/80 leading-relaxed">
            <span className="font-semibold">Alfie:</span> Your portfolio is trending 18% above projections. Consider rebalancing next quarter.
          </p>
        </div>
      </div>
    </PhoneFrame>
  );
}

/* ── Main Section ── */
export default function AlfieMockups() {
  const { ref, isVisible } = useFadeIn();

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-background">
      <div
        ref={ref}
        className={`relative max-w-5xl mx-auto px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <p className="text-sm font-medium uppercase tracking-[0.15em] text-muted-foreground mb-3">
            Your AI banking buddy
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Meet Alfie.
          </h2>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            Ask questions. Get insights. Take action — all through a conversation.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <button className="h-10 px-6 rounded-full bg-foreground text-background text-sm font-medium hover:bg-foreground/90 transition-colors">
              Meet Alfie
            </button>
            <button className="h-10 px-6 rounded-full border border-border text-foreground text-sm font-medium hover:bg-secondary transition-colors">
              Chat with Alfie
            </button>
          </div>
        </div>

        {/* Phone mockups */}
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 max-w-[680px] mx-auto">
          <div className="text-center">
            <ChatScreen />
            <p className="mt-5 text-sm font-semibold text-foreground">Talk to Alfie</p>
            <p className="text-[13px] text-muted-foreground mt-1">Like texting a financially savvy friend</p>
          </div>
          <div className="text-center">
            <InsightsScreen />
            <p className="mt-5 text-sm font-semibold text-foreground">AI-powered insights</p>
            <p className="text-[13px] text-muted-foreground mt-1">Your money, explained — not just displayed</p>
          </div>
        </div>
      </div>
    </section>
  );
}
