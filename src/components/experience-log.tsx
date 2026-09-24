import { SectionHeading } from "@/components/section-heading";
import { experience } from "@/data/resume";

export function ExperienceLog() {
  return (
    <section id="experience" className="border-t border-border py-20 md:py-28">
      <div className="container">
        <SectionHeading
          index="02"
          title="Experience"
          lead="Five roles, newest first. Each row opens to show outcome, measure, and method — the way a deploy log reads."
        />

        <ol className="flex flex-col">
          {experience.map((exp, i) => {
            const isCurrent = exp.period.includes("Present");
            return (
              <li
                key={exp.id}
                className="grid gap-3 border-t border-border py-7 last:border-b md:grid-cols-12 md:gap-6"
              >
                <div className="md:col-span-3">
                  <p className="flex items-center gap-2 font-mono text-xs text-muted-foreground tnum">
                    <span
                      className={`inline-block h-1.5 w-1.5 rounded-full ${isCurrent ? "bg-signal" : "bg-muted-foreground/50"}`}
                      aria-hidden
                    />
                    {exp.period}
                  </p>
                  <p className="mt-1.5 font-mono text-[11px] text-muted-foreground">{exp.location}</p>
                  <p className="mt-1.5 font-mono text-[11px] text-muted-foreground tnum">
                    rev. {String(experience.length - i).padStart(2, "0")}
                  </p>
                </div>

                <div className="md:col-span-9">
                  <h3 className="font-display text-xl font-semibold tracking-tight md:text-2xl">
                    {exp.role}
                    <span className="text-muted-foreground"> — {exp.company}</span>
                  </h3>

                  <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-1.5" aria-label={`Stack at ${exp.company}`}>
                    {exp.stack.map((s) => (
                      <li key={s} className="font-mono text-[11px] text-muted-foreground">
                        {s}
                      </li>
                    ))}
                  </ul>

                  <dl className="mt-5 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                    <div>
                      <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                        Outcome
                      </dt>
                      <dd className="mt-1.5 text-sm leading-relaxed">{exp.outcome}</dd>
                    </div>
                    <div>
                      <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                        Measure
                      </dt>
                      <dd className="mt-1.5 font-mono text-sm leading-relaxed tnum text-signal">{exp.measure}</dd>
                    </div>
                  </dl>

                  <details className="group mt-5">
                    <summary className="inline-flex cursor-pointer list-none items-center gap-2 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground [&::-webkit-details-marker]:hidden">
                      <span className="inline-block transition-transform duration-200 ease-out group-open:rotate-90" aria-hidden>
                        ›
                      </span>
                      Method ({exp.method.length})
                    </summary>
                    <ul className="mt-3 flex flex-col gap-2 pl-4">
                      {exp.method.map((m, j) => (
                        <li key={j} className="relative list-none pl-4 text-sm leading-relaxed text-muted-foreground">
                          <span className="absolute left-0 top-2.5 h-px w-2.5 bg-border" aria-hidden />
                          {m}
                        </li>
                      ))}
                    </ul>
                  </details>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}