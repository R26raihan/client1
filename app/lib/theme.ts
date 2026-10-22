export type ThemeColors = {
  primary: string;
  background: string;
  foreground: string;
  glass: string;
  accent: string;
  opacity: number;
};

export const themePresets: { name: string; colors: ThemeColors }[] = [
  { name: "Black White Gold", colors: { primary: "#c5a04a", background: "#ffffff", foreground: "#141414", accent: "#141414", glass: "#181818", opacity: 85 } },
  { name: "Warm Latte", colors: { primary: "#a66b2b", background: "#faf0df", foreground: "#39281e", accent: "#51372a", glass: "#674a35", opacity: 80 } },
  { name: "Midnight Gold", colors: { primary: "#e0bc68", background: "#10151e", foreground: "#f3f0e8", accent: "#222f43", glass: "#243248", opacity: 88 } },
];

export const defaultTheme = themePresets[0].colors;
export const themeStorageKey = "loka-theme-v3";

export function parseTheme(value: unknown): ThemeColors | null {
  if (!value || typeof value !== "object") return null;
  const candidate = value as Record<string, unknown>;
  const keys = ["primary", "background", "foreground", "glass"] as const;
  if (!keys.every(key => typeof candidate[key] === "string" && /^#[0-9a-f]{6}$/i.test(candidate[key] as string))) return null;
  if (typeof candidate.opacity !== "number" || !Number.isFinite(candidate.opacity) || candidate.opacity < 60 || candidate.opacity > 100) return null;
  if (candidate.accent !== undefined && (typeof candidate.accent !== "string" || !/^#[0-9a-f]{6}$/i.test(candidate.accent))) return null;
  return { accent: (candidate.accent ?? candidate.foreground) as string, primary: candidate.primary as string, background: candidate.background as string, foreground: candidate.foreground as string, glass: candidate.glass as string, opacity: candidate.opacity };
}

export function contrastText(hex: string) {
  const channels = [1, 3, 5].map(start => parseInt(hex.slice(start, start + 2), 16) / 255).map(value => value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4);
  const luminance = channels[0] * 0.2126 + channels[1] * 0.7152 + channels[2] * 0.0722;
  return luminance > 0.179 ? "#000000" : "#ffffff";
}

// Shared mapping keeps every page surface in sync with the chosen palette.
export function themeVariables(theme: ThemeColors): Record<string, string> {
  return {
    "--primary": theme.primary,
    "--primary-foreground": contrastText(theme.primary),
    "--background": theme.background,
    "--foreground": theme.foreground,
    "--surface": "color-mix(in srgb, var(--background) 96%, var(--foreground))",
    "--surface-muted": "color-mix(in srgb, var(--background) 90%, var(--foreground))",
    "--muted-foreground": "color-mix(in srgb, var(--foreground) 82%, var(--background))",
    "--border-subtle": "color-mix(in srgb, var(--foreground) 20%, var(--background))",
    "--accent": theme.accent,
    "--accent-foreground": contrastText(theme.accent),
    "--glass-color": theme.glass,
    "--glass-opacity": `${theme.opacity}%`,
    "--glass-foreground": contrastText(theme.glass),
    "color-scheme": contrastText(theme.background) === "#ffffff" ? "dark" : "light",
  };
}

// Invert content tokens inside dark sections without changing gold controls or the saved palette.
export const darkSectionTheme = "[--background:var(--accent)] [--foreground:var(--accent-foreground)] [--surface-muted:color-mix(in_srgb,var(--accent)_90%,var(--accent-foreground))] [--muted-foreground:color-mix(in_srgb,var(--accent-foreground)_85%,transparent)] [--border-subtle:color-mix(in_srgb,var(--primary)_30%,transparent)] [--glass-edge:color-mix(in_srgb,var(--primary)_35%,transparent)] [--glass-card:color-mix(in_srgb,var(--accent-foreground)_calc(var(--glass-opacity)*0.08),transparent)] [--glass-card-hover:color-mix(in_srgb,var(--accent-foreground)_calc(var(--glass-opacity)*0.14),transparent)]";
