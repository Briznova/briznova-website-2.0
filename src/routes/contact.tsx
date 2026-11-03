import { createFileRoute } from "@tanstack/react-router";
import { MessageSquare, Handshake, School, UserPlus, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { PageHero, Reveal, Section } from "@/components/sections/primitives";
import { EnquiryForm } from "@/components/forms/EnquiryForm";
import { contactSchema } from "@/lib/enquiry";
import { SITE } from "@/data/site";
import { cn } from "@/lib/utils";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => seo({ title: "Contact", description: "Contact BRIZNOVA for general enquiries, business partnerships, DASHIFY school demos or careers. Email info@briznova.com.", path: "/contact" }),
  component: Contact,
});

const PATHS = [
  { k: "general", i: MessageSquare, t: "General Enquiry", d: "Questions or simply connecting." },
  { k: "partnership", i: Handshake, t: "Business Partnership", d: "Collaboration and product ideas." },
  { k: "demo", i: School, t: "DASHIFY School Demo", d: "For schools interested in DASHIFY." },
  { k: "careers", i: UserPlus, t: "Careers", d: "Interested in joining us." },
] as const;

function Contact() {
  const [kind, setKind] = useState<(typeof PATHS)[number]["k"]>("general");
  return (
    <>
      <PageHero eyebrow="Contact" title="Let's Build Something Meaningful." crumbs={[{ label: "Contact" }]}
        text="Whether you have a business challenge, a product idea, a school interested in DASHIFY, or simply want to connect, we'd love to hear from you." />
      <Section>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PATHS.map((p) => (
            <button key={p.k} onClick={() => setKind(p.k)} aria-pressed={kind === p.k}
              className={cn("rounded-xl border p-5 text-left transition-all", kind === p.k ? "border-electric bg-ice shadow-glow" : "hover:border-electric/50")}>
              <p.i className="h-5 w-5 text-primary" />
              <h2 className="mt-3 font-semibold text-midnight">{p.t}</h2>
              <p className="text-sm text-muted-foreground">{p.d}</p>
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <Reveal className="rounded-2xl border p-6 shadow-soft md:p-8">
            <EnquiryForm key={kind} kind={kind} kindFrom="enquiryType" schema={contactSchema} submitLabel="Send enquiry" initial={{ enquiryType: kind }} fields={[
              { name: "name", label: "Name", required: true },
              { name: "email", label: "Email", type: "email", required: true },
              { name: "phone", label: "Phone", type: "tel" },
              { name: "organisation", label: "Organisation", required: true },
              { name: "enquiryType", label: "Enquiry type", type: "select", required: true, full: true, options: PATHS.map((p) => ({ value: p.k, label: p.t })) },
              { name: "message", label: "Message", type: "textarea", required: true },
            ]} />
          </Reveal>
          <aside className="space-y-4">
            <div className="rounded-xl bg-night p-6 text-on-dark">
              <Mail className="h-5 w-5 text-cyan" />
              <p className="eyebrow mt-4 text-on-dark-muted">General contact</p>
              <a href={`mailto:${SITE.email}`} className="mt-1 block font-display text-xl hover:text-cyan">{SITE.email}</a>
            </div>
            <div className="rounded-xl border p-6 text-sm text-muted-foreground">
              <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> {SITE.address}</p>
              <p className="mt-3 flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> {SITE.phone}</p>
              <p className="mt-3 text-xs">Office, phone and registration details will be published once confirmed.</p>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
