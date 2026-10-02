import { Eye, Brain, Users, Shield, Scale, Building2, Search } from "lucide-react";
import valueImg1 from "@/assets/careers/team-2.jpg";
import valueImg2 from "@/assets/careers/team-4.jpg";
import valueImg3 from "@/assets/careers/team-6.jpg";
import valueImg4 from "@/assets/careers/team-8.jpg";
import timelineFounded from "@/assets/timeline-founded.jpg";
import timelineAlfie from "@/assets/timeline-alfie.jpg";
import timelineBeta from "@/assets/timeline-beta.jpg";
import timelineBusiness from "@/assets/timeline-business.jpg";
import timelineGlobal from "@/assets/timeline-global.jpg";

/* ── Data ─────────────────────────────────────────────────── */
export const beliefs = [
  { icon: Eye, title: "Clarity over control", desc: "We believe people don't need more dashboards - they need understanding." },
  { icon: Search, title: "Signal over noise", desc: "Your attention is sacred. We surface only what matters, when it matters." },
  { icon: Brain, title: "Ethical AI", desc: "Every AI decision is transparent, explainable, and built with human oversight." },
  { icon: Users, title: "Financial empowerment", desc: "Intelligence should serve everyone, not just those who can afford advisors." },
];

export const values = [
  { icon: Shield, title: "Responsible AI", desc: "We hold ourselves to the highest standards of safety, fairness, and accountability in every system we build.", image: valueImg1 },
  { icon: Users, title: "Radical inclusion", desc: "Financial intelligence should be accessible to everyone, regardless of income, background, or expertise.", image: valueImg2 },
  { icon: Scale, title: "Transparency", desc: "We explain what our systems do, why they do it, and how decisions are made; always.", image: valueImg3 },
  { icon: Building2, title: "Long-term institution", desc: "We're not building for a quick exit. We're building a financial institution designed to endure.", image: valueImg4 },
];

export const timeline = [
  { year: "2024", title: "Founded", desc: "Renda incorporated in Toronto, Canada. Core team assembled around a shared belief: banking should think.", image: timelineFounded },
  { year: "2024", title: "Alfie development begins", desc: "First prototypes of the Alfie financial reasoning engine. Architecture designed for modularity from day one.", image: timelineAlfie },
  { year: "2025", title: "Early access launch", desc: "Invite-only beta for individuals. Core banking + Alfie intelligence layer goes live.", image: timelineBeta },
  { year: "2025", title: "Business banking", desc: "Alfie expands to serve small businesses - expense intelligence, tax readiness, and financial clarity.", image: timelineBusiness },
  { year: "2026+", title: "Platform & global expansion", desc: "Alfie as infrastructure for fintechs and platforms. Expansion beyond Canada.", image: timelineGlobal },
];


export const vcPartners = [
  { name: "Y Combinator", logo: "YC" },
  { name: "Andreessen Horowitz", logo: "a16z" },
  { name: "Sequoia Capital", logo: "Sequoia" },
  { name: "Accel", logo: "Accel" },
  { name: "Index Ventures", logo: "Index" },
  { name: "Ribbit Capital", logo: "Ribbit" },
  { name: "Lightspeed", logo: "Lightspeed" },
  { name: "General Catalyst", logo: "GC" },
];

