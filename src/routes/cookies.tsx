import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/sections/LegalPage";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/cookies")({
  head: () => seo({ title: "Cookie Policy", description: "Draft cookie policy explaining how the BRIZNOVA website uses cookies.", path: "/cookies" }),
  component: () => (
    <LegalPage title="Cookie Policy" sections={[
      { h: "What cookies are", p: ["Cookies are small text files stored on your device when you visit a website."] },
      { h: "How this website uses cookies", p: ["This website currently aims to use only cookies that are strictly necessary for it to function. [Update this section if analytics or other cookies are introduced.]"] },
      { h: "Managing cookies", p: ["You can control or delete cookies through your browser settings. Blocking necessary cookies may affect how the site works."] },
      { h: "Contact", p: ["Questions: info@briznova.com."] },
    ]} />
  ),
});
