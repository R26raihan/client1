"use client";

import { darkSectionTheme } from "../lib/theme";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Bookmark, Heart, MessageCircle, Search, X } from "lucide-react";

const testimonials = [
  { name: "Andi Pratama", city: "Jakarta", avatar: "/images/testimonial-avatar-andi.webp", image: "/images/testimonial-home-andi.webp", alt: "Ilustrasi suasana hunian dengan ruang yang terang", quote: "Kebutuhan keluarga kami benar-benar didengarkan. Hasil desainnya terasa lapang, terang, dan tetap sesuai anggaran yang kami siapkan." },
  { name: "Dewi Lestari", city: "Bandung", avatar: "/images/testimonial-avatar-dewi.webp", image: "/images/testimonial-home-dewi.webp", alt: "Ilustrasi interior hunian dengan penataan ruang terbuka", quote: "Proses diskusi dan revisinya nyaman. Kami terbantu sekali oleh visualisasi 3D sebelum memutuskan detail interior rumah." },
  { name: "Budi Santoso", city: "Surabaya", avatar: "/images/testimonial-avatar-budi.webp", image: "/images/testimonial-home-budi.webp", alt: "Ilustrasi arsitektur rumah modern dengan taman", quote: "Rincian biaya dijelaskan sejak awal dan perkembangan pekerjaan selalu dikabarkan. Membangun rumah jadi terasa lebih tenang." },
  {"name": "Pratinjau Rumah Tropis", "city": "Bali", "avatar": "/images/testimonial-avatar-4.webp", "image": "/images/courtyard.webp", "alt": "Foto ilustrasi untuk pratinjau rumah tropis", "quote": "Ulasan klien mengenai kenyamanan ruang, pencahayaan alami, dan hubungan rumah dengan taman akan ditampilkan di sini."},
  {"name": "Pratinjau Desain Villa", "city": "Lombok", "avatar": "/images/testimonial-avatar-5.webp", "image": "/images/mediterranean-villa.webp", "alt": "Foto ilustrasi untuk pratinjau desain villa", "quote": "Cerita klien tentang pengembangan konsep villa dan proses diskusi bersama arsitek akan ditampilkan di sini."},
  {"name": "Pratinjau Interior", "city": "Yogyakarta", "avatar": "/images/testimonial-avatar-6.webp", "image": "/images/living-room.webp", "alt": "Foto ilustrasi untuk pratinjau interior", "quote": "Pengalaman klien dalam memilih material, warna, dan penataan interior akan ditampilkan di sini."},
  {"name": "Pratinjau Rumah Klasik", "city": "Semarang", "avatar": "/images/testimonial-avatar-7.webp", "image": "/images/classic.webp", "alt": "Foto ilustrasi untuk pratinjau rumah klasik", "quote": "Cerita klien tentang penyempurnaan fasad, tata ruang, dan detail hunian klasik akan ditampilkan di sini."},
  {"name": "Pratinjau Rumah Modern", "city": "Tangerang", "avatar": "/images/testimonial-avatar-8.webp", "image": "/images/american-house.webp", "alt": "Foto ilustrasi untuk pratinjau rumah modern", "quote": "Ulasan klien mengenai komunikasi selama perancangan dan penyusunan gambar kerja akan ditampilkan di sini."},
  {"name": "Pratinjau Renovasi", "city": "Bogor", "avatar": "/images/testimonial-avatar-9.webp", "image": "/images/industrial-space.webp", "alt": "Foto ilustrasi untuk pratinjau renovasi", "quote": "Pengalaman klien dalam menata kembali ruang dan merencanakan renovasi akan ditampilkan di sini."},
];

