"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, Search } from "lucide-react";
import { filterPortfolio, portfolioCities, portfolioPageSize, portfolioStyles } from "../lib/portfolio-gallery";

export default function PortfolioGallery() {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());
  const { style, results, visible, page, pageCount } = filterPortfolio(params);

  function update(name: string, value: string) {
    const next = new URLSearchParams(searchParams.toString());
    if (value) next.set(name, value); else next.delete(name);
    next.delete("halaman");
    window.history.replaceState(null, "", `/portofolio${next.size ? `?${next}` : ""}`);
  }

  function pageLink(number: number) {
    const next = new URLSearchParams(searchParams.toString());
    if (number > 1) next.set("halaman", String(number)); else next.delete("halaman");
    return `/portofolio${next.size ? `?${next}` : ""}#galeri-studio`;
  }

  return <>
    <div role="group" aria-label="Gaya desain" className="flex gap-2 overflow-x-auto border-y border-border-subtle py-5">{["", ...portfolioStyles].map(item => <button key={item} type="button" aria-pressed={style === item} aria-controls="studio-project-grid" onClick={() => update("kategori", item)} className={`min-h-12 shrink-0 rounded-full border px-5 py-3 text-lg font-medium ${style === item ? "border-primary bg-primary text-primary-foreground" : "border-border-subtle hover:border-primary hover:bg-primary/5"}`}>{item || "Semua gaya"}</button>)}</div>

    <form role="search" aria-label="Filter galeri studio" onSubmit={event => event.preventDefault()} className="mt-6 grid items-end gap-5 rounded-2xl border border-glass-edge bg-glass-card p-5 shadow-glass backdrop-blur-xl sm:grid-cols-2 xl:grid-cols-[1.5fr_1fr_0.8fr_0.8fr_1fr]">
      <label className="block text-base font-medium">Nama proyek atau kota<span className="mt-2 flex min-h-14 items-center gap-3 rounded-xl border border-border-subtle bg-background px-4"><Search size={21} className="shrink-0 text-muted-foreground" aria-hidden="true" /><input type="search" value={params.get("q") ?? ""} onChange={event => update("q", event.target.value)} placeholder="Cari inspirasi Anda" className="min-w-0 flex-1 bg-transparent py-3 text-lg outline-none placeholder:text-muted-foreground" /></span></label>
      <label className="block text-base font-medium">Lokasi<select value={params.get("kota") ?? ""} onChange={event => update("kota", event.target.value)} className="mt-2 min-h-14 w-full rounded-xl border border-border-subtle bg-background px-3 text-lg"><option value="">Semua kota</option>{portfolioCities.map(city => <option key={city}>{city}</option>)}</select></label>
      <label className="block text-base font-medium">Luas min. (m²)<input type="number" min="0" value={params.get("min") ?? ""} onChange={event => update("min", event.target.value)} placeholder="0" className="mt-2 min-h-14 w-full rounded-xl border border-border-subtle bg-background px-4 text-lg outline-primary placeholder:text-muted-foreground" /></label>
      <label className="block text-base font-medium">Luas maks. (m²)<input type="number" min="0" value={params.get("max") ?? ""} onChange={event => update("max", event.target.value)} placeholder="Tanpa batas" className="mt-2 min-h-14 w-full rounded-xl border border-border-subtle bg-background px-4 text-lg outline-primary placeholder:text-muted-foreground" /></label>
      <label className="block text-base font-medium">Urutkan<select value={params.get("urut") ?? ""} onChange={event => update("urut", event.target.value)} className="mt-2 min-h-14 w-full rounded-xl border border-border-subtle bg-background px-3 text-lg"><option value="">Pilihan studio</option><option value="nama">Nama A–Z</option><option value="luas-naik">Luas terkecil</option><option value="luas-turun">Luas terbesar</option></select></label>
    </form>

    <div id="galeri-studio" className="mt-10 flex flex-wrap items-end justify-between gap-4 border-b border-border-subtle pb-5"><div><h2 className="font-serif text-3xl sm:text-4xl">{style ? `Desain ${style}` : "Semua rancangan"}</h2><p role="status" className="mt-3 text-lg text-muted-foreground">{results.length} konsep · Halaman {page} dari {pageCount}</p></div>{params.size > 0 && <button type="button" onClick={() => window.history.replaceState(null, "", "/portofolio")} className="inline-flex min-h-12 items-center text-lg font-medium text-primary underline underline-offset-4">Reset filter</button>}</div>
    <p className="mt-4 text-base leading-7 text-muted-foreground">Studi konsep dengan foto ilustratif. Luas dan lokasi ditampilkan sebagai referensi perancangan.</p>

    <div id="studio-project-grid" className="mt-7 grid gap-x-7 gap-y-12 md:grid-cols-2">{visible.map((project, index) => <article key={project.slug} className="group min-w-0">
      <Link href={`/portofolio/${project.slug}`} aria-label={`Lihat detail ${project.title}`} className="relative block aspect-[4/3] overflow-hidden bg-surface-muted focus-visible:-outline-offset-4 lg:aspect-[8/5]"><Image src={project.image} alt={`Inspirasi desain ${project.category.toLowerCase()} — ${project.title}`} fill sizes="(max-width: 767px) 95vw, 48vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.025] motion-reduce:transition-none" /><span className="absolute top-5 left-5 rounded-full border border-white/35 bg-black/40 px-4 py-2 text-base font-medium text-white backdrop-blur-xl">{project.category}</span><span className="absolute right-5 bottom-5 inline-flex min-h-12 items-center gap-3 rounded-full border border-white/40 bg-black/50 px-5 py-3 text-lg font-medium text-white backdrop-blur-xl group-hover:bg-primary group-hover:text-primary-foreground">Lihat detail <ArrowUpRight size={22} aria-hidden="true" /></span></Link>
      <div className="mt-5 flex items-start justify-between gap-5"><div><p className="mb-2 text-base text-muted-foreground">{project.city} · {project.area} m²</p><h3 className="font-serif text-2xl sm:text-3xl"><Link href={`/portofolio/${project.slug}`} className="hover:text-primary">{project.title}</Link></h3></div><span aria-hidden="true" className="pt-1 font-mono text-base text-muted-foreground">{String((page - 1) * portfolioPageSize + index + 1).padStart(2, "0")}</span></div>
    </article>)}</div>

    {results.length === 0 && <div className="py-20 text-center"><h3 className="font-serif text-3xl">Belum ada rancangan yang sesuai.</h3><p className="mt-4 text-lg text-muted-foreground">Coba gaya lain, perluas rentang luas, atau hapus kata pencarian.</p><button type="button" onClick={() => window.history.replaceState(null, "", "/portofolio")} className="mt-7 min-h-14 rounded-xl bg-primary px-6 py-3 text-lg font-semibold text-primary-foreground">Tampilkan semua rancangan</button></div>}
    {pageCount > 1 && <nav aria-label="Halaman galeri studio" className="mt-14 flex flex-wrap items-center justify-center gap-3 border-t border-border-subtle pt-8">{page > 1 && <Link href={pageLink(page - 1)} className="inline-flex min-h-12 items-center gap-2 px-3 text-lg hover:text-primary"><ArrowLeft size={20} aria-hidden="true" /><span className="hidden sm:inline">Sebelumnya</span></Link>}{Array.from({ length: pageCount }, (_, index) => index + 1).map(number => <Link key={number} href={pageLink(number)} aria-label={`Halaman ${number}`} aria-current={number === page ? "page" : undefined} className={`inline-flex size-12 items-center justify-center rounded-full border text-lg font-medium ${number === page ? "border-primary bg-primary text-primary-foreground" : "border-border-subtle hover:border-primary"}`}>{number}</Link>)}{page < pageCount && <Link href={pageLink(page + 1)} className="inline-flex min-h-12 items-center gap-2 px-3 text-lg hover:text-primary"><span className="hidden sm:inline">Berikutnya</span><ArrowRight size={20} aria-hidden="true" /></Link>}</nav>}
  </>;
}
