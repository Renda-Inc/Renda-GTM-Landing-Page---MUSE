import { useEffect, useRef, useState } from "react";
import { ArrowRight, ShieldCheck, Sparkles, TrendingUp, CreditCard, Globe2, Sparkle } from "lucide-react";
import { useFadeIn } from "@/hooks/use-fade-in";
import lifestyleCafe from "@/assets/lifestyle-cafe-laptop.jpg";
import lifestyleStudying from "@/assets/lifestyle-studying.jpg";
import lifestyleGathering from "@/assets/lifestyle-casual-gathering.jpg";
import lifestyleHobby from "@/assets/lifestyle-creative-hobby.jpg";
import lifestyleCooking from "@/assets/lifestyle-friends-cooking.jpg";
import lifestyleHike from "@/assets/lifestyle-adventure-hike.jpg";
import lifestyleBeach from "@/assets/lifestyle-beach.jpg";
import lifestyleDreamJob from "@/assets/lifestyle-dream-job.jpg";
import planEveryday from "@/assets/plan-everyday.jpg";
import planPlus from "@/assets/plan-plus.jpg";

export const SF_FONT =
  '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "SF Pro", system-ui, "Helvetica Neue", Arial, sans-serif';

export function Fade({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, isVisible } = useFadeIn();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
    >
      {children}
    </div>
  );
}

export function Divider() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="h-[2px] bg-black/15 rounded-full" />
    </div>
  );
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`text-[15px] font-semibold tracking-[0.08em] mb-8 ${light ? "text-white" : "text-black"}`}>
      {children}
    </p>
  );
}

function H2({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <h2
      className={`text-3xl md:text-4xl font-semibold tracking-tight leading-tight transition-colors duration-300 ${
        light ? "text-white" : "text-black/80 hover:text-black"
      }`}
      style={{ fontFamily: SF_FONT }}
    >
      {children}
    </h2>
  );
}

function Body({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`mt-6 text-base md:text-lg font-medium leading-relaxed ${light ? "text-white/60" : "text-black"}`}>
      {children}
    </p>
  );
}

/* ─── 1. Smart Accounts ─── */
const accountCards = [
  {
    name: "SmartSpend",
    desc: "Your everyday account, with spending that explains itself.",
    img: lifestyleCafe,
  },
  {
    name: "SenseSave",
    desc: "Savings that move on their own, guided by what you can actually spare.",
    img: lifestyleStudying,
  },
];

