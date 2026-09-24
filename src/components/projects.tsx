import { ExternalLink, Github } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { projects, type Project } from "@/data/resume";

interface ProjectPlaqueProps {
  project: Project;
  index: number;
  total: number;
}

function ProjectPlaque({ project, index, total }: ProjectPlaqueProps) {
  const hasStat = Boolean(project.stat);
  return (
    <aside
      className="flex aspect-[16/9] flex-col justify-between gap-4 px-5 py-4 sm:px-6 sm:py-5"
      aria-label={`${project.title} — ${project.stat ? `${project.stat.value} ${project.stat.label}` : "no metric claimed"}`}
    >
      <p className="flex items-baseline justify-between gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground tnum">
        <span>
          {String(index).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </span>
        <span>{project.domain}</span>
      </p>

      <div className="flex flex-col gap-2">
        <p
          className={`w-fit font-display font-semibold leading-none tracking-tight text-foreground tnum ${
            hasStat ? "text-6xl sm:text-7xl" : "text-4xl sm:text-5xl"
          }`}
        >
          {project.stat?.value ?? project.domain}
        </p>
        <span className="h-0.5 w-14 bg-signal" aria-hidden />
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          {project.stat?.label ?? "no metric claimed"}
        </p>
      </div>

      <div className="flex flex-col gap-1.5">
        <span className="h-px w-full bg-border" aria-hidden />
        <p className="font-mono text-[10px] text-muted-foreground">
          {hasStat ? "case study · figure straight from the resume" : "case study · no metric claimed"}
        </p>
      </div>
    </aside>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
  total: number;
  featured?: boolean;
}

function ProjectCard({ project, index, total, featured = false }: ProjectCardProps) {
  return (
    <article
      className={`flex min-w-0 flex-col overflow-hidden rounded-sm border border-border bg-card/60 ${
        featured ? "lg:grid lg:grid-cols-2" : ""
      }`}
    >
      <div
        className={`${featured ? "lg:border-r lg:border-border" : "border-b border-border"} bg-card`}
      >
        <ProjectPlaque project={project} index={index} total={total} />
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-3 p-5 sm:p-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground tnum">
          {project.id}
        </p>
        <h3 className="font-display text-xl font-semibold tracking-tight">{project.title}</h3>
        <p className="max-w-prose text-sm leading-relaxed text-muted-foreground">{project.summary}</p>

        <ul className="flex flex-wrap gap-x-3 gap-y-1.5" aria-label="Technologies">
          {project.tags.map((t) => (
            <li key={t} className="font-mono text-[11px] text-muted-foreground">
              {t}
            </li>
          ))}
        </ul>

        {(project.codeUrl || project.demoUrl) && (
          <div className="mt-auto flex flex-wrap gap-2 pt-3">
            {project.codeUrl && (
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 items-center gap-2 rounded-sm border border-border px-3 text-sm transition-colors hover:border-signal/50"
              >
                <Github className="h-4 w-4" aria-hidden />
                Code
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 items-center gap-2 rounded-sm border border-border px-3 text-sm transition-colors hover:border-signal/50"
              >
                <ExternalLink className="h-4 w-4" aria-hidden />
                Demo
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export function Projects() {
  const featured = projects.filter((p) => p.id === "eventix");
  const rest = projects.filter((p) => !featured.includes(p));
  const position = new Map(projects.map((p, i) => [p.id, i + 1]));

  return (
    <section id="projects" className="border-t border-border py-20 md:py-28">
      <div className="container">
        <SectionHeading
          index="03"
          title="Projects"
          lead="Case studies in index form. Each opens with the figure the resume supports — or states, plainly, that there is none."
        />

        <div className="flex flex-col gap-6">
          {featured.map((p) => (
            <ProjectCard key={p.id} project={p} index={position.get(p.id) ?? 0} total={projects.length} featured />
          ))}
          <div className="grid gap-6 lg:grid-cols-2">
            {rest.map((p) => (
              <ProjectCard key={p.id} project={p} index={position.get(p.id) ?? 0} total={projects.length} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}