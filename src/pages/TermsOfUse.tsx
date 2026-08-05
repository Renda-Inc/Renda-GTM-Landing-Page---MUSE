import { Link } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { FileText, ChevronRight } from "lucide-react";

export interface PolicyItem {
  slug: string;
  label: string;
  summary: string;
  content: string;
}

export interface PolicySection {
  title: string;
  description: string;
  policies: PolicyItem[];
}

export const termsSections: PolicySection[] = [
  {
    title: "Platform Terms",
    description:
      "These policies apply to the use of the Renda platform and digital services.",
    policies: [
      {
        slug: "renda-terms-of-service",
        label: "Renda Terms of Service",
        summary:
          "The primary agreement governing access to and use of the Renda platform.",
        content:
          "These Terms of Service set out the rules and expectations that govern your access to and use of the Renda platform, including our website, mobile apps, and any related digital services. By creating an account or otherwise using Renda, you agree to these terms in full. They cover eligibility, account responsibilities, acceptable conduct, intellectual property, limitations of liability, and the legal framework that applies to any disputes. We may update these terms from time to time, and we'll always let you know when meaningful changes are made.",
      },
      {
        slug: "acceptable-use-policy",
        label: "Acceptable Use Policy",
        summary:
          "Guidelines describing permitted and prohibited uses of the platform and financial services.",
        content:
          "Our Acceptable Use Policy describes the ways in which the Renda platform and financial services may, and may not, be used. It prohibits activities such as fraud, money laundering, unauthorised access, abuse of other users, and any use that violates applicable law. We reserve the right to suspend or terminate accounts that breach this policy, in order to protect the platform, our customers, and the broader financial system.",
      },
      {
        slug: "electronic-communications",
        label: "Electronic Communications & E-Consent",
        summary:
          "Explains that users agree to receive disclosures, agreements, and communications electronically.",
        content:
          "By using Renda, you agree to receive disclosures, notices, statements, agreements, and other communications from us electronically. This includes emails, in-app messages, and information made available through your account dashboard. You can withdraw this consent at any time, though doing so may limit your ability to continue using certain Renda services that depend on electronic delivery.",
      },
    ],
  },
  {
    title: "Account & Banking Agreements",
    description:
      "These agreements govern the use of Renda financial accounts and related banking services.",
    policies: [
      {
        slug: "renda-accounts-agreement",
        label: "Renda Accounts Agreement",
        summary:
          "Terms governing customer accounts, deposits, and account functionality.",
        content:
          "The Renda Accounts Agreement sets out the terms that apply to your Renda accounts, including how deposits are held, how transactions are processed, and how you and Renda can manage or close an account. It also covers your responsibilities as an accountholder and the protections that apply to your funds through our banking partners.",
      },
      {
        slug: "funds-availability-policy",
        label: "Funds Availability Policy",
        summary:
          "Explains when deposits become available and how settlement timing may apply.",
        content:
          "This policy explains when funds deposited into your Renda account become available to use, and how different deposit methods, such as direct deposits, transfers, and cheques, may have different settlement timelines. It also explains the circumstances under which a hold may be placed on a deposit and how you'll be notified.",
      },
      {
        slug: "fee-schedule",
        label: "Fee Schedule",
        summary: "A clear list of fees that may apply to Renda services.",
        content:
          "Our Fee Schedule provides a clear, plain-language summary of any fees that may apply to your use of Renda services, including account-related fees, card-related fees, and fees for optional services. We aim to keep our fees minimal and transparent, and we'll always notify you before charging any new or updated fees.",
      },
    ],
  },
  {
    title: "Cards & Payments",
    description:
      "Policies governing debit card usage and payment transactions.",
    policies: [
      {
        slug: "cardholder-agreement",
        label: "Cardholder Agreement",
        summary:
          "Terms governing the use of the Renda debit card issued through banking partners.",
        content:
          "The Cardholder Agreement governs the use of your Renda debit card, which is issued through our banking partners. It covers activation, usage limits, lost or stolen card procedures, liability for unauthorised use, and the rights and responsibilities you have as a cardholder.",
      },
      {
        slug: "transaction-disputes",
        label: "Transaction Error & Dispute Resolution Policy",
        summary:
          "Explains how customers can report transaction errors or unauthorized activity and how disputes are handled.",
        content:
          "If you spot a transaction error or an unauthorised charge on your account, this policy explains how to report it and what happens next. It covers the timelines for raising a dispute, the information we'll need from you, how we investigate, and how resolutions are communicated.",
      },
    ],
  },
  {
    title: "Consumer Protection",
    description:
      "Policies designed to protect users and explain how concerns or complaints are handled.",
    policies: [
      {
        slug: "complaints-resolution-policy",
        label: "Complaints Resolution Policy",
        summary:
          "Explains the process for submitting complaints and how they will be reviewed and resolved.",
        content:
          "Our Complaints Resolution Policy outlines the steps you can take if you're unhappy with any aspect of your Renda experience. It explains how to submit a complaint, the timelines you can expect for a response, how complaints are escalated when needed, and your right to seek external review if a complaint isn't resolved to your satisfaction.",
      },
      {
        slug: "security-and-fraud-prevention",
        label: "Security & Fraud Prevention Policy",
        summary:
          "Guidelines describing how customers should protect their accounts and how suspicious activity is handled.",
        content:
          "This policy describes how we work together with you to protect your account from fraud and unauthorised access. It includes practical guidance on safeguarding your credentials, recognising suspicious activity, and reporting concerns. It also explains the steps Renda takes when potential fraud is detected.",
      },
    ],
  },
  {
    title: "Technology & AI Disclosures",
    description:
      "Policies explaining how technology and AI features are used within the platform.",
    policies: [
      {
        slug: "ai-assistance-disclosure",
        label: "AI Assistance Disclosure",
        summary:
          "Explains how AI-powered features within the Renda platform work and their limitations.",
        content:
          "Renda uses AI-powered features, including our assistant Alfie, to help you understand your finances, surface insights, and take action. This disclosure explains, in plain language, how those features work, what kinds of data they rely on, and where their limitations lie. AI suggestions are intended to inform your decisions, not replace your own judgement.",
      },
    ],
  },
];

