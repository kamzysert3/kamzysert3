import { Github } from "lucide-react";
import { buildMeta, formatBuildTime } from "@/lib/build-meta";
import { profile } from "@/data/resume";

const STAGES: ReadonlyArray<{ name: string; kind: "pass" | "live" | "dev" }> = [
  { name: "lint", kind: "pass" },
  { name: "typecheck", kind: "pass" },
  { name: "build", kind: "pass" },
  { name: "deploy", kind: "live" },
];

export function SiteFooter() {
  const isDevBuild = buildMeta.commit === "dev-build";
  const env = import.meta.env.MODE === "development" ? "development" : "production";

  return (
    <footer className="border-t border-border bg-card/40">
      <div className="container py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              This site's pipeline
            </p>
            <ol className="mt-4 flex items-center gap-2">
              {STAGES.map((stage, i) => (
                <li key={stage.name} className="flex items-center gap-2">
                  {i > 0 && <span className="h-px w-3 bg-border" aria-hidden />}
                  <span className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.12em]">
                    <span
                      className={`inline-block h-1.5 w-1.5 rounded-full ${
                        stage.kind === "live" ? "bg-signal" : "bg-muted-foreground/70"
                      }`}
                      aria-hidden
                    />
                    {stage.name}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <dl className="grid max-w-sm flex-1 grid-cols-1 gap-2 font-mono text-[11px] md:max-w-md">
            <div className="flex justify-between gap-4 border-b border-border pb-1.5">
              <dt className="text-muted-foreground">commit</dt>
              <dd className="text-right tnum text-foreground">{isDevBuild ? "dev build" : buildMeta.commit}</dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-border pb-1.5">
              <dt className="text-muted-foreground">built</dt>
              <dd className="text-right tnum text-foreground">{formatBuildTime(buildMeta.buildTime)}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-muted-foreground">env</dt>
              <dd className="text-right tnum text-foreground">{env}</dd>
            </div>
          </dl>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[11px] text-muted-foreground">
            © {new Date().getFullYear()} {profile.name}. All claims on this page come from the resume.
          </p>
          <a
            href={profile.contact.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 font-mono text-[11px] text-muted-foreground transition-colors hover:text-foreground"
            aria-label={`Source code on GitHub (${profile.contact.githubUrl})`}
          >
            <Github className="h-3.5 w-3.5" aria-hidden />
            source: kamzysert3/kamzysert3
          </a>
        </div>
      </div>
    </footer>
  );
}