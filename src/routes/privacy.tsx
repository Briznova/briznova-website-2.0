import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/sections/LegalPage";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/privacy")({
  head: () => seo({ title: "Privacy Policy", description: "Draft privacy policy describing how the BRIZNOVA website handles enquiry and contact information.", path: "/privacy" }),
  component: () => (
    <LegalPage title="Privacy Policy" sections={[
      { h: "Who we are", p: ["This website is operated by BRIZNOVA (proposed legal entity: BRIZNOVA Technologies Private Limited). Registration details: [to be added]. Contact: info@briznova.com."] },
      { h: "Scope", p: ["This policy applies to information collected through this website only. The DASHIFY school management platform will be governed by its own privacy terms, separate from this website policy."] },
      { h: "Information we collect", p: ["When you submit an enquiry, demo request or careers form, we may collect your name, email address, phone number, organisation, school details, role of interest, links you provide, any resume you choose to share and the contents of your message.", "We may also collect limited technical information such as browser type and pages visited. [Specify analytics tools, if any.]"] },
      { h: "How we use information", p: ["To respond to enquiries, arrange demos, consider career conversations and improve the website. We do not sell personal information."] },
      { h: "Sharing", p: ["[List any service providers, e.g. email or hosting providers, once confirmed.]"] },
      { h: "Retention", p: ["[Define retention periods for enquiries and careers submissions.]"] },
      { h: "Your choices and rights", p: ["You may request access to, correction of, or deletion of your information by emailing info@briznova.com. [Align with applicable Indian law after legal review.]"] },
      { h: "Changes", p: ["We may update this policy. The latest version will always be published on this page."] },
    ]} />
  ),
});
