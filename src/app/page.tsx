import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import IntroAnimation from "@/components/IntroAnimation";

export default function Home() {
  return (
    <IntroAnimation>
      <Hero />
      <Highlights />
    </IntroAnimation>
  );
}
