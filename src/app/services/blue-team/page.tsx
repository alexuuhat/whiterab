import { PageShell } from "@/components/PageShell";

export default function BlueTeamPage() {
  return (
    <PageShell>
      <section className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-300">
          Blue Teaming
        </p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Detection Engineering & Response Readiness
        </h1>
        <p className="max-w-2xl text-sm text-slate-300">
          White RAB&apos;s Blue Team services are built to uplift your
          monitoring, detection, and incident response capabilities so that{" "}
          you can see, understand, and contain attacks before they become
          business events.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <div className="space-y-4 text-sm text-slate-200">
          <h2 className="text-base font-semibold text-blue-200">
            Areas of Focus
          </h2>
          <ul className="space-y-2 text-xs text-slate-300">
            <li>
              • SOC architecture reviews and tuning of SIEM, EDR, and log
              pipelines.
            </li>
            <li>
              • Use-case development and detection rules mapped to MITRE ATT&CK.
            </li>
            <li>
              • Threat hunting engagements to identify stealthy activity and
              telemetry gaps.
            </li>
            <li>
              • Incident response runbooks, playbooks, and tabletop exercises.
            </li>
          </ul>
        </div>

        <aside className="space-y-3 rounded-2xl border border-blue-500/40 bg-gradient-to-b from-blue-950/60 to-slate-950/60 p-4 text-xs text-slate-200 shadow-lg shadow-blue-900/40">
          <h3 className="text-sm font-semibold text-blue-100">
            Outcomes We Target
          </h3>
          <ul className="space-y-1 text-[0.7rem] text-slate-200">
            <li>• Reduced mean-time-to-detect (MTTD) and respond (MTTR)</li>
            <li>• Higher signal-to-noise ratio in analyst queues</li>
            <li>• Clear containment and escalation paths for major incidents</li>
            <li>• Evidence-backed improvements in security monitoring</li>
          </ul>
        </aside>
      </section>
    </PageShell>
  );
}

