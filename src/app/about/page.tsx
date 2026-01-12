import { PageShell } from "@/components/PageShell";

export default function AboutPage() {
  return (
    <PageShell>
      <section className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-300">
          About White RAB
        </p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Full Deployment Cybersecurity Agency
        </h1>
        <p className="max-w-2xl text-sm text-slate-300">
          White RAB was founded by operators who have worked on both sides of
          the incident. We exist to help security leaders understand how real
          adversaries operate, and to build programs that can withstand them.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="space-y-3 text-sm text-slate-200">
          <h2 className="text-base font-semibold text-slate-100">
            Our Approach
          </h2>
          <p className="text-xs text-slate-300">
            We don&apos;t just hand over reports. Every engagement is designed
            to be a catalyst for capability building—across technology,
            process, and people.
          </p>
          <ul className="space-y-2 text-xs text-slate-300">
            <li>• Threat-informed, risk-aligned planning for each engagement.</li>
            <li>
              • Direct collaboration between our red, blue, and purple operators
              and your internal teams.
            </li>
            <li>• Clear, prioritized recommendations and roadmaps.</li>
            <li>
              • Executive-ready narratives that connect technical detail to
              business impact.
            </li>
          </ul>
        </div>

        <div className="space-y-3 rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-950/80 to-slate-950/40 p-4 text-xs text-slate-200 shadow-lg shadow-black/40">
          <h3 className="text-sm font-semibold text-primary-100">
            Where We Fit
          </h3>
          <p className="text-xs text-slate-300">
            White RAB is a force multiplier for security teams that need to
            validate, mature, or communicate their security posture under
            pressure from real threats and real stakeholders.
          </p>
          <ul className="mt-2 space-y-1 text-[0.7rem] text-slate-200">
            <li>• CISOs needing evidence for board and regulator discussions</li>
            <li>• Security teams building or scaling detection programs</li>
            <li>• Cloud and infrastructure owners validating architectures</li>
            <li>• Product teams protecting critical digital services</li>
          </ul>
        </div>
      </section>
    </PageShell>
  );
}

