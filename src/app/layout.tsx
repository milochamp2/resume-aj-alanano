import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import StickyCTA from "@/components/StickyCTA";

export const metadata: Metadata = {
  title: {
    default: "AJ Alanano — Web Developer (Vibe Coder)",
    template: "%s | AJ Alanano",
  },
  description:
    "I build modern Next.js websites, dashboards, and automation systems using Tailwind CSS, Supabase, n8n/Zapier, and AI (GPT + Claude).",
  keywords: [
    "AJ Alanano",
    "Web Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Supabase",
    "Tailwind CSS",
    "AI Integration",
    "Automation",
    "Vercel",
  ],
  authors: [{ name: "AJ Alanano" }],
  openGraph: {
    title: "AJ Alanano — Web Developer (Vibe Coder)",
    description:
      "Modern Next.js websites, dashboards, and AI-powered automation systems.",
    type: "website",
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    title: "AJ Alanano — Web Developer (Vibe Coder)",
    description:
      "Modern Next.js websites, dashboards, and AI-powered automation systems.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <SmoothScroll>
          <Navbar />
          <main className="pt-12">{children}</main>
          <Footer />
          <StickyCTA />
        </SmoothScroll>
      </body>
    </html>
  );
}
