import { useState, type FormEvent } from "react";
import type { ZodType } from "zod";
import { AlertCircle, Loader2, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { sendEnquiry, validateResume, type EnquiryKind, type EnquiryResult } from "@/lib/enquiry";

export type FieldDef = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "url" | "textarea" | "select" | "file" | "number";
  required?: boolean;
  options?: { value: string; label: string }[];
  placeholder?: string;
  full?: boolean;
  hint?: string;
};

const inputCls =
  "w-full rounded-md border border-input bg-background px-3.5 py-2.5 text-sm outline-none transition-shadow placeholder:text-muted-foreground/70 focus:border-electric focus:ring-2 focus:ring-ring/30 aria-[invalid=true]:border-destructive";

export function EnquiryForm({
  kind,
  fields,
  schema,
  submitLabel,
  initial = {},
  kindFrom,
}: {
  kind: EnquiryKind;
  fields: FieldDef[];
  schema: ZodType;
  submitLabel: string;
  initial?: Record<string, string>;
  kindFrom?: string;
}) {
  const [values, setValues] = useState<Record<string, string>>(() => ({
    ...Object.fromEntries(fields.map((f) => [f.name, f.options?.[0]?.value ?? ""])),
    ...initial,
    website: "",
  }));
  const [file, setFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [pending, setPending] = useState(false);
  const [result, setResult] = useState<EnquiryResult | null>(null);

  const set = (k: string, v: string) => setValues((s) => ({ ...s, [k]: v }));

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const parsed = schema.safeParse(values);
    const errs: Record<string, string> = {};
    if (!parsed.success) for (const i of parsed.error.issues) errs[String(i.path[0])] ??= i.message;
    const fileErr = fields.some((f) => f.type === "file") ? validateResume(file) : null;
    if (fileErr) errs["resume"] = fileErr;
    setErrors(errs);
    if (Object.keys(errs).length) {
      document.getElementById(`f-${Object.keys(errs)[0]}`)?.focus();
      return;
    }
    setPending(true);
    const k = (kindFrom ? (values[kindFrom] as EnquiryKind) : kind) ?? kind;
    const data = { ...values, ...(file ? { resume: `${file.name} (attach manually)` } : {}) };
    setResult(await sendEnquiry(k, data));
    setPending(false);
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
      {/* Honeypot — hidden from people, visible to bots */}
      <div aria-hidden="true" className="absolute -left-[9999px]">
        <label>Website<input tabIndex={-1} autoComplete="off" value={values["website"]} onChange={(e) => set("website", e.target.value)} /></label>
      </div>
      {fields.map((f) => {
        const id = `f-${f.name}`;
        const err = errors[f.name];
        const common = { id, name: f.name, "aria-invalid": !!err, "aria-describedby": err ? `${id}-err` : undefined, required: f.required };
        return (
          <div key={f.name} className={cn("flex flex-col gap-1.5", (f.full || f.type === "textarea") && "sm:col-span-2")}>
            <label htmlFor={id} className="text-sm font-medium text-midnight">
              {f.label} {f.required ? <span className="text-destructive">*</span> : <span className="text-xs font-normal text-muted-foreground">(optional)</span>}
            </label>
            {f.type === "textarea" ? (
              <textarea {...common} rows={5} className={inputCls} placeholder={f.placeholder} value={values[f.name]} onChange={(e) => set(f.name, e.target.value)} />
            ) : f.type === "select" ? (
              <select {...common} className={inputCls} value={values[f.name]} onChange={(e) => set(f.name, e.target.value)}>
                {f.options?.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
              </select>
            ) : f.type === "file" ? (
              <input {...common} type="file" accept=".pdf,.doc,.docx" className={cn(inputCls, "file:mr-3 file:rounded file:border-0 file:bg-ice file:px-3 file:py-1 file:text-primary")} onChange={(e) => setFile(e.target.files?.[0] ?? null)} />
            ) : (
              <input {...common} type={f.type === "number" ? "text" : f.type ?? "text"} inputMode={f.type === "number" ? "numeric" : undefined} className={inputCls} placeholder={f.placeholder} value={values[f.name]} onChange={(e) => set(f.name, e.target.value)} />
            )}
            {f.hint && !err && <p className="text-xs text-muted-foreground">{f.hint}</p>}
            {err && <p id={`${id}-err`} className="flex items-center gap-1 text-xs text-destructive"><AlertCircle className="h-3.5 w-3.5" />{err}</p>}
          </div>
        );
      })}

      <div className="sm:col-span-2">
        <Button type="submit" variant="brand" size="lg" disabled={pending}>
          {pending && <Loader2 className="animate-spin" />} {submitLabel}
        </Button>
      </div>

      {result && (
        <div role="status" className="sm:col-span-2 rounded-lg border bg-ice p-4 text-sm">
          {result.status === "sent" && <p className="font-medium text-midnight">Thank you — your message has been sent.</p>}
          {result.status === "error" && <p className="text-destructive">{result.message}</p>}
          {result.status === "not_configured" && (
            <>
              <p className="font-medium text-midnight">Your details look good, but online submission isn't connected yet.</p>
              <p className="mt-1 text-muted-foreground">Nothing has been sent. Please email us directly — we've prepared the message for you{file ? " (remember to attach your resume)" : ""}.</p>
              <Button asChild variant="default" size="sm" className="mt-3">
                <a href={result.mailto}><Mail /> Open email to info@briznova.com</a>
              </Button>
            </>
          )}
        </div>
      )}
    </form>
  );
}
