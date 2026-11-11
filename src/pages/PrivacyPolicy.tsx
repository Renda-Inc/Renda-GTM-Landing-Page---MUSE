import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

interface PolicyBlock {
  title: string;
  content: string[];
}

const lastUpdated = "March 8, 2026";

const policyBlocks: PolicyBlock[] = [
  {
    title: "1. Information We Collect",
    content: [
      "We collect information you provide directly when creating an account, including your name, email address, date of birth, government-issued identification, and financial information necessary to operate your account.",
      "We also automatically collect usage data such as device information, IP address, browser type, pages visited, and interactions with the platform. This helps us maintain, improve, and secure our services.",
      "Where applicable, we may collect information from third-party sources such as credit bureaus, identity verification services, and banking partners to comply with regulatory obligations.",
    ],
  },
  {
    title: "2. How We Use Your Information",
    content: [
      "We use your personal information to provide, maintain, and improve the Renda platform and its financial services. This includes processing transactions, managing your account, and delivering AI-powered insights through Alfie.",
      "Your data may also be used for fraud detection and prevention, compliance with anti-money laundering (AML) and know-your-customer (KYC) regulations, customer support, and communicating important service updates.",
      "We may use anonymized and aggregated data for analytics, research, and product development. This data cannot be used to identify you personally.",
    ],
  },
  {
    title: "3. How We Share Your Information",
    content: [
      "We do not sell your personal information to third parties. We may share your information with trusted partners who assist us in operating our services, including banking partners, payment processors, and identity verification providers.",
      "We may disclose information when required by law, regulation, legal process, or governmental request. We may also share information to protect the rights, property, or safety of Renda, our users, or the public.",
      "In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction. We will notify you of any such change in ownership or control.",
    ],
  },
  {
    title: "4. Data Security",
    content: [
      "We implement industry-standard technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes encryption in transit and at rest, access controls, and regular security audits.",
      "While we take reasonable steps to protect your data, no method of electronic transmission or storage is completely secure. We encourage you to use strong, unique passwords and enable multi-factor authentication on your account.",
    ],
  },
  {
    title: "5. Data Retention",
    content: [
      "We retain your personal information for as long as your account is active or as needed to provide you with services. We may also retain certain information as required by law, for legitimate business purposes, or to resolve disputes.",
      "When your data is no longer needed, we will securely delete or anonymize it in accordance with our data retention policies and applicable regulations.",
    ],
  },
  {
    title: "6. Your Rights & Choices",
    content: [
      "Depending on your jurisdiction, you may have the right to access, correct, delete, or port your personal data. You may also have the right to object to or restrict certain processing activities.",
      "You can manage your communication preferences and notification settings directly within the Renda app. To exercise any of your data rights, please contact us at privacy@renda.com.",
      "We will respond to your request within the timeframe required by applicable law. We may need to verify your identity before processing certain requests.",
    ],
  },
  {
    title: "7. Cookies & Tracking Technologies",
    content: [
      "We use cookies and similar technologies to provide and improve our services, analyze usage patterns, and deliver relevant content. Essential cookies are required for the platform to function properly.",
      "You can manage your cookie preferences through your browser settings. Disabling certain cookies may affect the functionality of the platform.",
    ],
  },
  {
    title: "8. AI & Automated Decision-Making",
    content: [
      "Renda uses AI-powered features, including Alfie, to provide personalized financial insights and recommendations. These features analyze your transaction patterns and financial behavior to deliver relevant suggestions.",
      "AI-generated insights are informational and do not constitute financial advice. No fully automated decisions with legal or similarly significant effects are made without human oversight. You may contact us to request a review of any AI-assisted decision.",
    ],
  },
  {
    title: "9. Children's Privacy",
    content: [
      "Renda services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected data from a child, we will promptly delete it.",
    ],
  },
  {
    title: "10. Changes to This Policy",
    content: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or legal requirements. We will notify you of material changes through the platform or via email.",
      "Your continued use of Renda after any changes to this policy constitutes your acceptance of the updated terms. We encourage you to review this page periodically.",
    ],
  },
  {
    title: "11. Contact Us",
    content: [
      "If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at privacy@renda.com or through the Help Center in the Renda app.",
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <main
      className="min-h-screen bg-background text-foreground"
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "SF Pro", system-ui, "Helvetica Neue", Arial, sans-serif',
      }}
    >
      <Navbar variant="solid" />

      {/* Hero */}
      <header className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-[15px] font-semibold tracking-[0.08em] text-black mb-6">
            Legal Center
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] text-black/80">
            Privacy Policy
          </h1>
          <p className="mt-6 text-lg md:text-xl text-black font-medium leading-relaxed max-w-2xl">
            This policy describes how Renda collects, uses, and protects your
            personal information when you use our platform and financial
            services.
          </p>
          <p className="mt-4 text-sm text-black/60 font-medium">
            Last updated: {lastUpdated}
          </p>
        </div>
      </header>

      {/* Policy Content */}
      <section className="pb-24 px-6">
        <div className="max-w-4xl mx-auto space-y-14">
          {policyBlocks.map((block) => (
            <section key={block.title}>
              <h2 className="text-2xl font-semibold tracking-tight text-black/80 mb-4">
                {block.title}
              </h2>
              <div className="space-y-4">
                {block.content.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-base text-black font-medium leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
