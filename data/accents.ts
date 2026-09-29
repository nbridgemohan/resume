// Tailwind needs full class names at build time, so each accent spells them out.
// Accents are used sparingly: a dot, an icon tint and a soft panel behind product visuals.
export type Accent = "blue" | "purple" | "green" | "indigo";

export const accents: Record<Accent, { dot: string; icon: string; panel: string; glow: string }> = {
  blue: {
    dot: "bg-sky-500",
    icon: "text-sky-600 dark:text-sky-400",
    panel: "bg-sky-50 dark:bg-ink-900",
    glow: "bg-sky-400/40 dark:bg-sky-500/25",
  },
  purple: {
    dot: "bg-violet-500",
    icon: "text-violet-600 dark:text-violet-400",
    panel: "bg-violet-50 dark:bg-ink-900",
    glow: "bg-violet-400/40 dark:bg-violet-500/25",
  },
  green: {
    dot: "bg-emerald-500",
    icon: "text-emerald-600 dark:text-emerald-400",
    panel: "bg-emerald-50 dark:bg-ink-900",
    glow: "bg-emerald-400/40 dark:bg-emerald-500/25",
  },
  indigo: {
    dot: "bg-brand-500",
    icon: "text-brand-600 dark:text-brand-400",
    panel: "bg-brand-50 dark:bg-ink-900",
    glow: "bg-brand-400/40 dark:bg-brand-500/25",
  },
};

export const statusClasses: Record<string, string> = {
  Live: "text-emerald-700 bg-emerald-50 ring-emerald-600/20 dark:text-emerald-300 dark:bg-emerald-500/10 dark:ring-emerald-400/20",
  Pilot: "text-violet-700 bg-violet-50 ring-violet-600/20 dark:text-violet-300 dark:bg-violet-500/10 dark:ring-violet-400/20",
  "In Testing": "text-amber-700 bg-amber-50 ring-amber-600/20 dark:text-amber-300 dark:bg-amber-500/10 dark:ring-amber-400/20",
};
