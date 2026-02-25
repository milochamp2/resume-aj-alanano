import Section from "./Section";

const builds = [
  {
    title: "AI-Assisted Internal Tools",
    description:
      "Building GPT and Claude-powered tools that streamline internal workflows for small teams.",
    status: "In Progress",
  },
  {
    title: "Automation Workflows with n8n",
    description:
      "Designing multi-step automation pipelines connecting APIs, databases, and AI models.",
    status: "In Progress",
  },
  {
    title: "Scalable Next.js SaaS Foundations",
    description:
      "Developing reusable starter architectures with Supabase auth, DB, and role-based access.",
    status: "In Progress",
  },
];

export default function CurrentlyBuilding() {
  return (
    <Section
      id="building"
      title="Currently Building"
      subtitle="What I'm actively working on right now."
    >
      <div className="grid gap-4 sm:grid-cols-3">
        {builds.map((b) => (
          <div key={b.title} className="glass-card rounded-2xl p-5">
            <div className="mb-3 flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-aqua animate-pulse" />
              <span className="text-xs font-medium text-aqua">
                {b.status}
              </span>
            </div>
            <h3 className="mb-1.5 text-base font-semibold text-white">
              {b.title}
            </h3>
            <p className="text-sm leading-relaxed text-slate-400">
              {b.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
