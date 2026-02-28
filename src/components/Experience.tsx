"use client";

import { motion } from "framer-motion";
import Section from "./Section";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
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

const experiences = [
  {
    company: "Kingdom Climate Solutions",
    location: "Australia",
    roles: "Automation Specialist \u2192 General Admin VA \u2192 Web Developer",
    period: "July 2025 \u2013 August 2025",
    techStack: ["Zapier", "n8n", "Next.js", "TypeScript", "Tailwind CSS", "Meta Ads"],
    contributions: [
      "Designed and implemented lead capture and chatbot automation systems using Zapier and n8n integrated with Ascora.",
      "Automated customer lead workflows (Gmail \u2192 Google Sheets \u2192 Google Calendar) to improve operational efficiency.",
      "Created full-stack website (Hyperfit.com.au) using TypeScript, Next.js, React, Tailwind CSS.",
      "Developed UI components and responsive layouts for modern web experiences.",
      "Designed marketing graphics for Facebook and Instagram content.",
      "Assisted in running and optimizing Meta ad campaigns for multiple business accounts.",
    ],
  },
  {
    company: "Raindance AI",
    location: "",
    roles: "Web Developer & Automation Specialist",
    period: "December 2025 \u2013 January 2026",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Dashboard UI"],
    contributions: [
      "Built an analytical dashboard interface for internal data visualization.",
      "Designed and structured a reusable chatbot UI design system.",
      "Contributed to frontend architecture using modern React ecosystem tools.",
    ],
  },
];

export default function Experience() {
  return (
    <Section
      id="experience"
      title="Work Experience"
      subtitle="A timeline of my professional journey and the skills I've developed along the way."
    >
      <motion.div
        className="relative ml-6 border-l-2 border-indigo/30 pl-8 sm:ml-10 sm:pl-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {experiences.map((exp) => (
          <motion.div
            key={exp.company}
            variants={itemVariants}
            className="relative mb-10 last:mb-0"
          >
            {/* Timeline node - briefcase icon */}
            <div className="absolute -left-[52px] flex h-10 w-10 items-center justify-center rounded-full border-2 border-indigo/30 bg-navy sm:-left-[61px]">
              <svg
                className="h-4 w-4 text-indigo-light"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </div>

            <div className="glass-card overflow-hidden rounded-2xl">
              {/* Card header */}
              <div className="border-b border-white/[0.06] bg-white/[0.02] px-5 py-4">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {exp.roles}
                    </h3>
                    <p className="mt-0.5 flex items-center gap-1.5 text-sm text-indigo-light">
                      <svg
                        className="h-3.5 w-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 0h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                        />
                      </svg>
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <svg
                        className="h-3.5 w-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                        />
                      </svg>
                      {exp.period}
                    </span>
                    {exp.location && (
                      <span className="flex items-center gap-1">
                        <svg
                          className="h-3.5 w-3.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={1.5}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                          />
                        </svg>
                        {exp.location}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card body */}
              <div className="px-5 py-4">
                <ul className="space-y-1.5">
                  {exp.contributions.map((c) => (
                    <li
                      key={c}
                      className="flex gap-2 text-sm leading-relaxed text-slate-300"
                    >
                      <span className="mt-1 shrink-0 text-aqua">&bull;</span>
                      {c}
                    </li>
                  ))}
                </ul>

                {/* Tech stack badges */}
                <div className="mt-4">
                  <p className="mb-2 flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                    <svg
                      className="h-3.5 w-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                      />
                    </svg>
                    Technologies &amp; Skills
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.techStack.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-0.5 text-xs text-slate-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