export function SmartAccounts() {
  return (
    <section className="py-16 lg:py-20">
      <Fade className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <Eyebrow>Smart Accounts</Eyebrow>
          <H2>Your money shouldn't just sit there.</H2>
          <p className="mt-6 text-base md:text-lg font-medium leading-relaxed text-black">
            SmartSpend and SenseSave help you understand where your money is going, surface
            meaningful insights, and support better financial decisions.
          </p>

          <div className="mt-8 inline-flex items-start gap-3 rounded-xl bg-[#F6F5F2] px-5 py-4 text-left">
            <ShieldCheck className="w-5 h-5 text-black/70 mt-0.5 shrink-0" />
            <p className="text-sm text-black/70 font-medium leading-relaxed">
              Your money is protected. CDIC-eligible deposit protection through our sponsor bank,
              regulated FINTRAC MSB, SOC 2 compliant security.
            </p>
          </div>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6 lg:gap-8">
          {accountCards.map((a) => (
            <div key={a.name} className="relative rounded-xl overflow-hidden group">
              <img
                src={a.img}
                alt={`${a.name} account`}
                className="w-full h-[408px] lg:h-[528px] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/25 to-transparent" />
              <div className="absolute top-0 left-0 p-7 lg:p-9 max-w-[85%]">
                <h3 className="text-2xl lg:text-3xl font-semibold tracking-tight text-white">
                  {a.name}
                </h3>
                <p className="mt-3 text-base font-medium leading-relaxed text-white/80">{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Fade>
    </section>
  );
}


/* ─── 5. Banking that thinks ahead (conversation UI) ─── */
const chat = [
  { from: "alfie", text: "Heads up: your Fizz bill of $68 lands Thursday, two days before payday." },
  { from: "user", text: "Can I still afford dinner out this weekend?" },
  { from: "alfie", text: "Yes. After bills you have $214 free. Dining out usually runs you $60." },
  { from: "alfie", text: "Also, your streaming bundle quietly went up $4 this month." },
];

export function ThinkAhead() {
  return (
    <section className="py-16 lg:py-20">
      <Fade className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-last lg:order-first rounded-xl bg-[#F6F5F2] p-8 lg:p-10">
            <div className="space-y-3">
              {chat.map((m, i) => (
                <div key={i} className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] rounded-2xl px-5 py-3.5 text-sm md:text-base font-medium leading-relaxed ${
                      m.from === "user"
                        ? "bg-[#111111] text-white rounded-br-md"
                        : "bg-white text-black/75 rounded-bl-md shadow-sm"
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-2 text-sm text-black/50 font-medium">
              <Sparkles className="w-4 h-4 text-[#EB8F00]" />
              Alfie, always one step ahead
            </div>
          </div>

          <div>
            <Eyebrow>Proactive intelligence</Eyebrow>
            <H2>Banking that thinks ahead.</H2>
            <Body>
              Instead of waiting for you to ask, Alfie proactively highlights what deserves your
              attention, from upcoming bills to unusual spending and opportunities to save.
            </Body>
          </div>
        </div>
      </Fade>
    </section>
  );
}

/* ─── 6. Meet Alfie: editorial panels ─── */
const alfiePanels = [
  {
    title: "Natural conversation",
    desc: 'Ask real-world questions like "Can I afford this $1,200 trip to Cabo next week?" or "How much did I spend on dining out this month?"',
    image: lifestyleBeach,
    tall: false,
  },
  {
    title: "Proactive protection",
    desc: "Receive timely warnings before you overspend or when subscription costs silently increase.",
    image: lifestyleHobby,
    tall: true,
  },
  {
    title: "Autonomous execution",
    desc: 'Tell Alfie to "Move $500 to savings every payday and send $100 to Claudine on weekends."',
    image: lifestyleCooking,
    tall: false,
  },
];

export function MeetAlfie() {
  return (
    <section className="py-16 lg:py-20">
      <Fade className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <Eyebrow>Meet Alfie</Eyebrow>
          <H2>Ask anything. Automate everything.</H2>
          <Body>
            Alfie isn't a customer service chatbot, it's a reasoning engine built directly into your
            bank account.
          </Body>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6 items-center">
          {alfiePanels.map((p) => (
            <div
              key={p.title}
              className={`relative rounded-xl overflow-hidden group transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-25px_rgba(0,0,0,0.45)] ${
                p.tall ? "h-[520px]" : "h-[460px]"
              }`}
            >
              <img src={p.image} alt={p.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/25 to-black/45" />
              <div className="relative p-8">
                <h3 className="text-white text-2xl font-medium leading-snug tracking-tight" style={{ fontFamily: SF_FONT }}>
                  {p.title}
                </h3>
                <div className="mt-4 h-[3px] w-12 rounded-full bg-[#EB8F00]" />
                <p className="mt-4 text-white/80 text-sm md:text-base font-medium leading-relaxed max-w-xs">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Fade>
    </section>
  );
}

/* ─── 7. Daily money accordion ─── */
const automations = [
  {
    title: "Smart salary sorting",
    desc: "Automatically split your paycheck the moment it hits; route cash to rent, set aside bill money, and fund your savings goals instantly.",
    image: lifestyleGathering,
  },
  {
    title: "Real-time cash flow",
    desc: "See exactly what you have left to spend today after accounting for upcoming bills, subscriptions, and savings targets.",
    image: lifestyleHike,
  },
  {
    title: "Instant payments",
    desc: "Send money via Interac with automated recurring notes and smart tracking built right in.",
    image: lifestyleDreamJob,
  },
];

export function DailyMoney() {
  const [active, setActive] = useState(0);
  const pausedUntil = useRef(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      if (Date.now() < pausedUntil.current) return;
      setActive((i) => (i + 1) % automations.length);
    }, 4000);
    return () => window.clearInterval(id);
  }, []);

  const select = (i: number) => {
    setActive(i);
    pausedUntil.current = Date.now() + 6000;
  };

  return (
    <section className="py-16 lg:py-20">
      <Fade className="max-w-7xl mx-auto px-6">
        <Eyebrow>Automation</Eyebrow>
        <H2>Your daily money, fully automated.</H2>
        <Body>
          No more manual budgets or spreadsheet tracking. Renda handles the heavy lifting so your
          money is always where it needs to be.
        </Body>

        <div className="mt-12 flex w-full gap-3 h-[420px] lg:h-[520px]">
          {automations.map((a, i) => {
            const isActive = i === active;
            return (
              <button
                key={a.title}
                type="button"
                onClick={() => select(i)}
                aria-expanded={isActive}
                className="relative rounded-xl overflow-hidden bg-[#111111] transition-all duration-700 ease-in-out focus:outline-none"
                style={{ flexGrow: isActive ? 6 : 1, flexBasis: 0, minWidth: 0 }}
              >
                <img
                  src={a.image}
                  alt={a.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${isActive ? "opacity-100" : "opacity-0"}`}
                  loading="lazy"
                />
                <div className={`absolute inset-0 transition-opacity duration-700 ${isActive ? "bg-gradient-to-t from-black/75 via-black/20 to-black/30 opacity-100" : "opacity-0"}`} />

                {isActive ? (
                  <div className="relative h-full flex flex-col justify-end p-8 lg:p-10 text-left">
                    <div className="h-[3px] w-12 rounded-full bg-[#EB8F00] mb-5" />
                    <h3 className="text-white text-2xl md:text-3xl font-medium tracking-tight" style={{ fontFamily: SF_FONT }}>
                      {a.title}
                    </h3>
                    <p className="mt-3 text-white/75 text-sm md:text-base font-medium leading-relaxed max-w-md">
                      {a.desc}
                    </p>
                  </div>
                ) : (
                  <div className="relative h-full flex items-center justify-center">
                    <span
                      className="text-white/80 text-base font-medium tracking-tight whitespace-nowrap"
                      style={{ writingMode: "vertical-rl", transform: "rotate(180deg)", fontFamily: SF_FONT }}
                    >
                      {a.title}
                    </span>
                  </div>
                )}
              </button>
            );
          })}
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {automations.map((a, i) => (
            <button
              key={a.title}
              type="button"
              onClick={() => select(i)}
              aria-label={`Show ${a.title}`}
              className={`rounded-full transition-all duration-300 ${i === active ? "w-6 h-2 bg-foreground" : "w-2 h-2 bg-black/25"}`}
            />
          ))}
        </div>
      </Fade>
    </section>
  );
}

/* ─── 8. Coming soon ─── */
const soon = [
  { icon: TrendingUp, title: "Investing", desc: "Grow long-term wealth with Alfie's context on your whole financial picture." },
  { icon: CreditCard, title: "Credit", desc: "Borrowing that understands your cash flow, not just your score." },
  { icon: Globe2, title: "International payments", desc: "Move money across borders with clarity on every fee." },
  { icon: Sparkle, title: "More, powered by Alfie", desc: "Every new Renda product is built on the same intelligence layer." },
];

export function ComingSoon() {
  return (
    <section className="py-16 lg:py-20">
      <Fade className="max-w-7xl mx-auto px-6">
        <Eyebrow>Coming soon</Eyebrow>
        <H2>What we're building next.</H2>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {soon.map((f) => (
            <div
              key={f.title}
              className="bg-[#F6F5F2] rounded-2xl p-9 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] group min-h-[260px]"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-colors">
                <f.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-black/80 mb-3" style={{ fontFamily: SF_FONT }}>
                {f.title}
              </h3>
              <p className="text-base text-black font-medium leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </Fade>
    </section>
  );
}

/* ─── 9. CTA ─── */
export function HomeCTA() {
  return (
    <section className="py-16 lg:py-24">
      <Fade className="max-w-4xl mx-auto px-6 text-center">
        <H2>Ready for banking that actually thinks?</H2>
        <Body>
          Join thousands of early adopters getting priority card delivery and exclusive launch
          perks.
        </Body>
        <div className="mt-10 flex justify-center">
          <a
            href="#waitlist"
            className="inline-flex items-center gap-2 h-14 px-8 rounded-full bg-foreground text-background text-base font-semibold hover:bg-foreground/90 hover:-translate-y-0.5 transition-all duration-300"
          >
            Get early access
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </Fade>
    </section>
  );
}

/* ─── 10. Plans (flows into footer) ─── */
const plans = [
  {
    name: "Everyday",
    price: "$0",
    cadence: "CAD / month",
    line: "Smart banking for everyday life.",
    img: planEveryday,
  },
  {
    name: "Plus",
    price: "$9.96",
    cadence: "CAD / month",
    line: "Banking with intelligence.",
    img: planPlus,
  },
];

export function Pricing() {
  return (
    <section className="pt-20 lg:pt-28 pb-20 lg:pb-24 bg-[#111111]" style={{ fontFamily: SF_FONT }}>
      <Fade className="max-w-5xl mx-auto px-6 text-center">
        <Eyebrow light>Plans</Eyebrow>
        <H2 light>Pick the plan that fits your life.</H2>
        <p className="mt-6 text-base md:text-lg text-white/60 font-medium leading-relaxed max-w-2xl mx-auto">
          Start free and upgrade whenever you want more of Alfie working in the background. No
          hidden fees, cancel any time.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-3xl mx-auto">
          {plans.map((p) => (
            <div key={p.name} className="relative rounded-xl overflow-hidden group text-left">
              <img
                src={p.img}
                alt={`Renda ${p.name} plan`}
                className="w-full h-[380px] lg:h-[440px] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/20" />
              <div className="absolute inset-x-0 bottom-0 p-7 lg:p-8">
                <h3 className="text-xl lg:text-2xl font-semibold tracking-tight text-white">
                  {p.name}
                </h3>
                <div className="mt-2 flex items-end gap-2">
                  <span className="text-3xl lg:text-4xl font-semibold text-white tracking-tight">
                    {p.price}
                  </span>
                  <span className="text-sm text-white/60 font-medium mb-1">{p.cadence}</span>
                </div>
                <p className="mt-3 text-base font-medium text-white/75 leading-relaxed">{p.line}</p>
              </div>
            </div>
          ))}
        </div>
      </Fade>
    </section>
  );
}

