import type { Metadata } from "next";
import Skills from "@/components/Skills";

export const metadata: Metadata = { title: "Tech Stack" };

export default function StackPage() {
  return <Skills />;
}
