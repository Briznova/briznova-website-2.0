import { z } from "zod";

/**
 * Enquiry service abstraction.
 * No backend / email service is connected yet. When one is, implement `send`
 * (e.g. a server function that emails info@briznova.com) and return "sent".
 * Until then we return "not_configured" so the UI never fakes a success.
 */
export type EnquiryKind = "general" | "partnership" | "demo" | "careers";
export type EnquiryResult = { status: "sent" } | { status: "not_configured"; mailto: string } | { status: "error"; message: string };

const phone = z
  .string()
  .trim()
  .max(20)
  .regex(/^[+\d][\d\s-]{6,18}$/, "Enter a valid phone number");
const optionalPhone = z.union([z.literal(""), phone]);

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: optionalPhone,
  organisation: z.string().trim().min(1, "Organisation is required").max(150),
  enquiryType: z.enum(["general", "partnership", "demo", "careers"]),
  message: z.string().trim().min(10, "Please add a little more detail").max(2000),
});

export const demoSchema = z.object({
  school: z.string().trim().min(1, "School name is required").max(150),
  name: z.string().trim().min(1, "Contact name is required").max(100),
  designation: z.string().trim().min(1, "Designation is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone,
  city: z.string().trim().min(1, "City is required").max(100),
  students: z.union([z.literal(""), z.string().regex(/^\d{1,6}$/, "Enter a number")]),
  message: z.string().trim().max(2000),
});

export const RESUME_MAX_BYTES = 5 * 1024 * 1024;
export const RESUME_TYPES = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];

export const careersSchema = z.object({
  name: z.string().trim().min(1, "Full name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  role: z.string().trim().min(1, "Role of interest is required").max(100),
  link: z.union([z.literal(""), z.string().trim().url("Enter a full URL (https://…)").max(300)]),
  message: z.string().trim().max(2000),
});

export function validateResume(file: File | null | undefined): string | null {
  if (!file) return null;
  if (!RESUME_TYPES.includes(file.type)) return "Resume must be a PDF or Word document";
  if (file.size > RESUME_MAX_BYTES) return "Resume must be 5 MB or smaller";
  return null;
}

const SUBJECTS: Record<EnquiryKind, string> = {
  general: "General enquiry",
  partnership: "Business partnership",
  demo: "DASHIFY school demo request",
  careers: "Careers enquiry",
};

export async function sendEnquiry(kind: EnquiryKind, data: Record<string, string>): Promise<EnquiryResult> {
  // Spam protection: honeypot field must be empty.
  if (data["website"]) return { status: "error", message: "Submission rejected." };
  const body = Object.entries(data)
    .filter(([k, v]) => k !== "website" && v)
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n");
  const mailto = `mailto:info@briznova.com?subject=${encodeURIComponent(SUBJECTS[kind])}&body=${encodeURIComponent(body)}`;
  return { status: "not_configured", mailto };
}
