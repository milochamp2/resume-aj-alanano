import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import TechStack from "@/components/TechStack";
import PersonalProjects from "@/components/PersonalProjects";
import ImpactMetrics from "@/components/ImpactMetrics";
import ContactCTA from "@/components/ContactCTA";
import IntroAnimation from "@/components/IntroAnimation";

export default function Home() {
  return (
    <IntroAnimation>
      <Hero />
      <Experience />
      <TechStack />
      <PersonalProjects />
      <ImpactMetrics />
      <ContactCTA />
    </IntroAnimation>
  );
}
