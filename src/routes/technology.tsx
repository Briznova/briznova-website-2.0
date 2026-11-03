import { createFileRoute } from "@tanstack/react-router";
import { Boxes, Cloud, Layers3, Plug, MonitorSmartphone, ShieldCheck, RefreshCw, ArrowRight, ArrowDown } from "lucide-react";
import { PageHero, Reveal, Section, SectionHeading } from "@/components/sections/primitives";
import { CTASection } from "@/components/sections/CTASection";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/technology")({
  head: () => seo({ title: "Technology", description: "BRIZNOVA's engineering philosophy: modern architecture, cloud-ready SaaS, API-driven integrations and data protection by design.", path: "/technology" }),
  component: Technology,
});

const PILLARS = [
  { i: Boxes, t: "Modern Software Architecture", d: "Clear separation of concerns, maintainable modules and well-defined boundaries." },
  { i: Cloud, t: "Cloud-Ready Applications", d: "Applications designed to run reliably on modern cloud infrastructure." },
  { i: Layers3, t: "Scalable SaaS Systems", d: "Multi-tenant foundations that can serve many organisations from one platform." },
  { i: Plug, t: "API-Driven Integrations", d: "Interfaces that let systems exchange information cleanly." },
  { i: MonitorSmartphone, t: "Responsive Web & Mobile", d: "Experiences that adapt to every screen people use." },
  { i: ShieldCheck, t: "Data Protection by Design", d: "Access control and privacy considered from the first design decision." },
  { i: RefreshCw, t: "Continuous Development", d: "Small, frequent improvements guided by real feedback." },
];

const LAYERS = ["Users", "Web / Mobile Interface", "Application Layer", "API Layer", "Database / Storage", "Integrations"];

function Technology() {
  return (
    <>
      <PageHero eyebrow="Technology" title="Engineering for What Comes Next." crumbs={[{ label: "Technology" }]}
        text="Our technology philosophy is simple: build on sound foundations, keep systems understandable, and design for growth from the start." />

      <Section>
        <SectionHeading eyebrow="Philosophy" title="Seven principles of how we engineer" />
        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border bg-border md:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p, i) => (
            <div key={p.t} className={i === 0 ? "bg-ice p-7 lg:col-span-2" : "bg-background p-7"}>
              <p.i className="h-5 w-5 text-primary" />
              <h3 className="mt-4 font-semibold text-midnight">{p.t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="dark">
        <SectionHeading tone="dark" eyebrow="Illustrative architecture" title="How a modern platform fits together" intro="A technology-neutral illustration of the layered approach we favour. This is not a description of a deployed production system." />
        <Reveal className="mt-14">
          <ol className="flex flex-col items-stretch gap-3 lg:flex-row lg:items-center">
            {LAYERS.map((l, i) => (
              <li key={l} className="flex flex-col items-center gap-3 lg:flex-1 lg:flex-row">
                <div className="w-full rounded-lg border border-electric/40 bg-electric/10 px-4 py-5 text-center shadow-glow">
                  <span className="block font-display text-xs text-cyan">L{i + 1}</span>
                  <span className="mt-1 block text-sm font-semibold">{l}</span>
                </div>
                {i < LAYERS.length - 1 && (<><ArrowDown className="h-4 w-4 text-cyan lg:hidden" /><ArrowRight className="hidden h-4 w-4 shrink-0 text-cyan lg:block" /></>)}
              </li>
            ))}
          </ol>
          <p className="mt-6 text-center text-xs uppercase tracking-wider text-on-dark-muted">Illustrative diagram · technology-neutral</p>
        </Reveal>
      </Section>
      <CTASection />
    </>
  );
}
