import { Button } from "@/components/ui/button";
import { Phone, Linkedin, Instagram, Github, Download } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section header */}
          <AnimatedSection className="mb-12">
            <p className="text-primary font-mono text-sm mb-2">Get In Touch</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              Let's Work Together
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-8" />
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              I'm currently looking for new opportunities and would love to hear
              from you. Whether you have a question or just want to say hi, feel
              free to reach out!
            </p>
          </AnimatedSection>

          {/* Contact info */}
          <AnimatedSection delay={100}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a
                href="tel:07046194679"
                className="flex items-center gap-3 glass rounded-xl px-6 py-4 hover-lift group"
              >
                <Phone className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                <span className="font-medium">07046194679</span>
              </a>
            </div>
          </AnimatedSection>

          {/* Social links */}
          <AnimatedSection delay={200}>
            <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
              <a
                href="https://linkedin.com/in/kamsicho-nnaegbuna"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 glass rounded-xl px-5 py-3 hover-lift group"
              >
                <Linkedin className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://instagram.com/kamsichoraymondnnaegbuna/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 glass rounded-xl px-5 py-3 hover-lift group"
              >
                <Instagram className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                <span>Instagram</span>
              </a>
              <a
                href="https://github.com/kamzysert3"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 glass rounded-xl px-5 py-3 hover-lift group"
              >
                <Github className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                <span>GitHub</span>
              </a>
            </div>
          </AnimatedSection>

          {/* CTA Button */}
          <AnimatedSection animation="scale" delay={300}>
            <Button variant="hero" size="xl" asChild>
              <a href="/resume.pdf" download="Kamsicho_Raymond_Resume.pdf">
                <Download className="mr-2 h-5 w-5" />
                Download My Resume
              </a>
            </Button>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
