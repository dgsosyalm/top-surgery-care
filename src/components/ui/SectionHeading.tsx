type Align = "left" | "center";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  as: Heading = "h2",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: Align;
  as?: "h1" | "h2";
}) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p
          className={`mb-4 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.16em] text-ink-soft ${
            align === "center" ? "justify-center" : ""
          }`}
        >
          <span className="h-px w-8 bg-linear-to-r from-accent-rose via-accent-violet to-accent-sky" />
          {eyebrow}
        </p>
      )}
      <Heading className="font-display text-h2 font-medium leading-[1.1] text-ink text-balance">
        {title}
      </Heading>
      {description && (
        <p className="mt-4 text-lead text-ink-soft text-pretty">{description}</p>
      )}
    </div>
  );
}
