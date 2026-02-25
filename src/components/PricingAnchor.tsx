import Section from "./Section";

const BOOKING_URL = "https://calendly.com/alananoaj/mvp-call";

export default function PricingAnchor() {
  return (
    <Section id="pricing" title="Investment" subtitle="Custom based on scope.">
      <div className="mx-auto max-w-md text-center">
        <div className="glass-card rounded-2xl p-6">
          <p className="text-sm font-medium uppercase tracking-widest text-aqua">
            Premium Launch System
          </p>
          <p className="mt-3 text-4xl font-extrabold text-white">
            $2,000 <span className="text-lg font-medium text-slate-400">USD</span>
          </p>
          <p className="mt-1 text-sm text-slate-400">Starting price</p>
          <ul className="mt-5 space-y-2 text-left text-sm text-slate-300">
            <li className="flex items-start gap-2"><span className="text-aqua">✓</span>Custom landing page design</li>
            <li className="flex items-start gap-2"><span className="text-aqua">✓</span>Automation & workflow setup</li>
            <li className="flex items-start gap-2"><span className="text-aqua">✓</span>AI integration where applicable</li>
            <li className="flex items-start gap-2"><span className="text-aqua">✓</span>Launch support & handoff</li>
          </ul>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow relative mt-6 inline-block rounded-full bg-indigo px-6 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-105"
          >
            Book a Strategy Call
          </a>
        </div>
      </div>
    </Section>
  );
}
