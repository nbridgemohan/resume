// Tailwind needs full class names at build time, so each accent spells them out.
export type Accent = "blue" | "purple" | "green" | "indigo";

export const accents: Record<Accent, { card: string; icon: string; link: string; chip: string }> = {
  blue: {
    card: "from-white to-blue-50 border-blue-200/50 hover:border-blue-400/70 dark:hover:border-blue-400/50",
    icon: "bg-blue-100 dark:bg-blue-500/20 border-blue-300 dark:border-blue-400/30 text-blue-700 dark:text-blue-400",
    link: "text-blue-700 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300",
    chip: "bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300",
  },
  purple: {
    card: "from-white to-purple-50 border-purple-200/50 hover:border-purple-400/70 dark:hover:border-purple-400/50",
    icon: "bg-purple-100 dark:bg-purple-500/20 border-purple-300 dark:border-purple-400/30 text-purple-700 dark:text-purple-400",
    link: "text-purple-700 dark:text-purple-400 hover:text-purple-600 dark:hover:text-purple-300",
    chip: "bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300",
  },
  green: {
    card: "from-white to-green-50 border-green-200/50 hover:border-green-400/70 dark:hover:border-green-400/50",
    icon: "bg-green-100 dark:bg-green-500/20 border-green-300 dark:border-green-400/30 text-green-700 dark:text-green-400",
    link: "text-green-700 dark:text-green-400 hover:text-green-600 dark:hover:text-green-300",
    chip: "bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-300",
  },
  indigo: {
    card: "from-white to-indigo-50 border-indigo-200/50 hover:border-indigo-400/70 dark:hover:border-indigo-400/50",
    icon: "bg-indigo-100 dark:bg-indigo-500/20 border-indigo-300 dark:border-indigo-400/30 text-indigo-700 dark:text-indigo-400",
    link: "text-indigo-700 dark:text-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-300",
    chip: "bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300",
  },
};

export const statusClasses: Record<string, string> = {
  Live: "bg-green-100 dark:bg-green-500/20 text-green-700 dark:text-green-400 border-green-300 dark:border-green-400/30",
  Pilot: "bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-400 border-purple-300 dark:border-purple-400/30",
  "In Testing": "bg-amber-100 dark:bg-amber-500/20 text-amber-700 dark:text-amber-400 border-amber-300 dark:border-amber-400/30",
};
