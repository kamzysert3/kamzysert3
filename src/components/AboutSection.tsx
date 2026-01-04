import { Code, Lightbulb, Rocket, Users } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import profileImage from "@/assets/profile-avatar.png";

const highlights = [
  {
    icon: Code,
    title: "Full-Stack Development",
    description: "Building end-to-end solutions with modern technologies",
  },
  {
    icon: Lightbulb,
    title: "AI & Innovation",
    description: "Integrating intelligent systems into practical applications",
  },
  {
    icon: Rocket,
    title: "Problem Solver",
    description: "Turning complex challenges into elegant solutions",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Working effectively in agile development environments",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative bg-card/30">
      <div className="container px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <AnimatedSection className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-2">
              Get to Know Me
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              About Me
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image side */}
            <AnimatedSection animation="slide-left" className="relative">
              <div className="relative max-w-md mx-auto lg:mx-0">
                {/* Decorative elements */}
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
                <div className="absolute -top-2 -right-2 w-24 h-24 bg-primary/30 rounded-full blur-xl animate-float" />
                <div
                  className="absolute -bottom-2 -left-2 w-32 h-32 bg-accent/30 rounded-full blur-xl animate-float"
                  style={{ animationDelay: "1s" }}
                />

                {/* Image container */}
                <div className="relative glass rounded-3xl p-2">
                  <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
                    <img
                      src={profileImage}
                      alt="Kamsicho Raymond Nnaegbuna"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Floating badge */}
                  <div className="absolute -bottom-3 -right-3 glass rounded-xl px-4 py-2 shadow-lg">
                    <p className="text-sm font-semibold text-primary">
                      Open to Work
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Content side */}
            <AnimatedSection animation="slide-right" delay={200}>
              <div className="space-y-6">
                <h3 className="font-display text-2xl sm:text-3xl font-semibold">
                  Passionate Developer Building the{" "}
                  <span className="text-gradient">Future with Code</span>
                </h3>

                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I'm Kamsicho Raymond Nnaegbuna, a Software Engineering
                    student at Veritas University Abuja with a deep passion for
                    creating technology that makes a real difference. My journey
                    in tech started with curiosity about how things work, and it
                    has evolved into a mission to solve real-world problems
                    through innovative software solutions.
                  </p>

                  <p>
                    With hands-on experience in both frontend and backend
                    development, I've had the privilege of working with amazing
                    teams at companies like Greysoft Technologies and CoLab
                    Innovation Hub. These experiences have shaped my approach to
                    building scalable, user-centric applications.
                  </p>

                  <p>
                    What excites me most is the intersection of AI and practical
                    applications. From developing a Maize Leaf Virus Detection
                    app to creating AI-powered chatrooms, I'm constantly
                    exploring ways to leverage machine learning to create
                    meaningful impact. When I'm not coding, you'll find me
                    learning about the latest in AI research or contributing to
                    open-source projects.
                  </p>
                </div>

                {/* Quick stats */}
                <div className="flex flex-wrap gap-6 pt-4">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-primary">3+</p>
                    <p className="text-sm text-muted-foreground">
                      Years Coding
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-primary">15+</p>
                    <p className="text-sm text-muted-foreground">
                      Projects Built
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-primary">3</p>
                    <p className="text-sm text-muted-foreground">Companies</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Highlights grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <AnimatedSection
                  key={index}
                  animation="fade-up"
                  delay={index * 100}
                >
                  <div className="glass rounded-xl p-6 text-center hover-lift group h-full">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
