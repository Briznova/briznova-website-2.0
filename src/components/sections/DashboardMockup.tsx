import { Bell, CalendarCheck, LayoutDashboard, Megaphone, Settings, Users, Wallet } from "lucide-react";
import { cn } from "@/lib/utils";

/** Illustrative DASHIFY dashboard. All data is fictional sample data. */
const CLASSES = [
  { name: "Class 6", pct: 94 },
  { name: "Class 7", pct: 89 },
  { name: "Class 8", pct: 92 },
  { name: "Class 9", pct: 86 },
  { name: "Class 10", pct: 91 },
];

const NOTICES = [
  { t: "Parent–teacher meeting", d: "Sat, 10:00 AM" },
  { t: "Annual sports day schedule", d: "Next week" },
  { t: "Term 2 fee reminder", d: "Due 15th" },
];

export function DashboardMockup({ className, view = "dashboard" }: { className?: string; view?: "dashboard" | "students" | "attendance" | "fees" | "notices" | "settings" }) {
  const nav = [
    { k: "dashboard", i: LayoutDashboard, l: "Dashboard" },
    { k: "students", i: Users, l: "Students" },
    { k: "attendance", i: CalendarCheck, l: "Attendance" },
    { k: "fees", i: Wallet, l: "Fees" },
    { k: "notices", i: Megaphone, l: "Notices" },
    { k: "settings", i: Settings, l: "Settings" },
  ] as const;

  return (
    <div className={cn("relative rounded-xl border border-line-dark bg-midnight p-1.5 shadow-glow", className)} role="img" aria-label={`Illustrative DASHIFY ${view} screen with fictional sample data`}>
      <div className="overflow-hidden rounded-lg bg-surface text-foreground">
        <div className="flex items-center gap-1.5 border-b bg-background px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-border" /><span className="h-2 w-2 rounded-full bg-border" /><span className="h-2 w-2 rounded-full bg-border" />
          <span className="ml-3 rounded bg-muted px-2 py-0.5 text-[10px] text-muted-foreground">app.dashify — Sample Public School</span>
          <Bell className="ml-auto h-3.5 w-3.5 text-muted-foreground" />
        </div>
        <div className="flex">
          <aside className="hidden w-36 shrink-0 border-r bg-background p-2 sm:block">
            <div className="mb-3 px-2 py-1 font-display text-xs font-bold text-midnight">DASHIFY</div>
            {nav.map((n) => (
              <div key={n.k} className={cn("flex items-center gap-2 rounded-md px-2 py-1.5 text-[11px]", view === n.k ? "bg-ice font-semibold text-primary" : "text-muted-foreground")}>
                <n.i className="h-3.5 w-3.5" /> {n.l}
              </div>
            ))}
          </aside>
          <div className="min-w-0 flex-1 p-3 sm:p-4">
            {view === "dashboard" && <DashboardView />}
            {view === "students" && <StudentsView />}
            {view === "attendance" && <AttendanceView />}
            {view === "fees" && <FeesView />}
            {view === "notices" && <NoticesView />}
            {view === "settings" && <SettingsView />}
            <p className="mt-3 text-right text-[9px] uppercase tracking-wider text-muted-foreground">Illustrative sample data</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div className="rounded-lg border bg-background p-2.5">
      <div className="text-[10px] text-muted-foreground">{label}</div>
      <div className="mt-0.5 font-display text-lg font-semibold text-midnight">{value}</div>
      <div className="text-[10px] text-primary">{sub}</div>
    </div>
  );
}

function Panel({ title, children, className }: { title: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("rounded-lg border bg-background p-3", className)}>
      <div className="mb-2 text-[11px] font-semibold text-midnight">{title}</div>
      {children}
    </div>
  );
}

function Bars() {
  return (
    <div className="space-y-1.5">
      {CLASSES.map((c) => (
        <div key={c.name} className="flex items-center gap-2 text-[10px]">
          <span className="w-12 text-muted-foreground">{c.name}</span>
          <div className="h-1.5 flex-1 rounded-full bg-muted"><div className="h-full rounded-full bg-brand" style={{ width: `${c.pct}%` }} /></div>
          <span className="w-7 text-right font-medium">{c.pct}%</span>
        </div>
      ))}
    </div>
  );
}

