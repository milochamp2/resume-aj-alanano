import Section from "./Section";

const projects = [
  {
    title: "SaaS Dashboard Starter",
    description:
      "Full-stack dashboard with authentication, role-based access, and real-time data — built on Next.js and Supabase.",
    tags: ["Next.js", "Supabase", "Tailwind CSS", "TypeScript"],
    link: "#",
  },
  {
    title: "AI Content Pipeline",
    description:
      "Automated content generation workflow using GPT and Claude APIs, orchestrated with n8n and delivered via webhook.",
    tags: ["n8n", "OpenAI", "Claude API", "Webhooks"],
    link: "#",
  },
  {
    title: "High-Converting Landing Page",
    description:
      "Responsive, performance-optimized landing page with modern animations, SEO metadata, and analytics integration.",
    tags: ["Next.js", "Tailwind CSS", "Vercel", "SEO"],
    link: "#",
  },
];

export default function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="Selected work and builds."
    >
      <div className="grid gap-6 sm:grid-cols-3">
        {projects.map((p) => (
          <div
            key={p.title}
            className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6"
          >
            <h3 className="mb-2 text-lg font-semibold text-white">
              {p.title}
            </h3>
            <p className="mb-4 flex-1 text-sm leading-relaxed text-slate-400">
              {p.description}
            </p>
            <div className="mb-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-indigo/10 px-2.5 py-0.5 text-xs font-medium text-indigo-light"
                >
                  {t}
                </span>
              ))}
            </div>
            {p.link && (
              <a
                href={p.link}
                className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-aqua transition-colors hover:text-aqua-light"
              >
                View
                <svg
                  className="h-4 w-4"
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
