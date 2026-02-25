import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Highlights from "@/components/Highlights";
import Impact from "@/components/Impact";
import CurrentlyBuilding from "@/components/CurrentlyBuilding";
import Projects from "@/components/Projects";
import WhyMe from "@/components/WhyMe";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import IntroAnimation from "@/components/IntroAnimation";
import SmoothScroll from "@/components/SmoothScroll";
import StickyCTA from "@/components/StickyCTA";

export default function Home() {
  return (
    <IntroAnimation>
      <SmoothScroll>
        <Navbar />
        <main>
          <Hero />
          <Skills />
          <Highlights />
          <Impact />
          <CurrentlyBuilding />
          <Projects />
          <WhyMe />
          <Process />
          <Contact />
        </main>
        <Footer />
        <StickyCTA />
      </SmoothScroll>
    </IntroAnimation>
  );
}
