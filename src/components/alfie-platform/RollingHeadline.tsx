import { useInView } from "@/hooks/use-in-view";

/* ---------------- rolling headline ---------------- */

export default function RollingHeadline({ text }: { text: string }) {
  const words = text.split(" ");
  const { ref, inView } = useInView<HTMLHeadingElement>(0.1);
  return (
    <h1
      ref={ref}
      className="max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight text-white md:text-6xl lg:text-7xl"
    >
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="mr-[0.28em] inline-block overflow-hidden align-bottom">
          <span
            className="inline-block transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              transform: inView ? "translateY(0)" : "translateY(110%)",
              opacity: inView ? 1 : 0,
              transitionDelay: `${i * 70}ms`,
            }}
          >
            {word}
          </span>
        </span>
      ))}
    </h1>
  );
}

