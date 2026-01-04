import { Code, Database, Brain, Layers } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code,
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    icon: Database,
    skills: ["Node.js", "Express.js", "Python", "Flask", "MongoDB", "SQL"],
  },
  {
    title: "AI / ML",
    icon: Brain,
    skills: [
      "Machine Learning",
      "TFLite",
      "YOLO v11",
      "Llama 3.1",
      "Inception v4",
      "OCR",
      "AI Fine-tuning",
    ],
  },
  {
    title: "Other",
    icon: Layers,
    skills: [
      "Blockchain Integration",
      "Mobile Development",
      "Web Integration",
      "SQL Optimization",
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <AnimatedSection className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-2">Expertise</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              Skills & Technologies
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </AnimatedSection>

          {/* Skills grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <AnimatedSection
                  key={index}
                  animation={index % 2 === 0 ? "slide-left" : "slide-right"}
                  delay={index * 100}
                >
                  <div className="glass rounded-2xl p-6 hover-lift group h-full">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-display text-xl font-semibold">
                        {category.title}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1.5 text-sm font-medium bg-muted rounded-lg hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>

          {/* Interests section */}
          <AnimatedSection className="mt-16 text-center" delay={500}>
            <h3 className="font-display text-xl font-semibold mb-6">
              Interests & Passions
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Solving Real-World Problems",
                "AI & Machine Learning",
                "Web Development",
                "Mobile Development",
                "Technology Innovation",
              ].map((interest, index) => (
                <span
                  key={index}
                  className="px-4 py-2 glass rounded-full text-sm font-medium hover-lift cursor-default"
                >
                  {interest}
                </span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
