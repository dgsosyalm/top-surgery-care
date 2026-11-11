import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { GoogleAnalytics } from "@/components/layout/GoogleAnalytics";
import { WhatsAppClickTracking } from "@/components/layout/WhatsAppClickTracking";
import { OnlyContactChat } from "@/components/layout/OnlyContactChat";
import { BgradientAnim } from "@/components/ui/soft-gradient-background-animation";
import { LocaleProvider } from "@/i18n/LocaleProvider";
import { getLocale } from "@/i18n/getLocale";
import { siteConfig } from "@/lib/site";
import { uiContent } from "@/content/ui";
import "./globals.css";

// Same visibility rule as Reveal.tsx's IntersectionObserver
// (rootMargin "0px 0px -40px 0px").
const REVEAL_NOW_SCRIPT = `(function(){var h=window.innerHeight-40;var els=document.querySelectorAll("#main-content .reveal");for(var i=0;i<els.length;i++){var r=els[i].getBoundingClientRect();if(r.top<h&&r.bottom>0&&r.width>0)els[i].setAttribute("data-reveal-now","")}})();`;

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
          <script
            // Runs while the HTML is still parsing (no bundle needed): tags
            // the Reveal blocks already inside the first viewport so CSS can
            // fade them in immediately. Without this, a page's <h1> sits at
            // opacity:0 until the JS bundle downloads and hydrates, which on
            // a slow phone connection is the main cause of the late first
            // render. See `.reveal[data-reveal-now]` in globals.css.
            dangerouslySetInnerHTML={{ __html: REVEAL_NOW_SCRIPT }}
          />
          <Footer />
          <WhatsAppButton />
        </LocaleProvider>
        <GoogleAnalytics />
        <WhatsAppClickTracking />
        <OnlyContactChat />
      </body>
    </html>
  );
}
