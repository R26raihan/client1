import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import VideoGallery from "../components/VideoGallery";
import { waLink } from "../lib/site-config";
import { darkSectionTheme } from "../lib/theme";

export const metadata: Metadata = {
  title: "Galeri Video 3D Desain — Loka Architect",
  description: "Jelajahi video referensi visualisasi 3D rumah, villa, dan kawasan. Pilih kategori dan tonton animasi arsitektur langsung di galeri.",
};

export default function Video3DPage() {
  return <div className="bg-background text-foreground">
    <div className="mx-auto max-w-[1440px] px-6 pt-8 pb-14 sm:px-10 sm:pt-12 sm:pb-20">
      <nav aria-label="Breadcrumb" className="mb-10 flex flex-wrap items-center gap-3 text-base text-muted-foreground"><Link href="/" className="hover:text-primary">Beranda</Link><span aria-hidden="true">/</span><span aria-current="page">Video 3D Desain</span></nav>
      <div className="mb-12 grid gap-7 lg:grid-cols-[1.3fr_1fr] lg:items-end lg:gap-16"><div><p className="mb-5 text-lg font-semibold uppercase tracking-widest text-primary">Loka · Galeri Video 3D</p><h1 className="max-w-3xl font-serif text-4xl leading-[1.12] sm:text-6xl lg:text-7xl">Rancangan yang<br /><span className="text-muted-foreground">mulai bercerita.</span></h1></div><p className="max-w-xl text-xl leading-9 text-muted-foreground">Jelajahi tampilan bangunan, suasana ruang, dan hubungan dengan lingkungannya melalui pilihan video visualisasi arsitektur.</p></div>
      <VideoGallery />
    </div>
    <section className={`bg-accent px-6 py-16 text-foreground sm:px-10 sm:py-20 ${darkSectionTheme}`}><div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 lg:flex-row lg:items-center"><div><p className="mb-4 text-lg font-semibold text-primary">Wujudkan gagasan Anda</p><h2 className="max-w-2xl font-serif text-3xl leading-tight sm:text-4xl">Punya gambaran rumah impian?</h2><p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">Simpan referensi yang Anda sukai, lalu diskusikan kebutuhan ruang dan arah desain bersama tim kami.</p></div><div className="flex shrink-0 flex-col gap-4"><a href={waLink("Halo Loka Architect, saya melihat galeri video 3D dan ingin mendiskusikan desain proyek saya.")} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-primary px-6 py-4 text-lg font-semibold text-primary-foreground">Diskusikan desain Anda <ArrowUpRight size={21} aria-hidden="true" /></a><Link href="/vr" className="inline-flex min-h-12 items-center justify-center gap-3 text-lg underline underline-offset-4 hover:text-primary">Coba pengalaman 360° <ArrowUpRight size={21} aria-hidden="true" /></Link></div></div></section>
  </div>;
}
