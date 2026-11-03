import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, FileStack, ClipboardList, Receipt, MessagesSquare, Repeat, EyeOff, ShieldCheck, KeyRound, Lock, Database, HardDriveDownload, HeartHandshake, School } from "lucide-react";
import { useState } from "react";
import { PageHero, Reveal, Section, SectionHeading, StatusBadge } from "@/components/sections/primitives";
import { DashboardMockup } from "@/components/sections/DashboardMockup";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { Button } from "@/components/ui/button";
import { demoSchema } from "@/lib/enquiry";
import { cn } from "@/lib/utils";
import { seo } from "@/lib/seo";
import type { Status } from "@/data/site";

export const Route = createFileRoute("/products/dashify")({
  head: () => seo({ title: "DASHIFY — School Management Platform by BRIZNOVA", description: "DASHIFY is a school management platform in development for private schools: students, attendance, fees and announcements in one place. Request a demo.", path: "/products/dashify", type: "product" }),
  component: Dashify,
});

const PROBLEMS = [
  { i: FileStack, t: "Disconnected records", d: "Student information spread across registers, files and spreadsheets." },
  { i: ClipboardList, t: "Manual attendance", d: "Paper-based registers that are slow to compile and summarise." },
  { i: Receipt, t: "Difficult fee tracking", d: "Hard to see who has paid, what's due and what's outstanding." },
  { i: MessagesSquare, t: "Scattered communication", d: "Notices shared across many channels with no single record." },
  { i: Repeat, t: "Repetitive admin work", d: "The same details entered again and again." },
  { i: EyeOff, t: "Limited visibility", d: "No quick view of how the school is running today." },
];

const VIEWS: { k: "dashboard" | "students" | "attendance" | "fees" | "notices" | "settings"; l: string; d: string; s: Status }[] = [
  { k: "dashboard", l: "Dashboard", d: "A single overview of students, attendance, fees and notices.", s: "In development" },
  { k: "students", l: "Student records", d: "Profiles, admissions and class/section organisation.", s: "In development" },
  { k: "attendance", l: "Attendance", d: "Daily, class-wise attendance with summaries and absence tracking.", s: "In development" },
  { k: "fees", l: "Fee management", d: "Fee structures, student records and outstanding visibility.", s: "In development" },
  { k: "notices", l: "Announcements", d: "School notices and updates for parents and staff.", s: "Planned" },
  { k: "settings", l: "Admin settings", d: "Roles and permissions for each staff function.", s: "Planned" },
];

const SECURITY = [
  { i: KeyRound, t: "Role-based permissions" }, { i: Lock, t: "Secure authentication" }, { i: ShieldCheck, t: "Controlled data access" },
  { i: Database, t: "Data isolation between schools" }, { i: HardDriveDownload, t: "Backup and recovery planning" }, { i: HeartHandshake, t: "Responsible handling of student information" },
];

function Dashify() {
  const [view, setView] = useState<(typeof VIEWS)[number]["k"]>("dashboard");
  const active = VIEWS.find((v) => v.k === view)!;
  return (
    <>
      <PageHero eyebrow="DASHIFY · School management · In development" title="A Smarter Way to Manage Your School."
        crumbs={[{ label: "Products", to: "/products" }, { label: "DASHIFY" }]}
        text="DASHIFY is designed to simplify school administration, connect everyday workflows and help school teams spend less time managing processes.">
        <Button asChild variant="brand" size="lg"><a href="#demo">Request a Demo <ArrowRight /></a></Button>
        <Button asChild variant="onDark" size="lg"><a href="#features">Explore Features</a></Button>
      </PageHero>

      <div className="relative z-10 mx-auto -mt-12 max-w-6xl px-5 lg:px-8"><Reveal><DashboardMockup /></Reveal></div>

      <Section>
        <SectionHeading eyebrow="The challenge" title="Everyday friction in school administration" intro="Common operational challenges many schools describe — and the ones DASHIFY is being designed to ease." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROBLEMS.map((p, i) => (
            <Reveal key={p.t} delay={(i % 3) * 80}>
              <div className="h-full rounded-xl border p-6"><p.i className="h-5 w-5 text-primary" /><h3 className="mt-4 font-semibold text-midnight">{p.t}</h3><p className="mt-1 text-sm text-muted-foreground">{p.d}</p></div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="dark" id="features">
        <SectionHeading tone="dark" eyebrow="Features" title="One platform, connected workflows" intro="Select a module to preview it. All screens show illustrative, fictional data." />
        <div className="mt-12 grid gap-10 lg:grid-cols-[320px_1fr]">
          <div role="tablist" aria-label="DASHIFY modules" className="flex gap-2 overflow-x-auto lg:flex-col">
            {VIEWS.map((v) => (
              <button key={v.k} role="tab" aria-selected={view === v.k} onClick={() => setView(v.k)}
                className={cn("shrink-0 rounded-lg border px-4 py-3 text-left transition-colors", view === v.k ? "border-electric bg-electric/10" : "border-line-dark hover:bg-on-dark/5")}>
                <div className="flex items-center justify-between gap-3"><span className="font-semibold">{v.l}</span><span className="hidden lg:inline"><StatusBadge status={v.s} tone="dark" /></span></div>
                <p className="mt-1 hidden text-xs text-on-dark-muted lg:block">{v.d}</p>
              </button>
            ))}
          </div>
          <div role="tabpanel">
            <DashboardMockup view={view} />
            <p className="mt-4 text-sm text-on-dark-muted lg:hidden">{active.d}</p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <School className="h-8 w-8 text-primary" />
            <SectionHeading eyebrow="Designed for schools" title="Built with private schools in mind" intro="DASHIFY is being designed for institutions that need practical, accessible and manageable digital tools — without heavy setup or specialist IT teams." />
          </div>
          <div>
            <p className="eyebrow text-primary">Product approach</p>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {["Simple workflows", "Clear interfaces", "Role-based access", "Centralised information", "Scalable architecture", "Continuous improvement"].map((x) => (
                <li key={x} className="rounded-lg border bg-surface px-4 py-3.5 text-sm font-medium text-midnight">{x}</li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="Security & privacy" title="Intended design principles" intro="These principles guide how DASHIFY is being designed. They describe our intent, not certifications or audited controls." />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SECURITY.map((s) => <div key={s.t} className="flex items-center gap-4 rounded-xl border bg-background p-5"><s.i className="h-5 w-5 shrink-0 text-primary" /><span className="font-medium text-midnight">{s.t}</span></div>)}
        </div>
      </Section>

      <Section id="demo">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading eyebrow="Demo enquiry" title="See where DASHIFY is heading" intro="Tell us about your school. We'll get in touch to walk you through the product as it develops and learn about your needs." />
          <Reveal className="rounded-2xl border p-6 shadow-soft md:p-8">
            <EnquiryForm kind="demo" schema={demoSchema} submitLabel="Request a DASHIFY Demo" fields={[
              { name: "school", label: "School name", required: true, full: true },
              { name: "name", label: "Contact person's name", required: true },
              { name: "designation", label: "Designation", required: true, placeholder: "e.g. Principal" },
              { name: "email", label: "Email", type: "email", required: true },
              { name: "phone", label: "Phone", type: "tel", required: true },
              { name: "city", label: "City", required: true },
              { name: "students", label: "Number of students", type: "number" },
              { name: "message", label: "Message", type: "textarea" },
            ]} />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
