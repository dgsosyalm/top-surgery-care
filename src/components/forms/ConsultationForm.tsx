"use client";

import type { FormEvent, ReactNode } from "react";
import { siteConfig } from "@/lib/site";
import { useLocale } from "@/i18n/LocaleProvider";
import { uiContent } from "@/content/ui";

const inputClasses =
  "w-full border border-line bg-paper px-4 py-3 text-sm text-ink placeholder:text-ink-faint transition-colors focus-visible:outline-focus";

export function ConsultationForm() {
  const locale = useLocale();
  const t = uiContent[locale].consultationForm;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const country = String(data.get("country") ?? "").trim();
    const contactMethod = String(data.get("contact-method") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const lines: string[] = [t.whatsappIntro, `${t.whatsappNameLabel}: ${name}`];
    if (country) lines.push(`${t.whatsappCountryLabel}: ${country}`);
    if (contactMethod) lines.push(`${t.whatsappContactMethodLabel}: ${contactMethod}`);
    lines.push("", t.whatsappMessageLabel, message);

    const whatsappUrl = `${siteConfig.contact.whatsappHref}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="border border-line bg-paper p-6 md:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={t.fullName} htmlFor="name">
          <input id="name" name="name" type="text" autoComplete="name" required className={inputClasses} />
        </Field>
        <Field label={t.country} htmlFor="country">
          <input id="country" name="country" type="text" autoComplete="country-name" className={inputClasses} />
        </Field>
        <Field label={t.preferredContactMethod} htmlFor="contact-method" className="sm:col-span-2">
          <select id="contact-method" name="contact-method" className={inputClasses} defaultValue="whatsapp">
            <option value="whatsapp">{t.contactOptionWhatsapp}</option>
            <option value="email">{t.contactOptionEmail}</option>
          </select>
        </Field>
      </div>

      <Field label={t.message} htmlFor="message" className="mt-5">
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className={inputClasses}
          placeholder={t.messagePlaceholder}
        />
      </Field>

      <label className="mt-5 flex items-start gap-3 text-xs leading-relaxed text-ink-soft">
        <input type="checkbox" name="consent" className="mt-0.5 h-4 w-4 shrink-0 accent-ink" />
        <span>
          {t.consentPrefix}
          <a href="/privacy-policy" className="underline underline-offset-2 hover:text-ink">
            {t.consentLinkLabel}
          </a>
          {t.consentSuffix}
        </span>
      </label>

      <button
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center rounded-[2px] border border-ink bg-ink px-6 py-3 text-sm font-medium text-paper transition-all duration-200 ease-[var(--ease-premium)] hover:-translate-y-0.5 hover:bg-navy focus-visible:outline-focus sm:w-auto"
      >
        {t.submitLabel}
      </button>

      <p className="mt-4 text-xs text-ink-faint">
        {t.submitNote}
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
