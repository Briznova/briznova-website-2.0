import { Link } from "@tanstack/react-router";
import { Mail } from "lucide-react";
import { FOOTER_COLUMNS, SITE } from "@/data/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy text-on-dark">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-40" />
      <div className="relative mx-auto max-w-7xl px-5 pb-10 pt-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Logo tone="light" />
            <p className="mt-4 font-display text-on-dark">{SITE.tagline}</p>
            <p className="mt-2 max-w-xs text-sm text-on-dark-muted">
              Building thoughtful technology solutions and digital products for a connected future.
            </p>
            <a href={`mailto:${SITE.email}`} className="mt-5 inline-flex items-center gap-2 text-sm text-cyan hover:underline">
              <Mail className="h-4 w-4" /> {SITE.email}
            </a>
          </div>
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="eyebrow text-on-dark-muted">{col.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="text-sm text-on-dark/85 transition-colors hover:text-cyan">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col gap-3 border-t border-line-dark pt-6 text-xs text-on-dark-muted md:flex-row md:justify-between">
          <p>© 2026 BRIZNOVA. All rights reserved.</p>
          <p>BRIZNOVA Technologies Private Limited — proposed name. Registration details to be added once confirmed.</p>
        </div>
      </div>
    </footer>
  );
}