function DashboardView() {
  return (
    <>
      <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
        <Stat label="Total students" value="1,248" sub="Sample school" />
        <Stat label="Today's attendance" value="91.4%" sub="1,141 present" />
        <Stat label="Fees collected" value="₹18.6L" sub="Term 2 · 72%" />
        <Stat label="Notices" value="3" sub="This week" />
      </div>
      <div className="mt-2 grid gap-2 md:grid-cols-5">
        <Panel title="Class-wise attendance" className="md:col-span-3"><Bars /></Panel>
        <Panel title="Recent notices" className="md:col-span-2">
          <ul className="space-y-2">{NOTICES.map((n) => <li key={n.t} className="text-[10px]"><div className="font-medium">{n.t}</div><div className="text-muted-foreground">{n.d}</div></li>)}</ul>
        </Panel>
      </div>
      <Panel title="Fee collection summary" className="mt-2">
        <div className="flex h-12 items-end gap-1">
          {[40, 55, 48, 70, 62, 78, 72, 85, 66, 90, 74, 80].map((h, i) => <div key={i} className="flex-1 rounded-sm bg-electric/70" style={{ height: `${h}%` }} />)}
        </div>
      </Panel>
    </>
  );
}

function StudentsView() {
  const rows = [["Aarav S.", "7-B", "Active"], ["Diya K.", "8-A", "Active"], ["Kabir M.", "6-C", "New admission"], ["Meera P.", "9-A", "Active"], ["Rohan T.", "10-B", "Active"]];
  return (
    <Panel title="Student records">
      <table className="w-full text-[10px]"><thead className="text-left text-muted-foreground"><tr><th className="py-1">Name</th><th>Class</th><th>Status</th></tr></thead>
        <tbody>{rows.map((r) => <tr key={r[0]} className="border-t"><td className="py-1.5 font-medium">{r[0]}</td><td>{r[1]}</td><td className="text-primary">{r[2]}</td></tr>)}</tbody></table>
    </Panel>
  );
}

function AttendanceView() {
  return (
    <div className="grid gap-2 md:grid-cols-2">
      <Panel title="Today — Class 7-B">
        <div className="grid grid-cols-8 gap-1">{Array.from({ length: 32 }).map((_, i) => <span key={i} className={cn("h-4 rounded-sm", [4, 13, 22].includes(i) ? "bg-warning/70" : "bg-success/70")} />)}</div>
        <p className="mt-2 text-[10px] text-muted-foreground">29 present · 3 absent</p>
      </Panel>
      <Panel title="Class-wise summary"><Bars /></Panel>
    </div>
  );
}

function FeesView() {
  return (
    <>
      <div className="grid grid-cols-3 gap-2"><Stat label="Expected" value="₹25.8L" sub="Term 2" /><Stat label="Collected" value="₹18.6L" sub="72%" /><Stat label="Outstanding" value="₹7.2L" sub="214 students" /></div>
      <Panel title="Recent payments" className="mt-2">
        {[["Aarav S.", "₹12,500"], ["Diya K.", "₹12,500"], ["Kabir M.", "₹6,250"]].map((r) => <div key={r[0]} className="flex justify-between border-t py-1.5 text-[10px] first:border-0"><span>{r[0]}</span><span className="font-medium">{r[1]}</span></div>)}
      </Panel>
    </>
  );
}

function NoticesView() {
  return <Panel title="Announcements"><ul className="space-y-2">{NOTICES.map((n) => <li key={n.t} className="rounded-md border p-2 text-[10px]"><div className="font-semibold">{n.t}</div><div className="text-muted-foreground">To: All parents · {n.d}</div></li>)}</ul></Panel>;
}

function SettingsView() {
  return (
    <Panel title="Roles & permissions">
      {[["Administrator", "Full access"], ["Accountant", "Fees only"], ["Teacher", "Attendance, students"], ["Front office", "Admissions"]].map((r) => <div key={r[0]} className="flex justify-between border-t py-1.5 text-[10px] first:border-0"><span className="font-medium">{r[0]}</span><span className="text-muted-foreground">{r[1]}</span></div>)}
    </Panel>
  );
}
