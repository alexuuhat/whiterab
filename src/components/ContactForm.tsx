"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [service, setService] = useState("Red Teaming");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, company, service, message })
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as
          | { error?: string }
          | null;
        throw new Error(data?.error || "Something went wrong.");
      }

      setStatus("success");
      setName("");
      setEmail("");
      setCompany("");
      setService("Red Teaming");
      setMessage("");
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error ? err.message : "Unable to send your message."
      );
    }
  }

  const isSubmitting = status === "submitting";

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-950/80 to-slate-950/40 p-4 text-sm shadow-lg shadow-black/40"
    >
      <div className="grid gap-3 md:grid-cols-2">
        <div className="space-y-1">
          <label className="text-xs text-slate-300" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-md border border-slate-700 bg-slate-950/80 px-3 py-2 text-xs text-slate-100 outline-none ring-primary-500/30 focus:border-primary-400 focus:ring"
            placeholder="Your full name"
          />
        </div>
        <div className="space-y-1">
          <label className="text-xs text-slate-300" htmlFor="email">
            Work Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-md border border-slate-700 bg-slate-950/80 px-3 py-2 text-xs text-slate-100 outline-none ring-primary-500/30 focus:border-primary-400 focus:ring"
            placeholder="you@company.com"
          />
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        <div className="space-y-1">
          <label className="text-xs text-slate-300" htmlFor="company">
            Organization
          </label>
          <input
            id="company"
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="w-full rounded-md border border-slate-700 bg-slate-950/80 px-3 py-2 text-xs text-slate-100 outline-none ring-primary-500/30 focus:border-primary-400 focus:ring"
            placeholder="Company or team name"
          />
        </div>
        <div className="space-y-1">
          <label className="text-xs text-slate-300" htmlFor="service">
            Primary Interest
          </label>
          <select
            id="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full rounded-md border border-slate-700 bg-slate-950/80 px-3 py-2 text-xs text-slate-100 outline-none ring-primary-500/30 focus:border-primary-400 focus:ring"
          >
            <option>Red Teaming</option>
            <option>Blue Teaming</option>
            <option>Purple Teaming</option>
            <option>Not sure yet</option>
          </select>
        </div>
      </div>

      <div className="space-y-1">
        <label className="text-xs text-slate-300" htmlFor="message">
          Context
        </label>
        <textarea
          id="message"
          rows={4}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full rounded-md border border-slate-700 bg-slate-950/80 px-3 py-2 text-xs text-slate-100 outline-none ring-primary-500/30 focus:border-primary-400 focus:ring"
          placeholder="Briefly describe your environment, current concerns, and timelines."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-lg bg-primary-500 px-5 py-2 text-xs font-medium text-slate-950 shadow-lg shadow-cyan-500/40 transition hover:bg-primary-400 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? "Sending..." : "Send request"}
      </button>

      {status === "success" && (
        <p className="text-[0.7rem] text-emerald-400">
          Thank you. Your message has been sent.
        </p>
      )}
      {status === "error" && (
        <p className="text-[0.7rem] text-red-400">
          {error || "Something went wrong. Please try again later."}
        </p>
      )}
      {status === "idle" && (
        <p className="text-[0.7rem] text-slate-500">
          Messages are delivered to the configured White RAB inbox.
        </p>
      )}
    </form>
  );
}

