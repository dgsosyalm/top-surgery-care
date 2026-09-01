import { WhatsAppIcon } from "@/components/icons";
import { siteConfig } from "@/lib/site";

export function WhatsAppButton() {
  return (
    <a
      href={siteConfig.contact.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Top Surgery Care on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-ink text-paper shadow-[0_8px_24px_rgba(20,23,31,0.25)] transition-transform duration-200 ease-[var(--ease-premium)] hover:-translate-y-0.5 hover:bg-navy focus-visible:outline-focus"
    >
      <WhatsAppIcon className="h-6 w-6" />
    </a>
  );
}
