import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { Clock } from "lucide-react";
import { Breadcrumbs, Section } from "@/components/sections/primitives";
import { ArticleCard, fmtDate } from "@/components/sections/ArticleCard";
import { CTASection } from "@/components/sections/CTASection";
import { ARTICLES } from "@/data/site";

export const Route = createFileRoute("/insights/$slug")({
  loader: ({ params }) => {
    const article = ARTICLES.find((a) => a.slug === params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData, params }) => {
    const a = loaderData?.article;
    const title = a ? `${a.title} — BRIZNOVA Insights` : "Article not found — BRIZNOVA";
    const desc = a?.excerpt ?? "This article could not be found.";
    return {
      meta: [
        { title }, { name: "description", content: desc },
        { property: "og:title", content: title }, { property: "og:description", content: desc },
        { property: "og:type", content: "article" }, { property: "og:url", content: `/insights/${params.slug}` },
        { name: "twitter:card", content: "summary_large_image" },
        ...(a ? [] : [{ name: "robots", content: "noindex" }]),
      ],
      links: [{ rel: "canonical", href: `/insights/${params.slug}` }],
    };
  },
  notFoundComponent: () => (
    <Section><h1 className="text-3xl font-semibold">Article not found</h1><Link to="/insights" className="mt-4 inline-block text-primary">Back to Insights</Link></Section>
  ),
  component: ArticlePage,
});

function ArticlePage() {
  const { article: a } = Route.useLoaderData();
  const related = ARTICLES.filter((x) => x.slug !== a.slug).slice(0, 3);
  return (
    <>
      <section className="relative overflow-hidden bg-night text-on-dark">
        <div className="absolute inset-0 grid-lines" />
        <div className="relative mx-auto max-w-3xl px-5 pb-16 pt-12">
          <Breadcrumbs items={[{ label: "Insights", to: "/insights" }, { label: a.category }]} />
          <p className="mt-10 inline-block rounded-full border border-warning/50 px-2.5 py-0.5 text-[11px] text-warning">Sample editorial content</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">{a.title}</h1>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-on-dark-muted">
            <span>{a.author}</span><span>·</span><time dateTime={a.date}>{fmtDate(a.date)}</time><span>·</span><span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{a.minutes} min read</span>
          </div>
        </div>
      </section>
      <article className="mx-auto max-w-3xl px-5 py-16">
        <p className="text-xl leading-relaxed text-midnight">{a.excerpt}</p>
        {a.body.map((p, i) => <p key={i} className="mt-6 text-lg leading-relaxed text-foreground/85">{p}</p>)}
      </article>
      <Section tone="muted">
        <h2 className="text-2xl font-semibold text-midnight">More insights</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">{related.map((r) => <ArticleCard key={r.slug} a={r} />)}</div>
      </Section>
      <CTASection />
    </>
  );
}
