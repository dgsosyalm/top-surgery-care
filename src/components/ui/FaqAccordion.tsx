import { ChevronDownIcon } from "@/components/icons";
import { Reveal } from "@/components/ui/Reveal";
import type { FaqItem } from "@/data/faq";

export function FaqAccordion({
  items,
  className = "",
}: {
  items: readonly FaqItem[];
  className?: string;
}) {
  return (
    <div className={`divide-y divide-line border-y border-line ${className}`}>
      {items.map((item, index) => (
        <Reveal key={item.question} delay={index * 60}>
          <details className="group py-6">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-base font-medium text-ink marker:content-none">
              {item.question}
              <ChevronDownIcon className="h-4 w-4 shrink-0 text-ink-soft transition-transform duration-300 ease-[var(--ease-premium)] group-open:rotate-180" />
            </summary>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-soft">
              {item.answer}
            </p>
          </details>
        </Reveal>
      ))}
    </div>
  );
}
