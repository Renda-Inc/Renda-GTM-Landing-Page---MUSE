import { useFadeIn } from "@/hooks/use-fade-in";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Renda?",
    answer: (
      <>
        <p>Renda is Canada's first conversational AI neobank.</p>
        <p className="mt-2">
          We're building the AI-powered financial operating system for the next generation. Through Alfie, our proprietary AI, you can understand, automate, and manage your money through natural conversation — replacing confusing banking interfaces with clarity.
        </p>
      </>
    ),
  },
  {
    question: "What can I do with Renda?",
    answer: (
      <>
        <p>Renda offers smart spending and savings accounts designed to help you manage and grow your money effortlessly.</p>
        <p className="mt-2">
          We are a{" "}
          <a href="https://fintrac-canafe.canada.ca/msb-esm/msb-eng" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors">
            FINTRAC-registered Money Services Business (MSB)
          </a>{" "}
          and are working with a{" "}
          <a href="https://www.cdic.ca/" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors">
            CDIC-regulated banking partner
          </a>{" "}
          that insures customer deposits.
        </p>
      </>
    ),
  },
  {
    question: "How is Renda different from other banks?",
    answer: (
      <>
        <p>Renda is built AI-first, not interface-first.</p>
        <p className="mt-2">
          While most banks focus on dashboards, features, and growing user counts, we're focused on building technology that helps people understand and plan their financial lives.
        </p>
        <p className="mt-2">
          Our AI financial model is designed to simplify money management and lay the foundation for a new era of banking.
        </p>
      </>
    ),
  },
  {
    question: "What is Alfie?",
    answer: (
      <>
        <p>Alfie is Renda's proprietary financial AI, and your AI financial partner.</p>
        <p className="mt-2">
          It helps you understand your money, answer financial questions, automate decisions, and plan for the future — all through simple conversation.
        </p>
        <p className="mt-2">Think of it as a financial operating system for your life.</p>
      </>
    ),
  },
  {
    question: "When will Renda launch? Who can join?",
    answer: (
      <>
        <p>Renda is currently in development and preparing for launch. We're building a waitlist for early access and will be launching first in Canada.</p>
        <p className="mt-2">Early users must be Canadian residents with a Canadian address and valid ID.</p>
      </>
    ),
  },
];

export default function FAQ() {
  const { ref, isVisible } = useFadeIn();

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div
        ref={ref}
        className={`max-w-3xl mx-auto px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Questions you might have
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-border">
              <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:text-primary transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
