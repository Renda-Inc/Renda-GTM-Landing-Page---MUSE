import { useState } from "react";
import { useFadeIn } from "@/hooks/use-fade-in";
import { Plus, X } from "lucide-react";

const SF_FONT =
  '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "SF Pro", system-ui, "Helvetica Neue", Arial, sans-serif';

const faqs = [
  {
    question: "What is Renda?",
    answer:
      "Renda is Canada's first conversational AI neobank. We're building the AI-powered financial operating system for the next generation. Through Alfie, our proprietary AI, you can understand, automate, and manage your money through natural conversation, replacing confusing banking interfaces with clarity.",
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
      "Alfie is Renda's proprietary financial AI, and your AI financial partner. It helps you understand your money, answer financial questions, automate decisions, and plan for the future, all through simple conversation. Think of it as a financial operating system for your life.",
  },
  {
    question: "When will Renda launch? Who can join?",
    answer:
      "Renda is currently in development and preparing for launch. We're building a waitlist for early access and will be launching first in Canada. Early users must be Canadian residents with a Canadian address and valid ID.",
  },
];

export default function FAQ() {
  const { ref, isVisible } = useFadeIn();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 lg:py-20 bg-background" style={{ fontFamily: SF_FONT }}>
      <div
        ref={ref}
        className={`max-w-4xl mx-auto px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="mb-10 lg:mb-12">
          <p className="text-[15px] font-semibold tracking-[0.08em] text-brand-orange mb-6">FAQ</p>
          <h2
            className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight text-black/80"
            style={{ fontFamily: SF_FONT }}
          >
            Questions you might have
          </h2>
          <p className="mt-6 text-base md:text-lg font-medium leading-relaxed text-black max-w-2xl">
            Everything you need to know about Renda, Alfie, and how we're rethinking banking from
            the ground up.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`bg-black/[0.055] backdrop-blur-xl backdrop-saturate-150 border border-black/[0.06] shadow-[0_10px_34px_rgba(0,0,0,0.06),inset_0_1px_0_rgba(255,255,255,0.65),inset_0_-1px_0_rgba(0,0,0,0.03)] transition-all duration-500 ease-in-out ${
                  isOpen ? "rounded-[32px]" : "rounded-full"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-start justify-between gap-6 text-left px-7 md:px-10 py-6 md:py-7 group"
                >
                  <span className="text-base md:text-xl font-semibold text-black/80 group-hover:text-black transition-colors duration-300 leading-snug">
                    {faq.question}
                  </span>
                  <span
                    className={`shrink-0 w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
                      isOpen ? "bg-black text-white" : "bg-white text-black/70 group-hover:text-black"
                    }`}
                  >
                    {isOpen ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-7 md:px-10 pb-7 md:pb-9 pr-14 md:pr-24 text-base md:text-lg font-medium leading-relaxed text-black">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
