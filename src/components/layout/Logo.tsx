import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <img
      src="/briznova-icon.png"
      alt=""
      aria-hidden="true"
      className={cn("h-8 w-8 object-contain", className)}
    />
  );
}

export function Logo({
  tone = "dark",
  className,
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <img
      src={tone === "light" ? "/briznova-logo-light.png" : "/briznova-logo.png"}
      alt="BRIZNOVA"
      className={cn("h-8 w-auto object-contain", className)}
    />
  );
}

export function DashifyWordmark({
  tone = "dark",
  className,
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 font-display font-bold tracking-tight",
        className,
      )}
    >
      <span className="grid h-7 w-7 place-items-center rounded-md bg-brand text-xs text-primary-foreground">
        D
      </span>
      <span className={tone === "light" ? "text-on-dark" : "text-midnight"}>DASHIFY</span>
    </span>
  );
}
