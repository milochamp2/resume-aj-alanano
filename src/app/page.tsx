import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Different from "@/components/Different";
import Process from "@/components/Process";
import PricingAnchor from "@/components/PricingAnchor";
import FinalCTA from "@/components/FinalCTA";
import IntroAnimation from "@/components/IntroAnimation";

export default function Home() {
  return (
    <IntroAnimation>
      <Hero />
      <Problem />
      <Solution />
      <Different />
      <Process />
      <PricingAnchor />
      <FinalCTA />
    </IntroAnimation>
  );
}
