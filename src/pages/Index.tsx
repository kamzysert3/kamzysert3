import { lazy, Suspense, useEffect, useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { ExperienceLog } from "@/components/experience-log";
import { Projects } from "@/components/projects";
import { SkillsVectorMap } from "@/components/skills-map";
import { Education } from "@/components/education";
import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";

const CommandPalette = lazy(() =>
  import("@/components/command-palette").then((m) => ({ default: m.CommandPalette })),
);

const Index = () => {
  const [commandOpen, setCommandOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setCommandOpen((v) => !v);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader onOpenCommand={() => setCommandOpen(true)} />
      <main className="flex-1">
        <Hero />
        <About />
        <ExperienceLog />
        <Projects />
        <SkillsVectorMap />
        <Education />
        <Contact />
      </main>
      <SiteFooter />
      <Suspense fallback={null}>
        <CommandPalette open={commandOpen} onOpenChange={setCommandOpen} />
      </Suspense>
    </div>
  );
};

export default Index;