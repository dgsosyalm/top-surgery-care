import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import {
  WhatsAppIcon,
  InstagramIcon,
  YouTubeIcon,
  RedditIcon,
  MailIcon,
} from "@/components/icons";
import { siteConfig } from "@/lib/site";
import { FooterCertificates } from "@/components/layout/FooterCertificates";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { getLocale } from "@/i18n/getLocale";
import { uiContent } from "@/content/ui";

export async function Footer() {
  const year = new Date().getFullYear();
  const locale = await getLocale();
  const { nav, footer } = uiContent[locale];

  return (
    <footer className="border-t border-navy-line bg-navy text-paper">
      <Container className="grid gap-12 py-16 md:grid-cols-[1.3fr_1fr_1fr_1fr] md:py-20">
        <div className="max-w-xs">
          <Link href="/" className="flex items-center gap-3">
            <span className="relative block h-14 w-14 shrink-0 overflow-hidden rounded-full">
              <Image
                src="/images/logo/top-surgery-care-logo.jpeg"
                alt="Top Surgery Care logo"
                fill
                sizes="56px"
                className="object-cover"
              />
            </span>
            <span className="font-display text-xl leading-none text-paper">
              Top Surgery Care
            </span>
          </Link>
          <p className="mt-5 text-sm italic text-navy-soft">{footer.tagline}</p>
          <FooterCertificates />
        </div>

        <FooterColumn title={footer.exploreHeading} links={nav.primary} />

        <FooterColumn title={footer.legalHeading} links={nav.legal} />

        <div>
          <h3 className="text-xs font-medium uppercase tracking-[0.14em] text-navy-soft">
            {footer.contactHeading}
          </h3>
          <ul className="mt-5 space-y-3">
            <li>
              <Link
                href={siteConfig.contact.pageHref}
                className="flex items-center gap-2.5 text-sm text-paper/90 transition-colors hover:text-paper"
              >
                <MailIcon className="h-4 w-4" /> {footer.contactPageLabel}
              </Link>
            </li>
            <li>
              <a
                href={siteConfig.contact.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-paper/90 transition-colors hover:text-paper"
              >
                <WhatsAppIcon className="h-4 w-4" /> {footer.whatsappLabel}
              </a>
            </li>
            <li>
              <a
                href={siteConfig.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-paper/90 transition-colors hover:text-paper"
              >
                <InstagramIcon className="h-4 w-4" /> {footer.instagramLabel}
              </a>
            </li>
            <li>
              <a
                href={siteConfig.contact.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-paper/90 transition-colors hover:text-paper"
              >
                <YouTubeIcon className="h-4 w-4" /> {footer.youtubeLabel}
              </a>
            </li>
            <li>
              <a
                href={siteConfig.contact.reddit}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-paper/90 transition-colors hover:text-paper"
              >
                <RedditIcon className="h-4 w-4" /> {footer.redditLabel}
              </a>
            </li>
            {siteConfig.contact.email && (
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-2.5 text-sm text-paper/90 transition-colors hover:text-paper"
                >
                  <MailIcon className="h-4 w-4" /> {siteConfig.contact.email}
                </a>
              </li>
            )}
          </ul>

          <LanguageSwitcher className="mt-6 text-navy-soft" />
        </div>
      </Container>

      <div className="border-t border-navy-line">
        <Container className="flex flex-col gap-2 py-6 text-xs text-navy-soft md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {siteConfig.name}. {footer.copyrightSuffix}
          </p>
          <p>{footer.strapline}</p>
        </Container>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-xs font-medium uppercase tracking-[0.14em] text-navy-soft">
        {title}
      </h3>
      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-sm text-paper/90 transition-colors hover:text-paper"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
