import { Link } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { useFadeIn } from "@/hooks/use-fade-in";
import {
  FileText,
  ShieldCheck,
  CreditCard,
  Landmark,
  Sparkles,
  ChevronRight,
} from "lucide-react";

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
  return (
    <div className="max-w-4xl mx-auto px-6">
      <div className="h-[2px] bg-black/15 rounded-full" />
    </div>
  );
}

export interface LegalPolicy {
  slug: string;
  label: string;
  summary: string;
  content: string[];
}

export interface LegalSection {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  policies: LegalPolicy[];
}

export const legalSections: LegalSection[] = [
  {
    title: "Platform Terms",
    icon: FileText,
    description:
      "These policies apply to the use of the Renda platform and digital services.",
    policies: [
      {
        slug: "terms-of-service",
        label: "Renda Terms of Service",
        summary:
          "The primary agreement governing access to and use of the Renda platform.",
        content: [
          "These Terms of Service govern your access to and use of the Renda platform, including our website, mobile applications, and related services. By creating an account or using Renda, you agree to be bound by these terms.",
          "You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account. You agree to notify Renda immediately of any unauthorized use.",
          "Renda reserves the right to modify or discontinue features at any time. Material changes to these terms will be communicated to you in advance.",
        ],
      },
      {
        slug: "acceptable-use",
        label: "Acceptable Use Policy",
        summary:
          "Guidelines describing permitted and prohibited uses of the platform and financial services.",
        content: [
          "Renda is built to support honest, lawful financial activity. You agree not to use the platform for any unlawful purpose, including fraud, money laundering, or financing of illegal activities.",
          "Prohibited activities include attempting to interfere with platform security, reverse engineering our systems, or using Renda to harass, threaten, or harm others.",
          "Violations may result in suspension or termination of your account, along with reporting to relevant authorities where required by law.",
        ],
      },
      {
        slug: "electronic-communications",
        label: "Electronic Communications & E-Consent",
        summary:
          "Explains that users agree to receive disclosures, agreements, and communications electronically.",
        content: [
          "By using Renda, you consent to receive all disclosures, notices, agreements, and communications electronically, whether through the app, email, or other digital channels.",
          "You confirm that you have the hardware and software needed to access and retain these electronic communications, including a current web browser and a valid email address.",
          "You may withdraw your consent at any time, but doing so may limit your ability to use certain Renda services.",
        ],
      },
    ],
  },
  {
    title: "Account & Banking Agreements",
    icon: Landmark,
    description:
      "These agreements govern the use of Renda financial accounts and related banking services.",
    policies: [
      {
        slug: "accounts-agreement",
        label: "Renda Accounts Agreement",
        summary:
          "Terms governing customer accounts, deposits, and account functionality.",
        content: [
          "This agreement covers the opening, operation, and closure of Renda accounts, including Everyday, Savings, and Goal accounts.",
          "Funds held in Renda accounts are kept with our partner banks. Deposit insurance coverage details are disclosed within the platform and updated as regulations evolve.",
          "You agree to keep your account information accurate and current, and to use your account in line with applicable laws and our Acceptable Use Policy.",
        ],
      },
      {
        slug: "funds-availability",
        label: "Funds Availability Policy",
        summary:
          "Explains when deposits become available and how settlement timing may apply.",
        content: [
          "Most deposits made to your Renda account are available within one to two business days. Some deposits, including large transfers or those from new sources, may be subject to a hold for review.",
          "Settlement timing depends on the deposit method, originating institution, and time of day the deposit is received. We will display estimated availability in the app at the time of deposit.",
        ],
      },
      {
        slug: "fee-schedule",
        label: "Fee Schedule",
        summary: "A clear list of fees that may apply to Renda services.",
        content: [
          "Renda is committed to transparent pricing. Most everyday banking activities, including domestic transfers and standard card use, are free.",
          "Certain optional services, such as international transfers, expedited card delivery, and premium subscription tiers, may carry fees. All applicable fees are disclosed before you confirm the transaction.",
        ],
      },
    ],
  },
  {
    title: "Cards & Payments",
    icon: CreditCard,
    description: "Policies governing debit card usage and payment transactions.",
    policies: [
      {
        slug: "cardholder-agreement",
        label: "Cardholder Agreement",
        summary:
          "Terms governing the use of the Renda debit card issued through banking partners.",
        content: [
          "Your Renda debit card is issued by our partner bank and may be used wherever the card network is accepted. You agree to use the card only for lawful purposes.",
          "You are responsible for transactions made with your card. Lost or stolen cards should be reported immediately through the app so they can be frozen or replaced.",
          "Card features, including spending limits and rewards, may vary by account tier and are disclosed in the app.",
        ],
      },
      {
        slug: "disputes",
        label: "Transaction Error & Dispute Resolution Policy",
        summary:
          "Explains how customers can report transaction errors or unauthorized activity and how disputes are handled.",
        content: [
          "If you notice an error or unauthorized transaction on your account, contact us within 60 days of the statement showing the issue. You can submit a dispute directly from the transaction details screen in the app.",
          "We will investigate promptly and may provisionally credit your account during the review where required by law.",
          "Final resolution will be communicated in writing, along with any next steps available to you.",
        ],
      },
    ],
  },
  {
    title: "Consumer Protection",
    icon: ShieldCheck,
    description:
      "Policies designed to protect users and explain how concerns or complaints are handled.",
    policies: [
      {
        slug: "complaints",
        label: "Complaints Resolution Policy",
        summary:
          "Explains the process for submitting complaints and how they will be reviewed and resolved.",
        content: [
          "If you have a concern about a Renda product or service, you can submit a complaint through the Help Center, by email, or through the in-app support channel.",
          "We aim to acknowledge complaints within two business days and provide a substantive response within 30 days. Complex matters may take longer, in which case we will provide updates along the way.",
          "If you are not satisfied with our resolution, we will share information about the external complaints body available to you.",
        ],
      },
      {
        slug: "security-fraud",
        label: "Security & Fraud Prevention Policy",
        summary:
          "Guidelines describing how customers should protect their accounts and how suspicious activity is handled.",
        content: [
          "Protect your account by using a strong, unique password, enabling multi-factor authentication, and never sharing your credentials or one-time codes with anyone, including people claiming to be from Renda.",
          "Renda monitors activity for signs of fraud. We may temporarily restrict a transaction or account if we detect unusual behavior, and we will contact you to confirm activity before resuming normal access.",
        ],
      },
    ],
  },
  {
    title: "Technology & AI Disclosures",
    icon: Sparkles,
    description:
      "Policies explaining how technology and AI features are used within the platform.",
    policies: [
      {
        slug: "ai-disclosure",
        label: "AI Assistance Disclosure",
        summary:
          "Explains how AI-powered features within the Renda platform work and their limitations.",
        content: [
          "Renda uses AI, including Alfie, to surface financial insights, answer questions, and help you understand your money. AI features analyze your activity within Renda to generate relevant suggestions.",
          "AI-generated insights are informational and do not constitute financial, tax, or legal advice. You remain in control of every financial decision made through your account.",
          "No fully automated decisions with legal or similarly significant effects are made without human oversight. You can request a review of any AI-assisted decision at any time.",
        ],
      },
    ],
  },
];

