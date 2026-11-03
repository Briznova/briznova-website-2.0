import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero, Reveal, Section, IconTile } from "@/components/sections/primitives";
import { CTASection } from "@/components/sections/CTASection";
import { Icon } from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { SOLUTIONS } from "@/data/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/solutions")({
  head: () => seo({ title: "Solutions", description: "Custom software, SaaS platforms, workflow automation, web and mobile apps, product engineering and technology consulting from BRIZNOVA.", path: "/solutions" }),
  component: Solutions,
});

function Solutions() {
  return (
    <>
      <PageHero eyebrow="Solutions" title="Technology Solutions Designed Around Your Needs." crumbs={[{ label: "Solutions" }]}
        text="Eight areas where we focus our thinking and engineering. Each begins with understanding the problem.">
        <Button asChild variant="brand" size="lg"><Link to="/contact">Discuss your needs <ArrowRight /></Link></Button>
      </PageHero>

      <Section tone="muted" className="py-10 lg:py-12">
        <nav aria-label="Solutions" className="flex flex-wrap gap-2">
          {SOLUTIONS.map((s) => <a key={s.id} href={`#${s.id}`} className="rounded-full border bg-background px-3.5 py-1.5 text-xs font-medium text-midnight hover:border-electric hover:text-primary">{s.title}</a>)}
        </nav>
      </Section>

      <Section className="pt-8 lg:pt-12">
        <div className="space-y-6">
          {SOLUTIONS.map((s, i) => (
            <Reveal key={s.id}>
              <article id={s.id} className="scroll-mt-24 grid gap-8 rounded-2xl border p-7 shadow-soft md:p-10 lg:grid-cols-[1fr_2fr]">
                <div>
                  <span className="font-display text-sm text-electric">{String(i + 1).padStart(2, "0")}</span>
                  <IconTile className="mt-3"><Icon name={s.icon} className="h-5 w-5" /></IconTile>
                  <h2 className="mt-5 text-2xl font-semibold text-midnight">{s.title}</h2>
                  <p className="mt-3 text-muted-foreground">{s.what}</p>
                  <Button asChild variant="link" className="mt-3 px-0"><Link to="/contact">Talk to us about this <ArrowRight /></Link></Button>
                </div>
                <div className="grid gap-6 sm:grid-cols-3">
                  <Col title="Problems it addresses" items={s.problems} />
                  <Col title="Typical applications" items={s.apps} />
                  <div className="rounded-lg bg-ice p-5">
                    <h3 className="eyebrow text-primary">Business value</h3>
                    <p className="mt-3 text-sm font-medium leading-relaxed text-midnight">{s.value}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>
      <CTASection />
    </>
  );
}

function Col({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <div>
      <h3 className="eyebrow text-muted-foreground">{title}</h3>
      <ul className="mt-3 space-y-2 text-sm text-foreground">{items.map((x) => <li key={x} className="border-l-2 border-electric/40 pl-3">{x}</li>)}</ul>
    </div>
  );
}
