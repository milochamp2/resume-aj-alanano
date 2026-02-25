import SectionReveal from "./SectionReveal";

interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({
  id,
  title,
  subtitle,
  children,
  className = "",
}: SectionProps) {
  return (
    <section id={id} className={`py-10 md:py-14 ${className}`}>
      <div className="mx-auto max-w-5xl px-6">
        <SectionReveal>
          {title && (
            <div className="mb-6 text-center">
              <h2 className="text-2xl font-bold text-white md:text-3xl">
                {title}
              </h2>
              {subtitle && (
                <p className="mt-1.5 text-base text-slate-400">{subtitle}</p>
              )}
            </div>
          )}
          {children}
        </SectionReveal>
      </div>
    </section>
  );
}
