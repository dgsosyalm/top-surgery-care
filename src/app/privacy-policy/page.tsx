import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/ui/LegalPageLayout";
import { privacyPolicyContent } from "@/content/legalPages";
import { getLocale } from "@/i18n/getLocale";

const PAGE_PATH = "/privacy-policy";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const copy = privacyPolicyContent[locale];

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

export default async function PrivacyPolicyPage() {
  const locale = await getLocale();
  const copy = privacyPolicyContent[locale];

  return <LegalPageLayout copy={copy} />;
}
