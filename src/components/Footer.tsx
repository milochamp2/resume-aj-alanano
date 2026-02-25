export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-6 text-center">
      <div className="mx-auto max-w-5xl px-6">
        <p className="mb-2 text-xs italic text-slate-500">
          &ldquo;I believe software should feel fast, intuitive, and quietly
          powerful.&rdquo;
        </p>
        <p className="text-xs text-slate-600">
          &copy; AJ Alanano {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
