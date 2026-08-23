import { Link } from "react-router-dom";

const SF_PRO =
  '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "SF Pro", system-ui, "Helvetica Neue", Arial, sans-serif';

const organizations = [
  {
    name: "Financial institutions",
    desc: "Build financial experiences that understand customers, not just accounts.",
  },
  {
    name: "Fintechs",
    desc: "Give financial products intelligence without building the entire intelligence layer themselves.",
  },
  {
    name: "Insurance",
    desc: "Bring financial context and intelligence into underwriting, claims, risk, and customer experiences.",
  },
  {
    name: "Enterprise",
    desc: "Make complex financial operations easier to understand and act on.",
  },
  {
    name: "Government",
    desc: "Help teams analyze financial information at scale and make complex workflows more intelligent.",
  },
];

const capabilities = [
  { name: "Intelligence", desc: "Financial context, analysis, reasoning, forecasting and insights." },
  { name: "Assistant", desc: "Conversational financial intelligence for customers and employees." },
  { name: "Actions", desc: "Connect intelligence to authorized workflows and systems." },
  { name: "Platform", desc: "APIs, SDKs, integrations and infrastructure for building with Alfie." },
];

const footerColumns = [
  {
    heading: "Product",
    links: ["Alfie Intelligence", "Alfie Assistant", "Alfie Actions", "Alfie Platform"],
  },
  { heading: "Resources", links: ["Integrations", "Developers", "Compliance"] },
  { heading: "Company", links: ["Renda", "About", "Contact"] },
];

export default function AlfiePlatform() {
  return (
    <div
      className="min-h-screen flex flex-col text-white"
      style={{ backgroundColor: "#0D0D0D", fontFamily: SF_PRO }}
    >
      {/* Header */}
      <header className="w-full">
        <div className="mx-auto max-w-6xl px-6 py-6 flex items-center justify-between">
          <Link to="/" className="text-lg font-semibold tracking-tight text-white">
            Alfie
          </Link>
          <nav className="flex items-center gap-6 text-sm" style={{ color: "#A0A0A0" }}>
            <a href="#organizations" className="hover:text-white transition-colors">Integrations</a>
            <a href="#build" className="hover:text-white transition-colors">Developers</a>
            <a href="#build" className="hover:text-white transition-colors">Compliance</a>
            <span className="rounded-full border border-white/15 px-3 py-1 text-xs tracking-wide">
              Coming Soon
            </span>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <main className="flex-1">
        <section className="mx-auto max-w-4xl px-6 min-h-[calc(100vh-88px)] flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.08] tracking-tight text-white">
            The intelligence layer for financial systems.
          </h1>
          <p
            className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed"
            style={{ color: "#E0E0E0" }}
          >
            Alfie gives organizations the ability to understand financial information, reason across
            complex financial context, and turn intelligence into action.
          </p>

          <div className="mt-12 w-full max-w-xl">
            <button
              type="button"
              className="w-full rounded-2xl border border-white/12 bg-white/[0.06] px-8 py-5 text-base font-medium text-white transition-all duration-300 hover:bg-white/[0.1] hover:border-white/25 focus:outline-none focus:ring-2 focus:ring-white/20"
              style={{ boxShadow: "0 0 60px -20px rgba(255,255,255,0.25)" }}
            >
              Talk to us
            </button>
            <p className="mt-3 text-sm" style={{ color: "#A0A0A0" }}>
              Coming soon.
            </p>
          </div>

          <p className="mt-10 text-sm" style={{ color: "#A0A0A0" }}>
            For financial institutions, fintechs, enterprises, and government.
          </p>
        </section>

        {/* Organizations */}
        <section id="organizations" className="mx-auto max-w-5xl px-6 py-24 border-t border-white/10">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white max-w-2xl">
            Built for organizations that operate on financial complexity.
          </h2>
          <div className="mt-12 divide-y divide-white/10">
            {organizations.map((o) => (
              <div key={o.name} className="grid gap-2 py-6 sm:grid-cols-[220px_1fr] sm:gap-10">
                <p className="text-base font-medium text-white">{o.name}</p>
                <p className="text-base leading-relaxed" style={{ color: "#E0E0E0" }}>
                  {o.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Build with Alfie */}
        <section id="build" className="mx-auto max-w-5xl px-6 py-24 border-t border-white/10">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
            Build with Alfie.
          </h2>
          <p className="mt-3 text-base sm:text-lg" style={{ color: "#E0E0E0" }}>
            Intelligence for your products. Infrastructure for your teams.
          </p>
          <div className="mt-12 divide-y divide-white/10">
            {capabilities.map((c) => (
              <div key={c.name} className="grid gap-2 py-6 sm:grid-cols-[220px_1fr] sm:gap-10">
                <p className="text-base font-medium text-white">{c.name}</p>
                <p className="text-base leading-relaxed" style={{ color: "#E0E0E0" }}>
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
            <div className="max-w-sm">
              <p className="text-base font-semibold text-white">Alfie</p>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "#A0A0A0" }}>
                Financial intelligence infrastructure for the organizations that handle money.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
              {footerColumns.map((col) => (
                <div key={col.heading}>
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white">
                    {col.heading}
                  </p>
                  <ul className="mt-4 space-y-2 text-sm">
                    {col.links.map((l) => (
                      <li key={l}>
                        <a
                          href="#"
                          className="transition-colors hover:text-white"
                          style={{ color: "#A0A0A0" }}
                        >
                          {l}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div
            className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs sm:flex-row sm:justify-between"
            style={{ color: "#A0A0A0" }}
          >
            <p>Alfie — Financial Intelligence Infrastructure. Built by Renda.</p>
            <p>Alfie is currently in development. Coming soon.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