export default function TermsOfUse() {
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
      <section className="pt-32 pb-20 lg:pt-44 lg:pb-24">
        <Fade className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground mb-6">
            Legal Center
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-black/80">
            Terms of Use
          </h1>
          <p className="mt-6 text-base md:text-lg text-black/60 font-medium leading-relaxed max-w-2xl mx-auto">
            The agreements, policies, and disclosures that govern the use of the
            Renda platform and its financial services. Please review these
            documents carefully before using our services.
          </p>
        </Fade>
      </section>

      <Divider />

      {/* Sections */}
      <section className="py-24 lg:py-32 bg-[#F6F5F2]">
        <div className="max-w-6xl mx-auto px-6 space-y-20">
          {legalSections.map((section) => {
            const Icon = section.icon;
            return (
              <Fade key={section.title}>
                <div className="max-w-3xl mx-auto text-center mb-10">
                  <div className="inline-flex w-14 h-14 rounded-2xl bg-primary/10 items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-black/80 leading-tight">
                    {section.title}
                  </h2>
                  <p className="mt-4 text-base md:text-lg text-black/60 font-medium leading-relaxed">
                    {section.description}
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {section.policies.map((policy) => (
                    <Link
                      key={policy.slug}
                      to={`/terms/${policy.slug}`}
                      className="bg-white rounded-2xl p-8 h-full flex flex-col border border-transparent transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] group"
                    >
                      <FileText className="w-7 h-7 text-black/60 mb-5" />
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {policy.label}
                      </h3>
                      <p className="text-[16px] text-black/60 font-medium leading-relaxed flex-1">
                        {policy.summary}
                      </p>
                      <span className="mt-6 inline-flex items-center gap-1 text-[15px] font-semibold text-foreground group-hover:opacity-70 transition-opacity">
                        Read policy
                        <ChevronRight className="w-4 h-4" />
                      </span>
                    </Link>
                  ))}
                </div>
              </Fade>
            );
          })}
        </div>
      </section>

      <Footer />
    </main>
  );
}
