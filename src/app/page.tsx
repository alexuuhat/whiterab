import Link from "next/link";
import { PageShell } from "@/components/PageShell";

const services = [
  {
    name: "Red Teaming",
    href: "/services/red-team",
    color: "from-accent-red/80 via-amber-500/80 to-primary-500/80",
    description:
      "Simulated, intelligence-led attacks that stress-test your people, processes, and technology.",
    bulletPoints: [
      "Adversary emulation & full kill-chain campaigns",
      "Social engineering & physical intrusion",
      "Cloud, network, and application penetration testing"
    ]
  },
  {
    name: "Blue Teaming",
    href: "/services/blue-team",
    color: "from-accent-blue via-primary-500 to-emerald-400",
    description:
      "Detection engineering, incident response readiness, and defensive architecture.",
    bulletPoints: [
      "SOC hardening & playbook development",
      "Threat hunting & log telemetry design",
      "Incident response exercises & tabletop simulations"
    ]
  },
  {
    name: "Purple Teaming",
    href: "/services/purple-team",
    color: "from-accent-purple via-primary-500 to-accent-blue",
    description:
      "Collaborative attack–defense engagements that turn findings into measurable control improvements.",
    bulletPoints: [
      "MITRE ATT&CK-aligned test plans",
      "Detection gap analysis and tuning",
      "Metrics, reporting, and executive-ready narratives"
    ]
  }
];

export default function HomePage() {
  return (
    <PageShell>
      <section className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-center">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-300">
            Cybersecurity Agency
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            White <span className="text-primary-400">RAB</span>
          </h1>
          <p className="max-w-xl text-sm text-slate-300 sm:text-base">
            White RAB is a full-spectrum cybersecurity agency delivering{" "}
            <span className="font-semibold text-primary-200">
              Red, Blue, and Purple Teaming
            </span>{" "}
            services. We emulate real-world adversaries, harden your defenses,
            and align both to your business risk.
          </p>
          <div className="flex flex-wrap gap-3 text-xs">
            <span className="rounded-full border border-primary-500/60 bg-primary-950/60 px-3 py-1 text-primary-100">
              Adversary Emulation
            </span>
            <span className="rounded-full border border-accent-blue/60 bg-slate-950/60 px-3 py-1 text-blue-100">
              Threat Detection & Response
            </span>
            <span className="rounded-full border border-accent-purple/60 bg-slate-950/60 px-3 py-1 text-purple-100">
              Purple Team Collaboration
            </span>
          </div>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/contact"
              className="rounded-lg bg-primary-500 px-5 py-2.5 text-sm font-medium text-slate-950 shadow-lg shadow-cyan-500/40 transition hover:bg-primary-400"
            >
              Request an Engagement
            </Link>
            <Link
              href="/services"
              className="rounded-lg border border-slate-700 bg-black/40 px-5 py-2.5 text-sm font-medium text-slate-100 transition hover:border-primary-400/80 hover:text-primary-100"
            >
              Explore Services
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="pointer-events-none absolute -inset-12 bg-[radial-gradient(circle_at_top,_#22d3ee22,_transparent_60%),radial-gradient(circle_at_bottom,_#a855f722,_transparent_60%)]" />
          <div className="relative rounded-3xl border border-slate-800/80 bg-gradient-to-b from-slate-950/80 to-slate-950/40 p-5 shadow-xl shadow-black/60">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
              Full Deployment Agency
            </p>
            <p className="mt-2 text-sm text-slate-300">
              Designed for organizations that need to validate and mature their
              security program from first compromise to executive reporting.
            </p>
            <ul className="mt-4 space-y-2 text-xs text-slate-300">
              <li>• End-to-end adversary emulation campaigns</li>
              <li>• 24x7 blue team advisory & tuning cycles</li>
              <li>• Purple team programs mapped to MITRE ATT&CK</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-lg font-semibold tracking-tight sm:text-xl">
            Full-Spectrum Cyber Operations
          </h2>
          <Link
            href="/services"
            className="hidden text-xs font-medium text-primary-300 underline-offset-4 hover:underline md:inline"
          >
            View all services
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.name}
              href={service.href}
              className="group flex flex-col rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-950/80 to-slate-950/40 p-4 text-sm shadow-lg shadow-black/40 transition hover:border-primary-400/70 hover:shadow-primary-500/30"
            >
              <div
                className={`mb-3 h-1.5 w-14 rounded-full bg-gradient-to-r ${service.color}`}
              />
              <h3 className="text-base font-semibold text-slate-50">
                {service.name}
              </h3>
              <p className="mt-2 text-xs text-slate-300">
                {service.description}
              </p>
              <ul className="mt-3 space-y-1 text-[0.7rem] text-slate-400">
                {service.bulletPoints.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
              <span className="mt-3 text-[0.7rem] font-medium text-primary-300">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

