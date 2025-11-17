import Image from "next/image";
import { Navigation } from "@/components/navigation/Navigation";
import { HeroSection } from "@/components/hero/HeroSection";
import { ExperienceSection } from "@/components/experience/ExperienceSection";
import { ProjectsSection } from "@/components/projects/ProjectsSection";
import { EducationSection } from "@/components/education/EducationSection";
import { SkillsSection } from "@/components/skills/SkillsSection";
import { ContactSection } from "@/components/contact/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <Navigation />
      <main className="flex flex-col">
        <HeroSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <footer className="py-8 px-4 border-t border-border">
          <div className="container mx-auto text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Damián Piazza</p>
          </div>
        </footer>
    </div>
  );
}
