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
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      <div className="mx-auto max-w-5xl px-6">
        {title && (
          <div className="mb-14 text-center">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-3 text-lg text-slate-400">{subtitle}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
