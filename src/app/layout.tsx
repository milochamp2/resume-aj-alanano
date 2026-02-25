import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import StickyCTA from "@/components/StickyCTA";

export const metadata: Metadata = {
  title: {
    default: "AJ Alanano — Premium Web & Automation Systems for Startups",
    template: "%s | AJ Alanano",
  },
  description:
    "Launch your startup with a premium web and automation system. High-converting landing pages with automation built in from day one. Next.js, Supabase, n8n, AI integrations.",
  keywords: [
    "AJ Alanano",
    "Startup Website",
    "Premium Landing Page",
    "Web Automation",
    "AI Integration",
    "Next.js",
    "SaaS Launch",
    "n8n Automation",
    "Vercel",
  ],
  authors: [{ name: "AJ Alanano" }],
  openGraph: {
    title: "AJ Alanano — Premium Web & Automation Systems for Startups",
    description:
      "High-converting launch websites with automation built in from day one.",
    type: "website",
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    title: "AJ Alanano — Premium Web & Automation Systems for Startups",
    description:
      "High-converting launch websites with automation built in from day one.",
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
