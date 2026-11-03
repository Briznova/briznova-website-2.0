import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./primitives";

type Action = { label: string; to: string };

export function CTASection({
  title = "Have an Idea Worth Building?",
  text = "Let's turn meaningful ideas into useful technology.",
  primary = { label: "Start a Conversation", to: "/contact" },
  secondary = { label: "Explore DASHIFY", to: "/products/dashify" },
}: { title?: string; text?: string; primary?: Action; secondary?: Action }) {
  return (
    <section className="px-5 py-20 lg:px-8">
      <Reveal className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl bg-night px-8 py-16 text-on-dark md:px-16">
        <div className="pointer-events-none absolute inset-0 grid-lines" />
        <div className="pointer-events-none absolute -bottom-32 left-1/2 h-72 w-[640px] -translate-x-1/2 rounded-full bg-cyan/20 blur-3xl" />
        <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">{title}</h2>
            <p className="mt-3 text-lg text-on-dark-muted">{text}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="brand" size="lg"><Link to={primary.to}>{primary.label} <ArrowRight /></Link></Button>
            <Button asChild variant="onDark" size="lg"><Link to={secondary.to}>{secondary.label}</Link></Button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
