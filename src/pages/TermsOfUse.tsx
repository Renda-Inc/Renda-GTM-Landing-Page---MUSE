import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { FileText, ChevronRight } from "lucide-react";

interface Policy {
  label: string;
  href: string;
}

interface PolicySection {
  title: string;
  description: string;
  policies: { label: string; summary: string; href: string }[];
}

const sections: PolicySection[] = [
  {
    title: "Platform Terms",
    description:
      "These policies apply to the use of the Renda platform and digital services.",
    policies: [
      {
        label: "Renda Terms of Service",
        summary:
          "The primary agreement governing access to and use of the Renda platform.",
        href: "#",
      },
      {
        label: "Acceptable Use Policy",
        summary:
          "Guidelines describing permitted and prohibited uses of the platform and financial services.",
        href: "#",
      },
      {
        label: "Electronic Communications & E-Consent",
        summary:
          "Explains that users agree to receive disclosures, agreements, and communications electronically.",
        href: "#",
      },
    ],
  },
  {
    title: "Account & Banking Agreements",
    description:
      "These agreements govern the use of Renda financial accounts and related banking services.",
    policies: [
      {
        label: "Renda Accounts Agreement",
        summary:
          "Terms governing customer accounts, deposits, and account functionality.",
        href: "#",
      },
      {
        label: "Funds Availability Policy",
        summary:
          "Explains when deposits become available and how settlement timing may apply.",
        href: "#",
      },
      {
        label: "Fee Schedule",
        summary: "A clear list of fees that may apply to Renda services.",
        href: "#",
      },
    ],
  },
  {
    title: "Cards & Payments",
    description:
      "Policies governing debit card usage and payment transactions.",
    policies: [
      {
        label: "Cardholder Agreement",
        summary:
          "Terms governing the use of the Renda debit card issued through banking partners.",
        href: "#",
      },
      {
        label: "Transaction Error & Dispute Resolution Policy",
        summary:
          "Explains how customers can report transaction errors or unauthorized activity and how disputes are handled.",
        href: "#",
      },
    ],
  },
  {
    title: "Consumer Protection",
    description:
      "Policies designed to protect users and explain how concerns or complaints are handled.",
    policies: [
      {
        label: "Complaints Resolution Policy",
        summary:
          "Explains the process for submitting complaints and how they will be reviewed and resolved.",
        href: "#",
      },
      {
        label: "Security & Fraud Prevention Policy",
        summary:
          "Guidelines describing how customers should protect their accounts and how suspicious activity is handled.",
        href: "#",
      },
    ],
  },
  {
    title: "Technology & AI Disclosures",
    description:
      "Policies explaining how technology and AI features are used within the platform.",
    policies: [
      {
        label: "AI Assistance Disclosure",
        summary:
          "Explains how AI-powered features within the Renda platform work and their limitations.",
        href: "#",
      },
    ],
  },
];

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <header className="pt-32 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Legal Center
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            Terms of Use
          </h1>
          <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
            This page contains the agreements, policies, and disclosures that
            govern the use of the Renda platform and its financial services.
            Please review these documents carefully before using our services.
          </p>
        </div>
      </header>

      {/* Sections */}
      <main className="pb-24 px-6">
        <div className="max-w-3xl mx-auto space-y-16">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-xl font-bold tracking-tight mb-2">
                {section.title}
              </h2>
              <p className="text-sm text-muted-foreground mb-6">
                {section.description}
              </p>

              <div className="border border-border rounded-xl overflow-hidden divide-y divide-border bg-card">
                {section.policies.map((policy) => (
                  <a
                    key={policy.label}
                    href={policy.href}
                    className="flex items-start gap-4 px-5 py-4 hover:bg-muted/10 transition-colors group"
                  >
                    <FileText className="w-5 h-5 text-muted-foreground mt-0.5 shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        {policy.label}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                        {policy.summary}
                      </p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-muted-foreground mt-1 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
