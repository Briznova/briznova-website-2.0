import { cn } from "@/lib/utils";

/**
 * TEMPORARY BRIZNOVA mark — no official logo file was supplied.
 * Replace the <svg> + wordmark with the official logo asset when available.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={cn("h-8 w-8", className)} aria-hidden="true">
      <defs>
        <linearGradient id="bz-g" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="var(--primary)" />
          <stop offset="0.6" stopColor="var(--electric)" />
          <stop offset="1" stopColor="var(--cyan)" />
        </linearGradient>
      </defs>
      <path d="M4 30 Q20 6 36 30" fill="none" stroke="url(#bz-g)" strokeWidth="3.2" strokeLinecap="round" />
      <circle cx="4" cy="30" r="2.6" fill="var(--electric)" />
      <circle cx="36" cy="30" r="2.6" fill="var(--cyan)" />
      <path d="M20 9 L21.6 15.4 L28 17 L21.6 18.6 L20 25 L18.4 18.6 L12 17 L18.4 15.4 Z" fill="url(#bz-g)" />
    </svg>
  );
}

export function Logo({ tone = "dark", className }: { tone?: "dark" | "light"; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark />
      <span
        className={cn(
          "font-display text-lg font-bold tracking-[0.14em]",
          tone === "light" ? "text-on-dark" : "text-midnight",
        )}
      >
        BRIZNOVA
      </span>
    </span>
  );
}

export function DashifyWordmark({ tone = "dark", className }: { tone?: "dark" | "light"; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2 font-display font-bold tracking-tight", className)}>
      <span className="grid h-7 w-7 place-items-center rounded-md bg-brand text-xs text-primary-foreground">D</span>
      <span className={tone === "light" ? "text-on-dark" : "text-midnight"}>DASHIFY</span>
    </span>
  );
}
