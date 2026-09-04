import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ConsultationForm } from "@/components/forms/ConsultationForm";
import {
  WhatsAppIcon,
  InstagramIcon,
  YouTubeIcon,
  RedditIcon,
  MailIcon,
} from "@/components/icons";
import { homeContent } from "@/content/home";
import { contactPageContent } from "@/content/contactPage";
import { siteConfig } from "@/lib/site";
import { getLocale } from "@/i18n/getLocale";

const PAGE_PATH = "/contact/";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const copy = contactPageContent[locale];

  return {
    title: copy.metaTitle,
    description: copy.metaDescription,
    alternates: {
      canonical: PAGE_PATH,
    },
    openGraph: {
      title: copy.metaTitle,
      description: copy.metaDescription,
      url: PAGE_PATH,
      type: "website",
    },
  };
}

export default async function ContactPage() {
  const locale = await getLocale();
  const copy = contactPageContent[locale];
  const { finalCta } = homeContent[locale];
  const { methodLabels } = copy;

  const contactMethods = [
    {
      label: methodLabels.whatsapp,
      display: siteConfig.contact.whatsappDisplay,
      href: siteConfig.contact.whatsappHref,
      icon: WhatsAppIcon,
    },
    {
      label: methodLabels.instagram,
      display: "@topsurgerycare",
      href: siteConfig.contact.instagram,
      icon: InstagramIcon,
    },
    {
      label: methodLabels.youtube,
      display: "@topsurgeryturkey",
      href: siteConfig.contact.youtube,
      icon: YouTubeIcon,
    },
    {
      label: methodLabels.reddit,
      display: "r/topsurgeryturkey",
      href: siteConfig.contact.reddit,
      icon: RedditIcon,
    },
    ...(siteConfig.contact.email
      ? [
          {
            label: methodLabels.email,
            display: siteConfig.contact.email,
            href: `mailto:${siteConfig.contact.email}`,
            icon: MailIcon,
          },
        ]
      : []),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: locale === "de" ? "Startseite" : "Home", item: siteConfig.url },
              {
                "@type": "ListItem",
                position: 2,
                name: copy.metaTitle,
                item: `${siteConfig.url}${PAGE_PATH}`,
              },
            ],
          }),
        }}
      />

      {/* Intro */}
      <section className="border-b border-line">
        <Container className="py-20 md:py-28">
          <Reveal>
            <p className="mb-4 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.16em] text-ink-soft">
              <span className="h-px w-8 bg-linear-to-r from-accent-rose via-accent-violet to-accent-sky" />
              {copy.intro.eyebrow}
            </p>
            <h1 className="font-display text-display font-medium leading-[1.05] text-ink text-balance">
              {copy.intro.heading}
            </h1>
            <p className="mt-6 max-w-xl text-lead text-ink-soft text-pretty">
              {finalCta.body}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* Contact methods + form */}
      <section className="bg-paper-alt/45">
        <Container className="grid gap-14 py-20 md:py-28 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)] lg:gap-20">
          <Reveal>
            <h2 className="font-display text-h3 font-medium text-ink">{copy.methods.heading}</h2>
            <ul className="mt-8 space-y-5">
              {contactMethods.map((method) => (
                <li key={method.label}>
                  <a
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 text-ink transition-colors hover:text-ink-soft"
                  >
                    <method.icon className="h-5 w-5 shrink-0 text-ink-faint transition-colors group-hover:text-ink" />
                    <span>
                      <span className="block text-xs font-medium uppercase tracking-[0.12em] text-ink-faint">
                        {method.label}
                      </span>
                      <span className="text-base">{method.display}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <h2 className="font-display text-h3 font-medium text-ink">{copy.form.heading}</h2>
            <div className="mt-8">
              <ConsultationForm />
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
