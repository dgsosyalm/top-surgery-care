import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { WhatsAppIcon, ArrowRightIcon } from "@/components/icons";
import { ConsultationForm } from "@/components/forms/ConsultationForm";
import { homeContent } from "@/content/home";
import { siteConfig } from "@/lib/site";

export function FinalCta() {
  const { finalCta } = homeContent;

  return (
    <section className="bg-navy text-paper" aria-label={finalCta.eyebrow}>
      <Container className="grid gap-14 py-20 md:py-28 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)] lg:gap-20">
        <Reveal>
          <p className="mb-4 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.16em] text-navy-soft">
            <span className="h-px w-8 bg-linear-to-r from-accent-rose via-accent-violet to-accent-sky" />
            {finalCta.eyebrow}
          </p>
          <h2 className="font-display text-h2 font-medium leading-[1.1] text-paper text-balance">
            {finalCta.heading}
          </h2>
          <p className="mt-6 max-w-md text-lead text-navy-soft text-pretty">{finalCta.body}</p>

          <div className="mt-8 flex flex-col items-start gap-5 md:gap-6 lg:gap-8">
            <Button
              href={siteConfig.contact.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              variant="invert"
              size="lg"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Message on WhatsApp
            </Button>

            <Link
              href={siteConfig.contact.pageHref}
              className="group inline-flex items-center gap-2 text-sm font-medium text-paper transition-colors hover:text-navy-soft"
            >
              See every way to reach us
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 ease-[var(--ease-premium)] group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <ConsultationForm />
        </Reveal>
      </Container>
    </section>
  );
}
