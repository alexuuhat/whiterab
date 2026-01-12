import { PageShell } from "@/components/PageShell";

export default function PurpleTeamPage() {
  return (
    <PageShell>
      <section className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-300">
          Purple Teaming
        </p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Collaborative Attack–Defense Programs
        </h1>
        <p className="max-w-2xl text-sm text-slate-300">
          White RAB&apos;s Purple Team brings offensive and defensive experts
          into the same room, running structured test plans that directly
          strengthen your controls, detections, and incident playbooks.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <div className="space-y-4 text-sm text-slate-200">
          <h2 className="text-base font-semibold text-purple-200">
            How Purple Teaming Works
          </h2>
          <ul className="space-y-2 text-xs text-slate-300">
            <li>
              • Co-designed test plans aligned to ATT&CK techniques and your top
              risks.
            </li>
            <li>
              • Iterative attack simulations with live feedback to your SOC and
              engineering teams.
            </li>
            <li>
              • Joint tuning of rules, alerts, and automation to close detection
              gaps.
            </li>
            <li>
              • Metrics and reporting that speak clearly to both technical and
              executive stakeholders.
            </li>
          </ul>
        </div>

        <aside className="space-y-3 rounded-2xl border border-purple-500/40 bg-gradient-to-b from-purple-950/60 to-slate-950/60 p-4 text-xs text-slate-200 shadow-lg shadow-purple-900/40">
          <h3 className="text-sm font-semibold text-purple-100">
            Ideal For Organizations That
          </h3>
          <ul className="space-y-1 text-[0.7rem] text-slate-200">
            <li>• Already operate basic red and blue capabilities</li>
            <li>• Need measurable improvements in control effectiveness</li>
            <li>• Want to build a continuous validation program</li>
            <li>• Must demonstrate security value to leadership</li>
          </ul>
        </aside>
      </section>
    </PageShell>
  );
}

