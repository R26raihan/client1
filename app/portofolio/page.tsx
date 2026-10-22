import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import PortfolioGallery from "../components/PortfolioGallery";
import { waLink } from "../lib/site-config";
import { darkSectionTheme } from "../lib/theme";

export const metadata: Metadata = {
  title: "Galeri Studio & Portofolio Desain — Loka Architect",
  description: "Jelajahi galeri konsep arsitektur dan interior Loka Architect. Pilih gaya desain, kota, dan luas bangunan untuk menemukan inspirasi Anda.",
};

export default function PortfolioPage() {
  return <div className="bg-background text-foreground">
    <div className="mx-auto max-w-[1600px] px-6 pt-8 pb-16 sm:px-10 sm:pt-12 sm:pb-20">
      <nav aria-label="Breadcrumb" className="mb-10 flex gap-3 text-base text-muted-foreground"><Link href="/" className="hover:text-primary">Beranda</Link><span aria-hidden="true">/</span><span aria-current="page">Portofolio</span></nav>
      <div className="mb-12 grid gap-7 lg:grid-cols-[1.3fr_1fr] lg:items-end lg:gap-16"><div><p className="mb-5 text-lg font-semibold uppercase tracking-widest text-primary">Loka · Galeri Studio</p><h1 className="font-serif text-4xl leading-tight sm:text-6xl lg:text-7xl">Ragam karakter.<br /><span className="text-muted-foreground">Ruang untuk Anda.</span></h1></div><p className="max-w-xl text-xl leading-9 text-muted-foreground">Telusuri eksplorasi rumah, villa, dan interior. Temukan arah desain yang sesuai dengan karakter serta kebutuhan ruang Anda.</p></div>
      <Suspense fallback={<p role="status" className="py-12 text-lg text-muted-foreground">Menyiapkan galeri studio…</p>}><PortfolioGallery /></Suspense>
    </div>
    <section className={`bg-accent px-6 py-16 text-foreground sm:px-10 sm:py-20 ${darkSectionTheme}`}><div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 lg:flex-row lg:items-center"><div><p className="mb-4 text-lg font-semibold text-primary">Dari inspirasi, menjadi milik Anda.</p><h2 className="max-w-2xl font-serif text-3xl sm:text-4xl">Mari merancang ruang yang personal.</h2><p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">Bawa referensi yang Anda sukai. Kita mulai dari kebutuhan, kondisi lahan, dan cara Anda ingin tinggal.</p></div><a href={waLink("Halo Loka Architect, saya melihat galeri studio dan ingin mendiskusikan desain untuk proyek saya.")} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-14 shrink-0 items-center justify-center gap-3 rounded-xl bg-primary px-6 py-4 text-lg font-semibold text-primary-foreground">Diskusikan rancangan Anda <ArrowUpRight size={21} aria-hidden="true" /></a></div></section>
  </div>;
}
