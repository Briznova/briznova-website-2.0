import { describe, expect, it } from "vitest";
import { sendEnquiry, validateResume, demoSchema } from "@/lib/enquiry";

describe("enquiry rules", () => {
  it("does not report a sent message when no backend is connected", async () => {
    const r = await sendEnquiry("general", { name: "A", website: "" });
    expect(r.status).toBe("not_configured");
  });
  it("rejects honeypot-filled submissions", async () => {
    expect((await sendEnquiry("general", { website: "spam" })).status).toBe("error");
  });
  it("rejects resumes over 5 MB", () => {
    const f = new File([new Uint8Array(5 * 1024 * 1024 + 1)], "cv.pdf", { type: "application/pdf" });
    expect(validateResume(f)).toMatch(/5 MB/);
  });
  it("rejects non-PDF/Word resumes", () => {
    expect(validateResume(new File(["x"], "cv.png", { type: "image/png" }))).not.toBeNull();
  });
  it("requires a valid phone on demo requests", () => {
    const base = { school: "S", name: "N", designation: "P", email: "a@b.co", city: "C", students: "", message: "" };
    expect(demoSchema.safeParse({ ...base, phone: "abc" }).success).toBe(false);
    expect(demoSchema.safeParse({ ...base, phone: "+91 98765 43210" }).success).toBe(true);
  });
});
