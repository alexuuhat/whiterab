import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/services/red-team", label: "Red Teaming" },
  { href: "/services/blue-team", label: "Blue Teaming" },
  { href: "/services/purple-team", label: "Purple Teaming" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-800 bg-black/40 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          {/* Minimal merged WR monogram inside cyber shield */}
          <div className="flex h-10 w-10 items-center justify-center text-primary-200">
            <svg
              viewBox="0 0 32 32"
              aria-hidden="true"
              className="h-10 w-10 drop-shadow-[0_0_12px_rgba(34,211,238,0.6)]"
            >
              {/* Shield outline */}
              <path
                d="M16 3.5 8.8 6.3v7.3c0 4.5 2.7 8.5 7.2 10.3 4.5-1.8 7.2-5.8 7.2-10.3V6.3L16 3.5Z"
                className="fill-slate-950 stroke-primary-400/80"
                strokeWidth="1.4"
              />
              {/* Inner glow line */}
              <path
                d="M16 5.2 10.4 7.4v6.2c0 3.6 2.1 6.8 5.6 8.3 3.5-1.5 5.6-4.7 5.6-8.3V7.4L16 5.2Z"
                className="fill-none stroke-primary-300/35"
                strokeWidth="1"
              />
              {/* Merged WR monogram */}
              <path
                d="M10.6 13.6 12.3 19l1.6-3.1 1.6 3.1 1.6-5.4"
                className="fill-none stroke-primary-200"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.1 13.8h2.3c1.1 0 2 .8 2 1.9 0 1.1-.9 1.9-2 1.9h-1.3L21 19.5"
                className="fill-none stroke-primary-200"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="leading-tight">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.32em] text-primary-300">
              CYBER SECURITY
            </p>
            <p className="text-lg font-bold tracking-wide">
              <span className="text-slate-50">White</span>
              <span className="text-primary-300">RAB</span>
            </p>
          </div>
        </Link>
        <nav className="hidden gap-4 text-sm font-medium text-slate-200 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-1 transition hover:bg-slate-900 hover:text-primary-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

