export const SITE = {
  brand: "BRIZNOVA",
  legalName: "BRIZNOVA Technologies Private Limited (proposed)",
  tagline: "Bridging Ideas. Creating the Future.",
  email: "info@briznova.com",
  // Editable placeholders — replace once confirmed.
  address: "[Office address to be confirmed]",
  phone: "[Phone number to be confirmed]",
};

export type NavItem = { label: string; to: string; children?: { label: string; to: string; desc?: string }[] };

export const NAV: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  {
    label: "Solutions",
    to: "/solutions",
    children: [
      { label: "All solutions", to: "/solutions", desc: "Eight areas of technology focus" },
      { label: "Technology", to: "/technology", desc: "Our engineering philosophy" },
      { label: "Industries", to: "/industries", desc: "Who we aim to serve" },
    ],
  },
  {
    label: "Products",
    to: "/products",
    children: [
      { label: "Product ecosystem", to: "/products", desc: "What we're building" },
      { label: "DASHIFY", to: "/products/dashify", desc: "School management platform" },
    ],
  },
  { label: "Technology", to: "/technology" },
  { label: "Industries", to: "/industries" },
  { label: "Insights", to: "/insights" },
  { label: "Careers", to: "/careers" },
  { label: "Contact", to: "/contact" },
];

export const SERVICES = [
  { icon: "Code2", title: "Software Development", points: ["Modern web applications", "Business software", "Custom software solutions"] },
  { icon: "Cloud", title: "SaaS Products", points: ["Scalable cloud-based platforms", "Multi-tenant architecture", "Subscription-based software"] },
  { icon: "Workflow", title: "Digital Transformation", points: ["Workflow automation", "Process digitisation", "Operational efficiency"] },
  { icon: "Layers", title: "Product Engineering", points: ["Product strategy", "UI/UX design", "Development and iteration"] },
] as const;

export const SOLUTIONS = [
  { id: "custom-software", icon: "Code2", title: "Custom Software Development", what: "Software shaped around how a specific organisation actually works, rather than forcing processes into off-the-shelf tools.", problems: ["Spreadsheets stretched beyond their limits", "Generic tools that don't fit the workflow", "Data spread across disconnected systems"], apps: ["Internal operations tools", "Record and inventory systems", "Approval and request workflows"], value: "Processes that fit the organisation, with fewer workarounds and clearer data." },
  { id: "saas", icon: "Cloud", title: "SaaS Platform Development", what: "Cloud-delivered software designed to serve many organisations from one well-architected platform.", problems: ["Ideas that need to reach many customers", "Costly per-customer deployments", "Difficulty scaling a single-tenant product"], apps: ["Multi-tenant business platforms", "Subscription products", "Vertical SaaS for specific sectors"], value: "One maintainable product that can grow with its user base." },
  { id: "automation", icon: "Workflow", title: "Workflow Automation", what: "Turning repetitive, manual steps into reliable digital workflows.", problems: ["Repetitive data entry", "Paper-based approvals", "Errors from manual hand-offs"], apps: ["Form-to-record pipelines", "Notification and reminder flows", "Report generation"], value: "Time returned to teams and fewer avoidable mistakes." },
  { id: "web-apps", icon: "Globe", title: "Web Application Development", what: "Fast, accessible browser-based applications that work across devices.", problems: ["Outdated, slow internal portals", "Tools that only work on one device", "Poor usability driving low adoption"], apps: ["Portals and dashboards", "Customer-facing applications", "Administrative consoles"], value: "Software people can open anywhere and actually enjoy using." },
  { id: "mobile", icon: "Smartphone", title: "Mobile Application Development", what: "Mobile experiences for people who work away from a desk.", problems: ["Field teams without timely information", "Desktop-only workflows", "Delayed updates and communication"], apps: ["Companion apps for platforms", "Field data capture", "Notifications and updates"], value: "Information and actions available where work happens." },
  { id: "product", icon: "Layers", title: "Product Design and Engineering", what: "Taking an idea from problem definition through design, build and iteration.", problems: ["Unclear product direction", "Ideas that never reach users", "Products built without user insight"], apps: ["Discovery and prototyping", "UI/UX design systems", "MVP development"], value: "A focused product grounded in real user needs." },
  { id: "operations", icon: "LayoutDashboard", title: "Digital Operations Solutions", what: "Bringing visibility and structure to day-to-day operations.", problems: ["Limited visibility into daily activity", "Information locked in individual inboxes", "Slow, manual reporting"], apps: ["Operational dashboards", "Centralised records", "Role-based access to information"], value: "Leaders and teams see the same, current picture." },
  { id: "consulting", icon: "Compass", title: "Technology Consulting", what: "Practical guidance on choosing, planning and adopting technology.", problems: ["Uncertainty about where to start", "Risky technology decisions", "Tools adopted without a plan"], apps: ["Digitisation roadmaps", "Architecture reviews", "Build-vs-buy assessments"], value: "Clearer decisions and a realistic path forward." },
] as const;

