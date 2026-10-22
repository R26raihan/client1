export type ThemeColors = {
  primary: string;
  background: string;
  foreground: string;
  glass: string;
  opacity: number;
};

export const themePresets: { name: string; colors: ThemeColors }[] = [
  { name: "White Gold", colors: { primary: "#b28a35", background: "#ffffff", foreground: "#141414", glass: "#f1ead8", opacity: 85 } },
  { name: "Champagne", colors: { primary: "#a47c28", background: "#fffefa", foreground: "#181818", glass: "#f5efdf", opacity: 85 } },
  { name: "Black Gold", colors: { primary: "#80621c", background: "#ffffff", foreground: "#080808", glass: "#e9e7df", opacity: 85 } },
];

export const defaultTheme = themePresets[0].colors;
export const themeStorageKey = "loka-theme-v2";

export function parseTheme(value: unknown): ThemeColors | null {
  if (!value || typeof value !== "object") return null;
  const candidate = value as Record<string, unknown>;
  const keys = ["primary", "background", "foreground", "glass"] as const;
  if (!keys.every(key => typeof candidate[key] === "string" && /^#[0-9a-f]{6}$/i.test(candidate[key] as string))) return null;
  if (typeof candidate.opacity !== "number" || !Number.isFinite(candidate.opacity) || candidate.opacity < 60 || candidate.opacity > 100) return null;
  return { primary: candidate.primary as string, background: candidate.background as string, foreground: candidate.foreground as string, glass: candidate.glass as string, opacity: candidate.opacity };
}

export function contrastText(hex: string) {
  const channels = [1, 3, 5].map(start => parseInt(hex.slice(start, start + 2), 16) / 255).map(value => value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4);
  const luminance = channels[0] * 0.2126 + channels[1] * 0.7152 + channels[2] * 0.0722;
  return luminance > 0.179 ? "#000000" : "#ffffff";
}
