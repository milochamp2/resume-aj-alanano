import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import StickyCTA from "@/components/StickyCTA";

export const metadata: Metadata = {
  title: {
    default: "AJ Alanano — Full-Stack Developer (Vibe Coder)",
    template: "%s | AJ Alanano",
  },
  description:
    "Full-stack developer building automation-first, AI-integrated web systems for serious businesses. Next.js, Supabase, n8n/Zapier, GPT + Claude.",
  keywords: [
    "AJ Alanano",
    "Full-Stack Developer",
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
    title: "AJ Alanano — Full-Stack Developer (Vibe Coder)",
    description:
      "Automation-first, AI-integrated web systems for serious businesses.",
    type: "website",
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    title: "AJ Alanano — Full-Stack Developer (Vibe Coder)",
    description:
      "Automation-first, AI-integrated web systems for serious businesses.",
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
