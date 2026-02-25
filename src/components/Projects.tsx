import Section from "./Section";

const projects = [
  {
    title: "HyperFit Website",
    description:
      "Designed and built a modern, responsive website for HyperFit — a fitness brand based in Australia. Clean UI, fast performance, optimized for conversions.",
    tags: ["Next.js", "Tailwind CSS", "Vercel", "SEO"],
    link: "https://hyperfit.com.au",
  },
  {
    title: "Building Inspection Dashboard",
    description:
      "Analytics and performance metric dashboard for Building Inspection Mornington and Building Inspectors Melbourne. Data-driven insights for operational efficiency.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Analytics"],
    link: null,
  },
  {
    title: "Personal Financial Budgeting App",
    description:
      "Custom budgeting application for tracking income, expenses, and savings goals. Built for personal use with clean data visualization.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    link: null,
  },
];

export default function Projects() {
  return (
    <Section id="projects" title="Projects" subtitle="Real work and builds.">
      <div className="grid gap-4 sm:grid-cols-3">
        {projects.map((p) => (
          <div
            key={p.title}
            className="glass-card flex flex-col rounded-2xl p-4"
          >
            <h3 className="mb-1.5 text-base font-semibold text-white">
              {p.title}
            </h3>
            <p className="mb-3 flex-1 text-sm leading-relaxed text-slate-400">
              {p.description}
            </p>
            <div className="mb-2 flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-indigo/10 px-2 py-0.5 text-xs font-medium text-indigo-light"
                >
                  {t}
                </span>
              ))}
            </div>
            {p.link && (
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-aqua transition-colors hover:text-aqua-light"
              >
                Visit
                <svg
                  className="h-3.5 w-3.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </a>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
