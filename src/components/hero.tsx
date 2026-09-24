import { Download, ExternalLink, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RequestTrace } from "@/components/request-trace";
import {
  KEY_FIGURES,
  RESUME_URL,
  RESUME_FILENAME,
  education,
  profile,
} from "@/data/resume";

export function Hero() {
  const { contact } = profile;

  return (
    <section id="top" className="container grid gap-12 pb-16 pt-14 md:pb-24 md:pt-20 lg:grid-cols-12 lg:gap-10" aria-label="Introduction">
      <div className="lg:col-span-7">
        <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden />
          Software Engineer — applied AI/ML
        </p>

        <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl text-balance">
          Kamsicho Raymond Nnaegbuna
        </h1>

        <h2 className="mt-4 font-mono text-sm text-muted-foreground sm:text-base">{profile.headline}</h2>

        <p className="mt-6 max-w-prose leading-relaxed text-muted-foreground">{profile.summary}</p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button asChild>
            <a href={RESUME_URL} download={RESUME_FILENAME}>
              <Download className="mr-1 h-4 w-4" aria-hidden />
              Download resume
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href={contact.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-1 h-4 w-4" aria-hidden />
              GitHub
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href={contact.linkedinUrl} target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-1 h-4 w-4" aria-hidden />
              LinkedIn
            </a>
          </Button>
        </div>

        <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-4">
          {KEY_FIGURES.map((f) => (
            <div key={f.label} className="bg-card px-4 py-3">
              <dt className="font-mono text-lg font-medium tnum text-foreground">{f.value}</dt>
              <dd className="mt-1 font-mono text-[11px] leading-tight text-muted-foreground">{f.label}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="flex flex-col gap-6 lg:col-span-5">
        <RequestTrace />

        <div className="rounded-sm border border-border p-4">
          <ul className="flex flex-col gap-2 font-mono text-xs">
            <li className="flex justify-between gap-4">
              <span className="text-muted-foreground">role</span>
              <span className="text-right text-foreground">{profile.role}</span>
            </li>
            <li className="flex justify-between gap-4">
              <span className="text-muted-foreground">education</span>
              <span className="text-right text-foreground">
                B.Sc. Soft. Eng. — {education.graduatedDate}
              </span>
            </li>
            <li className="flex justify-between gap-4">
              <span className="text-muted-foreground">based</span>
              <span className="text-right text-foreground">{contact.location}</span>
            </li>
          </ul>
        </div>

        <a
          href={`mailto:${contact.email}`}
          className="group inline-flex items-center justify-between gap-2 rounded-sm border border-border px-4 py-3 text-sm transition-colors hover:border-signal/60"
        >
          <span className="truncate font-mono text-xs text-muted-foreground group-hover:text-foreground">
            {contact.email}
          </span>
          <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground group-hover:text-signal" aria-hidden />
        </a>
      </div>
    </section>
  );
}