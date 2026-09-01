"use client";

import type { FormEvent, ReactNode } from "react";
import { siteConfig } from "@/lib/site";

const inputClasses =
  "w-full border border-line bg-paper px-4 py-3 text-sm text-ink placeholder:text-ink-faint transition-colors focus-visible:outline-focus";

export function ConsultationForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const country = String(data.get("country") ?? "").trim();
    const contactMethod = String(data.get("contact-method") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const lines: string[] = [
      "New consultation request from topsurgerycare.com",
      `Name: ${name}`,
      `Email: ${email}`,
    ];
    if (country) lines.push(`Country: ${country}`);
    if (contactMethod) lines.push(`Preferred contact method: ${contactMethod}`);
    lines.push("", "Message:", message);

    const whatsappUrl = `${siteConfig.contact.whatsappHref}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="border border-line bg-paper p-6 md:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" htmlFor="name">
          <input id="name" name="name" type="text" autoComplete="name" required className={inputClasses} />
        </Field>
        <Field label="Email" htmlFor="email">
          <input id="email" name="email" type="email" autoComplete="email" required className={inputClasses} />
        </Field>
        <Field label="Country" htmlFor="country">
          <input id="country" name="country" type="text" autoComplete="country-name" className={inputClasses} />
        </Field>
        <Field label="Preferred contact method" htmlFor="contact-method">
          <select id="contact-method" name="contact-method" className={inputClasses} defaultValue="whatsapp">
            <option value="whatsapp">WhatsApp</option>
            <option value="email">Email</option>
          </select>
        </Field>
      </div>

      <Field label="Message" htmlFor="message" className="mt-5">
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className={inputClasses}
          placeholder="Tell us a little about what you're looking for."
        />
      </Field>

      <label className="mt-5 flex items-start gap-3 text-xs leading-relaxed text-ink-soft">
        <input type="checkbox" name="consent" className="mt-0.5 h-4 w-4 shrink-0 accent-ink" />
        <span>
          I consent to Top Surgery Care contacting me about my inquiry. See our{" "}
          <a href="/privacy-policy" className="underline underline-offset-2 hover:text-ink">
            Privacy Policy
          </a>{" "}
          for how your information is handled.
        </span>
      </label>

      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center rounded-[2px] border border-ink bg-ink px-6 py-3 text-sm font-medium text-paper transition-all duration-200 ease-[var(--ease-premium)] hover:-translate-y-0.5 hover:bg-navy focus-visible:outline-focus sm:w-auto"
      >
        Request a Consultation
      </button>

      <p className="mt-4 text-xs text-ink-faint">
        Submitting opens WhatsApp with your details pre-filled, ready to send.
      </p>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
  className = "",
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="mb-2 block text-xs font-medium uppercase tracking-[0.08em] text-ink-soft">
        {label}
      </label>
      {children}
    </div>
  );
}
