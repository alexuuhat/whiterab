import Link from "next/link";
import { PageShell } from "@/components/PageShell";

export default function ServicesPage() {
  return (
    <PageShell>
      <section className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-300">
          Services
        </p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Red, Blue & Purple Teaming
        </h1>
        <p className="max-w-2xl text-sm text-slate-300">
          White RAB delivers a full deployment cybersecurity capability:
          offensive security to reveal true risk, defensive programs to detect
          and respond, and collaborative purple teaming to close the loop.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <Link
          href="/services/red-team"
          className="flex flex-col rounded-2xl border border-red-500/40 bg-gradient-to-b from-red-950/60 to-slate-950/60 p-4 text-sm shadow-lg shadow-red-900/40 transition hover:border-red-400 hover:shadow-red-500/40"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-300">
            Red Teaming
          </p>
          <h2 className="mt-2 text-base font-semibold text-slate-50">
            Adversary Emulation
          </h2>
          <p className="mt-2 text-xs text-slate-300">
            Realistic attack campaigns that map to modern threat actors,
            executed end-to-end across your environment.
          </p>
        </Link>

        <Link
          href="/services/blue-team"
          className="flex flex-col rounded-2xl border border-blue-500/40 bg-gradient-to-b from-blue-950/60 to-slate-950/60 p-4 text-sm shadow-lg shadow-blue-900/40 transition hover:border-blue-400 hover:shadow-blue-500/40"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-300">
            Blue Teaming
          </p>
          <h2 className="mt-2 text-base font-semibold text-slate-50">
            Detection & Response
          </h2>
          <p className="mt-2 text-xs text-slate-300">
            Design and tune your SOC, detection content, and incident response
            playbooks around real-world threats.
          </p>
        </Link>

        <Link
          href="/services/purple-team"
          className="flex flex-col rounded-2xl border border-purple-500/40 bg-gradient-to-b from-purple-950/60 to-slate-950/60 p-4 text-sm shadow-lg shadow-purple-900/40 transition hover:border-purple-400 hover:shadow-purple-500/40"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-300">
            Purple Teaming
          </p>
          <h2 className="mt-2 text-base font-semibold text-slate-50">
            Collaborative Cyber Exercises
          </h2>
          <p className="mt-2 text-xs text-slate-300">
            Work side-by-side with our operators to validate and mature your
            security controls in structured exercises.
          </p>
        </Link>
      </section>
    </PageShell>
  );
}

