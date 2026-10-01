import type { ComponentType } from "react";
import { Rocket, CreditCard, Send, Sparkles, ShieldCheck, Receipt } from "lucide-react";

export interface HelpCategory {
  slug: string;
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
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

