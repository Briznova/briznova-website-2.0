import { AlertTriangle } from "lucide-react";
import { PageHero } from "./primitives";

export type LegalSection = { h: string; p: string[] };

export function LegalPage({ title, sections }: { title: string; sections: LegalSection[] }) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} crumbs={[{ label: title }]} text="Last updated: [date to be confirmed]" />
      <div className="mx-auto max-w-3xl px-5 py-16">
        <div className="flex gap-3 rounded-lg border border-warning/50 bg-warning/10 p-4 text-sm text-midnight" role="note">
          <AlertTriangle className="h-5 w-5 shrink-0 text-warning" />
          <p><strong>Draft template — requires legal review.</strong> This document is an editable draft and does not represent a final legal position or claim of regulatory compliance. It covers this website only; the DASHIFY product will have its own separate data practices.</p>
        </div>
        <div className="mt-10 space-y-10">
          {sections.map((s, i) => (
            <section key={s.h}>
              <h2 className="text-xl font-semibold text-midnight">{i + 1}. {s.h}</h2>
              {s.p.map((p, j) => <p key={j} className="mt-3 leading-relaxed text-foreground/85">{p}</p>)}
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
