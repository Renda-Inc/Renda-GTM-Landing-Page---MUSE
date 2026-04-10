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
  { title: "Senior Frontend Engineer", team: "Engineering", location: "Toronto, Canada", type: "Remote" },
  { title: "ML / AI Engineer", team: "Engineering", location: "Toronto, Canada", type: "Remote" },
  { title: "Platform Engineer", team: "Engineering", location: "London, UK", type: "Remote" },
  { title: "Senior Product Designer", team: "Product & Design", location: "Toronto, Canada", type: "Hybrid" },
  { title: "Product Manager, Alfie", team: "Product & Design", location: "Toronto, Canada", type: "Hybrid" },
  { title: "Compliance Analyst", team: "Risk & Compliance", location: "Toronto, Canada", type: "In-Person" },
  { title: "Risk Operations Lead", team: "Risk & Compliance", location: "Lagos, Nigeria", type: "Hybrid" },
  { title: "Head of Customer Experience", team: "Operations", location: "Toronto, Canada", type: "Hybrid" },
  { title: "Financial Operations Analyst", team: "Operations", location: "London, UK", type: "Remote" },
];

const typeIcon = {
  Remote: Monitor,
  Hybrid: Building2,
  "In-Person": Building2,
};

const typeBadgeClass = {
  Remote: "bg-accent-blue/10 text-accent-blue border-accent-blue/20",
  Hybrid: "bg-primary/8 text-primary border-primary/20",
  "In-Person": "bg-accent-peach/15 text-foreground border-accent-peach/30",
};

export default function OpenRoles() {
  return (
    <section id="roles" className="py-24 lg:py-32">
      <div className="max-w-5xl mx-auto px-6">
        <Fade>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-8">Open Roles</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight mb-4">
            Current openings.
          </h2>
          <p className="text-base text-muted-foreground mb-14">
            {openRoles.length} open positions across {new Set(openRoles.map(r => r.team)).size} teams.
          </p>
        </Fade>

        <div className="grid gap-3">
          {openRoles.map((role) => {
            const TypeIcon = typeIcon[role.type];
            return (
              <Fade key={role.title}>
                <a
                  href="#"
                  className="group relative flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 sm:p-7 rounded-2xl bg-secondary/60 border border-border/60 hover:bg-secondary hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[11px] font-semibold uppercase tracking-widest text-primary/70">{role.team}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {role.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 mt-3">
                      <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <MapPin className="w-3.5 h-3.5" />
                        {role.location}
                      </span>
                      <span className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full border ${typeBadgeClass[role.type]}`}>
                        <TypeIcon className="w-3 h-3" />
                        {role.type}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
                      View
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                </a>
              </Fade>
            );
          })}
        </div>

        <Fade>
          <div className="mt-12 text-center">
            <a
              href="#roles"
              className="inline-flex h-12 px-8 items-center rounded-full bg-foreground text-background text-base font-medium hover:opacity-90 transition-opacity"
            >
              View Open Roles
            </a>
          </div>
        </Fade>
      </div>
    </section>
  );
}
