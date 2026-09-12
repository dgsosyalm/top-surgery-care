import { Hero } from "@/components/ui/Hero";
import { PatientCoordination } from "@/components/sections/PatientCoordination";
import { DoctorIntro } from "@/components/sections/DoctorIntro";
import { TopSurgeryOverview } from "@/components/sections/TopSurgeryOverview";
import { SurgicalApproach } from "@/components/sections/SurgicalApproach";
import { PatientJourney } from "@/components/sections/PatientJourney";
import { AffordableCare } from "@/components/sections/AffordableCare";
import { VideoStories } from "@/components/sections/VideoStories";
import { ResultsPreview } from "@/components/sections/ResultsPreview";
import { PatientStories } from "@/components/sections/PatientStories";
import { FaqPreview } from "@/components/sections/FaqPreview";
import { FinalCta } from "@/components/sections/FinalCta";
import { siteConfig } from "@/lib/site";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        // Only already-approved facts (name/url/logo/social profiles, all
        // from siteConfig) — helps Google associate this site with the
        // "Top Surgery Care" brand name/logo for branded queries. No
        // address, rating, or other unverified field is included.
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: siteConfig.name,
            url: siteConfig.url,
            logo: `${siteConfig.url}/images/logo/top-surgery-care-logo.jpeg`,
            sameAs: [siteConfig.contact.instagram, siteConfig.contact.youtube, siteConfig.contact.reddit],
          }),
        }}
      />
      <Hero />
      <PatientCoordination />
      <DoctorIntro />
      <TopSurgeryOverview />
      <SurgicalApproach />
      <AffordableCare />
      <PatientJourney />
      <VideoStories />
      <ResultsPreview />
      <PatientStories />
      <FaqPreview />
      <FinalCta />
    </>
  );
}
