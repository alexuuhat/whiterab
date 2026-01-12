import { PageShell } from "@/components/PageShell";

export default function RedTeamPage() {
  return (
    <PageShell>
      <section className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-red-300">
          Red Teaming
        </p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Adversary Emulation & Offensive Security
        </h1>
        <p className="max-w-2xl text-sm text-slate-300">
          White RAB&apos;s Red Team replicates determined, well-resourced
          attackers to reveal how an incident would unfold in your specific
          environment—from initial foothold to impact on critical assets.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <div className="space-y-4 text-sm text-slate-200">
          <h2 className="text-base font-semibold text-red-200">
            What We Deliver
          </h2>
          <ul className="space-y-2 text-xs text-slate-300">
            <li>
              • Intelligence-led, scenario-driven campaigns mapped to realistic
              threat actors.
            </li>
            <li>
              • Full kill-chain operations: reconnaissance, initial access,
              lateral movement, privilege escalation, and impact.
            </li>
            <li>
              • Cloud, on-prem, and hybrid infrastructure testing with focus on
              misconfigurations and identity weaknesses.
            </li>
            <li>
              • Social engineering and phishing simulations tailored to your
              workforce and processes.
            </li>
          </ul>
        </div>

        <aside className="space-y-3 rounded-2xl border border-red-500/40 bg-gradient-to-b from-red-950/60 to-slate-950/60 p-4 text-xs text-slate-200 shadow-lg shadow-red-900/40">
          <h3 className="text-sm font-semibold text-red-100">
            Typical Objectives
          </h3>
          <ul className="space-y-1 text-[0.7rem] text-slate-200">
            <li>• Test your ability to detect and respond to stealthy attacks</li>
            <li>• Validate segmentation, identity, and endpoint controls</li>
            <li>• Assess resilience of critical business processes</li>
            <li>• Provide clear findings with prioritized remediation</li>
          </ul>
        </aside>
      </section>
    </PageShell>
  );
}