export type Status = "Available" | "In development" | "Planned";

export const DASHIFY_FEATURES: { icon: string; title: string; status: Status; points: string[] }[] = [
  { icon: "Users", title: "Student Management", status: "In development", points: ["Student profiles", "Admission records", "Class and section organisation", "Student information management"] },
  { icon: "CalendarCheck", title: "Attendance Management", status: "In development", points: ["Daily attendance", "Class-wise attendance", "Attendance summaries", "Absence tracking"] },
  { icon: "Wallet", title: "Fee Management", status: "In development", points: ["Fee structures", "Student fee records", "Payment tracking", "Outstanding fee visibility"] },
  { icon: "Megaphone", title: "Communication", status: "Planned", points: ["School notices", "Announcements", "Parent communication workflows", "Important updates"] },
  { icon: "LayoutDashboard", title: "Administrative Dashboard", status: "In development", points: ["School overview", "Key operational indicators", "Quick navigation", "Administrative summaries"] },
  { icon: "Building2", title: "Multi-School Platform", status: "Planned", points: ["Separate school environments", "School-specific records", "Role-based access", "Central platform administration"] },
  { icon: "MonitorSmartphone", title: "Web and Mobile Experience", status: "Planned", points: ["Responsive interfaces", "Convenient access", "Role-oriented experiences"] },
];

export const INDUSTRIES = [
  { id: "education", icon: "GraduationCap", title: "Education", primary: true, summary: "Our initial product focus through DASHIFY.", challenges: ["Records spread across registers and spreadsheets", "Manual attendance and fee tracking", "Scattered parent communication"], opportunities: ["Centralised student information", "Digital attendance and fee visibility", "Structured school announcements"], solutions: ["DASHIFY school management platform", "Administrative dashboards", "Role-based access for staff"] },
  { id: "smb", icon: "Store", title: "Small and Medium Businesses", summary: "Practical tools for growing teams.", challenges: ["Processes that outgrow spreadsheets", "Limited time for manual admin", "Disconnected everyday tools"], opportunities: ["Lightweight custom software", "Automated routine tasks", "Simple operational dashboards"], solutions: ["Custom business software", "Workflow automation", "Web applications"] },
  { id: "professional", icon: "Briefcase", title: "Professional Organisations", summary: "Structure for workflow-heavy organisations.", challenges: ["Approval chains handled over email", "Document-heavy processes", "Limited reporting visibility"], opportunities: ["Digitised approvals", "Centralised records", "Role-based information access"], solutions: ["Digital operations solutions", "Internal portals", "Technology consulting"] },
  { id: "digital", icon: "Rocket", title: "Digital-first Enterprises", summary: "Engineering partners for emerging products.", challenges: ["Turning ideas into products quickly", "Scaling early architecture", "Balancing speed with quality"], opportunities: ["Focused MVPs", "Scalable SaaS foundations", "Iterative product development"], solutions: ["SaaS platform development", "Product design and engineering", "Mobile applications"] },
] as const;

export const FOUNDERS = [
  { name: "Suman", role: "Co-Founder & CEO" },
  { name: "Kunal", role: "Co-Founder & CTO" },
  { name: "Prince", role: "Co-Founder & CMO" },
  { name: "Saurabh", role: "Founder & COO" },
];

export const INSIGHT_CATEGORIES = ["Technology", "Education Technology", "SaaS and Product Engineering", "Digital Transformation", "Business Automation", "Innovation"] as const;

