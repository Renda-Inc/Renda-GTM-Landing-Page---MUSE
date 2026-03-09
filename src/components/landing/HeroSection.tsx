import { Apple, Play, ArrowRight } from "lucide-react";
import lifestyleBeach from "@/assets/lifestyle-beach.jpg";
import { useFadeIn } from "@/hooks/use-fade-in";

export default function HeroSection() {
  const { ref, isVisible } = useFadeIn();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Full-bleed lifestyle background */}
      <div className="absolute inset-0">
        <img src={lifestyleBeach} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-background/30" />
      </div>

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: copy */}
          <div className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-foreground/70">Early access — now open</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] text-foreground">
              Meet the bank built around{" "}
              <span className="text-primary">
                intelligence.
              </span>
            </h1>

            <p className="mt-5 text-base md:text-lg text-foreground/60 max-w-lg leading-relaxed">
              Renda is an AI-native bank powered by Alfie — a financial AI that helps you understand, manage, and move your money with clarity.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#waitlist"
                className="group h-12 px-7 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground text-[15px] font-semibold hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-0.5 transition-all duration-300"
              >
                Join the Waitlist
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a
                href="#"
                className="h-12 px-6 inline-flex items-center rounded-full border border-foreground/15 text-foreground/70 text-[15px] font-medium hover:bg-foreground/5 hover:border-foreground/25 transition-all duration-300 backdrop-blur-sm"
              >
                Download the App
              </a>
            </div>

            {/* Store buttons */}
            <div className="mt-5 flex items-center gap-3">
              <a href="#" className="inline-flex items-center gap-2 h-10 px-4 rounded-lg bg-foreground/5 border border-foreground/8 hover:bg-foreground/10 transition-all duration-200 backdrop-blur-sm">
                <Apple className="w-4 h-4 text-foreground/70" />
                <div className="text-left">
                  <p className="text-[9px] leading-none text-foreground/40">Download on the</p>
                  <p className="text-[13px] font-semibold text-foreground/70 leading-tight">App Store</p>
                </div>
              </a>
              <a href="#" className="inline-flex items-center gap-2 h-10 px-4 rounded-lg bg-foreground/5 border border-foreground/8 hover:bg-foreground/10 transition-all duration-200 backdrop-blur-sm">
                <Play className="w-4 h-4 text-foreground/70" fill="currentColor" />
                <div className="text-left">
                  <p className="text-[9px] leading-none text-foreground/40">Get it on</p>
                  <p className="text-[13px] font-semibold text-foreground/70 leading-tight">Google Play</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right: Phone mockup */}
          <div className={`flex justify-center transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}`}>
            <div className="relative">
              <div className="w-[300px] h-[620px] rounded-[40px] border-[6px] border-foreground/10 bg-background/95 backdrop-blur-xl shadow-2xl overflow-hidden relative flex flex-col mx-auto">
                {/* Notch */}
                <div className="absolute top-0 inset-x-0 h-7 flex justify-center z-20">
                  <div className="w-28 h-full bg-foreground/10 rounded-b-2xl"></div>
                </div>
                
                {/* App content */}
                <div className="flex-1 overflow-y-auto p-5 pt-12 pb-8 flex flex-col gap-5 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                  {/* Chat with Alfie */}
                  <div className="flex gap-3 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <div className="w-3 h-3 rounded-full bg-primary"></div>
                    </div>
                    <div className="bg-secondary rounded-2xl rounded-tl-sm p-3.5 text-[13px] text-foreground/80 leading-relaxed">
                      Hey! Based on your spending, you might like the <span className="font-semibold text-foreground">Renda Essential Card</span>. Zero fees, smart insights built in.
                    </div>
                  </div>

                  {/* User reply */}
                  <div className="flex gap-3 justify-end animate-fade-in-up" style={{ animationDelay: "1.2s" }}>
                    <div className="bg-primary text-primary-foreground rounded-2xl rounded-tr-sm p-3.5 text-[13px] leading-relaxed">
                      That sounds perfect. How do I get it?
                    </div>
                  </div>

                  {/* Card Preview */}
                  <div className="flex gap-3 animate-fade-in-up" style={{ animationDelay: "1.9s" }}>
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <div className="w-3 h-3 rounded-full bg-primary"></div>
                    </div>
                    <div className="w-full max-w-[200px]">
                      <div className="bg-secondary rounded-2xl rounded-tl-sm p-3.5 text-[13px] text-foreground/80 leading-relaxed mb-3">
                        Pre-order right here. Ready?
                      </div>
                      
                      {/* Card Graphic */}
                      <div className="rounded-xl bg-gradient-to-br from-primary to-primary/80 p-4 shadow-lg relative overflow-hidden h-28 flex flex-col justify-between group cursor-pointer transition-transform hover:scale-[1.02]">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(0_0%_100%/0.15),transparent_50%)]"></div>
                        <div className="text-primary-foreground/60 font-medium text-[10px] tracking-widest uppercase relative z-10">Renda</div>
                        <div className="text-primary-foreground/90 font-mono text-[12px] tracking-[0.15em] relative z-10">**** **** **** 4092</div>
                        <div className="flex justify-between items-end relative z-10">
                          <div className="text-primary-foreground/80 text-[10px] font-medium">Essential</div>
                          <div className="w-6 h-4 rounded-sm bg-primary-foreground/20 backdrop-blur-sm"></div>
                        </div>
                      </div>
                      
                      <button className="mt-2.5 w-full py-2 rounded-xl bg-foreground text-background font-semibold text-[12px] hover:shadow-lg hover:-translate-y-0.5 transition-all active:scale-95">
                        Pre-order Card
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Home indicator */}
                <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-[35%] h-[4px] rounded-full bg-foreground/15 z-20"></div>
              </div>

              {/* Glow behind phone */}
              <div className="absolute -inset-16 -z-10 bg-[radial-gradient(circle,hsl(var(--primary)/0.15),transparent_60%)]" />
            </div>
          </div>
        </div>

        {/* Social proof */}
        <div className={`mt-16 pt-6 border-t border-foreground/8 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-foreground/30 font-medium">Trusted by forward-thinking Canadians</p>
            <div className="flex items-center gap-8">
              {[
                { value: "2,400+", label: "Waitlist" },
                { value: "AI-native", label: "Architecture" },
                { value: "Canada", label: "Regulated" },
              ].map((stat) => (
                <div key={stat.label} className="text-center group">
                  <p className="text-sm font-bold text-foreground/60 group-hover:text-primary transition-colors duration-300">{stat.value}</p>
                  <p className="text-[11px] text-foreground/30">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
