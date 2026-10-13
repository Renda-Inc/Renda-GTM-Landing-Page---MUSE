

/* ---------------- header ---------------- */

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.07] bg-[#000000]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
        <a href="/alfie-platform" className="text-[17px] font-semibold tracking-tight text-white">
          Alfie
        </a>
        <nav className="flex items-center gap-6 text-[13px] text-white/90">
          <a href="#capabilities" className="hidden transition-colors hover:text-white sm:inline">
            Integrations
          </a>
          <a href="#capabilities" className="hidden transition-colors hover:text-white sm:inline">
            Developers
          </a>
          <a href="#organizations" className="hidden transition-colors hover:text-white sm:inline">
            Compliance
          </a>
          <span className="flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-[12px] text-[#E0E0E0]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#7BE0A5]" />
            Coming Soon
          </span>
        </nav>
      </div>
    </header>
  );
}

