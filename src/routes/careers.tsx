import { createFileRoute } from "@tanstack/react-router";
import { Code2, PenTool, Briefcase, Megaphone, BookOpen, Users, Lightbulb } from "lucide-react";
import { PageHero, Reveal, Section, SectionHeading } from "@/components/sections/primitives";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { careersSchema } from "@/lib/enquiry";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/careers")({
  head: () => seo({ title: "Careers", description: "Build the future with BRIZNOVA. We welcome conversations with people who believe in thoughtful engineering and meaningful innovation.", path: "/careers" }),
  component: Careers,
});

const AREAS = [
  { i: Code2, t: "Engineering", d: "Building reliable, scalable software across web and mobile." },
  { i: PenTool, t: "Product and design", d: "Shaping clear, useful experiences grounded in research." },
  { i: Briefcase, t: "Business and operations", d: "Helping the company and its partnerships run well." },
  { i: Megaphone, t: "Marketing", d: "Telling our story honestly and clearly." },
];

function Careers() {
  return (
    <>
      <PageHero eyebrow="Careers" title="Build the Future With Us." crumbs={[{ label: "Careers" }]}
        text="We are building a team that believes in thoughtful engineering, meaningful innovation and continuous learning." />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <SectionHeading eyebrow="Life at BRIZNOVA" title="An early team with long-term ambitions" intro="Joining early means real ownership, close collaboration with the founders and the chance to shape products from the ground up." />
          <div className="grid gap-4">
            {[{ i: Lightbulb, t: "Ownership", d: "Ideas are welcomed and responsibility is shared." }, { i: Users, t: "Collaboration", d: "Small teams, direct conversations, shared goals." }, { i: BookOpen, t: "Continuous learning", d: "We expect to learn constantly — together." }].map((c) => (
              <div key={c.t} className="flex gap-4 rounded-xl border p-5"><c.i className="h-5 w-5 shrink-0 text-primary" /><div><h3 className="font-semibold text-midnight">{c.t}</h3><p className="text-sm text-muted-foreground">{c.d}</p></div></div>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="Areas of work" title="Where you could contribute" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {AREAS.map((a, i) => <Reveal key={a.t} delay={i * 80}><div className="h-full rounded-xl border bg-background p-6"><a.i className="h-5 w-5 text-primary" /><h3 className="mt-4 font-semibold text-midnight">{a.t}</h3><p className="mt-1 text-sm text-muted-foreground">{a.d}</p></div></Reveal>)}
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <SectionHeading eyebrow="Open positions" title="Start a conversation" />
            <p className="mt-6 rounded-lg border-l-4 border-electric bg-ice p-5 text-midnight">
              We are not currently listing specific openings, but we welcome conversations with people who share our vision.
            </p>
          </div>
          <Reveal className="rounded-2xl border p-6 shadow-soft md:p-8">
            <EnquiryForm kind="careers" schema={careersSchema} submitLabel="Send careers enquiry" fields={[
              { name: "name", label: "Full name", required: true },
              { name: "email", label: "Email", type: "email", required: true },
              { name: "role", label: "Role of interest", required: true, placeholder: "e.g. Frontend engineer" },
              { name: "link", label: "LinkedIn or portfolio URL", type: "url", placeholder: "https://" },
              { name: "resume", label: "Resume", type: "file", full: true, hint: "PDF or Word, up to 5 MB" },
              { name: "message", label: "Message", type: "textarea" },
            ]} />
          </Reveal>
        </div>
      </Section>
    </>
  );
}
