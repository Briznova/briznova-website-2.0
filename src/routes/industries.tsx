import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHero, Reveal, Section, IconTile } from "@/components/sections/primitives";
import { CTASection } from "@/components/sections/CTASection";
import { Icon } from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { INDUSTRIES } from "@/data/site";
import { cn } from "@/lib/utils";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/industries")({
  head: () => seo({ title: "Industries", description: "Technology for education, small and medium businesses, professional organisations and digital-first enterprises.", path: "/industries" }),
  component: Industries,
});

function Industries() {
  return (
    <>
      <PageHero eyebrow="Industries" title="Technology for Different Ways of Working." crumbs={[{ label: "Industries" }]}
        text="Education is our initial focus through DASHIFY. Our approach applies wherever organisations rely on everyday operational workflows." />
      <Section>
        <div className="space-y-6">
          {INDUSTRIES.map((ind) => (
            <Reveal key={ind.id}>
              <article id={ind.id} className={cn("grid gap-8 rounded-2xl border p-7 md:p-10 lg:grid-cols-[1fr_2fr]", ind.id === "education" ? "border-electric/40 bg-ice" : "shadow-soft")}>
                <div>
                  <IconTile className={ind.id === "education" ? "bg-primary text-primary-foreground" : ""}><Icon name={ind.icon} className="h-5 w-5" /></IconTile>
                  {ind.id === "education" && <p className="eyebrow mt-5 text-primary">Primary focus</p>}
                  <h2 className="mt-3 text-2xl font-semibold text-midnight">{ind.title}</h2>
                  <p className="mt-2 text-muted-foreground">{ind.summary}</p>
                  {ind.id === "education" && <Button asChild variant="brand" className="mt-5"><Link to="/products/dashify">Explore DASHIFY <ArrowRight /></Link></Button>}
                </div>
                <div className="grid gap-6 sm:grid-cols-3">
                  {([["Challenges", ind.challenges], ["Digital opportunities", ind.opportunities], ["Potential solutions", ind.solutions]] as const).map(([t, items]) => (
                    <div key={t}><h3 className="eyebrow text-muted-foreground">{t}</h3>
                      <ul className="mt-3 space-y-2 text-sm">{items.map((x) => <li key={x} className="border-l-2 border-electric/40 pl-3">{x}</li>)}</ul></div>
                  ))}
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
