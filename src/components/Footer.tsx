export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-500">
      <div className="mx-auto max-w-5xl px-6">
        &copy; AJ Alanano {new Date().getFullYear()}
      </div>
    </footer>
  );
}
