export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[90vh] items-center overflow-hidden pt-16"
    >
      {/* Animated gradient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="animate-gradient-drift absolute left-1/2 top-1/3 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo/20 blur-[140px]" />
        <div className="animate-gradient-drift-reverse absolute right-1/4 top-1/2 h-[360px] w-[360px] rounded-full bg-aqua/10 blur-[120px]" />
        <div className="animate-gradient-drift absolute bottom-1/4 left-1/4 h-[280px] w-[280px] rounded-full bg-indigo/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        {/* Meta badges */}
        <div className="mb-6 flex flex-wrap items-center justify-center gap-3">
          <span className="glass inline-flex items-center gap-1.5 rounded-full border-aqua/20 px-3 py-1 text-xs font-medium text-aqua">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-aqua animate-pulse" />
            Available for freelance &amp; collaborations
          </span>
          <span className="glass inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium text-slate-400">
            Based in Australia
          </span>
          <span className="glass inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium text-slate-400">
            Next.js + AI Integrations
          </span>
        </div>

        <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
          AJ Alanano{" "}
          <span className="bg-gradient-to-r from-indigo-light to-aqua bg-clip-text text-transparent">
            — Web Developer
          </span>
          <br />
          <span className="text-slate-400">(Vibe Coder)</span>
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
          I build modern SaaS foundations and automation-first systems that help
          startups ship faster and scale smarter.
        </p>

        <p className="mx-auto mt-3 max-w-xl text-base text-slate-400">
          Clean UI. Fast builds. Scalable foundations. Modern web architecture,
          strong branding, and intelligent automation that moves businesses
          forward.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:alananoaj@gmail.com"
            className="btn-glow relative z-10 rounded-2xl bg-indigo/90 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-indigo-light hover:shadow-lg hover:shadow-indigo/25"
          >
            Start a Project
          </a>
          <a
            href="https://www.linkedin.com/in/alananoaj7/"
            target="_blank"
            rel="noopener noreferrer"
            className="glass rounded-2xl px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/milochamp2"
            target="_blank"
            rel="noopener noreferrer"
            className="glass rounded-2xl px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
