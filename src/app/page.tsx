import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { EditingStuff } from "@/components/sections/EditingStuff";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Achievements } from "@/components/sections/Achievements";
import { Certificates } from "@/components/sections/Certificates";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      
      <div className="flex flex-col">
        <Hero />
        <About />
        <FeaturedProjects />
        <EditingStuff />
        <Experience />
        <Skills />
        <Achievements />
        <Certificates />
        <Contact />
      </div>
      
      <Footer />
    </div>
  );
}
