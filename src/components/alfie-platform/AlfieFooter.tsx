

/* ---------------- footer ---------------- */

const footerCols = [
  { title: "Product", links: ["Alfie Intelligence", "Alfie Assistant", "Alfie Actions", "Alfie Platform"] },
  { title: "Resources", links: ["Integrations", "Developers", "Compliance"] },
  { title: "Company", links: ["Renda", "About", "Contact"] },
];

export default function AlfieFooter() {
  return (
    <footer className="border-t border-white/[0.07] py-14">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <p className="max-w-sm text-[14px] leading-relaxed text-[#A0A0A0]">
          Alfie — Financial intelligence infrastructure for the organizations that handle money. Built by Renda.
        </p>
        {footerCols.map((col) => (
          <div key={col.title}>
            <p className="text-[14px] font-medium text-white">{col.title}</p>
            <ul className="mt-4 space-y-3">
              {col.links.map((link) => (
                <li key={link}>
                  <span className="text-[14px] text-[#A0A0A0] transition-colors hover:text-[#E0E0E0]">{link}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-12 max-w-7xl px-6">
        <p className="border-t border-white/[0.07] pt-6 text-[13px] text-[#A0A0A0]">
          Alfie is currently in development. Coming soon.
        </p>
      </div>
    </footer>
  );
}

