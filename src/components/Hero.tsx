"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5 },
  },
};

export default function Hero() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-gradient-drift absolute left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo/20 blur-[140px]" />
        <div className="animate-gradient-drift-reverse absolute right-1/4 top-1/2 h-[300px] w-[300px] rounded-full bg-aqua/10 blur-[120px]" />
        <div className="animate-gradient-drift absolute bottom-1/4 left-1/4 h-[220px] w-[220px] rounded-full bg-indigo/10 blur-[100px]" />
      </div>

      <motion.div
        className="relative mx-auto max-w-5xl px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl"
        >
          AJ Alanano
        </motion.h1>

        {/* Title */}
        <motion.p
          variants={itemVariants}
          className="mt-2 text-xl font-semibold sm:text-2xl"
        >
          <span className="bg-gradient-to-r from-indigo-light to-aqua bg-clip-text text-transparent">
            Web Developer &amp; Automation Specialist
          </span>
        </motion.p>

        {/* Location & availability badges */}
        <motion.div
          variants={itemVariants}
          className="mt-4 flex flex-wrap items-center justify-center gap-2"
        >
          <span className="glass inline-flex items-center gap-1.5 rounded-full border-aqua/20 px-3 py-1 text-xs font-medium text-aqua">
            <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-aqua" />
            Open to Remote Roles
          </span>
          <span className="glass inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium text-slate-400">
            Philippines
          </span>
        </motion.div>

        {/* Email */}
        <motion.div variants={itemVariants} className="mt-4">
          <a
            href="mailto:alananoaj@gmail.com"
            className="hover-underline text-sm text-aqua"
          >
            alananoaj@gmail.com
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          variants={itemVariants}
          className="mt-3 flex items-center justify-center gap-4"
        >
          <a
            href="https://www.linkedin.com/in/alananoaj7/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover-underline text-sm text-slate-300 transition-colors hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/milochamp2"
            target="_blank"
            rel="noopener noreferrer"
            className="hover-underline text-sm text-slate-300 transition-colors hover:text-white"
          >
            GitHub
          </a>
        </motion.div>

        {/* Summary */}
        <motion.p
          variants={itemVariants}
          className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-300"
        >
          Modern Web Developer with hands-on experience building full-stack
          websites, automation workflows, and marketing systems. Experienced in
          TypeScript, Next.js, Tailwind CSS, and workflow automation using Zapier
          and n8n. Strong understanding of UI/UX, marketing funnels, and
          business process automation.
        </motion.p>

        {/* CTA */}
        <motion.div variants={itemVariants} className="mt-6">
          <a
            href="#contact"
            className="btn-glow relative z-10 inline-block rounded-2xl bg-indigo/90 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-indigo-light hover:shadow-lg hover:shadow-indigo/25 hover:scale-105"
          >
            Get in Touch
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
