import { useState, type FormEvent } from "react";
import { z } from "zod";
import { ArrowRight, Check } from "lucide-react";
import { SF_FONT } from "@/lib/typography";

/* ── Early access form ── */
const businessTypes = [
  "Sole proprietor / freelancer",
  "Retail or e-commerce",
  "Restaurant or hospitality",
  "Professional services",
  "Trades or construction",
  "Technology or startup",
  "Other",
];

const signupSchema = z.object({
  name: z.string().trim().min(1, { message: "Please enter your name" }).max(100),
  business: z.string().trim().min(1, { message: "Please enter your business name" }).max(120),
  email: z.string().trim().email({ message: "Enter a valid work email" }).max(255),
  industry: z.string().trim().min(1, { message: "Please select a business type" }).max(80),
});

export default function EarlyAccessForm() {
  const [form, setForm] = useState({ name: "", business: "", email: "", industry: "" });
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const parsed = signupSchema.safeParse(form);
    if (!parsed.success) {
      setError(parsed.error.issues[0].message);
      return;
    }
    setError(null);
    setDone(true);
  };

  const field =
    "w-full h-12 rounded-xl bg-white border border-black/10 px-4 text-[15px] font-medium text-black placeholder:text-black/40 focus:outline-none focus:border-black/40 transition-colors";

  if (done) {
    return (
      <div className="rounded-2xl bg-[#F6F5F2] p-8 lg:p-10 text-center">
        <div className="w-14 h-14 rounded-full bg-[#EB8F00]/15 flex items-center justify-center mx-auto">
          <Check className="w-7 h-7 text-[#EB8F00]" />
        </div>
        <h3 className="mt-6 text-2xl font-semibold tracking-tight text-black" style={{ fontFamily: SF_FONT }}>
          You're on the early access list.
        </h3>
        <p className="mt-4 text-base font-medium leading-relaxed text-black">
          {form.business} is in line for the first wave of Renda Business. We'll reach out to{" "}
          {form.email} as invitations open.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="rounded-2xl bg-[#F6F5F2] p-8 lg:p-10">
      <div className="grid sm:grid-cols-2 gap-4">
        <input
          className={field}
          placeholder="Your name"
          maxLength={100}
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          aria-label="Your name"
        />
        <input
          className={field}
          placeholder="Business name"
          maxLength={120}
          value={form.business}
          onChange={(e) => setForm({ ...form, business: e.target.value })}
          aria-label="Business name"
        />
        <input
          className={field}
          type="email"
          placeholder="Work email"
          maxLength={255}
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          aria-label="Work email"
        />
        <select
          className={field}
          value={form.industry}
          onChange={(e) => setForm({ ...form, industry: e.target.value })}
          aria-label="Business type"
        >
          <option value="">Business type</option>
          {businessTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

       {error && <p role="alert" className="mt-4 text-sm font-medium text-destructive">{error}</p>}

      <button
        type="submit"
        className="mt-6 w-full sm:w-auto inline-flex items-center justify-center gap-2 h-14 px-8 rounded-full bg-foreground text-background text-base font-semibold hover:bg-foreground/90 hover:-translate-y-0.5 transition-all duration-300"
      >
        Join the early access list
        <ArrowRight className="w-4 h-4" />
      </button>
      <p className="mt-4 text-sm font-medium text-black">
        No spam. We only use this to consider your business for the first invitations.
      </p>
    </form>
  );
}

