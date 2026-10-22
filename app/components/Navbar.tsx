"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X, Phone, Search, ArrowUpRight } from "lucide-react";
import { siteConfig, waLink } from "../lib/site-config";

const menuGroups = [
  { label: "Portofolio", items: [
    { label: "Semua Portofolio", href: "/portofolio" },
    ...["Modern", "Tropis", "Klasik", "Industrial", "Mediteran", "American", "Villa", "Interior"].map(category => ({ label: `Desain ${category}`, href: `/portofolio?kategori=${category}` })),
  ] },
  { label: "3D VR & Hasil", items: [
    { label: "Virtual Reality 360°", href: "/vr" },
    { label: "Video 3D Desain", href: "/video-3d" },
    { label: "Video Progres Pembangunan", href: "/progres-pembangunan" },
    { label: "Hasil Konstruksi", href: "/hasil-konstruksi" },
  ] },
  { label: "Harga & Layanan", items: [
    { label: "Jasa Desain Rumah", href: "/#desain-rumah" },
    { label: "Jasa Desain Interior", href: "/#desain-interior" },
    { label: "Jasa Bangun & Kontraktor", href: "/#bangun-kontraktor" },
    { label: "Jasa Renovasi Rumah", href: "/#renovasi-rumah" },
    { label: "Visualisasi 3D & Virtual Tour", href: "/#visualisasi-3d" },
    { label: "RAB & Konsultasi Biaya", href: "/#rab-biaya" },
    { label: "Apa yang Anda Dapatkan?", href: "/#hasil-desain" },
    { label: "Konsultasi Harga Jasa", href: "/#kontak" },
  ] },
  { label: "Tentang Kami", items: [
    { label: "Profil Perusahaan", href: "/#tentang-kami" },
    { label: "Pendekatan & Proses Kerja", href: "/#proses" },
    { label: "Testimoni Klien", href: "/#testimoni" },
  ] },
  { label: "Informasi", items: [
    { label: "Pertanyaan Umum (FAQ)", href: "/#faq" },
    { label: "Tahapan Perancangan", href: "/#proses" },
    { label: "Biaya, Pembayaran & Revisi", href: "/#faq" },
  ] },
  { label: "Kontak", items: [
    { label: "Hubungi Tim Konsultasi", href: "/#kontak" },
    { label: `WhatsApp · ${siteConfig.phoneDisplay}`, href: waLink() },
    { label: `Email · ${siteConfig.email}`, href: `mailto:${siteConfig.email}` },
    { label: "Alamat & Jam Operasional", href: "/#kontak" },
  ] },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const header = useRef<HTMLElement>(null);
  const searchButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function dismiss(event: PointerEvent) {
      if (!header.current?.contains(event.target as Node)) { setActive(null); setSearchOpen(false); setOpen(false); }
    }
    document.addEventListener("pointerdown", dismiss);
    return () => document.removeEventListener("pointerdown", dismiss);
  }, []);

  function closeNavigation() { setActive(null); setOpen(false); setSearchOpen(false); }

  return <header ref={header} className="sticky top-0 z-50 w-full border-b border-primary/35 bg-glass-header text-accent-foreground shadow-[0_4px_24px_#49301e08,inset_0_1px_0_#ffffff66] backdrop-blur-[32px] backdrop-saturate-[1.8]" onKeyDown={event => {
    if (event.key === "Escape") {
      if (searchOpen) searchButton.current?.focus();
      else if (active) header.current?.querySelector<HTMLButtonElement>(`[data-group="${active}"]`)?.focus();
      closeNavigation();
    }
  }}>
    <div className="flex min-h-10 items-center justify-between bg-accent px-[max(24px,calc((100%-1280px)/2))] py-2 text-[15px] leading-normal tracking-[.5px] text-accent-foreground max-[600px]:justify-center max-[600px]:text-[15px] [&>span]:max-[600px]:hidden [&>a]:inline-flex [&>a]:items-center [&>a]:gap-2 [&>a]:tracking-[.5px] [&>a]:whitespace-nowrap"><span>STUDIO ARSITEKTUR & INTERIOR · INDONESIA</span><a href={waLink()} target="_blank" rel="noopener noreferrer"><Phone size={12} /> {siteConfig.phoneDisplay}</a></div>
    <div className="mx-auto flex h-[88px] w-full max-w-[1328px] items-center justify-between gap-8 px-6 max-[1279px]:h-[76px] max-[1279px]:gap-5 max-[600px]:px-5">
      <Link href="/#top" onClick={closeNavigation} className="relative w-[92px] shrink-0 basis-[92px] font-[Georgia,serif] text-[46px] leading-[.9] tracking-[-3px] text-accent-foreground max-[600px]:text-[40px] [&>span]:mt-2.5 [&>span]:block [&>span]:font-sans [&>span]:text-[10px] [&>span]:leading-none [&>span]:tracking-[3px] [&>i]:absolute [&>i]:top-0 [&>i]:right-[5px] [&>i]:font-sans [&>i]:text-[11px] [&>i]:tracking-normal max-[600px]:[&>i]:right-[13px]">loka<span>ARCHITECT</span><i>®</i></Link>
      <nav id="header-navigation" aria-label="Navigasi utama" className={`ml-auto min-w-0 flex-[0_1_auto] min-[1280px]:block max-[1279px]:absolute max-[1279px]:top-full max-[1279px]:inset-x-0 max-[1279px]:m-0 max-[1279px]:max-h-[calc(100svh-120px)] max-[1279px]:overflow-y-auto max-[1279px]:border-b max-[1279px]:border-border-subtle max-[1279px]:bg-white max-[1279px]:text-[#141414] max-[1279px]:backdrop-blur-[28px] max-[1279px]:backdrop-saturate-[1.8] max-[1279px]:px-6 max-[1279px]:pt-2 max-[1279px]:pb-5 max-[1279px]:shadow-[0_16px_32px_#1b181214] ${open ? "block" : "hidden"}`}>
        <ul className="m-0 flex list-none items-stretch gap-5 p-0 max-[1279px]:block">{menuGroups.map((group, index) => <li key={group.label} className="group/nav relative m-0 p-0" onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setActive(current => current === group.label ? null : current); }}>
          <button type="button" data-group={group.label} className="flex h-[88px] cursor-pointer items-center justify-center gap-1.5 border-0 bg-transparent p-0 text-base leading-normal whitespace-nowrap text-accent-foreground max-[1279px]:text-[#141414] hover:text-primary aria-expanded:text-primary [&>svg]:shrink-0 [&[aria-expanded=true]>svg]:rotate-180 max-[1279px]:h-auto max-[1279px]:min-h-[52px] max-[1279px]:w-full max-[1279px]:justify-between max-[1279px]:border-b max-[1279px]:border-border-subtle max-[1279px]:py-4 max-[1279px]:text-lg" aria-expanded={active === group.label} aria-controls={`header-submenu-${index}`} onClick={() => { setActive(active === group.label ? null : group.label); setSearchOpen(false); }}>
            {group.label}<ChevronDown size={13} aria-hidden="true" />
          </button>
          <ul data-motion-panel id={`header-submenu-${index}`} className="absolute top-full -left-4 z-10 m-0 max-h-[calc(100svh-145px)] w-max min-w-[300px] max-w-[400px] list-none overflow-y-auto rounded-b-2xl border border-t-2 border-glass-edge border-t-primary bg-white p-2 shadow-[0_18px_40px_#49301e26,inset_0_1px_0_#ffffff80] backdrop-blur-[28px] backdrop-saturate-[1.8] group-nth-last-[-n+2]/nav:right-[-16px] group-nth-last-[-n+2]/nav:left-auto [&[hidden]]:hidden [&_a]:block [&_a]:rounded-lg [&_a]:px-3 [&_a]:min-h-12 [&_a]:py-3 [&_a]:text-base [&_a]:leading-relaxed [&_a]:wrap-anywhere [&_a]:text-[#141414] [&_a:hover]:bg-primary/10 [&_a:hover]:text-primary max-[1279px]:static max-[1279px]:my-2 max-[1279px]:max-h-none max-[1279px]:w-full max-[1279px]:min-w-0 max-[1279px]:max-w-none max-[1279px]:border-0 max-[1279px]:border-l-2 max-[1279px]:p-0 max-[1279px]:pl-3 max-[1279px]:shadow-none max-[1279px]:[&_a]:p-3" hidden={active !== group.label}>{group.items.map(item => <li key={item.label}><a href={item.href} onClick={closeNavigation} {...(item.href.startsWith("https:") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>{item.label}</a></li>)}</ul>
        </li>)}</ul>
      </nav>
      <div className="flex shrink-0 items-center gap-1.5">
        <button ref={searchButton} type="button" aria-label={searchOpen ? "Tutup pencarian" : "Buka pencarian"} aria-expanded={searchOpen} aria-controls="header-search" className="inline-flex size-12 cursor-pointer items-center justify-center rounded-xl border border-primary/25 bg-white/5 p-0 text-accent-foreground hover:bg-white/15 aria-expanded:border-primary aria-expanded:bg-white/15 aria-expanded:text-primary" onClick={() => { setSearchOpen(!searchOpen); setActive(null); setOpen(false); }}>{searchOpen ? <X size={20} /> : <Search size={20} />}</button>
        <button type="button" aria-label={open ? "Tutup menu" : "Buka menu"} aria-expanded={open} aria-controls="header-navigation" onClick={() => { setOpen(!open); setActive(null); setSearchOpen(false); }} className="hidden size-12 cursor-pointer items-center justify-center rounded-xl border border-primary/25 bg-white/5 p-0 text-accent-foreground hover:bg-white/15 max-[1279px]:inline-flex">{open ? <X /> : <Menu />}</button>
      </div>
    </div>
    {searchOpen && <div data-motion="menu" id="header-search" className="[--foreground:#141414] [--muted-foreground:#525252] [--surface-muted:#f4f4f4] [color-scheme:light] absolute top-[calc(100%+10px)] right-[max(24px,calc((100%-1280px)/2))] w-[min(600px,calc(100%-48px))] rounded-2xl border border-glass-edge bg-white p-[22px] text-[#141414] shadow-[0_20px_55px_#49301e2b,inset_0_1px_0_#ffffff80] backdrop-blur-[40px] backdrop-saturate-[1.8] max-[600px]:top-[calc(100%+8px)] max-[600px]:right-3 max-[600px]:w-[calc(100%-24px)] max-[600px]:p-4">
      <form action="/portofolio" method="get" role="search" aria-label="Pencarian portofolio">
        <div className="mb-4 flex items-center justify-between gap-4 [&>label]:text-lg [&>label]:leading-normal [&>label]:font-semibold">
          <label htmlFor="site-search">Temukan inspirasi Anda</label>
          <button type="button" className="inline-flex size-12 shrink-0 cursor-pointer items-center justify-center rounded-full border-0 bg-transparent p-0 text-muted-foreground hover:bg-surface-muted hover:text-foreground" aria-label="Tutup pencarian" onClick={() => { setSearchOpen(false); searchButton.current?.focus(); }}><X size={18} /></button>
        </div>
        <div className="flex min-h-14 items-center gap-2.5 rounded-xl border border-primary/30 bg-white/55 p-[5px] pl-3.5 focus-within:border-primary focus-within:shadow-[0_0_0_3px_#92764e18] [&>svg]:shrink-0 [&>svg]:text-muted-foreground [&>input]:min-w-0 [&>input]:flex-1 [&>input]:border-0 [&>input]:bg-transparent [&>input]:py-2.5 [&>input]:text-lg [&>input]:leading-normal [&>input]:text-foreground [&>input]:outline-none [&>input]:placeholder:text-muted-foreground/80 max-[600px]:flex-wrap max-[600px]:[&>input]:basis-[calc(100%-40px)] max-[600px]:[&>input]:text-lg">
          <Search size={18} aria-hidden="true" />
          <input id="site-search" type="search" name="q" autoFocus required maxLength={100} aria-describedby="search-hint" placeholder="Cari desain, proyek, atau kota" />
          <button type="submit" className="inline-flex min-h-11 shrink-0 cursor-pointer items-center justify-center gap-2 rounded-lg border-0 bg-primary px-4 py-2.5 text-base font-semibold whitespace-nowrap text-primary-foreground hover:brightness-90 max-[600px]:w-full">Cari <ArrowUpRight size={16} aria-hidden="true" /></button>
        </div>
        <p id="search-hint" className="mt-3 mb-0 text-[15px] leading-relaxed text-muted-foreground max-[600px]:text-base">Contoh: modern, interior, atau Jakarta.</p>
      </form>
    </div>}
  </header>;
}
