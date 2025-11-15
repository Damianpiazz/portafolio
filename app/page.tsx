import Image from "next/image";
import { Navigation } from "@/components/navigation/Navigation";
import { HeroSection } from "@/components/hero/HeroSection";
import { ExperienceSection } from "@/components/experience/ExperienceSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <Navigation />
      <main className="flex flex-col">
        <HeroSection />
        <ExperienceSection />
      </main>
    </div>
  );
}
