import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { VideoStoryRow } from "@/components/ui/video-stories";
import { homeContent } from "@/content/home";
import { videoStories } from "@/data/videos";
import { getLocale } from "@/i18n/getLocale";

export async function VideoStories() {
  const locale = await getLocale();
  const { videoStories: content } = homeContent[locale];

  return (
    <section className="border-b border-line" aria-label={content.heading}>
      <Container className="py-16 md:py-24">
        <Reveal>
          <SectionHeading eyebrow={content.eyebrow} title={content.heading} description={content.body} />
        </Reveal>

        <Reveal delay={100} className="mt-12">
          <VideoStoryRow items={videoStories} />
        </Reveal>
      </Container>
    </section>
  );
}
