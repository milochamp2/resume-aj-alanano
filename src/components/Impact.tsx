import Section from "./Section";

const metrics = [
  {
    stat: "3",
    label: "Websites Shipped",
    description: "Client website, analytics dashboards, and personal tools built and deployed.",
  },
  {
    stat: "Fast",
    label: "Build to Deploy",
    description: "From design to production using Next.js + Vercel with clean architecture.",
  },
  {
    stat: "60%",
    label: "Workflow Time Saved",
    description: "Through automation pipelines built with n8n and Zapier integrations.",
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
