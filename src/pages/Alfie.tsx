import { useEffect, useRef } from "react";
import { Brain, Lightbulb, Link2, Network, Sparkles, Zap } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { useFadeIn } from "@/hooks/use-fade-in";
import heroImage from "@/assets/alfie-hero.jpg";
import individualImage from "@/assets/alfie-cap-assistant.jpg";
import businessImage from "@/assets/alfie-org-enterprise.jpg";
import enterpriseImage from "@/assets/alfie-org-government.jpg";
import agentsImage from "@/assets/alfie-cap-actions.jpg";

const SF_PRO =
  '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "SF Pro", system-ui, "Helvetica Neue", Arial, sans-serif';

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, isVisible } = useFadeIn();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"} ${className}`}
    >
      {children}
    </div>
  );
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <p className={`mb-5 text-[15px] font-semibold tracking-[0.08em] ${light ? "text-background" : "text-brand-orange"}`}>{children}</p>;
}

function SectionHeading({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <h2 className={`text-3xl font-semibold leading-tight tracking-tight md:text-4xl ${light ? "text-background" : "text-foreground"}`}>
      {children}
    </h2>
  );
}

const stages = [
  { name: "Connect", tint: "bg-[#FDEBD3]", desc: "Bring together the financial data, systems, documents, and information Alfie needs.", icon: Link2 },
  { name: "Understand", tint: "bg-[#F1EAFB]", desc: "Alfie builds context across financial activity, recognizing relationships, patterns, obligations, risks, and opportunities.", icon: Brain },
  { name: "Reason", tint: "bg-[#E0EDFB]", desc: "Analyze information, investigate questions, understand scenarios, and determine what matters.", icon: Lightbulb },
  { name: "Act", tint: "bg-[#DFF7F5]", desc: "Turn intelligence into recommendation.", icon: Zap },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-16 bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="text-center max-w-3xl mx-auto">
          <Eyebrow>How it works</Eyebrow>
          <SectionHeading>Connect. Understand. Reason. Act.</SectionHeading>
          <p className="mt-6 text-base md:text-lg font-medium leading-relaxed text-foreground">
            Alfie connects financial information to a shared layer of context and reasoning, then turns what it understands into useful work.
          </p>
        </Reveal>

        <Reveal className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stages.map((stage) => {
            const Icon = stage.icon;
            return (
              <div
                key={stage.name}
                className={`rounded-[1.75rem] p-9 ${stage.tint} transition-transform duration-500 hover:scale-[1.02] min-h-[260px]`}
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-white/80 ring-1 ring-black/5 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-black/80 mb-3" style={{ fontFamily: SF_PRO }}>
                    {stage.name}
                  </h3>
                  <p className="text-base text-black font-medium leading-relaxed">
                    {stage.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </Reveal>

        <Reveal className="mt-14 rounded-3xl overflow-hidden">
          <img
            src={heroImage}
            alt="Alfie connecting financial systems"
            className="h-[300px] w-full object-cover lg:h-[440px]"
            loading="lazy"
          />
        </Reveal>
      </div>
    </section>
  );
}

const individualQuestions = [
  "How much did I spend last month?",
  "Can I afford this?",
  "What bills are coming up?",
  "How much can I safely move into savings?",
];

const businessQuestions = [
  "What changed in our cash position this month?",
  "Which customers are most overdue?",
  "Where are we spending more than expected?",
  "What should I know before tomorrow’s finance meeting?",
  "Prepare a summary of this month’s performance.",
];

function QuestionList({ questions, dark = false }: { questions: string[]; dark?: boolean }) {
  return (
    <div className={`divide-y border-y ${dark ? "divide-background/15 border-background/15" : "divide-border border-border"}`}>
      {questions.map((question) => (
        <div key={question} className="flex items-start gap-4 py-4">
          <Sparkles className={`mt-1 h-4 w-4 shrink-0 ${dark ? "text-primary" : "text-primary"}`} />
          <p className={`text-base font-medium ${dark ? "text-background/85" : "text-foreground"}`}>“{question}”</p>
        </div>
      ))}
    </div>
  );
}

const systems = ["Accounting", "Banking", "ERP", "Payroll", "Expenses", "Documents", "Internal systems"];

const institutionalAreas = [
  { title: "Financial analysis", text: "Understand large volumes of financial activity and identify what matters." },
  { title: "Risk & compliance", text: "Surface anomalies, assess risk, and support compliance workflows." },
  { title: "Audit & investigation", text: "Analyze records, transactions, documents, and relationships across large datasets." },
  { title: "Planning & forecasting", text: "Model scenarios and understand potential financial outcomes." },
  { title: "Government & public finance", text: "Support tax, audit, revenue, financial administration, fraud analysis, and public-sector workflows." },
];

const agents = ["Financial Analysis", "Risk & Compliance", "Audit", "Reporting", "Forecasting", "Operations"];

function Hero() {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (imageRef.current) imageRef.current.style.transform = `translateY(${Math.min(window.scrollY * 0.08, 38)}px) scale(1.04)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-foreground text-background">
      <img ref={imageRef} src={heroImage} alt="Alfie financial intelligence platform" className="absolute inset-0 h-full w-full object-cover transition-transform duration-200" />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/70 to-foreground/25" />
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-24 md:px-10">
        <div className="max-w-3xl">
          <h1 className="max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
            Financial intelligence.<br />Not just conversation.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-background/80 md:text-xl">
            Alfie connects financial data, context, reasoning, workflows, and authorized actions. Conversation is simply one way to work with the intelligence.
          </p>
        </div>
      </div>
    </section>
  );
}

export default function Alfie() {
  return (
    <main className="min-h-screen bg-background" style={{ fontFamily: SF_PRO }}>
      <Navbar />
      <Hero />
      <HowItWorks />

      <section id="individuals" className="scroll-mt-16 py-16 lg:py-24">
        <Reveal className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div className="relative h-[420px] overflow-hidden rounded-3xl lg:h-[600px]">
            <img src={individualImage} alt="An individual using Alfie to understand personal finances" className="h-full w-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
            <p className="absolute bottom-7 left-7 right-7 text-xl font-medium text-background md:text-2xl">Built into Renda.</p>
          </div>
          <div>
            <Eyebrow>For individuals</Eyebrow>
            <SectionHeading>Your financial life, understood.</SectionHeading>
            <p className="mt-6 text-base font-medium leading-relaxed text-foreground md:text-lg">
              Alfie brings your financial life together to help you understand where you stand, what’s changing, and what to do next.
            </p>
            <div className="mt-8"><QuestionList questions={individualQuestions} /></div>
          </div>
        </Reveal>
      </section>

      <section id="business" className="scroll-mt-16 bg-foreground py-16 text-background lg:py-24">
        <Reveal className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-20">
            <div>
              <Eyebrow light>For business</Eyebrow>
              <SectionHeading light>Financial intelligence for your business.</SectionHeading>
              <p className="mt-6 text-base font-medium leading-relaxed text-background/80 md:text-lg">
                Alfie connects your financial systems, understands what’s happening across your business, and turns that information into intelligence your team can act on.
              </p>
              <div className="mt-8"><QuestionList questions={businessQuestions} dark /></div>
            </div>
            <div className="relative h-[440px] overflow-hidden rounded-3xl lg:h-[620px]">
              <img src={businessImage} alt="Business financial systems interpreted by Alfie" className="h-full w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-transparent to-transparent" />
              <p className="absolute bottom-8 left-8 right-8 max-w-lg text-xl font-medium leading-snug text-background md:text-2xl">
                Your systems already have the data. Alfie makes sense of it.
              </p>
            </div>
          </div>
          <div className="mt-14 border-y border-background/15 py-7">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm font-semibold text-background/60 md:justify-between md:text-base">
              {systems.map((system) => <span key={system}>{system}</span>)}
            </div>
          </div>
        </Reveal>
      </section>

      <section id="enterprise-government" className="scroll-mt-16 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal className="mx-auto max-w-3xl text-center">
            <Eyebrow>Enterprise & Government</Eyebrow>
            <SectionHeading>Intelligence for the financial systems that matter.</SectionHeading>
            <p className="mx-auto mt-6 max-w-2xl text-base font-medium leading-relaxed text-foreground md:text-lg">
              Alfie gives enterprises and government organizations the ability to reason across complex financial information, systems, regulations, and workflows, securely and at scale.
            </p>
          </Reveal>
          <Reveal className="mt-12 overflow-hidden rounded-3xl">
            <img src={enterpriseImage} alt="Enterprise and government financial operations" className="h-[320px] w-full object-cover md:h-[500px]" loading="lazy" />
          </Reveal>
          <div className="mt-12 grid border-t border-border md:grid-cols-2 lg:grid-cols-3">
            {institutionalAreas.map((area, index) => (
              <Reveal key={area.title} className={`border-b border-border py-7 md:px-7 ${index % 2 === 0 ? "md:border-r" : ""} lg:border-r lg:last:border-r-0`}>
                <h3 className="text-lg font-semibold text-foreground">{area.title}</h3>
                <p className="mt-3 text-[15px] font-medium leading-relaxed text-foreground">{area.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="agents" className="scroll-mt-16 bg-secondary py-16 lg:py-24">
        <Reveal className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
            <div className="order-2 lg:order-1">
              <Eyebrow>Alfie Agents</Eyebrow>
              <SectionHeading>From intelligence to work.</SectionHeading>
              <p className="mt-6 text-base font-medium leading-relaxed text-foreground md:text-lg">
                Alfie can move beyond answering questions to performing financial work, analyzing information, preparing reports, monitoring activity, coordinating workflows, and surfacing issues for human review.
              </p>
              <div className="mt-10 grid grid-cols-2 border-t border-border">
                {agents.map((agent) => (
                  <div key={agent} className="border-b border-border py-5 text-base font-semibold text-foreground">{agent}</div>
                ))}
              </div>
            </div>
            <div className="order-1 relative h-[420px] overflow-hidden rounded-3xl lg:order-2 lg:h-[600px]">
              <img src={agentsImage} alt="Specialized Alfie agents coordinating financial work" className="h-full w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-br from-foreground/55 via-transparent to-foreground/45" />
              <div className="absolute left-7 top-7 flex items-center gap-3 rounded-full border border-background/20 bg-foreground/50 px-4 py-2 text-sm font-semibold text-background backdrop-blur-md">
                <Network className="h-4 w-4 text-primary" /> Human review stays in the loop
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section id="contact" className="scroll-mt-16 bg-foreground py-20 text-background lg:py-28">
        <Reveal className="mx-auto max-w-4xl px-6 text-center">
          <SectionHeading light>Financial intelligence for the work that matters.</SectionHeading>
          <p className="mx-auto mt-6 max-w-2xl text-base font-medium leading-relaxed text-background/80 md:text-lg">
            From personal finances to the world's most complex financial organizations, Alfie is designed to turn financial information into intelligence, and intelligence into action.
          </p>
        </Reveal>
      </section>

      <Footer />
    </main>
  );
}