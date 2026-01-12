import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex min-h-screen flex-col text-slate-50">
      {/* Semi-transparent overlay to ensure content readability */}
      <div className="absolute inset-0 bg-[#0a0a0d]/80 backdrop-blur-[1px]" />
      <div className="relative z-10 flex min-h-screen flex-col">
        <Navbar />
        <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-10 px-4 py-10">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}

