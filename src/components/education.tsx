import { SectionHeading } from "@/components/section-heading";
import { education } from "@/data/resume";

export function Education() {
  return (
    <section id="education" className="border-t border-border py-20 md:py-28">
      <div className="container">
        <SectionHeading index="05" title="Education" lead="Status reflects the resume: graduated, not expected." />

        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <h3 className="font-display text-2xl font-semibold tracking-tight">{education.degree}</h3>
            <p className="mt-1.5 text-muted-foreground">{education.major}</p>
            <p className="mt-3 text-muted-foreground">{education.institution} — {education.location}</p>

            <div className="mt-6 grid max-w-md grid-cols-2 gap-px overflow-hidden rounded-sm border border-border bg-border">
              <div className="bg-card px-4 py-3">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Status</p>
                <p className="mt-1 font-mono text-sm tnum text-foreground">
                  {education.status} {education.graduatedDate}
                </p>
              </div>
              <div className="bg-card px-4 py-3">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">CGPA</p>
                <p className="mt-1 font-mono text-sm tnum text-signal">{education.cgpa.toFixed(2)}</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-5 md:pl-8">
            <h4 className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">Coursework</h4>
            <ul className="mt-3 flex flex-col gap-2.5">
              {education.coursework.map((c) => (
                <li key={c} className="flex items-center gap-3 text-sm">
                  <span className="h-px w-4 bg-signal" aria-hidden />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}