export default function TermsOfUse() {
  return (
    <main
      className="min-h-screen bg-background text-foreground"
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "SF Pro", system-ui, "Helvetica Neue", Arial, sans-serif',
      }}
    >
      <Navbar />

      {/* Hero */}
      <header className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[15px] font-semibold tracking-[0.08em] text-black mb-4">
            Legal Center
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-black/80">
            Terms of Use
          </h1>
          <p className="mt-6 text-base md:text-lg text-black/60 font-medium leading-relaxed max-w-2xl">
            This page contains the agreements, policies, and disclosures that
            govern the use of the Renda platform and its financial services.
            Please review these documents carefully before using our services.
          </p>
        </div>
      </header>

      {/* Sections */}
      <section className="pb-24 px-6">
        <div className="max-w-4xl mx-auto space-y-20">
          {termsSections.map((section) => (
            <div key={section.title}>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-black/80 mb-3">
                {section.title}
              </h2>
              <p className="text-base md:text-lg text-black/60 font-medium leading-relaxed mb-8">
                {section.description}
              </p>

              <div className="rounded-xl overflow-hidden divide-y divide-black/10 bg-[#F6F5F2]">
                {section.policies.map((policy) => (
                  <Link
                    key={policy.slug}
                    to={`/terms/${policy.slug}`}
                    className="flex items-start gap-5 px-7 py-6 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)] hover:bg-[#EFEDE7] group"
                  >
                    <FileText className="w-6 h-6 text-black/60 mt-0.5 shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-base md:text-lg font-semibold text-black/80">
                        {policy.label}
                      </p>
                      <p className="text-[15px] md:text-base text-black/60 font-medium mt-1 leading-relaxed">
                        {policy.summary}
                      </p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-black/40 mt-1 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
