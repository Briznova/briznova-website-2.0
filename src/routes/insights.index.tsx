import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, Section } from "@/components/sections/primitives";
import { ArticleCard } from "@/components/sections/ArticleCard";
import { ARTICLES, INSIGHT_CATEGORIES } from "@/data/site";
import { cn } from "@/lib/utils";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/insights/")({
  head: () => seo({ title: "Insights", description: "Perspectives from BRIZNOVA on technology, education technology, SaaS, digital transformation and business automation.", path: "/insights" }),
  component: Insights,
});

function Insights() {
  const [cat, setCat] = useState<string>("All");
  const list = cat === "All" ? ARTICLES : ARTICLES.filter((a) => a.category === cat);
  const [featured, ...rest] = list;
  return (
    <>
      <PageHero eyebrow="Insights" title="Thinking on technology, products and progress." crumbs={[{ label: "Insights" }]}
        text="Articles shown here are clearly labelled sample editorial content while our publication is being prepared." />
      <Section className="pt-12 lg:pt-16">
        <div role="toolbar" aria-label="Filter by category" className="flex flex-wrap gap-2">
          {["All", ...INSIGHT_CATEGORIES].map((c) => (
            <button key={c} onClick={() => setCat(c)} aria-pressed={cat === c}
              className={cn("rounded-full border px-4 py-1.5 text-sm transition-colors", cat === c ? "border-primary bg-primary text-primary-foreground" : "hover:border-electric")}>{c}</button>
          ))}
        </div>
        {featured ? (
          <>
            <div className="mt-10"><ArticleCard a={featured} featured /></div>
            <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{rest.map((a) => <ArticleCard key={a.slug} a={a} />)}</div>
          </>
        ) : <p className="mt-10 text-muted-foreground">No articles in this category yet.</p>}
      </Section>
    </>
  );
}
