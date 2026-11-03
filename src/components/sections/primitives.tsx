import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { useEffect, useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import type { Status } from "@/data/site";

export function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) {
          el.dataset["visible"] = "true";
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={cn("reveal", className)} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

export function Section({ children, className, tone = "light", id }: { children: ReactNode; className?: string; tone?: "light" | "muted" | "dark"; id?: string }) {
  return (
    <section
      id={id}
      className={cn(
        "relative py-20 lg:py-28",
        tone === "muted" && "bg-surface",
        tone === "dark" && "overflow-hidden bg-night text-on-dark",
        className,
      )}
    >
      {tone === "dark" && <div className="pointer-events-none absolute inset-0 grid-lines" />}
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">{children}</div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, intro, align = "left", tone = "light" }: { eyebrow?: string; title: ReactNode; intro?: ReactNode; align?: "left" | "center"; tone?: "light" | "dark" }) {
  return (
    <Reveal className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow && <p className={cn("eyebrow", tone === "dark" ? "text-cyan" : "text-primary")}>{eyebrow}</p>}
      <h2 className={cn("mt-3 text-3xl font-semibold leading-tight md:text-4xl", tone === "dark" ? "text-on-dark" : "text-midnight")}>{title}</h2>
      {intro && <p className={cn("mt-4 text-lg leading-relaxed", tone === "dark" ? "text-on-dark-muted" : "text-muted-foreground")}>{intro}</p>}
    </Reveal>
  );
}

export function StatusBadge({ status, tone = "light" }: { status: Status; tone?: "light" | "dark" }) {
  const dot = status === "Available" ? "bg-success" : status === "In development" ? "bg-electric" : "bg-warning";
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-medium",
        tone === "dark" ? "border-line-dark text-on-dark-muted" : "bg-background text-muted-foreground",
      )}
    >
      <span className={cn("h-1.5 w-1.5 rounded-full", dot)} />
      {status === "Planned" ? "Planned capability" : status}
    </span>
  );
}

export type Crumb = { label: string; to?: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs text-on-dark-muted">
      <ol className="flex flex-wrap items-center gap-1.5">
        <li><Link to="/" className="hover:text-on-dark">Home</Link></li>
        {items.map((c) => (
          <li key={c.label} className="flex items-center gap-1.5">
            <ChevronRight className="h-3 w-3" />
            {c.to ? <Link to={c.to} className="hover:text-on-dark">{c.label}</Link> : <span aria-current="page" className="text-on-dark">{c.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHero({ eyebrow, title, text, crumbs, children }: { eyebrow: string; title: ReactNode; text?: ReactNode; crumbs?: Crumb[]; children?: ReactNode }) {
  return (
    <section className="relative overflow-hidden bg-night text-on-dark">
      <div className="pointer-events-none absolute inset-0 grid-lines" />
      <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-electric/20 blur-3xl animate-drift" />
      <div className="relative mx-auto max-w-7xl px-5 pb-20 pt-12 lg:px-8 lg:pb-28 lg:pt-16">
        {crumbs && <Breadcrumbs items={crumbs} />}
        <p className="eyebrow mt-10 text-cyan">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-[1.08] md:text-6xl">{title}</h1>
        {text && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-on-dark-muted">{text}</p>}
        {children && <div className="mt-9 flex flex-wrap gap-3">{children}</div>}
      </div>
    </section>
  );
}

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("rounded-xl border bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift", className)}>
      {children}
    </div>
  );
}

export function IconTile({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("grid h-11 w-11 place-items-center rounded-lg bg-ice text-primary", className)}>{children}</div>;
}
