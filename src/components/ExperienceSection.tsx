import { Briefcase, Calendar, MapPin } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const experiences = [
  {
    company: "Greysoft Technologies",
    role: "Back End Developer",
    period: "Jul 2024 - Oct 2024",
    location: "Kaduna, Nigeria",
    description:
      "Worked as a Back End Developer for 4 months, building scalable server-side applications.",
  },
  {
    company: "Emerging Trees LTD",
    role: "Software Development Intern",
    period: "Jul 2023 - Oct 2023",
    location: "Kaduna State, Nigeria",
    description:
      "Interned for 4 months, gaining hands-on experience in software development.",
  },
  {
    company: "CoLab Innovation Hub",
    role: "Frontend Developer",
    period: "Jul 2022 - Oct 2022",
    location: "Kaduna, Nigeria",
    description:
      "Worked as a Frontend Developer for 4 months, creating responsive user interfaces.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <AnimatedSection className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-2">
              Career Journey
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              Work Experience
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </AnimatedSection>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <AnimatedSection
                key={index}
                animation={index % 2 === 0 ? "slide-right" : "slide-left"}
                delay={index * 150}
              >
                <div
                  className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full md:-translate-x-1/2 shadow-[0_0_20px_hsl(var(--primary)/0.5)]" />

                  {/* Content */}
                  <div
                    className={`ml-8 md:ml-0 md:w-1/2 ${
                      index % 2 === 0 ? "md:pl-12" : "md:pr-12 md:text-right"
                    }`}
                  >
                    <div className="glass rounded-xl p-6 hover-lift group">
                      <div
                        className={`flex items-center gap-2 text-primary mb-2 ${
                          index % 2 === 0 ? "" : "md:justify-end"
                        }`}
                      >
                        <Briefcase className="h-4 w-4" />
                        <span className="font-mono text-sm">{exp.role}</span>
                      </div>

                      <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {exp.company}
                      </h3>

                      <div
                        className={`flex flex-wrap gap-4 text-sm text-muted-foreground mb-3 ${
                          index % 2 === 0 ? "" : "md:justify-end"
                        }`}
                      >
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3.5 w-3.5" />
                          {exp.location}
                        </span>
                      </div>

                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
