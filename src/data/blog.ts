import blogAiNativeBanking from "@/assets/blog-ai-native-banking.jpg";
import blogSmartspend from "@/assets/blog-smartspend.jpg";
import blogSignalNoise from "@/assets/blog-signal-noise.jpg";
import blogResponsibleAi from "@/assets/blog-responsible-ai.jpg";
import blogSeedRound from "@/assets/blog-seed-round.jpg";
import blogFutureSavings from "@/assets/blog-future-savings.jpg";
import blogOpenBanking from "@/assets/blog-open-banking.jpg";
import blogAlfiePlatform from "@/assets/blog-alfie-platform.jpg";


/* ─── Types ─── */
export type Category = "All" | "AI & Finance" | "Product" | "Industry" | "Company";

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: Exclude<Category, "All">;
  date: string;
  readTime: string;
  featured?: boolean;
  image: string;
}

/* ─── Static articles ─── */
export const articles: Article[] = [
  {
    slug: "why-ai-native-banking",
    title: "Why AI-Native Banking Is Inevitable",
    excerpt:
      "The financial industry is approaching an inflection point. Legacy infrastructure wasn't built for intelligence — and retrofitting AI onto outdated systems won't be enough.",
    category: "AI & Finance",
    date: "Feb 12, 2026",
    readTime: "8 min read",
    featured: true,
    image: blogAiNativeBanking,
  },
  {
    slug: "introducing-smartspend",
    title: "Introducing SmartSpend: Accounts That Understand Your Money",
    excerpt:
      "Today we're unveiling SmartSpend — a new kind of account that doesn't just store your money, but actively helps you understand and manage it.",
    category: "Product",
    date: "Feb 5, 2026",
    readTime: "5 min read",
    featured: true,
    image: blogSmartspend,
  },
  {
    slug: "signal-over-noise-banking",
    title: "Signal Over Noise: Rethinking Financial Notifications",
    excerpt:
      "Most banking apps overwhelm users with alerts that don't matter. We built Alfie to surface only the insights that move your financial life forward.",
    category: "AI & Finance",
    date: "Jan 28, 2026",
    readTime: "6 min read",
    image: blogSignalNoise,
  },
  {
    slug: "responsible-ai-finance",
    title: "Building Responsible AI for Financial Services",
    excerpt:
      "Intelligence without responsibility is reckless. Our approach to AI in banking starts with transparency, explainability, and a deep respect for financial decisions.",
    category: "Industry",
    date: "Jan 20, 2026",
    readTime: "7 min read",
    image: blogResponsibleAi,
  },
  {
    slug: "renda-seed-announcement",
    title: "Renda Raises Seed Round to Build AI-Native Banking",
    excerpt:
      "We're excited to announce our seed funding round. This investment enables us to accelerate the development of Alfie and bring intelligent banking to Canadians faster.",
    category: "Company",
    date: "Jan 14, 2026",
    readTime: "4 min read",
    image: blogSeedRound,
  },
  {
    slug: "future-of-savings",
    title: "The End of Set-and-Forget Savings",
    excerpt:
      "Static savings rules ignore the reality of how people live. Adaptive savings — powered by real-time financial intelligence — represents a fundamental shift.",
    category: "AI & Finance",
    date: "Jan 6, 2026",
    readTime: "6 min read",
    image: blogFutureSavings,
  },
  {
    slug: "open-banking-canada",
    title: "What Open Banking Means for Canadian Consumers",
    excerpt:
      "Canada's open banking framework is evolving. We explore what this means for financial data portability, competition, and how AI-native players can unlock better outcomes.",
    category: "Industry",
    date: "Dec 18, 2025",
    readTime: "7 min read",
    image: blogOpenBanking,
  },
  {
    slug: "building-alfie-platform",
    title: "Under the Hood: Building the Alfie Intelligence Platform",
    excerpt:
      "A look at the engineering decisions behind Alfie — from real-time transaction analysis to conversational financial insights.",
    category: "Product",
    date: "Dec 10, 2025",
    readTime: "9 min read",
    image: blogAlfiePlatform,
  },
];

const categories: Category[] = ["All", "AI & Finance", "Product", "Industry", "Company"];

export function categoryColor(cat: Exclude<Category, "All">) {
  switch (cat) {
    case "AI & Finance":
      return "text-primary";
    case "Product":
      return "text-accent-blue";
    case "Industry":
      return "text-muted-foreground";
    case "Company":
      return "text-primary";
  }
}

