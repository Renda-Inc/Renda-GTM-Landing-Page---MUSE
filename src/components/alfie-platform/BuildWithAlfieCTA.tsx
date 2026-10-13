import { Reveal } from "./Reveal";

/* ---------------- build with alfie cta ---------------- */

export default function BuildWithAlfieCTA() {
  return (
    <section className="border-t border-white/[0.07] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">Build with Alfie.</h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/90">
            APIs, SDKs and deployment models designed for regulated environments — with the controls, residency options
            and audit trails financial teams are held to.
          </p>
        </Reveal>
        <Reveal delay={150} className="mt-14">
          <div className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-8 md:p-10">
            <p className="text-xl font-medium text-white">Tell us what you are building.</p>
            <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-white/90">
              We are working with a small group of organizations ahead of launch.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <span className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-5 py-2.5 text-[14px] font-medium text-white transition-colors hover:bg-white/[0.08]">
                Talk to us
              </span>
              <span className="text-[13px] text-white/90">Coming soon.</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

