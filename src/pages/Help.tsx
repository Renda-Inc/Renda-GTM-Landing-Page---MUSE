import { Link } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { useFadeIn } from "@/hooks/use-fade-in";
import { ChevronRight } from "lucide-react";
import helpGettingStarted from "@/assets/help-getting-started.jpg";
import helpAccountsCards from "@/assets/help-accounts-cards.jpg";
import helpPayments from "@/assets/help-payments.jpg";
import helpAlfieAi from "@/assets/help-alfie-ai.jpg";
import helpSecurity from "@/assets/help-security.jpg";
import helpBilling from "@/assets/help-billing.jpg";
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
  return <div className="max-w-4xl mx-auto px-6"><div className="h-px bg-border" /></div>;
}

export interface HelpCategory {
  slug: string;
  title: string;
  description: string;
  image: string;
  topics: { title: string; summary: string }[];
}

export const helpCategories: HelpCategory[] = [
  {
    slug: "getting-started",
    title: "Getting Started",
    image: helpGettingStarted,
    description: "Everything you need to open your account and start using Renda.",
    topics: [
      { title: "How to create an account", summary: "Step-by-step guide to signing up for Renda and verifying your identity." },
      { title: "Setting up your profile", summary: "Personalise your account with your name, photo, and notification preferences." },
      { title: "Linking an external bank account", summary: "Connect your existing bank to fund your Renda account seamlessly." },
      { title: "Understanding your dashboard", summary: "A walkthrough of the main screens and what each section shows you." },
    ],
  },
  {
    slug: "accounts-and-cards",
    title: "Accounts & Cards",
    image: helpAccountsCards,
    description: "Manage your personal accounts, cards, and payment methods.",
    topics: [
      { title: "Account types explained", summary: "Understand the difference between Everyday, Savings, and Goal accounts." },
      { title: "Ordering a physical card", summary: "How to request, activate, and manage your Renda debit card." },
      { title: "Virtual cards", summary: "Create instant virtual cards for online purchases with custom limits." },
      { title: "Freezing or replacing a card", summary: "Temporarily lock your card or request a replacement if lost or stolen." },
    ],
  },
  {
    slug: "payments-and-transfers",
    title: "Payments & Transfers",
    image: helpPayments,
    description: "Send money, pay bills, and manage your transactions.",
    topics: [
      { title: "Sending an Interac e-Transfer", summary: "How to send and receive money instantly across Canada." },
      { title: "Setting up recurring payments", summary: "Automate bill payments and subscriptions so you never miss a due date." },
      { title: "International transfers", summary: "Send money abroad with transparent fees and real-time exchange rates." },
      { title: "Transaction limits and holds", summary: "Understand daily limits, pending holds, and how to request increases." },
    ],
  },
  {
    slug: "alfie-ai",
    title: "Alfie AI Assistant",
    image: helpAlfieAi,
    description: "Learn how to get the most out of Renda's intelligent assistant.",
    topics: [
      { title: "What Alfie can do", summary: "An overview of Alfie's capabilities — from spending insights to proactive alerts." },
      { title: "Asking Alfie questions", summary: "How to interact with Alfie using natural language for financial queries." },
      { title: "Alfie's spending insights", summary: "How Alfie analyses your spending patterns and surfaces actionable signals." },
      { title: "Privacy and data usage", summary: "How Alfie processes your data, and how you stay in control at all times." },
    ],
  },
  {
    slug: "security-and-privacy",
    title: "Security & Privacy",
    image: helpSecurity,
    description: "Protect your account and understand how we keep your data safe.",
    topics: [
      { title: "Two-factor authentication", summary: "Enable 2FA for an extra layer of security on your account." },
      { title: "Recognising phishing attempts", summary: "How to spot fraudulent emails, texts, and calls pretending to be Renda." },
      { title: "Data encryption and storage", summary: "How we encrypt and protect your financial data at rest and in transit." },
      { title: "Reporting suspicious activity", summary: "Steps to take if you notice unauthorised transactions on your account." },
    ],
  },
  {
    slug: "billing-and-fees",
    title: "Billing & Fees",
    image: helpBilling,
    description: "Understand pricing, subscription plans, and any applicable fees.",
    topics: [
      { title: "Renda pricing plans", summary: "Compare features across Free, Plus, and Premium tiers." },
      { title: "Understanding transaction fees", summary: "A breakdown of when fees apply and how to minimise them." },
      { title: "Upgrading or downgrading your plan", summary: "How to switch plans and what happens to your features." },
      { title: "Requesting a refund", summary: "Our refund policy and how to submit a request." },
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
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-foreground mb-6">Help Centre</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-foreground">
            How can we help you?
          </h1>
          <p className="mt-6 text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            Find answers to common questions, explore topic guides, and get the support you need.
          </p>
        </Fade>
      </section>

      <Divider />

      {/* Topic Cards */}
      <section className="py-24 lg:py-32">
        <Fade className="max-w-5xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {helpCategories.map((cat) => (
              <div
                key={cat.slug}
                className="rounded-lg border border-border bg-card overflow-hidden flex flex-col"
              >
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-6 flex flex-col flex-1">
                <h2 className="text-lg font-semibold text-foreground">{cat.title}</h2>
                <p className="mt-2 text-base text-muted-foreground leading-relaxed">{cat.description}</p>

                {/* Preview topics */}
                <ul className="mt-5 space-y-2 flex-1">
                  {cat.topics.slice(0, 3).map((t) => (
                    <li key={t.title} className="text-base text-foreground/80 flex items-start gap-2">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-accent-foreground shrink-0" />
                      {t.title}
                    </li>
                  ))}
                </ul>

                <Link
                  to={`/help/${cat.slug}`}
                  className="mt-6 inline-flex items-center gap-1 text-base font-medium text-accent-foreground hover:opacity-80 transition-opacity"
                >
                  See all topics
                  <ChevronRight className="w-4 h-4" />
                </Link>
                </div>
              </div>
            ))}
          </div>
        </Fade>
      </section>

      <Divider />

      {/* Contact section */}
      <section id="contact" className="py-24 lg:py-32">
        <Fade className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-8">Contact Us</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground leading-tight">
            Still need help?
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Our support team is available Monday – Friday, 9 AM – 6 PM ET. Reach out and we'll get back to you within 24 hours.
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
      <section id="refer" className="py-24 lg:py-32 bg-surface-elevated">
        <Fade className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-8">Refer a Friend</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight">
            Share Renda. Earn rewards.
          </h2>
          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
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
