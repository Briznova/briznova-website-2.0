import { Link } from "@tanstack/react-router";
import { Clock } from "lucide-react";
import type { Article } from "@/data/site";
import { cn } from "@/lib/utils";

export const fmtDate = (d: string) => new Date(d).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });

export function ArticleCard({ a, featured }: { a: Article; featured?: boolean }) {
  return (
    <Link to="/insights/$slug" params={{ slug: a.slug }} className={cn("group flex h-full flex-col rounded-xl border bg-card shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift", featured && "lg:flex-row")}>
      <div className={cn("relative overflow-hidden rounded-t-xl bg-night", featured ? "aspect-[16/9] lg:aspect-auto lg:w-1/2 lg:rounded-l-xl lg:rounded-tr-none" : "aspect-[16/9]")}>
        <div className="absolute inset-0 grid-lines" />
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-electric/40 blur-2xl transition-transform group-hover:scale-125" />
        <span className="absolute bottom-4 left-4 rounded-full border border-line-dark bg-navy/60 px-2.5 py-1 text-[11px] text-on-dark">{a.category}</span>
      </div>
      <div className={cn("flex flex-1 flex-col p-6", featured && "lg:p-10")}>
        <span className="text-[10px] font-semibold uppercase tracking-wider text-warning">Sample article</span>
        <h3 className={cn("mt-2 font-semibold text-midnight group-hover:text-primary", featured ? "text-2xl md:text-3xl" : "text-lg")}>{a.title}</h3>
        <p className="mt-2 flex-1 text-sm text-muted-foreground">{a.excerpt}</p>
        <div className="mt-5 flex items-center gap-3 text-xs text-muted-foreground">
          <span>{a.author}</span><span>·</span><span>{fmtDate(a.date)}</span><span>·</span><span className="flex items-center gap-1"><Clock className="h-3 w-3" />{a.minutes} min read</span>
        </div>
      </div>
    </Link>
  );
}
