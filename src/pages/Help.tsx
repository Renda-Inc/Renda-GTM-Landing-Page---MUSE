import { Link } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { useFadeIn } from "@/hooks/use-fade-in";
import { Rocket, CreditCard, Send, Sparkles, ShieldCheck, Receipt, ChevronRight } from "lucide-react";
import helpHeroBg from "@/assets/help-hero-bg.jpeg";

function Fade({ children, className = "" }: { children: React.ReactNode; className?: string }) {
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

function Divider() {
  return <div className="max-w-4xl mx-auto px-6"><div className="h-[2px] bg-black/15 rounded-full" /></div>;
}

export interface HelpCategory {
  slug: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  topics: { title: string; summary: string; content?: string }[];
}

export const helpCategories: HelpCategory[] = [
  {
    slug: "getting-started",
    title: "Getting Started",
    icon: Rocket,
    description: "Everything you need to open your account and start using Renda.",
    topics: [
      { title: "How to create an account", summary: "Step-by-step guide to signing up for Renda and verifying your identity.", content: "Download the Renda app or visit renda.com to begin. You'll need a valid government-issued ID and a Canadian address. The verification process typically takes under five minutes, and most accounts are approved instantly. Once approved, you can fund your account and start using your Renda card right away." },
      { title: "Setting up your profile", summary: "Personalise your account with your name, photo, and notification preferences.", content: "Head to Settings to add a profile photo, update your display name, and choose which notifications you want to receive. You can customise alerts for spending, deposits, and Alfie insights, all from a single screen." },
      { title: "Linking an external bank account", summary: "Connect your existing bank to fund your Renda account seamlessly.", content: "Open the Renda app, tap Add Funds, then choose Link External Account. We use bank-grade encryption to securely connect to over 10,000 financial institutions across North America." },
      { title: "Understanding your dashboard", summary: "A walkthrough of the main screens and what each section shows you.", content: "Your dashboard is organised into three core sections: Accounts, Insights, and Alfie. Each surface gives you a clear, focused view of what matters most at any given time." },
    ],
  },
  {
    slug: "accounts-and-cards",
    title: "Accounts & Cards",
    icon: CreditCard,
    description: "Manage your personal accounts, cards, and payment methods.",
    topics: [
      { title: "Account types explained", summary: "Understand the difference between Everyday, Savings, and Goal accounts.", content: "Renda offers three core account types tailored to different financial habits and goals." },
      { title: "Ordering a physical card", summary: "How to request, activate, and manage your Renda debit card.", content: "From the Cards screen, tap Order Physical Card. Your card arrives within 5 to 7 business days." },
      { title: "Virtual cards", summary: "Create instant virtual cards for online purchases with custom limits.", content: "Generate a virtual card in seconds, set spending limits, and freeze or delete it whenever you need." },
      { title: "Freezing or replacing a card", summary: "Temporarily lock your card or request a replacement if lost or stolen.", content: "Lost your card? Freeze it instantly from the app, then request a replacement with one tap." },
    ],
  },
  {
    slug: "payments-and-transfers",
    title: "Payments & Transfers",
    icon: Send,
    description: "Send money, pay bills, and manage your transactions.",
    topics: [
      { title: "Sending an Interac e-Transfer", summary: "How to send and receive money instantly across Canada.", content: "Tap Send, enter the recipient's email or phone number, and choose your amount. Transfers usually arrive within minutes." },
      { title: "Setting up recurring payments", summary: "Automate bill payments and subscriptions so you never miss a due date.", content: "Schedule any payment to repeat weekly, monthly, or on a custom cadence." },
      { title: "International transfers", summary: "Send money abroad with transparent fees and real-time exchange rates.", content: "Send to over 80 countries with mid-market exchange rates and clear, upfront fees." },
      { title: "Transaction limits and holds", summary: "Understand daily limits, pending holds, and how to request increases.", content: "Default limits protect your account. You can request increases anytime from Settings." },
    ],
  },
  {
    slug: "alfie-ai",
    title: "Alfie AI Assistant",
    icon: Sparkles,
    description: "Learn how to get the most out of Renda's intelligent assistant.",
    topics: [
      { title: "What Alfie can do", summary: "An overview of Alfie's capabilities, from spending insights to proactive alerts.", content: "Alfie is your always-on financial reasoning engine: analysing patterns, surfacing signals, and answering questions about your money." },
      { title: "Asking Alfie questions", summary: "How to interact with Alfie using natural language for financial queries.", content: "Just type or speak. Alfie understands context: 'How much did I spend on coffee last month?' or 'Can I afford a $1,200 trip?'" },
      { title: "Alfie's spending insights", summary: "How Alfie analyses your spending patterns and surfaces actionable signals.", content: "Alfie continuously analyses your transactions and highlights changes that matter, before they become a problem." },
      { title: "Privacy and data usage", summary: "How Alfie processes your data, and how you stay in control at all times.", content: "Your data never leaves Renda's secure infrastructure. You can review, export, or delete Alfie's memory at any time." },
    ],
  },
  {
    slug: "security-and-privacy",
    title: "Security & Privacy",
    icon: ShieldCheck,
    description: "Protect your account and understand how we keep your data safe.",
    topics: [
      { title: "Two-factor authentication", summary: "Enable 2FA for an extra layer of security on your account.", content: "Turn on 2FA from Settings. We support authenticator apps and hardware keys." },
      { title: "Recognising phishing attempts", summary: "How to spot fraudulent emails, texts, and calls pretending to be Renda.", content: "Renda will never ask for your password or one-time code. If in doubt, contact support directly." },
      { title: "Data encryption and storage", summary: "How we encrypt and protect your financial data at rest and in transit.", content: "We use AES-256 encryption at rest and TLS 1.3 in transit, with regular third-party audits." },
      { title: "Reporting suspicious activity", summary: "Steps to take if you notice unauthorised transactions on your account.", content: "Freeze your card instantly, then contact support. We'll investigate and refund any verified fraud." },
    ],
  },
  {
    slug: "billing-and-fees",
    title: "Billing & Fees",
    icon: Receipt,
    description: "Understand pricing, subscription plans, and any applicable fees.",
    topics: [
      { title: "Renda pricing plans", summary: "Compare features across Free, Plus, and Premium tiers.", content: "Free covers everyday banking. Plus adds advanced Alfie features. Premium unlocks priority support and global perks." },
      { title: "Understanding transaction fees", summary: "A breakdown of when fees apply and how to minimise them.", content: "Most everyday transactions are free. We're transparent about every fee, with no surprises." },
      { title: "Upgrading or downgrading your plan", summary: "How to switch plans and what happens to your features.", content: "Change plans anytime from Settings. Upgrades take effect immediately; downgrades at the next billing cycle." },
      { title: "Requesting a refund", summary: "Our refund policy and how to submit a request.", content: "Eligible refunds are processed within 5 to 7 business days. Submit a request from the Billing screen." },
    ],
  },
];

export default function Help() {
  return (
    <main
      className="min-h-screen bg-background"
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "SF Pro", system-ui, "Helvetica Neue", Arial, sans-serif',
      }}
    >
      <Navbar />

      {/* Hero */}
      <section
        className="relative pt-32 pb-24 lg:pt-44 lg:pb-32 bg-cover bg-center"
        style={{ backgroundImage: `url(${helpHeroBg})` }}
      >
        <div className="absolute inset-0 bg-white/55" aria-hidden="true" />
        <Fade className="relative max-w-3xl mx-auto px-6 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground mb-6">Help Centre</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] text-black/80">
            How can we help you?
          </h1>
          <p className="mt-6 text-base md:text-lg text-black/60 font-medium leading-relaxed max-w-2xl mx-auto">
            Find answers to common questions, explore topic guides, and get the support you need.
          </p>
        </Fade>
      </section>

      <Divider />

      {/* Topic Cards — Working at Renda style */}
      <section className="py-24 lg:py-32 bg-[#F6F5F2]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {helpCategories.map((cat) => {
              const Icon = cat.icon;
              const previewTopics = cat.topics.slice(0, 3);
              return (
                <Fade key={cat.slug}>
                  <div className="bg-white rounded-2xl p-8 h-full flex flex-col border border-transparent transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] group">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-colors">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h2 className="text-lg font-semibold text-foreground mb-2">{cat.title}</h2>
                    <p className="text-[16px] text-black/60 font-medium leading-relaxed">{cat.description}</p>

                    <ul className="mt-5 space-y-2 flex-1">
                      {previewTopics.map((t) => (
                        <li key={t.title} className="text-[15px] text-black/70 font-medium flex items-start gap-2 leading-relaxed">
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                          {t.title}
                        </li>
                      ))}
                    </ul>

                    <Link
                      to={`/help/${cat.slug}`}
                      className="mt-6 inline-flex items-center gap-1 text-[15px] font-semibold text-foreground hover:opacity-70 transition-opacity"
                    >
                      See all {cat.topics.length} articles
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </Fade>
              );
            })}
          </div>
        </div>
      </section>

      <Divider />

      {/* Contact section */}
      <section id="contact" className="py-24 lg:py-32">
        <Fade className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground mb-8">Contact Us</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-black/80 hover:text-black transition-colors duration-300 leading-tight">
            Still need help?
          </h2>
          <p className="mt-6 text-base md:text-lg text-black/60 font-medium leading-relaxed max-w-xl mx-auto">
            Our support team is available Monday to Friday, 9 AM to 6 PM ET. Reach out and we'll get back to you within 24 hours.
          </p>
          <a
            href="mailto:support@renda.com"
            className="mt-10 inline-flex h-12 px-8 items-center rounded-full bg-foreground text-background text-base font-medium hover:opacity-90 transition-opacity"
          >
            Email Support
          </a>
        </Fade>
      </section>

      <Divider />

      {/* Refer a Friend */}
      <section id="refer" className="py-24 lg:py-32 bg-[#F6F5F2]">
        <Fade className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground mb-8">Refer a Friend</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-black/80 hover:text-black transition-colors duration-300 leading-tight">
            Share Renda. Earn rewards.
          </h2>
          <p className="mt-6 text-base md:text-lg text-black/60 font-medium leading-relaxed max-w-xl mx-auto">
            Invite friends to Renda and you'll both receive a bonus when they open and fund their account. The more you share, the more you earn.
          </p>
          <a
            href="#waitlist"
            className="mt-10 inline-flex h-12 px-8 items-center rounded-full bg-foreground text-background text-base font-medium hover:opacity-90 transition-opacity"
          >
            Get Your Referral Link
          </a>
        </Fade>
      </section>

      <Footer />
    </main>
  );
}