export type Article = { slug: string; title: string; excerpt: string; category: (typeof INSIGHT_CATEGORIES)[number]; author: string; date: string; minutes: number; body: string[] };

// SAMPLE EDITORIAL CONTENT — replace with real articles (CMS-ready shape).
export const ARTICLES: Article[] = [
  { slug: "why-schools-need-connected-workflows", title: "Why School Administration Benefits From Connected Workflows", excerpt: "When attendance, fees and records live in separate places, small inefficiencies add up. A look at why connection matters.", category: "Education Technology", author: "BRIZNOVA Team", date: "2026-10-12", minutes: 6, body: ["Many schools manage essential information across registers, spreadsheets and messaging apps. Each tool works on its own, but the gaps between them create repeated effort.", "Connecting these workflows doesn't require complexity. It starts with a single source of truth for student information, on which attendance, fees and communication can build.", "This is the thinking behind DASHIFY: practical tools that reduce repetition and give administrators a clearer view of daily operations."] },
  { slug: "designing-multi-tenant-saas", title: "Designing Multi-Tenant SaaS: Principles We Follow", excerpt: "Isolation, configurability and maintainability — the principles guiding how we think about platforms serving many organisations.", category: "SaaS and Product Engineering", author: "BRIZNOVA Team", date: "2026-09-28", minutes: 8, body: ["Multi-tenant software serves many organisations from one platform. Done well, it is easier to maintain and improve for everyone.", "We prioritise clear data isolation between tenants, role-based access, and configuration over customisation so the core product stays coherent.", "These are design principles we apply as we build, refined continuously as we learn."] },
  { slug: "automation-starts-small", title: "Automation Starts Small", excerpt: "Meaningful automation rarely begins with a grand plan. It begins with one repetitive task done well.", category: "Business Automation", author: "BRIZNOVA Team", date: "2026-09-10", minutes: 5, body: ["Automation projects stall when they try to change everything at once.", "Identifying one repetitive, well-understood task and automating it reliably builds confidence and momentum.", "From there, workflows can be connected step by step."] },
  { slug: "practical-digital-transformation", title: "What Practical Digital Transformation Looks Like", excerpt: "Transformation is less about technology and more about understanding how people work.", category: "Digital Transformation", author: "BRIZNOVA Team", date: "2026-08-22", minutes: 7, body: ["Digital transformation is often described in sweeping terms. In practice, it is a series of thoughtful improvements.", "Understanding existing processes comes before replacing them.", "The best tools fit naturally into how teams already work, then help them work better."] },
  { slug: "building-for-reliability", title: "Building Software for Reliability From Day One", excerpt: "Reliability is a design decision, not an afterthought. How we approach it early.", category: "Technology", author: "BRIZNOVA Team", date: "2026-08-05", minutes: 6, body: ["Reliable software starts with clear architecture and sensible defaults.", "Automated checks, careful data modelling and observability make problems visible early.", "We treat these as foundations, not extras."] },
  { slug: "innovation-with-purpose", title: "Innovation With Purpose", excerpt: "Why we believe the most useful innovation solves ordinary problems exceptionally well.", category: "Innovation", author: "BRIZNOVA Team", date: "2026-07-18", minutes: 4, body: ["Innovation is often associated with novelty. We think of it as usefulness.", "Solving ordinary problems exceptionally well can change how organisations operate every day.", "That idea guides what we choose to build."] },
];

export const FOOTER_COLUMNS = [
  { title: "Company", links: [{ label: "About Us", to: "/about" }, { label: "Our Vision", to: "/about" }, { label: "Leadership", to: "/about" }, { label: "Careers", to: "/careers" }, { label: "Contact", to: "/contact" }] },
  { title: "Solutions", links: [{ label: "Software Development", to: "/solutions" }, { label: "SaaS Platforms", to: "/solutions" }, { label: "Workflow Automation", to: "/solutions" }, { label: "Product Engineering", to: "/solutions" }] },
  { title: "Products", links: [{ label: "DASHIFY", to: "/products/dashify" }, { label: "Request a Demo", to: "/contact" }] },
  { title: "Legal", links: [{ label: "Privacy Policy", to: "/privacy" }, { label: "Terms of Use", to: "/terms" }, { label: "Cookie Policy", to: "/cookies" }, { label: "Data Protection", to: "/data-protection" }] },
] as const;
