import Section from "./Section";

const metrics = [
  {
    stat: "60%",
    label: "Workflow Time Reduced",
    description: "Through automation pipelines built with n8n and Zapier.",
  },
  {
    stat: "<2 wks",
    label: "MVP to Deployment",
    description: "Full-stack Next.js + Supabase apps from zero to production.",
  },
  {
    stat: "Scalable",
    label: "SaaS Architecture",
    description:
      "Auth, database, and role-based access built for growth from day one.",
  },
];

export default function Impact() {
  return (
    <Section
      id="impact"
      title="Impact"
      subtitle="Outcomes that matter."
    >
      <div className="grid gap-4 sm:grid-cols-3">
        {metrics.map((m) => (
          <div key={m.label} className="glass-card rounded-2xl p-5 text-center">
            <span className="mb-1 block text-3xl font-extrabold bg-gradient-to-r from-indigo-light to-aqua bg-clip-text text-transparent">
              {m.stat}
            </span>
            <span className="mb-2 block text-sm font-semibold text-white">
              {m.label}
            </span>
            <p className="text-sm leading-relaxed text-slate-400">
              {m.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
