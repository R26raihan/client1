"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";
import { ChevronDown, Menu, X, Phone, Search, ArrowUpRight } from "lucide-react";
import { siteConfig, waLink } from "../lib/site-config";

const menuGroups = [
  { label: "Portofolio", items: [
    { label: "Semua Portofolio", href: "/#portofolio" },
    ...["Modern", "Tropis", "Klasik", "Industrial", "Mediteran", "American", "Villa", "Interior"].map(category => ({ label: `Desain ${category}`, href: `/?kategori=${category}#portofolio` })),
  ] },
  { label: "3D VR & Hasil", items: [
    { label: "Virtual Reality 360°", href: "/#virtual-reality" },
    { label: "Video 3D Desain", href: "/#video-3d" },
    { label: "Video Progres Pembangunan", href: "/#progres-pembangunan" },
    { label: "Hasil Konstruksi", href: "/#hasil-konstruksi" },
  ] },
  { label: "Harga & Layanan", items: [
    { label: "Jasa Desain Rumah", href: "/#desain-rumah" },
    { label: "Jasa Desain Interior", href: "/#desain-interior" },
    { label: "Jasa Bangun & Kontraktor", href: "/#bangun-kontraktor" },
    { label: "Jasa Renovasi Rumah", href: "/#renovasi-rumah" },
    { label: "Visualisasi 3D & Virtual Tour", href: "/#visualisasi-3d" },
    { label: "RAB & Konsultasi Biaya", href: "/#rab-biaya" },
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

  return <header ref={header} className={styles.header} onKeyDown={event => {
    if (event.key === "Escape") {
      if (searchOpen) searchButton.current?.focus();
      else if (active) header.current?.querySelector<HTMLButtonElement>(`[data-group="${active}"]`)?.focus();
      closeNavigation();
    }
  }}>
    <div className={styles.contactBar}><span>STUDIO ARSITEKTUR & INTERIOR · INDONESIA</span><a href={waLink()} target="_blank" rel="noopener noreferrer"><Phone size={12} /> {siteConfig.phoneDisplay}</a></div>
    <div className={styles.bar}>
      <Link href="/#top" onClick={closeNavigation} className={styles.logo}>loka<span>ARCHITECT</span><i>®</i></Link>
      <nav id="header-navigation" aria-label="Navigasi utama" className={`${styles.navigation} ${open ? styles.open : ""}`}>
        <ul className={styles.menu}>{menuGroups.map((group, index) => <li key={group.label} className={styles.group} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setActive(current => current === group.label ? null : current); }}>
          <button type="button" data-group={group.label} className={styles.trigger} aria-expanded={active === group.label} aria-controls={`header-submenu-${index}`} onClick={() => { setActive(active === group.label ? null : group.label); setSearchOpen(false); }}>
            {group.label}<ChevronDown size={13} aria-hidden="true" />
          </button>
          <ul id={`header-submenu-${index}`} className={styles.dropdown} hidden={active !== group.label}>{group.items.map(item => <li key={item.label}><a href={item.href} onClick={closeNavigation} {...(item.href.startsWith("https:") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>{item.label}</a></li>)}</ul>
        </li>)}</ul>
      </nav>
      <div className={styles.actions}>
        <button ref={searchButton} type="button" aria-label={searchOpen ? "Tutup pencarian" : "Buka pencarian"} aria-expanded={searchOpen} aria-controls="header-search" className={styles.icon} onClick={() => { setSearchOpen(!searchOpen); setActive(null); setOpen(false); }}>{searchOpen ? <X size={20} /> : <Search size={20} />}</button>
        <button type="button" aria-label={open ? "Tutup menu" : "Buka menu"} aria-expanded={open} aria-controls="header-navigation" onClick={() => { setOpen(!open); setActive(null); setSearchOpen(false); }} className={styles.mobileToggle}>{open ? <X /> : <Menu />}</button>
      </div>
    </div>
    {searchOpen && <div id="header-search" className={styles.search}>
      <form action="/#portofolio" method="get" role="search" aria-label="Pencarian portofolio">
        <div className={styles.searchHeading}>
          <label htmlFor="site-search">Temukan inspirasi Anda</label>
          <button type="button" className={styles.searchClose} aria-label="Tutup pencarian" onClick={() => { setSearchOpen(false); searchButton.current?.focus(); }}><X size={18} /></button>
        </div>
        <div className={styles.searchField}>
          <Search size={18} aria-hidden="true" />
          <input id="site-search" type="search" name="q" autoFocus required maxLength={100} aria-describedby="search-hint" placeholder="Cari desain, proyek, atau kota" />
          <button type="submit" className={styles.searchSubmit}>Cari <ArrowUpRight size={16} aria-hidden="true" /></button>
        </div>
        <p id="search-hint" className={styles.searchHint}>Contoh: modern, interior, atau Jakarta.</p>
      </form>
    </div>}
  </header>;
}
