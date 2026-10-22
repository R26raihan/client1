"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Palette, RotateCcw, X } from "lucide-react";
import { defaultTheme, themeVariables, parseTheme, themePresets, themeStorageKey, type ThemeColors } from "../lib/theme";

function readTheme(fallback: ThemeColors = defaultTheme) {
  try { return parseTheme(JSON.parse(localStorage.getItem(themeStorageKey) ?? "null")) ?? fallback; }
  catch { return fallback; }
}

function applyTheme(theme: ThemeColors) {
  for (const [key, value] of Object.entries(themeVariables(theme))) {
    document.documentElement.style.setProperty(key, value);
  }
}

const fields = [
  { key: "primary", label: "Warna utama", description: "Tombol dan aksen" },
  { key: "background", label: "Latar halaman", description: "Background website" },
  { key: "foreground", label: "Warna teks", description: "Judul dan isi halaman" },
  { key: "accent", label: "Warna section & header", description: "Header, section pembeda, dan footer" },
  { key: "glass", label: "Warna glass", description: "Panel dan kartu transparan" },
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
    <button type="button" onClick={() => { setTheme(readTheme(theme)); setNotice(""); dialog.current?.showModal(); }} aria-label="Pengaturan warna tema" title="Pengaturan tema" className="fixed right-6 bottom-24 z-40 inline-flex size-12 items-center justify-center rounded-2xl border border-border-subtle bg-background/90 text-primary shadow-lg backdrop-blur-[28px] backdrop-saturate-[1.8] hover:bg-surface-muted"><Palette size={22} /></button>
    <dialog data-motion-panel ref={dialog} aria-labelledby="theme-settings-title" onClick={event => { if (event.target === event.currentTarget) dialog.current?.close(); }} className="fixed inset-0 m-auto max-h-[90svh] w-[min(560px,calc(100%-24px))] overflow-y-auto rounded-3xl border border-border-subtle bg-background p-0 text-foreground shadow-2xl backdrop:bg-black/35 backdrop:backdrop-blur-sm">
      <div className="flex items-center justify-between border-b border-border-subtle p-6"><div><h2 id="theme-settings-title" className="text-lg font-semibold">Warna & Tema</h2><p className="mt-1 text-base text-muted-foreground">Atur nuansa website sesuai selera Anda.</p></div><button autoFocus type="button" onClick={() => dialog.current?.close()} aria-label="Tutup pengaturan tema" className="inline-flex size-12 items-center justify-center rounded-full p-2 hover:bg-surface-muted"><X size={20} /></button></div>
      <div className="space-y-6 p-6">
        <fieldset><legend className="mb-3 text-base font-semibold">Pilihan palet</legend><div className="grid grid-cols-1 gap-3 sm:grid-cols-3">{themePresets.map(preset => {
          const selected = Object.entries(preset.colors).every(([key, value]) => theme[key as keyof ThemeColors] === value);
          return <button key={preset.name} type="button" aria-pressed={selected} onClick={() => update({ ...preset.colors })} className={`relative overflow-hidden rounded-xl border-2 text-left text-base ${selected ? "border-primary ring-2 ring-primary/20" : "border-border-subtle hover:border-primary/60"}`}>
            <span aria-hidden="true" className="block p-3" style={{ backgroundColor: preset.colors.background, color: preset.colors.foreground }}>
              <span className="mb-3 block h-3 w-2/3 rounded" style={{ backgroundColor: preset.colors.foreground }} />
              <span className="flex h-14 items-end rounded-md p-2" style={{ backgroundColor: preset.colors.accent }}><span className="block h-3 w-1/2 rounded" style={{ backgroundColor: preset.colors.primary }} /></span>
            </span>
            <span className="flex min-h-16 items-center justify-between gap-2 px-3 py-2 font-medium">{preset.name}{selected && <Check size={18} className="shrink-0 text-primary" aria-hidden="true" />}</span>
          </button>;
        })}</div></fieldset>
        <fieldset className="space-y-4"><legend className="mb-4 text-base font-semibold">Sesuaikan warna</legend>{fields.map(field => <label key={field.key} htmlFor={`theme-${field.key}`} className="flex cursor-pointer flex-wrap items-center justify-between gap-3"><span><span className="block text-lg font-medium">{field.label}</span><span className="text-base text-muted-foreground">{field.description}</span></span><span className="flex items-center gap-2"><span className="font-mono text-[15px] text-muted-foreground">{theme[field.key].toUpperCase()}</span><input id={`theme-${field.key}`} type="color" value={theme[field.key]} onChange={event => update({ ...theme, [field.key]: event.target.value })} className="h-12 w-14 cursor-pointer rounded-lg border border-border-subtle bg-transparent p-1" /></span></label>)}</fieldset>
        <label htmlFor="theme-opacity" className="block"><span className="mb-3 flex items-center justify-between text-lg font-medium"><span>Kepekatan glass</span><span className="text-primary">{theme.opacity}%</span></span><input id="theme-opacity" type="range" min={60} max={100} step={1} value={theme.opacity} onChange={event => update({ ...theme, opacity: Number(event.target.value) })} className="h-12 w-full accent-primary" /><span className="mt-1 flex justify-between text-[15px] text-muted-foreground"><span>Lebih transparan</span><span>Lebih solid</span></span></label>
        <div className="rounded-xl border border-border-subtle bg-surface-muted/50 p-3 text-base leading-relaxed text-muted-foreground">Perubahan langsung terlihat dan tersimpan hanya di browser ini.</div>
        <button type="button" onClick={() => update({ ...defaultTheme })} className="flex w-full items-center justify-center gap-2 rounded-xl border border-border-subtle px-4 py-3 text-base font-medium hover:bg-surface-muted"><RotateCcw size={15} />Kembalikan tema {themePresets[0].name}</button>
        <button type="button" onClick={() => dialog.current?.close()} className="min-h-12 w-full rounded-xl bg-primary px-4 py-3 text-lg font-semibold text-primary-foreground">Lihat halaman dengan tema ini</button>
        <p role="status" className="min-h-4 text-center text-base text-muted-foreground">{notice}</p>
      </div>
    </dialog>
  </>;
}
