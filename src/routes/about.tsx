import { createFileRoute } from "@tanstack/react-router";
import { Linkedin, UserRound, Eye, Target } from "lucide-react";
import { PageHero, Reveal, Section, SectionHeading, Card } from "@/components/sections/primitives";
import { CTASection } from "@/components/sections/CTASection";
import { LogoMark } from "@/components/layout/Logo";
import { FOUNDERS } from "@/data/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () => seo({ title: "About Us", description: "BRIZNOVA is an emerging technology company building digital products that connect ideas with practical outcomes. Meet our founding team.", path: "/about" }),
  component: About,
});

const VALUES = [
  ["Innovation with purpose", "We innovate to be useful, not merely new."],
  ["Integrity and transparency", "We are honest about what we have built and what we are building."],
  ["User-first thinking", "Every decision begins with the people who will use the product."],
  ["Engineering excellence", "Reliable, maintainable software is a baseline, not a bonus."],
  ["Collaboration", "Good products come from listening closely and working together."],
  ["Continuous learning", "We expect to keep learning — and to keep improving."],
];

function About() {
  return (
    <>
      <PageHero eyebrow="About BRIZNOVA" title="Building Technology With Purpose." crumbs={[{ label: "About Us" }]}
        text="BRIZNOVA is an emerging technology company focused on creating digital products and software solutions that connect ideas with practical outcomes." />

      <Section>
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading eyebrow="Our story" title="Where bridges meet a new beginning" />
            <Reveal className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>BRIZNOVA represents the connection between ideas and new possibilities.</p>
              <p>The name combines the concept of <strong className="text-midnight">bridging</strong> — creating connections between people, problems and solutions — with the imagery of a <strong className="text-midnight">nova</strong>: a new beginning and a bright emergence.</p>
              <p className="font-display text-2xl text-midnight">"Bridging Ideas. Creating the Future."</p>
            </Reveal>
          </div>
          <Reveal delay={120} className="relative grid aspect-square place-items-center overflow-hidden rounded-2xl bg-night">
            <div className="absolute inset-0 grid-lines" />
            <div className="absolute h-2/3 w-2/3 rounded-full bg-electric/25 blur-3xl" />
            <LogoMark className="relative h-40 w-40" />
          </Reveal>
        </div>
      </Section>

      <Section tone="muted" id="vision">
        <div className="grid gap-5 md:grid-cols-2">
          <Reveal><Card className="h-full"><Eye className="h-6 w-6 text-primary" /><p className="eyebrow mt-5 text-primary">Our vision</p><p className="mt-3 font-display text-2xl leading-snug text-midnight">To build technology that makes organisations more capable, connected and future-ready.</p></Card></Reveal>
          <Reveal delay={100}><Card className="h-full"><Target className="h-6 w-6 text-primary" /><p className="eyebrow mt-5 text-primary">Our mission</p><p className="mt-3 font-display text-2xl leading-snug text-midnight">To transform practical challenges into thoughtful digital solutions through innovation, engineering and continuous improvement.</p></Card></Reveal>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Our values" title="What we stand for" />
        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border bg-border md:grid-cols-3">
          {VALUES.map(([t, d], i) => (
            <div key={t} className="bg-background p-7">
              <span className="font-display text-sm text-electric">0{i + 1}</span>
              <h3 className="mt-3 text-lg font-semibold text-midnight">{t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="dark" id="leadership">
        <SectionHeading tone="dark" eyebrow="Leadership" title="The founding team" intro="Biographies and photographs will be added shortly." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FOUNDERS.map((f, i) => (
            <Reveal key={f.name} delay={i * 80}>
              <div className="rounded-xl border border-line-dark bg-on-dark/5 p-5">
                <div className="grid aspect-[4/5] place-items-center rounded-lg bg-midnight" aria-label={`Photo placeholder for ${f.name}`}>
                  <UserRound className="h-14 w-14 text-on-dark-muted/50" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{f.name}</h3>
                <p className="text-sm text-cyan">{f.role}</p>
                <p className="mt-3 text-sm text-on-dark-muted">[Professional biography to be added]</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs text-on-dark-muted"><Linkedin className="h-3.5 w-3.5" /> LinkedIn profile — to be added</span>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
