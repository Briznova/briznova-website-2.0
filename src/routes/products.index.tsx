import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { PageHero, Reveal, Section, SectionHeading, StatusBadge, IconTile } from "@/components/sections/primitives";
import { DashboardMockup } from "@/components/sections/DashboardMockup";
import { DashifyWordmark } from "@/components/layout/Logo";
import { Icon } from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { DASHIFY_FEATURES } from "@/data/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/products/")({
  head: () => seo({ title: "Products", description: "The BRIZNOVA product ecosystem, led by DASHIFY — a school management platform in development for private schools.", path: "/products" }),
  component: Products,
});

function Products() {
  return (
    <>
      <PageHero eyebrow="Products" title="Products That Solve Real Problems." crumbs={[{ label: "Products" }]}
        text="We believe meaningful technology begins with understanding the people and processes it serves." />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <Reveal>
            <p className="eyebrow text-primary">Flagship product</p>
            <DashifyWordmark className="mt-4 text-3xl" />
            <p className="mt-2 text-sm text-muted-foreground">School Management Software · Education SaaS</p>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              DASHIFY is a school management platform being developed to help private schools simplify administrative operations, manage essential information and bring everyday workflows into one connected system.
            </p>
            <div className="mt-6 flex flex-wrap gap-2"><StatusBadge status="Available" /><StatusBadge status="In development" /><StatusBadge status="Planned" /></div>
            <p className="mt-2 text-xs text-muted-foreground">Each capability below is labelled with its current status.</p>
          </Reveal>
          <Reveal delay={120}><DashboardMockup /></Reveal>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="DASHIFY capabilities" title="Seven connected areas of school administration" />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {DASHIFY_FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 80}>
              <div className="h-full rounded-xl border bg-card p-7 shadow-soft">
                <div className="flex items-start justify-between gap-3"><IconTile><Icon name={f.icon} className="h-5 w-5" /></IconTile><StatusBadge status={f.status} /></div>
                <h3 className="mt-5 text-lg font-semibold text-midnight">{f.title}</h3>
                <ul className="mt-3 space-y-1.5">{f.points.map((p) => <li key={p} className="flex gap-2 text-sm text-muted-foreground"><Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />{p}</li>)}</ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <Reveal className="rounded-2xl border bg-ice p-10 text-center md:p-14">
          <h2 className="text-3xl font-semibold text-midnight">Bring your school's essential workflows together.</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild variant="brand" size="lg"><Link to="/products/dashify">Discover DASHIFY <ArrowRight /></Link></Button>
            <Button asChild variant="outline" size="lg"><Link to="/products/dashify" hash="demo">Request a Demo</Link></Button>
          </div>
        </Reveal>
        <p className="mt-10 text-center text-sm text-muted-foreground">More BRIZNOVA products will be introduced here as they take shape.</p>
      </Section>
    </>
  );
}
