import { PageShell } from "@/components/PageShell";
import { ContactForm } from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <PageShell>
      <section className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-300">
          Contact
        </p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Engage White RAB
        </h1>
        <p className="max-w-2xl text-sm text-slate-300">
          Share a few details about your security program and current
          priorities. We&apos;ll follow up with you to shape a Red, Blue, or
          Purple teaming engagement that fits your environment.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
        <ContactForm />
        <aside className="space-y-3 text-xs text-slate-300">
          <h2 className="text-sm font-semibold text-slate-100">
            Engagement Models
          </h2>
          <ul className="space-y-1 text-[0.7rem] text-slate-300">
            <li>• Point-in-time assessments and red team campaigns</li>
            <li>• Quarterly purple team programs</li>
            <li>• Ongoing blue team advisory and detection engineering</li>
          </ul>
          <p className="mt-2 text-[0.7rem] text-slate-400">
            We typically start with a short scoping call to align on your goals,
            risks, and timelines before proposing an engagement.
          </p>
        </aside>
      </section>
    </PageShell>
  );
}

