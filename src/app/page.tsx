import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Highlights from "@/components/Highlights";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import IntroAnimation from "@/components/IntroAnimation";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <IntroAnimation>
      <SmoothScroll>
        <Navbar />
        <main>
          <Hero />
          <Skills />
          <Highlights />
          <Projects />
          <Process />
          <Contact />
        </main>
        <Footer />
      </SmoothScroll>
    </IntroAnimation>
  );
}
