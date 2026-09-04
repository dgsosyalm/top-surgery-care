import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { BgradientAnim } from "@/components/ui/soft-gradient-background-animation";
import { LocaleProvider } from "@/i18n/LocaleProvider";
import { getLocale } from "@/i18n/getLocale";
import { siteConfig } from "@/lib/site";
import { uiContent } from "@/content/ui";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz"],
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const { rootMetadata } = uiContent[locale];

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: rootMetadata.defaultTitle,
      template: `%s | ${rootMetadata.titleSuffix}`,
    },
    description: rootMetadata.description,
    alternates: {
      canonical: "/",
    },
    openGraph: {
      title: rootMetadata.defaultTitle,
      description: rootMetadata.description,
      url: siteConfig.url,
      siteName: siteConfig.name,
      locale: rootMetadata.ogLocale,
      type: "website",
      images: [
        {
          url: "/images/logo/top-surgery-care-logo.jpeg",
          width: 1250,
          height: 1250,
          alt: rootMetadata.ogImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary",
      title: rootMetadata.defaultTitle,
      description: rootMetadata.description,
    },
  };
}

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const locale = await getLocale();
  const { skipToContent } = uiContent[locale];

  return (
    <html
      lang={locale}
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-paper text-ink">
        <LocaleProvider initialLocale={locale}>
          <BgradientAnim className="fixed inset-0 -z-10 pointer-events-none" />
          <a href="#main-content" className="skip-link">
            {skipToContent}
          </a>
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
        </LocaleProvider>
      </body>
    </html>
  );
}
