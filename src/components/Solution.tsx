import Section from "./Section";

const leftItems = [
  "Brand-conscious landing pages",
  "Clean, modern UI/UX",
  "Mobile-first responsive design",
  "SEO-optimized structure",
  "Fast load performance",
];

const rightItems = [
  "n8n / Zapier workflow automation",
  "AI integrations (GPT / Claude)",
  "Lead capture & follow-up systems",
  "CRM & email automation",
  "Webhook-driven pipelines",
];

export default function Solution() {
  return (
    <Section
      id="solution"
      title="The Premium Launch System"
      subtitle="You don't just get a website. You get Design + System + Structure."
    >
      <div className="grid gap-4 md:grid-cols-2">
        <div className="glass-card rounded-2xl p-5">
          <div className="mb-3 flex items-center gap-2">
            <svg className="h-5 w-5 text-indigo-light" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
            </svg>
            <h3 className="text-lg font-semibold text-white">Premium UI</h3>
          </div>
          <ul className="space-y-2">
            {leftItems.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-slate-300">
                <span className="mt-1 text-aqua">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="glass-card rounded-2xl p-5">
          <div className="mb-3 flex items-center gap-2">
            <svg className="h-5 w-5 text-aqua" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <h3 className="text-lg font-semibold text-white">Automation &amp; Workflow</h3>
          </div>
          <ul className="space-y-2">
            {rightItems.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-slate-300">
                <span className="mt-1 text-aqua">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
