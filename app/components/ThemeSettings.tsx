"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Palette, RotateCcw, X } from "lucide-react";
import { contrastText, defaultTheme, parseTheme, themePresets, themeStorageKey, type ThemeColors } from "../lib/theme";

function readTheme(fallback: ThemeColors = defaultTheme) {
  try { return parseTheme(JSON.parse(localStorage.getItem(themeStorageKey) ?? "null")) ?? fallback; }
  catch { return fallback; }
}

function applyTheme(theme: ThemeColors) {
  const root = document.documentElement;
  root.style.setProperty("--primary", theme.primary);
  root.style.setProperty("--primary-foreground", contrastText(theme.primary));
  root.style.setProperty("--background", theme.background);
  root.style.setProperty("--foreground", theme.foreground);
  root.style.setProperty("--glass-color", theme.glass);
  root.style.setProperty("--glass-opacity", `${theme.opacity}%`);
  root.style.setProperty("--glass-foreground", contrastText(theme.glass));
  root.style.setProperty("--surface-muted", "color-mix(in srgb, var(--glass-color) 35%, var(--background))");
  root.style.setProperty("--border-subtle", "color-mix(in srgb, var(--primary) 25%, var(--background))");
  root.style.setProperty("--muted-foreground", "color-mix(in srgb, var(--foreground) 72%, var(--background))");
  root.style.setProperty("--accent", "color-mix(in srgb, var(--primary) 75%, #000000)");
  root.style.setProperty("--accent-foreground", "#ffffff");
}

const fields = [
  { key: "primary", label: "Warna utama", description: "Tombol dan aksen" },
  { key: "background", label: "Latar halaman", description: "Background website" },
  { key: "foreground", label: "Warna teks", description: "Judul dan isi halaman" },
  { key: "glass", label: "Warna glass", description: "Panel jumlah desain dan header" },
] as const;

export default function ThemeSettings() {
  const [theme, setTheme] = useState<ThemeColors>(defaultTheme);
  const [notice, setNotice] = useState("");
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    applyTheme(readTheme());
    function sync(event: StorageEvent) {
      if (event.key === themeStorageKey || event.key === null) {
        const saved = readTheme();
        applyTheme(saved);
        setTheme(saved);
      }
    }
    window.addEventListener("storage", sync);
    return () => window.removeEventListener("storage", sync);
  }, []);

  function update(next: ThemeColors) {
    setTheme(next);
    applyTheme(next);
    try { localStorage.setItem(themeStorageKey, JSON.stringify(next)); setNotice("Perubahan tersimpan di browser ini."); }
    catch { setNotice("Tema diterapkan untuk sesi ini. Browser tidak mengizinkan penyimpanan."); }
  }

  return <>
    <button type="button" onClick={() => { setTheme(readTheme(theme)); setNotice(""); dialog.current?.showModal(); }} aria-label="Pengaturan warna tema" title="Pengaturan tema" className="fixed right-6 bottom-24 z-40 inline-flex size-12 items-center justify-center rounded-2xl border border-border-subtle bg-background/90 text-primary shadow-lg backdrop-blur-xl hover:bg-surface-muted"><Palette size={22} /></button>
    <dialog data-motion-panel ref={dialog} aria-labelledby="theme-settings-title" onClick={event => { if (event.target === event.currentTarget) dialog.current?.close(); }} className="fixed inset-0 m-auto max-h-[90svh] w-[min(440px,calc(100%-24px))] overflow-y-auto rounded-3xl border border-border-subtle bg-background p-0 text-foreground shadow-2xl backdrop:bg-black/35 backdrop:backdrop-blur-sm">
      <div className="flex items-center justify-between border-b border-border-subtle p-6"><div><h2 id="theme-settings-title" className="text-lg font-semibold">Warna & Tema</h2><p className="mt-1 text-xs text-muted-foreground">Atur nuansa website sesuai selera Anda.</p></div><button autoFocus type="button" onClick={() => dialog.current?.close()} aria-label="Tutup pengaturan tema" className="rounded-full p-2 hover:bg-surface-muted"><X size={20} /></button></div>
      <div className="space-y-6 p-6">
        <fieldset><legend className="mb-3 text-xs font-semibold">Pilihan palet</legend><div className="grid grid-cols-3 gap-2">{themePresets.map(preset => {
          const selected = Object.entries(preset.colors).every(([key, value]) => theme[key as keyof ThemeColors] === value);
          return <button key={preset.name} type="button" aria-pressed={selected} onClick={() => update({ ...preset.colors })} className={`relative rounded-xl border p-3 text-left text-xs ${selected ? "border-primary bg-surface-muted" : "border-border-subtle hover:bg-surface-muted"}`}><span className="mb-3 flex overflow-hidden rounded-md" aria-hidden="true">{[preset.colors.primary, preset.colors.glass, preset.colors.background].map(color => <span key={color} style={{ backgroundColor: color }} className="h-5 flex-1" />)}</span>{preset.name}{selected && <Check size={13} className="absolute right-2 bottom-3 text-primary" aria-hidden="true" />}</button>;
        })}</div></fieldset>
        <fieldset className="space-y-4"><legend className="mb-4 text-xs font-semibold">Sesuaikan warna</legend>{fields.map(field => <label key={field.key} htmlFor={`theme-${field.key}`} className="flex cursor-pointer items-center justify-between gap-4"><span><span className="block text-sm font-medium">{field.label}</span><span className="text-xs text-muted-foreground">{field.description}</span></span><span className="flex items-center gap-2"><span className="font-mono text-[10px] text-muted-foreground">{theme[field.key].toUpperCase()}</span><input id={`theme-${field.key}`} type="color" value={theme[field.key]} onChange={event => update({ ...theme, [field.key]: event.target.value })} className="h-10 w-12 cursor-pointer rounded-lg border border-border-subtle bg-transparent p-1" /></span></label>)}</fieldset>
        <label htmlFor="theme-opacity" className="block"><span className="mb-3 flex items-center justify-between text-sm font-medium"><span>Kepekatan glass</span><span className="text-primary">{theme.opacity}%</span></span><input id="theme-opacity" type="range" min={60} max={100} step={1} value={theme.opacity} onChange={event => update({ ...theme, opacity: Number(event.target.value) })} className="w-full accent-primary" /><span className="mt-1 flex justify-between text-[10px] text-muted-foreground"><span>Lebih transparan</span><span>Lebih solid</span></span></label>
        <div className="rounded-xl border border-border-subtle bg-surface-muted/50 p-3 text-xs leading-relaxed text-muted-foreground">Perubahan langsung terlihat dan tersimpan hanya di browser ini.</div>
        <button type="button" onClick={() => update({ ...defaultTheme })} className="flex w-full items-center justify-center gap-2 rounded-xl border border-border-subtle px-4 py-3 text-xs font-medium hover:bg-surface-muted"><RotateCcw size={15} />Kembalikan tema Latte</button>
        <p role="status" className="min-h-4 text-center text-xs text-muted-foreground">{notice}</p>
      </div>
    </dialog>
  </>;
}
