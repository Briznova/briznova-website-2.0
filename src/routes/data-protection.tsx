import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/sections/LegalPage";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/data-protection")({
  head: () => seo({ title: "Data Protection Statement", description: "Draft statement on BRIZNOVA's approach to data protection for the website and the separate DASHIFY product.", path: "/data-protection" }),
  component: () => (
    <LegalPage title="Data Protection Statement" sections={[
      { h: "Our commitment", p: ["We intend to handle personal information responsibly and proportionately. This statement describes intentions and principles; it is not a claim of certification or audited compliance."] },
      { h: "Website data", p: ["Information submitted through website forms is used only to respond to the enquiry it relates to. See the Privacy Policy for details."] },
      { h: "DASHIFY product data (future)", p: ["DASHIFY will process school and student information on behalf of schools. Its data practices — including role-based access, data isolation between schools and backup planning — will be documented separately before the product is offered to schools. Student information will not be collected through this website."] },
      { h: "Applicable law", p: ["[Reference applicable Indian data protection law after legal review.]"] },
      { h: "Contact", p: ["Data protection questions: info@briznova.com. [Designate a responsible contact once confirmed.]"] },
    ]} />
  ),
});
