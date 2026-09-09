import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/ui/LegalPageLayout";
import { medicalDisclaimerContent } from "@/content/legalPages";
import { getLocale } from "@/i18n/getLocale";

const PAGE_PATH = "/medical-disclaimer";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const copy = medicalDisclaimerContent[locale];

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

export default async function MedicalDisclaimerPage() {
  const locale = await getLocale();
  const copy = medicalDisclaimerContent[locale];

  return <LegalPageLayout copy={copy} />;
}
