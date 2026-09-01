type ClassValue = string | number | null | boolean | undefined | ClassValue[];

function flatten(value: ClassValue): string {
  if (!value) return "";
  if (Array.isArray(value)) return value.map(flatten).filter(Boolean).join(" ");
  return String(value);
}

export function cn(...inputs: ClassValue[]): string {
  return inputs.map(flatten).filter(Boolean).join(" ");
}
