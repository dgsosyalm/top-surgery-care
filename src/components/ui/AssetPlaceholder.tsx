import { ImagePendingIcon } from "@/components/icons";

export function AssetPlaceholder({
  label,
  className = "",
  ratio = "aspect-[4/5]",
}: {
  label: string;
  className?: string;
  ratio?: string;
}) {
  return (
    <div
      className={`${ratio} flex flex-col items-center justify-center gap-3 rounded-[2px] border border-dashed border-line bg-paper-deep px-6 text-center ${className}`}
      role="img"
      aria-label={label}
    >
      <ImagePendingIcon className="h-7 w-7 text-ink-faint" />
      <p className="text-xs font-medium uppercase tracking-[0.1em] text-ink-faint">
        {label}
      </p>
    </div>
  );
}
