import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const EducationSection = () => {
  return (
    <section id="education" className="py-24 relative bg-card/30">
      <div className="container px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <AnimatedSection className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-2">Academic Background</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              Education
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </AnimatedSection>

          {/* Education card */}
          <AnimatedSection animation="scale">
            <div className="glass rounded-2xl p-8 hover-lift relative overflow-hidden group">
              {/* Background decoration */}
              <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl group-hover:from-primary/20 transition-all duration-500" />

              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-display text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                      Veritas University Abuja
                    </h3>
                    <p className="text-lg text-foreground/80 mb-3">
                      B.Sc Software Engineering
                    </p>
                    <p className="text-muted-foreground mb-4">
                      Computer Software Engineering
                    </p>

                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        Expected Graduation: July 2026
                      </span>
                      <span className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        Abuja, Nigeria
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
