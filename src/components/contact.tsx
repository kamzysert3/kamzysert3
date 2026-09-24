import { Download, Github, Linkedin, Mail, Phone } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { profile, RESUME_URL, RESUME_FILENAME } from "@/data/resume";

export function Contact() {
  const { contact, openToWork } = profile;

  const rows = [
    {
      label: "email",
      value: contact.email,
      href: `mailto:${contact.email}`,
      icon: Mail,
    },
    {
      label: "phone",
      value: contact.phone,
      href: contact.phoneHref,
      icon: Phone,
    },
    {
      label: "linkedin",
      value: "kamsicho-nnaegbuna",
      href: contact.linkedinUrl,
      icon: Linkedin,
    },
    {
      label: "github",
      value: "kamzysert3",
      href: contact.githubUrl,
      icon: Github,
    },
  ];

  return (
    <section id="contact" className="border-t border-border py-20 md:py-28">
      <div className="container">
        <SectionHeading
          index="06"
          title="Contact"
          lead="Prefer email — it's the fastest signal. Everything here is exactly as listed on the resume."
        />

        <div className="flex flex-col gap-6 lg:flex-row lg:justify-between">
          <ul className="min-w-0 flex-1">
            {rows.map((row) => {
              const Icon = row.icon;
              return (
                <li key={row.label} className="border-t border-border last:border-b">
                  <a
                    href={row.href}
                    target={row.href.startsWith("http") ? "_blank" : undefined}
                    rel={row.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-4 px-1 py-4 transition-colors hover:text-signal"
                  >
                    <span className="w-20 shrink-0 font-mono text-xs text-muted-foreground">{row.label}</span>
                    <span className="min-w-0 flex-1 truncate font-mono text-sm tnum">{row.value}</span>
                    <Icon
                      className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-signal"
                      aria-hidden
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex flex-col gap-4 lg:w-80">
            {openToWork && (
              <p className="inline-flex items-center gap-2 rounded-sm border border-signal/40 bg-signal/10 px-3 py-2 font-mono text-xs text-signal">
                <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden />
                open to work
              </p>
            )}
            <p className="max-w-prose text-sm leading-relaxed text-muted-foreground">
              {openToWork
                ? "Open to new engineering roles — full-stack, applied AI/ML, or backend."
                : "Currently focused on Eventix Africa and Efinsuite. For collaborations, research, or contract work, email is best."}
            </p>
            <a
              href={RESUME_URL}
              download={RESUME_FILENAME}
              className="inline-flex h-11 w-fit items-center gap-2 rounded-sm bg-primary px-4 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-85"
            >
              <Download className="h-4 w-4" aria-hidden />
              Download resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}