import { useState } from "react";
import { SectionHeading } from "@/components/section-heading";
import { skillClusters, skillPoints, skillUsage } from "@/data/resume";

export function Skills() {
  const [active, setActive] = useState<string | null>(null);
  const activeUsage = active ? skillUsage.get(active) : undefined;

  const annotation = active
    ? activeUsage && (activeUsage.projects.length > 0 || activeUsage.roles.length > 0)
      ? `${active} — ${
          [
            activeUsage.projects.length > 0 ? `project: ${activeUsage.projects.join(", ")}` : "",
            activeUsage.roles.length > 0 ? `role: ${activeUsage.roles.join(", ")}` : "",
          ]
            .filter(Boolean)
            .join(" · ")
        }`
      : `${active} — no listed project or role tags it by name`
    : "focus a tool to see where it turns up in the projects and roles above";

  return (
    <section id="skills" className="border-t border-border py-20 md:py-28">
      <div className="container">
        <SectionHeading
          index="04"
          title="Skills"
          lead="The tools the resume actually claims, grouped into the five domains they ship in — no levels, no invented rankings."
        />

        <p className="mb-8 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground tnum">
          {String(skillClusters.length).padStart(2, "0")} domains · {skillPoints.length} tools in the stack
        </p>

        <div>
          {skillClusters.map((cluster, i) => {
            const members = skillPoints.filter((p) => p.cluster === cluster.id);
            return (
              <div
                key={cluster.id}
                className="grid gap-x-8 gap-y-3 border-t border-border py-5 lg:grid-cols-[180px_1fr]"
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-xs text-muted-foreground tnum">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-lg font-semibold tracking-tight">{cluster.label}</h3>
                  <span className="font-mono text-[11px] text-muted-foreground tnum">×{members.length}</span>
                </div>
                <ul className="flex flex-wrap gap-2" aria-label={`${cluster.label} skills`}>
                  {members.map((point) => (
                    <li key={point.name}>
                      <button
                        type="button"
                        onFocus={() => setActive(point.name)}
                        onBlur={() => setActive(null)}
                        onMouseEnter={() => setActive(point.name)}
                        onMouseLeave={() => setActive(null)}
                        className={`rounded-sm border px-2.5 py-1 font-mono text-[11px] transition-colors ${
                          active === point.name
                            ? "border-signal text-signal"
                            : "border-border text-muted-foreground hover:border-signal/40 hover:text-foreground"
                        }`}
                      >
                        {point.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <p
          role="status"
          aria-live="polite"
          className="mt-8 min-h-5 border-t border-border pt-4 font-mono text-[11px] text-muted-foreground tnum"
        >
          {annotation}
        </p>
      </div>
    </section>
  );
}