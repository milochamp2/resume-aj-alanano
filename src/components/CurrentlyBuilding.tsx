import Section from "./Section";

const builds = [
  {
    title: "Full-Stack Supabase Systems",
    description:
      "Building production back-end architectures with PostgreSQL, Auth, Storage, and Edge Functions.",
    status: "In Progress",
  },
  {
    title: "n8n Automation Pipelines",
    description:
      "Designing multi-step workflows connecting APIs, databases, and AI models for clients.",
    status: "In Progress",
  },
  {
    title: "AI-Integrated Client Tools",
    description:
      "GPT and Claude-powered tools that streamline operations for serious businesses.",
    status: "In Progress",
  },
];

export default function CurrentlyBuilding() {
  return (
    <Section
      id="building"
      title="Currently Building"
      subtitle="What I'm actively working on."
    >
      <div className="grid gap-3 sm:grid-cols-3">
        {builds.map((b) => (
          <div key={b.title} className="glass-card rounded-2xl p-4">
            <div className="mb-2 flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-aqua animate-pulse" />
              <span className="text-xs font-medium text-aqua">{b.status}</span>
            </div>
            <h3 className="mb-1 text-sm font-semibold text-white">
              {b.title}
            </h3>
            <p className="text-xs leading-relaxed text-slate-400">
              {b.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
