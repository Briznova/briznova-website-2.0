import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Compass, Hammer, Lightbulb, RefreshCw, Target, Users, Layers, Infinity as InfinityIcon, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-network.jpg";
import { Button } from "@/components/ui/button";
import { Icon } from "@/components/ui/icon";
import { Card, IconTile, Reveal, Section, SectionHeading, StatusBadge } from "@/components/sections/primitives";
import { CTASection } from "@/components/sections/CTASection";
import { DashboardMockup } from "@/components/sections/DashboardMockup";
import { DashifyWordmark } from "@/components/layout/Logo";
import { INDUSTRIES, SERVICES } from "@/data/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => seo({ title: "BRIZNOVA — Bridging Ideas. Creating the Future.", description: "BRIZNOVA builds thoughtful technology — software, SaaS platforms and DASHIFY, a school management platform in development.", path: "/" }),
  component: Home,
});

const APPROACH = [
  { icon: Target, t: "Understand", d: "Understand the real problem." },
  { icon: Compass, t: "Design", d: "Plan a thoughtful solution." },
  { icon: Hammer, t: "Build", d: "Engineer reliable software." },
  { icon: RefreshCw, t: "Improve", d: "Continuously learn and refine." },
];

const WHY = [
  { icon: Lightbulb, t: "Purpose-driven engineering", d: "Every product starts with a real, clearly understood need." },
  { icon: Sparkles, t: "Practical innovation", d: "Useful over novel — solving ordinary problems exceptionally well." },
  { icon: Layers, t: "Scalable architecture", d: "Foundations designed to grow with the people who use them." },
  { icon: Users, t: "User-centred experiences", d: "Clear interfaces that respect people's time." },
  { icon: InfinityIcon, t: "Long-term thinking", d: "We build for partnerships and products that last." },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-navy text-on-dark">
        <img src={heroImg} alt="" width={1920} height={1088} className="absolute inset-0 -z-10 h-full w-full object-cover opacity-70 animate-drift" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/80 to-navy/20" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-navy to-transparent" />
        <div className="mx-auto max-w-7xl px-5 pb-28 pt-24 lg:px-8 lg:pb-40 lg:pt-36">
          <Reveal>
            <p className="eyebrow inline-flex items-center gap-2 rounded-full border border-line-dark bg-on-dark/5 px-3 py-1.5 text-cyan">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan" /> Technology company · India
            </p>
            <h1 className="mt-7 max-w-3xl text-5xl font-semibold leading-[1.04] md:text-7xl">
              Bridging Ideas.<br /><span className="text-brand">Creating the Future.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-on-dark-muted">
              BRIZNOVA builds thoughtful technology solutions that simplify complex processes, empower organisations and turn ideas into meaningful digital experiences.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild variant="brand" size="lg"><Link to="/solutions">Explore Our Solutions <ArrowRight /></Link></Button>
              <Button asChild variant="onDark" size="lg"><Link to="/products/dashify">Discover DASHIFY</Link></Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* INTRO */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <SectionHeading eyebrow="Who we are" title="Technology Built Around Real-World Needs" intro="We focus on identifying practical challenges and creating software that makes everyday operations more efficient — starting from the problem, not the technology." />
          <Reveal delay={100}>
            <ul className="grid gap-3 sm:grid-cols-2">
              {["Digital products", "Workflow automation", "Software engineering", "Business technology solutions", "Scalable digital platforms"].map((x) => (
                <li key={x} className="flex items-center gap-3 rounded-lg border bg-surface px-4 py-3.5 text-sm font-medium text-midnight">
                  <Check className="h-4 w-4 text-primary" /> {x}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      {/* WHAT WE DO */}
      <Section tone="muted">
        <SectionHeading eyebrow="What we do" title="Our areas of focus" intro="Four disciplines where we are concentrating our engineering effort." />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <Card className="h-full">
                <IconTile><Icon name={s.icon} className="h-5 w-5" /></IconTile>
                <h3 className="mt-5 text-lg font-semibold text-midnight">{s.title}</h3>
                <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">{s.points.map((p) => <li key={p}>— {p}</li>)}</ul>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* DASHIFY */}
      <Section tone="dark">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.25fr] lg:items-center">
          <Reveal>
            <DashifyWordmark tone="light" className="text-xl" />
            <p className="eyebrow mt-6 text-cyan">Flagship product · In development</p>
            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">Meet DASHIFY — Smarter School Management.</h2>
            <p className="mt-5 text-lg leading-relaxed text-on-dark-muted">
              DASHIFY is BRIZNOVA's education technology initiative, designed to simplify school administration by bringing essential school management workflows into one connected digital platform.
            </p>
            <ul className="mt-6 space-y-2.5 text-sm">
              {[["Student overview", "In development"], ["Attendance summary", "In development"], ["Fee collection overview", "In development"], ["School announcements", "Planned"]].map(([t, s]) => (
                <li key={t} className="flex items-center justify-between gap-4 border-b border-line-dark pb-2.5">
                  <span>{t}</span><StatusBadge status={s as "Planned"} tone="dark" />
                </li>
              ))}
            </ul>
            <Button asChild variant="brand" size="lg" className="mt-8"><Link to="/products/dashify">Explore DASHIFY <ArrowRight /></Link></Button>
          </Reveal>
          <Reveal delay={150}><DashboardMockup /></Reveal>
        </div>
      </Section>

      {/* APPROACH */}
      <Section>
        <SectionHeading eyebrow="Our approach" title="From problem to product, step by step" align="center" />
        <div className="relative mt-14 grid gap-8 md:grid-cols-4">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-electric/50 to-transparent md:block" />
          {APPROACH.map((a, i) => (
            <Reveal key={a.t} delay={i * 100} className="relative text-center">
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-full border bg-background text-primary shadow-soft"><a.icon className="h-5 w-5" /></div>
              <p className="eyebrow mt-5 text-muted-foreground">Step 0{i + 1}</p>
              <h3 className="mt-1 text-xl font-semibold text-midnight">{a.t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{a.d}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* INDUSTRIES */}
      <Section tone="muted">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Industries" title="Who we aim to serve" />
          <Button asChild variant="outline"><Link to="/industries">View industries <ArrowRight /></Link></Button>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {INDUSTRIES.map((ind, i) => (
            <Reveal key={ind.id} delay={i * 80}>
              <Card className={ind.id === "education" ? "h-full border-electric/40 bg-ice" : "h-full"}>
                <IconTile className={ind.id === "education" ? "bg-primary text-primary-foreground" : ""}><Icon name={ind.icon} className="h-5 w-5" /></IconTile>
                {ind.id === "education" && <p className="eyebrow mt-5 text-primary">Initial focus</p>}
                <h3 className="mt-2 text-lg font-semibold text-midnight">{ind.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{ind.summary}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* WHY */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <SectionHeading eyebrow="Why BRIZNOVA" title="Principles that shape everything we build" intro="We are early in our journey. These commitments define how we intend to work from day one." />
          <div className="grid gap-px overflow-hidden rounded-xl border bg-border sm:grid-cols-2">
            {WHY.map((w, i) => (
              <Reveal key={w.t} delay={i * 60} className={i === WHY.length - 1 ? "sm:col-span-2" : ""}>
                <div className="h-full bg-background p-6">
                  <w.icon className="h-5 w-5 text-primary" />
                  <h3 className="mt-4 font-semibold text-midnight">{w.t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{w.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
