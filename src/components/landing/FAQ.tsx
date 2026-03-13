import { useState } from "react";
import { useFadeIn } from "@/hooks/use-fade-in";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is Renda?",
    answer:
      "Renda is Canada's first conversational AI neobank. We're building the AI-powered financial operating system for the next generation. Through Alfie, our proprietary AI, you can understand, automate, and manage your money through natural conversation — replacing confusing banking interfaces with clarity.",
  },
  {
    question: "What can I do with Renda?",
    answer:
      "Renda offers smart spending and savings accounts designed to help you manage and grow your money effortlessly. We are a FINTRAC-registered Money Services Business (MSB) and are working with a CDIC-regulated banking partner that insures customer deposits.",
  },
  {
    question: "How is Renda different from other banks?",
    answer:
      "Renda is built AI-first, not interface-first. While most banks focus on dashboards, features, and growing user counts, we're focused on building technology that helps people understand and plan their financial lives. Our AI financial model is designed to simplify money management and lay the foundation for a new era of banking.",
  },
  {
    question: "What is Alfie?",
    answer:
      "Alfie is Renda's proprietary financial AI, and your AI financial partner. It helps you understand your money, answer financial questions, automate decisions, and plan for the future — all through simple conversation. Think of it as a financial operating system for your life.",
  },
  {
    question: "When will Renda launch? Who can join?",
    answer:
      "Renda is currently in development and preparing for launch. We're building a waitlist for early access and will be launching first in Canada. Early users must be Canadian residents with a Canadian address and valid ID.",
  },
];

export default function FAQ() {
  const { ref, isVisible } = useFadeIn();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Two-column layout: heading left, questions right */}
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20">
          {/* Left column — sticky heading */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-3">
              FAQ
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-tight">
              Questions you
              <br />
              might have
            </h2>
            <p className="mt-4 text-base text-muted-foreground max-w-sm leading-relaxed">
              Everything you need to know about Renda, Alfie, and how we're rethinking banking from the ground up.
            </p>
          </div>

          {/* Right column — FAQ items */}
          <div className="space-y-0">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className="border-b border-border"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-start justify-between gap-6 py-6 text-left group"
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-xs font-mono text-muted-foreground/50 mt-1 tabular-nums">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                        {faq.question}
                      </span>
                    </div>
                    <div className="mt-1 shrink-0 w-6 h-6 rounded-full border border-border flex items-center justify-center transition-colors duration-200 group-hover:border-primary">
                      {isOpen ? (
                        <Minus className="w-3.5 h-3.5 text-primary" />
                      ) : (
                        <Plus className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
                      )}
                    </div>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-60 opacity-100 pb-6" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="pl-10 text-base text-muted-foreground leading-relaxed max-w-lg">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
