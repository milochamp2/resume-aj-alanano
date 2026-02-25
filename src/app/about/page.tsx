import type { Metadata } from "next";
import WhyMe from "@/components/WhyMe";
import Process from "@/components/Process";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <WhyMe />
      <Process />
    </>
  );
}
