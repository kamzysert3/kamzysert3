import { useMemo, useState } from "react";
import { SectionHeading } from "@/components/section-heading";
import { skillClusters, skillPoints, type SkillClusterId } from "@/data/resume";

const NEIGHBOUR_RADIUS = 100;

function clusterRegions() {
  return skillClusters.map((cluster) => {
    const members = skillPoints.filter((p) => p.cluster === cluster.id);
    if (members.length === 0) return { cluster, x: 0, y: 0, w: 0, h: 0 };
    const xs = members.map((p) => p.x);
    const ys = members.map((p) => p.y);
    const pad = 44;
    const x = Math.min(...xs) - pad;
    const y = Math.min(...ys) - pad;
    const w = Math.max(...xs) - Math.min(...xs) + pad * 2;
    const h = Math.max(...ys) - Math.min(...ys) + pad * 2;
    return { cluster, x, y, w, h };
  });
}

const LEGEND: Record<SkillClusterId, string> = {
  ai: "LLMs · RAG · CV · fine-tuning",
  backend: "Node · Express · FastAPI · REST",
  frontend: "React · Next.js · TS · CSS",
  data: "SQL · MongoDB · Postgres",
  devops: "Docker · CI/CD · Git · GitHub",
};

export function SkillsVectorMap() {
  const [active, setActive] = useState<number | null>(null);
  const activePoint = active !== null ? skillPoints[active] : null;
  const regions = useMemo(clusterRegions, []);

  const neighbours = useMemo(() => {
    if (activePoint === null) return [] as number[];
    return skillPoints
      .map((p, i) => ({ p, i, d: Math.hypot(p.x - activePoint.x, p.y - activePoint.y) }))
      .filter(({ i }) => i !== active)
      .filter(({ d }) => d <= NEIGHBOUR_RADIUS)
      .sort((a, b) => a.d - b.d)
      .slice(0, 5)
      .map(({ i }) => i);
  }, [active, activePoint]);

  const neighbourNames = (ids: number[]) =>
    ids.map((i) => skillPoints[i].name).join(", ");

  return (
    <section id="skills" className="border-t border-border py-20 md:py-28">
      <div className="container">
        <SectionHeading
          index="04"
          title="Skills"
          lead="A 2D projection of the resume's skill set. Positions are hand-placed — illustrative, not measured. Projection and retrieval highlight the same way he ships them: visibly."
        />

        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-12">
            <figure>
              <div className="overflow-hidden rounded-sm border border-border bg-card/40">
                <svg
                  viewBox="0 0 1000 600"
                  className="h-auto w-full"
                  aria-label="Skills vector map — illustrative projection of skill clusters"
                >
                  {regions.map(({ cluster, x, y, w, h }) => (
                    <g key={cluster.id}>
                      <rect
                        x={x}
                        y={y}
                        width={w}
                        height={h}
                        rx={6}
                        className="fill-muted/45 stroke-border"
                        strokeWidth={1}
                        vectorEffect="non-scaling-stroke"
                      />
                      <text
                        x={x + 12}
                        y={y + 18}
                        className="fill-current font-mono text-[13px] uppercase tracking-[0.18em] text-muted-foreground"
                      >
                        {cluster.label}
                      </text>
                    </g>
                  ))}

                  {activePoint && (
                    <circle
                      cx={activePoint.x}
                      cy={activePoint.y}
                      r={NEIGHBOUR_RADIUS}
                      className="fill-none stroke-signal/40"
                      strokeWidth={1}
                      strokeDasharray="3 4"
                      vectorEffect="non-scaling-stroke"
                      aria-hidden
                    />
                  )}

                  {skillPoints.map((p, i) => {
                    const isActive = i === active;
                    const isNeighbour = neighbours.includes(i);
                    const tone = isActive
                      ? "text-signal"
                      : isNeighbour
                        ? "text-foreground"
                        : "text-muted-foreground/45";
                    return (
                      <g
                        key={p.name}
                        role="button"
                        tabIndex={0}
                        aria-label={`${p.name} — ${LEGEND[p.cluster]}`}
                        onFocus={() => setActive(i)}
                        onBlur={() => setActive(null)}
                        onMouseEnter={() => setActive(i)}
                        onMouseLeave={() => setActive(null)}
                        className="cursor-default outline-none"
                      >
                        <circle
                          cx={p.x}
                          cy={p.y}
                          r={isActive ? 7 : 5}
                          className={`fill-card stroke-current ${tone}`}
                          strokeWidth={isActive ? 2 : 1.5}
                          vectorEffect="non-scaling-stroke"
                        />
                        <text
                          x={p.x + 11}
                          y={p.y + 3.5}
                          className={`font-mono text-[12px] ${tone} ${isActive ? "font-medium" : ""}`}
                        >
                          {p.name}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>
              <figcaption className="mt-3 flex flex-wrap items-baseline justify-between gap-2 font-mono text-[11px] text-muted-foreground">
                <span>illustrative projection — positions are hand-placed, not a measured embedding</span>
                <span aria-live="polite">
                  {activePoint
                    ? `${activePoint.name} → nearest: ${neighbourNames(neighbours)}`
                    : "hover or focus a point to see its nearest neighbours"}
                </span>
              </figcaption>
            </figure>

            <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2" aria-label="Skill clusters">
              {skillClusters.map((c) => (
                <li key={c.id} className="font-mono text-[11px] text-muted-foreground">
                  <span className="mr-2 text-foreground">{c.label}</span>
                  {LEGEND[c.id]}
                </li>
              ))}
            </ul>

            <details className="mt-8 border-t border-border pt-4">
              <summary className="inline-flex cursor-pointer list-none items-center gap-2 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground [&::-webkit-details-marker]:hidden">
                <span className="inline-block transition-transform duration-200 ease-out group-open:rotate-90" aria-hidden>
                  ›
                </span>
                Plain list of skills
              </summary>
              <div className="mt-4 grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
                {skillClusters.map((c) => (
                  <div key={c.id}>
                    <h4 className="font-mono text-xs uppercase tracking-[0.16em] text-foreground">{c.label}</h4>
                    <ul className="mt-2 flex flex-col gap-1">
                      {skillPoints
                        .filter((p) => p.cluster === c.id)
                        .map((p) => (
                          <li key={p.name} className="font-mono text-[11px] text-muted-foreground">
                            {p.name}
                          </li>
                        ))}
                    </ul>
                  </div>
                ))}
              </div>
            </details>
          </div>
        </div>
      </div>
    </section>
  );
}