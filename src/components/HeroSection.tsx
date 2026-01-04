import { Button } from "@/components/ui/button";
import { Github, Download, Linkedin, Instagram, ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-primary/20 via-transparent to-transparent rounded-full blur-3xl animate-float" />
        <div
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-accent/20 via-transparent to-transparent rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1.5s" }}
        />
        <div
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "0.5s" }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container relative z-10 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <p className="animate-in stagger-1 text-muted-foreground font-mono text-sm sm:text-base mb-4">
            Hello, I'm
          </p>

          {/* Name */}
          <h1 className="animate-in stagger-2 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
            Kamsicho Raymond <span className="text-gradient">Nnaegbuna</span>
          </h1>

          {/* Title */}
          <p className="animate-in stagger-3 text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-6 font-display">
            Full-Stack Developer & AI Engineer
          </p>

          {/* Description */}
          <p className="animate-in stagger-4 text-muted-foreground max-w-2xl mx-auto mb-10 text-base sm:text-lg leading-relaxed">
            Software Engineer, passionate about solving real-world problems with
            innovative technology. Specialized in React, Node.js, Python, and
            AI/ML integration.
          </p>

          {/* CTA Buttons */}
          <div className="animate-in stagger-5 flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button variant="hero" size="lg" asChild>
              <a href="/resume.pdf" download="Kamsicho_Raymond_Resume.pdf">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a
                href="https://github.com/kamzysert3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-5 w-5" />
                View GitHub
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="animate-in stagger-5 flex items-center justify-center gap-4">
            <a
              href="https://linkedin.com/in/kamsicho-nnaegbuna"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass hover-lift hover:glow-primary"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://instagram.com/kamsichoraymondnnaegbuna/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass hover-lift hover:glow-primary"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/kamzysert3"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full glass hover-lift hover:glow-primary"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
