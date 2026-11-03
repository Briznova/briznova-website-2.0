import {
  Code2, Cloud, Workflow, Layers, Globe, Smartphone, LayoutDashboard, Compass, Users, CalendarCheck,
  Wallet, Megaphone, Building2, MonitorSmartphone, GraduationCap, Store, Briefcase, Rocket, Circle,
  type LucideProps,
} from "lucide-react";

const MAP: Record<string, React.ComponentType<LucideProps>> = {
  Code2, Cloud, Workflow, Layers, Globe, Smartphone, LayoutDashboard, Compass, Users, CalendarCheck,
  Wallet, Megaphone, Building2, MonitorSmartphone, GraduationCap, Store, Briefcase, Rocket,
};

export function Icon({ name, ...props }: { name: string } & LucideProps) {
  const C = MAP[name] ?? Circle;
  return <C {...props} />;
}
