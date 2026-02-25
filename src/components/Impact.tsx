import Section from "./Section";

const metrics = [
  {
    stat: "Full-Stack",
    label: "End-to-End Delivery",
    description: "From brand-conscious UI to Supabase back end — shipped and deployed on Vercel.",
  },
  {
    stat: "60%",
    label: "Workflow Time Saved",
    description: "Through automation pipelines built with n8n, Zapier, and AI integrations.",
  },
  {
    stat: "AI-First",
    label: "Intelligent Systems",
    description: "GPT and Claude integrated into workflows, tools, and client-facing products.",
  },
];

export default function Impact() {
  return (
    <Section id="impact" title="Impact" subtitle="Outcomes that matter.">
      <div className="grid gap-3 sm:grid-cols-3">
        {metrics.map((m) => (
          <div key={m.label} className="glass-card rounded-2xl p-4 text-center">
            <span className="mb-1 block text-2xl font-extrabold bg-gradient-to-r from-indigo-light to-aqua bg-clip-text text-transparent">
              {m.stat}
            </span>
            <span className="mb-1 block text-sm font-semibold text-white">
              {m.label}
            </span>
            <p className="text-xs leading-relaxed text-slate-400">
              {m.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
