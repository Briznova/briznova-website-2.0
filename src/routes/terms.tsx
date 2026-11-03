import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/sections/LegalPage";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/terms")({
  head: () => seo({ title: "Terms of Use", description: "Draft terms and conditions for using the BRIZNOVA website.", path: "/terms" }),
  component: () => (
    <LegalPage title="Terms and Conditions" sections={[
      { h: "Acceptance", p: ["By using this website you agree to these terms. If you do not agree, please do not use the website."] },
      { h: "About the content", p: ["Information on this website, including descriptions of DASHIFY and its planned capabilities, is provided for general information. Product features marked as planned or in development may change. Sample data and sample articles are illustrative."] },
      { h: "Intellectual property", p: ["The BRIZNOVA and DASHIFY names, logos and website content belong to BRIZNOVA unless stated otherwise. [Confirm trademark status.]"] },
      { h: "Acceptable use", p: ["You agree not to misuse the website, attempt unauthorised access, or submit unlawful or harmful content through its forms."] },
      { h: "Limitation of liability", p: ["[To be drafted following legal review.]"] },
      { h: "Governing law", p: ["[Jurisdiction to be confirmed — e.g. the laws of India.]"] },
      { h: "Contact", p: ["Questions about these terms: info@briznova.com."] },
    ]} />
  ),
});
