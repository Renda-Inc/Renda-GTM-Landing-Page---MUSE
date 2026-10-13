import { useInView } from "@/hooks/use-in-view";

/* ---------------- rolling headline ---------------- */

type RollingHeadlineProps = {
  /** A single string, or an array where each entry is forced onto its own line. */
  text: string | string[];
};

export default function RollingHeadline({ text }: RollingHeadlineProps) {
  const lines = Array.isArray(text) ? text : text.split(" ");
  const { ref, inView } = useInView<HTMLHeadingElement>(0.1);
  let wordIndex = 0;

  return (
    <h1
      ref={ref}
      className="max-w-6xl text-4xl font-semibold leading-[1.08] tracking-tight text-white md:text-5xl lg:text-[60px]"
    >
      {lines.map((line, lineIdx) => (
        <span key={`line-${lineIdx}`} className="block">
          {line.split(" ").map((word) => {
            const i = wordIndex++;
            return (
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
            );
          })}
        </span>
      ))}
    </h1>
  );
}
