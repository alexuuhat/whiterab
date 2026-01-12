export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-black/60">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-slate-400 md:flex-row">
        <p>© {new Date().getFullYear()} White RAB Cybersecurity Agency.</p>
        <p className="text-[0.7rem] uppercase tracking-[0.25em] text-slate-500">
          Red Teaming · Blue Teaming · Purple Teaming
        </p>
      </div>
    </footer>
  );
}