export default function Testimonials({ gallery = false }: { gallery?: boolean }) {
  const [liked, setLiked] = useState<string[]>([]);
  const [saved, setSaved] = useState<string[]>([]);
  const [city, setCity] = useState("");
  const [query, setQuery] = useState("");
  const [onlySaved, setOnlySaved] = useState(false);
  const [selected, setSelected] = useState<(typeof testimonials)[number] | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const visible = testimonials.filter(item => !gallery || ((!city || item.city === city) && (!onlySaved || saved.includes(item.name)) && `${item.name} ${item.city} ${item.quote}`.toLocaleLowerCase("id").includes(query.trim().toLocaleLowerCase("id"))));


  return <section id="testimoni" aria-label="Galeri contoh testimoni klien" className={gallery ? "w-full bg-background" : "w-full bg-background px-6 py-20 sm:px-8 sm:py-24 lg:px-10"}>
    {!gallery && <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-12">
      <h2 data-motion="title" id="testimonials-title" className="font-serif text-[clamp(34px,3.8vw,64px)] leading-[1.12] font-normal tracking-tight">Testimoni Klien</h2>
      <div data-motion="text" className="max-w-[440px] lg:justify-self-end"><p className="text-lg leading-8 text-foreground">Cerita tentang proses merancang, berdiskusi, dan mewujudkan rumah bersama tim kami.</p><p className="mt-3 text-base leading-7 text-muted-foreground">Contoh testimoni untuk pratinjau. Nama dan ulasan belum terverifikasi; foto profil serta hunian merupakan ilustrasi.</p></div>
      <Link href="/testimoni" className="inline-flex min-h-12 items-center gap-3 text-lg font-semibold text-primary underline-offset-4 hover:underline">Lihat galeri testimoni <ArrowUpRight size={22} aria-hidden="true" /></Link>
    </div>}
    {gallery && <>
      <div className="grid gap-4 border-y border-border-subtle py-5 md:grid-cols-[1fr_220px_auto]">
        <label className="flex min-h-14 items-center gap-3 rounded-xl border border-border-subtle bg-surface-muted/40 px-4"><Search size={22} className="shrink-0 text-muted-foreground" aria-hidden="true" /><span className="sr-only">Cari nama, kota, atau cerita</span><input type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Cari nama, kota, atau cerita" className="min-w-0 flex-1 bg-transparent py-3 text-lg outline-none placeholder:text-muted-foreground" /></label>
        <label className="sr-only" htmlFor="testimonial-city">Filter kota</label><select id="testimonial-city" value={city} onChange={event => setCity(event.target.value)} className="min-h-14 rounded-xl border border-border-subtle bg-background px-4 text-lg"><option value="">Semua kota</option>{[...new Set(testimonials.map(item => item.city))].sort().map(name => <option key={name}>{name}</option>)}</select>
        <button type="button" aria-pressed={onlySaved} onClick={() => setOnlySaved(!onlySaved)} className={`inline-flex min-h-14 items-center justify-center gap-3 rounded-xl border px-5 text-lg font-medium ${onlySaved ? "border-primary bg-primary text-primary-foreground" : "border-border-subtle hover:border-primary"}`}><Bookmark size={22} fill={onlySaved ? "currentColor" : "none"} aria-hidden="true" />Tersimpan ({saved.length})</button>
      </div>
      <div className="mt-5 flex flex-wrap items-center justify-between gap-4 text-base text-muted-foreground"><p>Pratinjau galeri · Profil, foto, dan cerita merupakan ilustrasi.</p><p role="status">{visible.length} cerita ditampilkan</p></div>
    </>}
    <div className="mt-12 grid grid-cols-1 items-stretch gap-5 min-[768px]:grid-cols-2 min-[1280px]:grid-cols-3 lg:gap-6">
      {visible.map(item => {
        const isLiked = liked.includes(item.name);
        const isSaved = saved.includes(item.name);
        return <div key={item.name} data-motion="card" className="h-full min-w-0"><article aria-label={`Contoh testimoni ${item.name}`} className={`group relative h-full min-w-0 bg-accent ${darkSectionTheme} overflow-hidden rounded-2xl border border-glass-edge text-foreground shadow-glass backdrop-blur-[28px] backdrop-saturate-[1.8] transition-[transform,border-color,background-color] duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] hover:z-10 hover:-translate-y-1.5 hover:border-primary/65 motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:hover:scale-100`}>
          <header className="flex items-center gap-3 px-4 py-4 sm:px-5">
            <div className="relative size-11 shrink-0 overflow-hidden rounded-full bg-surface-muted"><Image src={item.avatar} alt={`Foto profil ilustratif untuk ${item.name}`} fill sizes="44px" className="object-cover" /></div>
            <div className="min-w-0 break-words"><h3 className="text-lg font-semibold">{item.name}</h3><p className="mt-0.5 text-base text-muted-foreground">{item.city} · Ilustrasi profil</p></div>
          </header>
          <button type="button" onClick={() => { setSelected(item); dialog.current?.showModal(); }} aria-label={`Lihat cerita ${item.name}`} className="relative block aspect-square w-full cursor-pointer overflow-hidden bg-surface-muted text-left"><Image src={item.image} alt={item.alt} fill sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw" className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100" /><span className="absolute right-4 bottom-4 inline-flex min-h-12 items-center gap-2 rounded-full border border-white/35 bg-black/55 px-4 py-2 text-base font-medium text-white backdrop-blur-xl">Lihat cerita <ArrowUpRight size={19} aria-hidden="true" /></span></button>
          <div className="px-4 pt-3 pb-5 sm:px-5">
            <div className="mb-3 flex items-center gap-1">
              <button type="button" aria-label={`${isLiked ? "Batal menyukai" : "Sukai"} contoh testimoni ${item.name}`} aria-pressed={isLiked} onClick={() => setLiked(current => current.includes(item.name) ? current.filter(name => name !== item.name) : [...current, item.name])} className={`-ml-2 inline-flex size-12 cursor-pointer items-center justify-center rounded-full transition-[color,background-color,transform] duration-200 hover:bg-primary/5 active:scale-90 motion-reduce:transition-none [&>svg]:transition-transform [&>svg]:duration-300 [&[aria-pressed=true]>svg]:scale-110 motion-reduce:[&>svg]:transition-none ${isLiked ? "text-primary" : "text-foreground"}`}><Heart size={23} fill={isLiked ? "currentColor" : "none"} strokeWidth={1.6} /></button>
              <Link href="/#kontak" aria-label={`Diskusikan inspirasi hunian pada testimoni ${item.name}`} title="Diskusikan hunian serupa" className="inline-flex size-12 items-center justify-center rounded-full transition-transform duration-200 hover:scale-110 hover:bg-primary/5 active:scale-95 motion-reduce:transition-none motion-reduce:hover:scale-100"><MessageCircle size={23} strokeWidth={1.6} /></Link>
              <button type="button" aria-label={`${isSaved ? "Hapus simpanan" : "Simpan"} inspirasi ${item.name}`} aria-pressed={isSaved} onClick={() => setSaved(current => current.includes(item.name) ? current.filter(name => name !== item.name) : [...current, item.name])} className={`-mr-2 ml-auto inline-flex size-12 cursor-pointer items-center justify-center rounded-full transition-[color,background-color,transform] duration-200 hover:bg-primary/5 active:scale-90 motion-reduce:transition-none [&>svg]:transition-transform [&>svg]:duration-300 [&[aria-pressed=true]>svg]:scale-110 motion-reduce:[&>svg]:transition-none ${isSaved ? "text-primary" : "text-foreground"}`}><Bookmark size={23} fill={isSaved ? "currentColor" : "none"} strokeWidth={1.6} /></button>
            </div>
            <blockquote className="text-lg leading-8"><span className="mr-2 font-semibold">{item.name}</span>“{item.quote}”</blockquote>
            <p role="status" className="mt-3 min-h-4 text-[15px] text-muted-foreground">{isSaved ? "Inspirasi disimpan untuk sesi ini." : isLiked ? "Anda menyukai inspirasi ini." : "Contoh ulasan · foto ilustratif"}</p>
          </div>
        </article></div>;
      })}
    </div>
    {visible.length === 0 && <div className="py-16 text-center"><h2 className="font-serif text-3xl">Belum ada cerita yang sesuai.</h2><p className="mt-4 text-lg text-muted-foreground">Coba kota lain, kata pencarian lain, atau simpan inspirasi terlebih dahulu.</p><button type="button" onClick={() => { setCity(""); setQuery(""); setOnlySaved(false); }} className="mt-6 min-h-14 rounded-xl bg-primary px-6 py-3 text-lg font-semibold text-primary-foreground">Tampilkan semua cerita</button></div>}
    <dialog ref={dialog} onClose={() => setSelected(null)} onClick={event => { if (event.target === event.currentTarget) dialog.current?.close(); }} aria-labelledby="testimonial-detail-title" className="fixed inset-0 m-auto max-h-[90svh] w-[min(900px,94vw)] overflow-y-auto rounded-2xl border border-border-subtle bg-background p-0 text-foreground shadow-2xl backdrop:bg-black/80 backdrop:backdrop-blur-sm">
      {selected && <><div className="sticky top-0 z-10 flex items-center gap-4 border-b border-border-subtle bg-background/95 px-5 py-3 backdrop-blur-xl"><Image src={selected.avatar} alt={`Profil ilustratif ${selected.name}`} width={48} height={48} className="size-12 shrink-0 rounded-full object-cover" /><div className="min-w-0 flex-1"><h2 id="testimonial-detail-title" className="text-lg font-semibold">{selected.name}</h2><p className="text-base text-muted-foreground">{selected.city} · Ilustrasi profil</p></div><button type="button" onClick={() => dialog.current?.close()} aria-label="Tutup cerita" className="inline-flex size-12 shrink-0 items-center justify-center rounded-full border border-border-subtle hover:bg-surface-muted"><X size={24} /></button></div><div className="relative aspect-[4/3]"><Image src={selected.image} alt={selected.alt} fill sizes="(max-width: 959px) 94vw, 900px" className="object-cover" /></div><div className="p-6 sm:p-9"><blockquote className="font-serif text-2xl leading-relaxed sm:text-3xl">“{selected.quote}”</blockquote><p className="mt-6 text-base leading-7 text-muted-foreground">Contoh testimoni untuk pratinjau tampilan. Nama dan ulasan belum terverifikasi; foto profil dan hunian merupakan ilustrasi.</p><Link href="/#kontak" className="mt-6 inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-primary px-6 py-3 text-lg font-semibold text-primary-foreground">Diskusikan hunian Anda <ArrowUpRight size={22} aria-hidden="true" /></Link></div></>}
    </dialog>
  </section>;
}
