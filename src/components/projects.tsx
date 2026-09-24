import type { ReactElement } from "react";
import { ExternalLink, Github } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { projects, type Project } from "@/data/resume";
import {
  ChatroomVisual,
  EfinsuiteVisual,
  EventixVisual,
  MaizeVisual,
  NuraVisual,
  StorybookVisual,
} from "@/components/project-visuals";

const visuals: Record<Project["visual"], () => ReactElement> = {
  maize: MaizeVisual,
  chatroom: ChatroomVisual,
  efinsuite: EfinsuiteVisual,
  eventix: EventixVisual,
  storybook: StorybookVisual,
  nura: NuraVisual,
};

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const Visual = visuals[project.visual];
  return (
    <article
      className={`flex min-w-0 flex-col overflow-hidden rounded-sm border border-border bg-card/60 ${
        featured ? "lg:grid lg:grid-cols-2" : ""
      }`}
    >
      <div className={`${featured ? "lg:border-r lg:border-border" : ""} bg-muted/40 px-4 py-4 sm:px-6`}>
        <Visual />
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-3 p-5 sm:p-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground tnum">
          {project.id}
          {project.fact ? <span className="ml-3 normal-case text-signal tnum">{project.fact}</span> : null}
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
  const featured = projects.filter((p) => p.visual === "maize" || p.visual === "efinsuite");
  const rest = projects.filter((p) => !featured.includes(p));

  return (
    <section id="projects" className="border-t border-border py-20 md:py-28">
      <div className="container">
        <SectionHeading
          index="03"
          title="Projects"
          lead="Case studies with visual sketches. Figures shown are the ones on the resume — nothing invented. Concept visuals are labelled."
        />

        <div className="flex flex-col gap-6">
          {featured.map((p) => (
            <ProjectCard key={p.id} project={p} featured />
          ))}
          <div className="grid gap-6 lg:grid-cols-2">
            {rest.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}