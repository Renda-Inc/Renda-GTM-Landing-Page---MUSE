import { useFadeIn } from "@/hooks/use-fade-in";
import { MapPin, Monitor, Building2 } from "lucide-react";

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
  { title: "Product Manager — Alfie", team: "Product & Design", location: "Toronto, Canada", type: "Hybrid" },
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
  Remote: "bg-accent-blue/10 text-accent-blue",
  Hybrid: "bg-primary/10 text-primary",
  "In-Person": "bg-accent-peach/20 text-foreground",
};

export default function OpenRoles() {
  return (
    <section id="roles" className="py-24 lg:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <Fade>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary mb-8">Open Roles</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground leading-tight mb-4">
            Current openings.
          </h2>
          <p className="text-base text-muted-foreground mb-14">
            {openRoles.length} open positions across {new Set(openRoles.map(r => r.team)).size} teams.
          </p>
        </Fade>

        <div className="space-y-3">
          {openRoles.map((role) => {
            const TypeIcon = typeIcon[role.type];
            return (
              <Fade key={role.title}>
                <a
                  href="#"
                  className="group flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-5 rounded-xl border border-border bg-background hover:border-primary/30 hover:shadow-sm transition-all"
                >
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                      {role.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 mt-2">
                      <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium">{role.team}</span>
                      <span className="text-border">•</span>
                      <span className="flex items-center gap-1 text-xs text-muted-foreground">
                        <MapPin className="w-3 h-3" />
                        {role.location}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full ${typeBadgeClass[role.type]}`}>
                      <TypeIcon className="w-3 h-3" />
                      {role.type}
                    </span>
                    <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors whitespace-nowrap">
                      View →
                    </span>
                  </div>
                </a>
              </Fade>
            );
          })}
        </div>
      </div>
    </section>
  );
}
