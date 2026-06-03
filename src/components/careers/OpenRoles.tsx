import { useFadeIn } from "@/hooks/use-fade-in";
import { MapPin, Monitor, Building2, ArrowUpRight } from "lucide-react";

function Fade({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, isVisible } = useFadeIn();
  return (
    <div ref={ref} className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}>
      {children}
    </div>
  );
}

interface Role {
  title: string;
  team: string;
  location: string;
  type: "Remote" | "Hybrid" | "In-Person";
}

const openRoles: Role[] = [
  { title: "Senior Backend Engineer", team: "Engineering", location: "Toronto, Canada", type: "Hybrid" },
  { title: "ML / AI Engineer", team: "AI & Data", location: "Vancouver, Canada", type: "Remote" },
  { title: "Senior Product Designer", team: "Product & Design", location: "Toronto, Canada", type: "Hybrid" },
  { title: "Compliance Analyst", team: "Risk & Compliance", location: "New York, USA", type: "In-Person" },
  { title: "Head of Customer Experience", team: "Operations", location: "Toronto, Canada", type: "Hybrid" },
  { title: "Brand Marketing Lead", team: "Marketing", location: "Vancouver, Canada", type: "Hybrid" },
  { title: "Senior Account Executive", team: "Sales", location: "New York, USA", type: "In-Person" },
  { title: "Talent Partner", team: "People & Culture", location: "Toronto, Canada", type: "Remote" },
  { title: "Platform Engineer", team: "Engineering", location: "Vancouver, Canada", type: "Remote" },
  { title: "Financial Operations Analyst", team: "Operations", location: "New York, USA", type: "Hybrid" },
];

const typeIcon = {
  Remote: Monitor,
  Hybrid: Building2,
  "In-Person": Building2,
};

export default function OpenRoles() {
  const teamCount = new Set(openRoles.map((r) => r.team)).size;
  return (
    <section id="roles" className="py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <Fade>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground mb-8">Open Roles</p>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-black/80 hover:text-black transition-colors duration-300 leading-tight mb-4">
            Current openings. Start building early.
          </h2>
          <p className="text-base text-black/60 font-medium mb-14">
            93 open positions across {teamCount} teams.
          </p>
        </Fade>

        <div className="grid gap-3">
          {openRoles.map((role) => {
            const TypeIcon = typeIcon[role.type];
            return (
              <Fade key={role.title}>
                <a
                  href="#"
                  className="group relative flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 sm:p-7 rounded-2xl bg-[#F6F5F2] border border-transparent transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)]"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[11px] font-semibold uppercase tracking-widest text-black/50">{role.team}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {role.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 mt-3">
                      <span className="flex items-center gap-1.5 text-sm text-black/60 font-medium">
                        <MapPin className="w-3.5 h-3.5" />
                        {role.location}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full border border-black/10 bg-background text-black/70">
                        <TypeIcon className="w-3 h-3" />
                        {role.type}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-sm font-medium text-black/60">
                      View
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-black/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                </a>
              </Fade>
            );
          })}
        </div>

        <Fade>
          <div className="mt-14 flex justify-center">
            <a
              href="https://jobs.renda.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center h-12 px-8 rounded-full bg-foreground text-background text-base font-medium hover:opacity-90 transition-opacity"
            >
              View open positions
            </a>
          </div>
        </Fade>
      </div>
    </section>
  );
}
