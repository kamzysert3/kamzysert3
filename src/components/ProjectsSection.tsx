import { ExternalLink, Github, Bot, Leaf, Ticket, HeartPulse } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const projects = [
  {
    title: "Maize Leaf Virus Detection",
    description:
      "Computer vision app hitting 94% disease classification accuracy with YOLO v11 and Inception v4, deployed on-device via TFLite for sub-second real-time inference.",
    icon: Leaf,
    tags: ["YOLO v11", "Inception v4", "TFLite", "Computer Vision"],
    gradient: "from-accent/20 to-primary/20",
    codelink: "https://github.com/kamzysert3/maize_leaf_virus_detection_api",
    demolink: "https://veritas-maize-virus-detection-system.onrender.com/",
    allow: ["code", "demo"],
  },
  {
    title: "AI-Powered Chatroom",
    description:
      "Real-time multi-agent chat platform with under 200ms message latency, personalised Llama 3.1 fine-tuning, and private/group messaging on Next.js + Flask.",
    icon: Bot,
    tags: ["Next.js", "Flask", "Llama 3.1", "Multi-Agent"],
    gradient: "from-primary/20 to-accent/20",
    codelink: "https://github.com/kamzysert3/Chatroom-App",
    demolink: "https://greysoft-intern-chat-app.onrender.com/",
    allow: ["code"],
  },
  {
    title: "Eventix Africa Platform",
    description:
      "Scalable web and mobile event management platform built with PHP serving thousands of users with features like ticketing, analytics, and real-time notifications.",
    icon: Ticket,
    tags: ["PHP", "MySQL", "Event Management"],
    gradient: "from-primary/20 to-accent/20",
    demolink: "http://eventixafrica.com/",
    allow: ["demo"],
  },
  {
    title: "Nura Assistant",
    description:
      "Healthcare chatbot leveraging Retrieval-Augmented Generation (RAG) with Pinecone vector search, biomedical embeddings, and large language models to deliver accurate, context-aware health information and assistance.",
    icon: HeartPulse,
    tags: ["Python", "RAG", "Pinecone", "LangChain", "LLMs"],
    gradient: "from-primary/20 to-accent/20",
    demolink: "https://nura-web.vercel.app/",
    allow: ["demo"],
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
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
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
                        {/* only render what you are allowed */}
                        {project.allow.includes("code") && (
                          <Button
                            variant="outline"
                            size="sm"
                            asChild
                            className="flex items-center gap-1"
                          >
                            <a
                              href={project.codelink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="mr-2 h-5 w-5" />
                              View Code
                            </a>
                          </Button>
                        )}
                        {project.allow.includes("demo") && (
                          <Button
                            variant="outline"
                            size="sm"
                            asChild
                            className="flex items-center gap-1"
                          >
                            <a
                              href={project.demolink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="mr-2 h-5 w-5" />
                              View Demo
                            </a>
                          </Button>
                        )}
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
