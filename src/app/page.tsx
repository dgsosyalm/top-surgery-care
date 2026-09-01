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

export default function Home() {
  return (
    <>
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
