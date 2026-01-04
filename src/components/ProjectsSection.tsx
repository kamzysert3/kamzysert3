import { ExternalLink, Github, Bot, Leaf, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const projects = [
  {
    title: "AI-Powered Chatroom",
    description:
      "Designed an interactive chat platform with private and group messages, integrated with a personalized AI chat assistant for enhanced user experience.",
    icon: Bot,
    tags: ["React", "Node.js", "AI", "WebSocket"],
    gradient: "from-primary/20 to-accent/20",
  },
  {
    title: "Maize Leaf Virus Detection",
    description:
      "Developed a mobile app using HTML, Tailwind CSS, and JavaScript, integrating an AI model for real-time detection of plant diseases.",
    icon: Leaf,
    tags: ["Machine Learning", "TFLite", "JavaScript", "Tailwind CSS"],
    gradient: "from-accent/20 to-primary/20",
  },
  {
    title: "Personalized Digital Experience",
    description:
      "Creating an interactive digital storybook and progress-based puzzle game as a unique, memory-focused gift project with engaging animations.",
    icon: Gift,
    tags: ["React", "TypeScript", "Animation", "Game Dev"],
    gradient: "from-primary/20 to-accent/20",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative bg-card/30">
      <div className="container px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <AnimatedSection className="text-center mb-16">
            <p className="text-primary font-mono text-sm mb-2">My Work</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              Featured Projects
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </AnimatedSection>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <AnimatedSection
                  key={index}
                  animation="scale"
                  delay={index * 100}
                >
                  <div className="group glass rounded-2xl p-6 hover-lift relative overflow-hidden h-full">
                    {/* Background gradient */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    />

                    <div className="relative z-10">
                      {/* Icon */}
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>

                      {/* Title */}
                      <h3 className="font-display text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2.5 py-1 text-xs font-mono bg-muted rounded-md text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex gap-3">
                        <Button variant="ghost" size="sm" className="gap-2">
                          <Github className="h-4 w-4" />
                          Code
                        </Button>
                        <Button variant="ghost" size="sm" className="gap-2">
                          <ExternalLink className="h-4 w-4" />
                          Demo
                        </Button>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>

          {/* View more button */}
          <AnimatedSection className="text-center mt-12" delay={400}>
            <Button variant="heroOutline" size="lg" asChild>
              <a
                href="https://github.com/kamzysert3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-5 w-5" />
                View All Projects on GitHub
              </a>
            </Button>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
