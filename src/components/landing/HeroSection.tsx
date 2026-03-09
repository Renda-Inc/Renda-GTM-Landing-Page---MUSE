import { Apple, Play, ArrowRight } from "lucide-react";
import lifestyleGathering from "@/assets/lifestyle-casual-gathering.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-surface-dark">
      {/* Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-20%,hsl(220_90%_56%/0.14),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_50%_at_90%_60%,hsl(160_84%_39%/0.05),transparent)]" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-surface-dark-foreground/8 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-12 w-full">
        {/* Top: centered copy */}
        <div className="text-center max-w-3xl mx-auto animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-surface-dark-foreground/8 bg-surface-dark-foreground/[0.03] mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-sm font-medium text-surface-dark-foreground/50">Early access — now open</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] text-surface-dark-foreground">
            Meet the bank built around{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              intelligence.
            </span>
          </h1>

          <p className="mt-5 text-base md:text-lg text-surface-dark-foreground/45 max-w-2xl mx-auto leading-relaxed">
            Renda is an AI-native bank powered by Alfie — a financial AI that helps you understand, manage, and move your money with clarity.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#waitlist"
              className="group h-12 px-7 inline-flex items-center gap-2 rounded-xl bg-primary text-primary-foreground text-[15px] font-semibold hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-0.5 transition-all duration-200"
            >
              Join the Waitlist
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#"
              className="h-12 px-6 inline-flex items-center rounded-xl border border-surface-dark-foreground/12 text-surface-dark-foreground/65 text-[15px] font-medium hover:bg-surface-dark-foreground/[0.04] hover:border-surface-dark-foreground/20 transition-all duration-200"
            >
              Download the App
            </a>
          </div>

          {/* Store buttons */}
          <div className="mt-5 flex items-center justify-center gap-3">
            <a href="#" className="inline-flex items-center gap-2 h-10 px-4 rounded-lg bg-surface-dark-foreground/[0.05] border border-surface-dark-foreground/6 hover:bg-surface-dark-foreground/[0.08] transition-all duration-200">
              <Apple className="w-4 h-4 text-surface-dark-foreground/70" />
              <div className="text-left">
                <p className="text-[9px] leading-none text-surface-dark-foreground/35">Download on the</p>
                <p className="text-[13px] font-semibold text-surface-dark-foreground/70 leading-tight">App Store</p>
              </div>
            </a>
            <a href="#" className="inline-flex items-center gap-2 h-10 px-4 rounded-lg bg-surface-dark-foreground/[0.05] border border-surface-dark-foreground/6 hover:bg-surface-dark-foreground/[0.08] transition-all duration-200">
              <Play className="w-4 h-4 text-surface-dark-foreground/70" fill="currentColor" />
              <div className="text-left">
                <p className="text-[9px] leading-none text-surface-dark-foreground/35">Get it on</p>
                <p className="text-[13px] font-semibold text-surface-dark-foreground/70 leading-tight">Google Play</p>
              </div>
            </a>
          </div>
        </div>

        {/* Product visual — centered below copy */}
        <div className="mt-14 grid lg:grid-cols-2 gap-12 items-center animate-fade-in-up" style={{ animationDelay: "0.25s" }}>
          
          <div className="order-2 lg:order-1 relative rounded-3xl overflow-hidden shadow-2xl h-[500px] lg:h-[650px] bg-secondary">
            <img src={lifestyleGathering} alt="Friends casually gathering" className="object-cover w-full h-full" />
            <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
          </div>

          <div className="order-1 lg:order-2 relative flex justify-center">
            {/* Main app frame — phone-style */}
            <div className="w-[320px] h-[650px] rounded-[40px] border-[8px] border-surface-dark-foreground/10 bg-background shadow-2xl overflow-hidden relative flex flex-col mx-auto">
              {/* Notch */}
              <div className="absolute top-0 inset-x-0 h-7 flex justify-center z-20">
                <div className="w-32 h-full bg-surface-dark-foreground/10 rounded-b-2xl"></div>
              </div>
              
              {/* App content */}
              <div className="flex-1 overflow-y-auto p-5 pt-12 pb-8 flex flex-col gap-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {/* Chat with Alfie */}
                <div className="flex gap-3 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                  </div>
                  <div className="bg-surface-dark-foreground/[0.03] border border-surface-dark-foreground/5 rounded-2xl rounded-tl-sm p-4 text-[13px] text-foreground/80 leading-relaxed shadow-sm">
                    Hey! Based on your spending, you might like the <span className="font-semibold text-foreground">Renda Essential Card</span>. It has zero fees and smart insights built right in.
                  </div>
                </div>

                {/* User reply */}
                <div className="flex gap-3 justify-end animate-fade-in-up" style={{ animationDelay: "1.2s" }}>
                  <div className="bg-primary text-primary-foreground rounded-2xl rounded-tr-sm p-4 text-[13px] leading-relaxed shadow-md">
                    That sounds perfect. How do I get it?
                  </div>
                </div>

                {/* Card Preview */}
                <div className="flex gap-3 animate-fade-in-up" style={{ animationDelay: "1.9s" }}>
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                  </div>
                  <div className="w-full max-w-[220px]">
                    <div className="bg-surface-dark-foreground/[0.03] border border-surface-dark-foreground/5 rounded-2xl rounded-tl-sm p-4 text-[13px] text-foreground/80 leading-relaxed mb-3 shadow-sm">
                      You can pre-order the non-premium plan right here. Ready?
                    </div>
                    
                    {/* Card Graphic */}
                    <div className="rounded-xl bg-gradient-to-br from-foreground to-foreground/90 p-5 shadow-lg relative overflow-hidden h-32 flex flex-col justify-between group cursor-pointer transition-transform hover:scale-[1.02]">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(var(--primary)/0.2),transparent_50%)]"></div>
                      <div className="text-background/50 font-medium text-[10px] tracking-widest uppercase relative z-10">Renda</div>
                      <div className="text-background/90 font-mono text-[13px] tracking-[0.15em] relative z-10">**** **** **** 4092</div>
                      <div className="flex justify-between items-end relative z-10">
                        <div className="text-background/80 text-[11px] font-medium">Essential</div>
                        <div className="w-7 h-4 rounded-sm bg-background/20 backdrop-blur-sm"></div>
                      </div>
                    </div>
                    
                    <button 
                      onClick={(e) => {
                        const btn = e.currentTarget;
                        btn.textContent = 'Pre-ordered!';
                        btn.classList.add('bg-accent', 'text-accent-foreground');
                        btn.classList.remove('bg-primary', 'text-primary-foreground');
                        
                        const toast = document.createElement('div');
                        toast.className = 'fixed bottom-8 left-1/2 -translate-x-1/2 bg-foreground text-background px-5 py-3 rounded-full shadow-2xl z-50 transition-all duration-500 ease-in-out font-medium text-sm translate-y-10 opacity-0 flex items-center gap-2';
                        toast.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-primary"><path d="M20 6 9 17l-5-5"/></svg> Thank you! We\'ll notify you.';
                        document.body.appendChild(toast);
                        
                        requestAnimationFrame(() => {
                          toast.classList.remove('translate-y-10', 'opacity-0');
                        });
                        
                        setTimeout(() => {
                          toast.classList.add('translate-y-10', 'opacity-0');
                          setTimeout(() => document.body.removeChild(toast), 500);
                          
                          // Reset button
                          setTimeout(() => {
                            btn.textContent = 'Pre-order Card';
                            btn.classList.remove('bg-accent', 'text-accent-foreground');
                            btn.classList.add('bg-primary', 'text-primary-foreground');
                          }, 1000);
                        }, 3000);
                      }}
                      className="mt-3 w-full py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-[13px] shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all active:scale-95"
                    >
                      Pre-order Card
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Home indicator */}
              <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-[35%] h-[4px] rounded-full bg-surface-dark-foreground/20 z-20"></div>
              
              {/* Overlay gradient for bottom fade */}
              <div className="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-background to-transparent pointer-events-none z-10"></div>
            </div>

            {/* Glow */}
            <div className="absolute -inset-20 -z-10 bg-[radial-gradient(circle,hsl(220_90%_56%/0.08),transparent_60%)]" />
          </div>
        </div>

        {/* Social proof */}
        <div className="mt-12 pt-6 border-t border-surface-dark-foreground/5 animate-fade-in-up" style={{ animationDelay: "0.45s" }}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-surface-dark-foreground/25 font-medium">Trusted by forward-thinking Canadians</p>
            <div className="flex items-center gap-8">
              {[
                { value: "2,400+", label: "Waitlist" },
                { value: "AI-native", label: "Architecture" },
                { value: "Canada", label: "Regulated" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-sm font-bold text-surface-dark-foreground/60">{stat.value}</p>
                  <p className="text-[11px] text-surface-dark-foreground/25">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
