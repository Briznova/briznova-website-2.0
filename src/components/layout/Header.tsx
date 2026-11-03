import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NAV } from "@/data/site";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setOpen(false), [path]);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  const isActive = (to: string) => (to === "/" ? path === "/" : path.startsWith(to));
  const items = NAV.filter((n) => !["Technology", "Industries"].includes(n.label));

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors",
        scrolled ? "border-border bg-background/90 backdrop-blur-lg" : "border-transparent bg-background",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link to="/" aria-label="BRIZNOVA home">
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {items.map((item) =>
            item.children ? (
              <div key={item.label} className="group relative">
                <Link
                  to={item.to}
                  className={cn(
                    "flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-primary",
                    isActive(item.to) ? "text-primary" : "text-foreground/80",
                  )}
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                </Link>
                <div className="invisible absolute left-0 top-full w-72 pt-2 opacity-0 transition-all group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                  <div className="rounded-lg border bg-popover p-2 shadow-lift">
                    {item.children.map((c) => (
                      <Link key={c.label} to={c.to} className="block rounded-md px-3 py-2.5 hover:bg-accent">
                        <div className="text-sm font-semibold text-foreground">{c.label}</div>
                        {c.desc && <div className="text-xs text-muted-foreground">{c.desc}</div>}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                to={item.to}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-primary",
                  isActive(item.to) ? "text-primary" : "text-foreground/80",
                )}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button asChild variant="ghost" size="sm">
            <Link to="/products/dashify">Explore DASHIFY</Link>
          </Button>
          <Button asChild variant="brand" size="sm">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>

        <button
          className="rounded-md p-2 lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t bg-background px-5 pb-6 pt-2 lg:hidden">
          {NAV.map((item) => (
            <div key={item.label}>
              <Link
                to={item.to}
                className={cn("block border-b py-3 text-base font-medium", isActive(item.to) && "text-primary")}
              >
                {item.label}
              </Link>
              {item.children?.filter((c) => c.to !== item.to).map((c) => (
                <Link key={c.label} to={c.to} className="block border-b py-2.5 pl-4 text-sm text-muted-foreground">
                  {c.label}
                </Link>
              ))}
            </div>
          ))}
          <div className="mt-4 grid gap-2">
            <Button asChild variant="outline"><Link to="/products/dashify">Explore DASHIFY</Link></Button>
            <Button asChild variant="brand"><Link to="/contact">Contact Us</Link></Button>
          </div>
        </nav>
      )}
    </header>
  );
}
