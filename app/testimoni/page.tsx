import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Testimonials from "../components/Testimonials";
import { waLink } from "../lib/site-config";
import { darkSectionTheme } from "../lib/theme";

export const metadata: Metadata = {
  title: "Galeri Testimoni Klien — Loka Architect",
  description: "Jelajahi pratinjau galeri cerita klien dalam kartu berfoto. Cari inspirasi berdasarkan kota, buka cerita, dan simpan pilihan untuk sesi ini.",
};

export default function TestimonialsPage() {
  return <div className="bg-background text-foreground">
    <div className="mx-auto max-w-[1440px] px-6 pt-8 pb-16 sm:px-10 sm:pt-12 sm:pb-20">
      <nav aria-label="Breadcrumb" className="mb-10 flex gap-3 text-base text-muted-foreground"><Link href="/" className="hover:text-primary">Beranda</Link><span aria-hidden="true">/</span><span aria-current="page">Testimoni Klien</span></nav>
      <div className="mb-12 grid gap-7 lg:grid-cols-[1.3fr_1fr] lg:items-end lg:gap-16"><div><p className="mb-5 text-lg font-semibold uppercase tracking-widest text-primary">Loka · Galeri Cerita</p><h1 className="font-serif text-4xl leading-[1.12] sm:text-6xl lg:text-7xl">Cerita di balik<br /><span className="text-muted-foreground">ruang yang personal.</span></h1></div><p className="max-w-xl text-xl leading-9 text-muted-foreground">Lihat inspirasi hunian dan pratinjau pengalaman merancang dalam galeri berfoto. Pilih kartu untuk membaca cerita lebih dekat.</p></div>
      <Testimonials gallery />
    </div>
    <section className={`bg-accent px-6 py-16 text-foreground sm:px-10 sm:py-20 ${darkSectionTheme}`}><div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 lg:flex-row lg:items-center"><div><p className="mb-4 text-lg font-semibold text-primary">Giliran cerita Anda</p><h2 className="max-w-2xl font-serif text-3xl sm:text-4xl">Mulai dari rumah yang Anda bayangkan.</h2><p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">Ceritakan kebutuhan dan referensi Anda. Kita bahas kemungkinan ruangnya bersama.</p></div><a href={waLink()} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-14 shrink-0 items-center justify-center gap-3 rounded-xl bg-primary px-6 py-4 text-lg font-semibold text-primary-foreground">Mulai konsultasi <ArrowUpRight size={22} aria-hidden="true" /></a></div></section>
  </div>;
}
