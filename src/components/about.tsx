import { lazy, Suspense } from "react";
import { SectionHeading } from "@/components/section-heading";
import { profile, RESUME_URL, RESUME_FILENAME } from "@/data/resume";
import profileImage from "@/assets/profile-avatar.png";

const AskResume = lazy(() =>
  import("@/components/ask-resume").then((m) => ({ default: m.AskResume })),
);

export function About() {
  return (
    <section id="about" className="border-t border-border py-20 md:py-28">
      <div className="container">
        <SectionHeading
          index="01"
          title="About"
          lead="The short version, drawn from the resume. No claims here that aren't in it."
        />

        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <div className="max-w-prose space-y-5 leading-relaxed text-muted-foreground">
              {profile.about.map((p, i) => (
                <p key={i} className="text-[0.975rem]">
                  {p}
                </p>
              ))}
            </div>

            <a
              href={RESUME_URL}
              download={RESUME_FILENAME}
              className="mt-8 inline-flex items-center gap-2 border-b border-border pb-1 font-mono text-xs text-foreground transition-colors hover:border-signal hover:text-signal"
            >
              Full resume (PDF)
            </a>
          </div>

          <div className="lg:col-span-6 lg:pl-10">
            <figure className="max-w-[15rem]">
              <div className="duotone aspect-square overflow-hidden rounded-sm border border-border">
                <img
                  src={profileImage}
                  alt="Portrait of Kamsicho Raymond Nnaegbuna"
                  width={460}
                  height={460}
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="mt-3 font-mono text-[11px] text-muted-foreground">
                photo, duotone — {profile.contact.location}
              </figcaption>
            </figure>
          </div>
        </div>

        <div className="mt-20 md:mt-24">
          <Suspense fallback={<div className="h-40 animate-pulse rounded-sm border border-border bg-card/40" />}>
            <AskResume />
          </Suspense>
        </div>
      </div>
    </section>
  );
}