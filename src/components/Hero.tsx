export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-20"
    >
      {/* Gradient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo/20 blur-[120px]" />
        <div className="absolute right-1/4 top-1/2 h-[320px] w-[320px] rounded-full bg-aqua/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        {/* Badge */}
        <span className="mb-6 inline-block rounded-full border border-aqua/30 bg-aqua/10 px-4 py-1.5 text-xs font-medium text-aqua">
          Available for side projects
        </span>

        <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
          AJ Alanano{" "}
          <span className="bg-gradient-to-r from-indigo-light to-aqua bg-clip-text text-transparent">
            — Web Developer
          </span>
          <br />
          <span className="text-slate-400">(Vibe Coder)</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
          I build modern Next.js applications, high-converting landing pages,
          and automation-first systems using Supabase, n8n/Zapier, and AI (GPT +
          Claude).
        </p>

        <p className="mx-auto mt-4 max-w-xl text-base text-slate-400">
          Clean UI. Fast builds. Scalable foundations. I focus on modern web
          architecture, strong branding, and intelligent automation systems that
          help businesses move faster.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:alananoaj@gmail.com"
            className="rounded-2xl bg-indigo px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-light"
          >
            Contact Me
          </a>
          <a
            href="https://www.linkedin.com/in/alananoaj7/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/milochamp2"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
