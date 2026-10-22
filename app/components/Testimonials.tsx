"use client";

import { darkSectionTheme } from "../lib/theme";
import { useState } from "react";
import Image from "next/image";
import { Bookmark, Heart, MessageCircle } from "lucide-react";

const testimonials = [
  { name: "Andi Pratama", city: "Jakarta", avatar: "/images/testimonial-avatar-andi.jpg", image: "/images/testimonial-home-andi.jpg", alt: "Ilustrasi suasana hunian dengan ruang yang terang", quote: "Kebutuhan keluarga kami benar-benar didengarkan. Hasil desainnya terasa lapang, terang, dan tetap sesuai anggaran yang kami siapkan." },
  { name: "Dewi Lestari", city: "Bandung", avatar: "/images/testimonial-avatar-dewi.jpg", image: "/images/testimonial-home-dewi.jpg", alt: "Ilustrasi interior hunian dengan penataan ruang terbuka", quote: "Proses diskusi dan revisinya nyaman. Kami terbantu sekali oleh visualisasi 3D sebelum memutuskan detail interior rumah." },
  { name: "Budi Santoso", city: "Surabaya", avatar: "/images/testimonial-avatar-budi.jpg", image: "/images/testimonial-home-budi.jpg", alt: "Ilustrasi arsitektur rumah modern dengan taman", quote: "Rincian biaya dijelaskan sejak awal dan perkembangan pekerjaan selalu dikabarkan. Membangun rumah jadi terasa lebih tenang." },
  {"name": "Pratinjau Rumah Tropis", "city": "Bali", "avatar": "/images/testimonial-avatar-4.jpg", "image": "/images/courtyard.jpg", "alt": "Foto ilustrasi untuk pratinjau rumah tropis", "quote": "Ulasan klien mengenai kenyamanan ruang, pencahayaan alami, dan hubungan rumah dengan taman akan ditampilkan di sini."},
  {"name": "Pratinjau Desain Villa", "city": "Lombok", "avatar": "/images/testimonial-avatar-5.jpg", "image": "/images/mediterranean-villa.jpg", "alt": "Foto ilustrasi untuk pratinjau desain villa", "quote": "Cerita klien tentang pengembangan konsep villa dan proses diskusi bersama arsitek akan ditampilkan di sini."},
  {"name": "Pratinjau Interior", "city": "Yogyakarta", "avatar": "/images/testimonial-avatar-6.jpg", "image": "/images/living-room.jpg", "alt": "Foto ilustrasi untuk pratinjau interior", "quote": "Pengalaman klien dalam memilih material, warna, dan penataan interior akan ditampilkan di sini."},
  {"name": "Pratinjau Rumah Klasik", "city": "Semarang", "avatar": "/images/testimonial-avatar-7.jpg", "image": "/images/classic.jpg", "alt": "Foto ilustrasi untuk pratinjau rumah klasik", "quote": "Cerita klien tentang penyempurnaan fasad, tata ruang, dan detail hunian klasik akan ditampilkan di sini."},
  {"name": "Pratinjau Rumah Modern", "city": "Tangerang", "avatar": "/images/testimonial-avatar-8.jpg", "image": "/images/american-house.jpg", "alt": "Foto ilustrasi untuk pratinjau rumah modern", "quote": "Ulasan klien mengenai komunikasi selama perancangan dan penyusunan gambar kerja akan ditampilkan di sini."},
  {"name": "Pratinjau Renovasi", "city": "Bogor", "avatar": "/images/testimonial-avatar-9.jpg", "image": "/images/industrial-space.jpg", "alt": "Foto ilustrasi untuk pratinjau renovasi", "quote": "Pengalaman klien dalam menata kembali ruang dan merencanakan renovasi akan ditampilkan di sini."},
];

export default function Testimonials() {
  const [liked, setLiked] = useState<string[]>([]);
  const [saved, setSaved] = useState<string[]>([]);

  return <section id="testimoni" aria-labelledby="testimonials-title" className="w-full bg-background px-6 py-20 sm:px-8 sm:py-24 lg:px-10">
    <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-12">
      <h2 data-motion="title" id="testimonials-title" className="font-serif text-[clamp(34px,3.8vw,64px)] leading-[1.12] font-normal tracking-tight">Testimoni Klien</h2>
      <div data-motion="text" className="max-w-[440px] lg:justify-self-end"><p className="text-lg leading-8 text-foreground">Cerita tentang proses merancang, berdiskusi, dan mewujudkan rumah bersama tim kami.</p><p className="mt-3 text-base leading-7 text-muted-foreground">Contoh testimoni untuk pratinjau. Nama dan ulasan belum terverifikasi; foto profil serta hunian merupakan ilustrasi.</p></div>
    </div>
    <div className="mt-12 grid grid-cols-1 items-stretch gap-5 min-[768px]:grid-cols-2 min-[1280px]:grid-cols-3 lg:gap-6">
      {testimonials.map(item => {
        const isLiked = liked.includes(item.name);
        const isSaved = saved.includes(item.name);
        return <div key={item.name} data-motion="card" className="h-full min-w-0"><article aria-label={`Contoh testimoni ${item.name}`} className={`group relative h-full min-w-0 bg-accent ${darkSectionTheme} overflow-hidden rounded-2xl border border-glass-edge text-foreground shadow-glass backdrop-blur-[28px] backdrop-saturate-[1.8] transition-[transform,border-color,background-color] duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] hover:z-10 hover:-translate-y-1.5 hover:border-primary/65 motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:hover:scale-100`}>
          <header className="flex items-center gap-3 px-4 py-4 sm:px-5">
            <div className="relative size-11 shrink-0 overflow-hidden rounded-full bg-surface-muted"><Image src={item.avatar} alt={`Foto profil ilustratif untuk ${item.name}`} fill sizes="44px" className="object-cover" /></div>
            <div className="min-w-0 break-words"><h3 className="text-lg font-semibold">{item.name}</h3><p className="mt-0.5 text-base text-muted-foreground">{item.city} · Ilustrasi profil</p></div>
          </header>
          <div className="relative aspect-square overflow-hidden bg-surface-muted"><Image src={item.image} alt={item.alt} fill sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw" className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100" /></div>
          <div className="px-4 pt-3 pb-5 sm:px-5">
            <div className="mb-3 flex items-center gap-1">
              <button type="button" aria-label={`${isLiked ? "Batal menyukai" : "Sukai"} contoh testimoni ${item.name}`} aria-pressed={isLiked} onClick={() => setLiked(current => current.includes(item.name) ? current.filter(name => name !== item.name) : [...current, item.name])} className={`-ml-2 inline-flex size-12 cursor-pointer items-center justify-center rounded-full transition-[color,background-color,transform] duration-200 hover:bg-primary/5 active:scale-90 motion-reduce:transition-none [&>svg]:transition-transform [&>svg]:duration-300 [&[aria-pressed=true]>svg]:scale-110 motion-reduce:[&>svg]:transition-none ${isLiked ? "text-primary" : "text-foreground"}`}><Heart size={23} fill={isLiked ? "currentColor" : "none"} strokeWidth={1.6} /></button>
              <a href="#kontak" aria-label={`Diskusikan inspirasi hunian pada testimoni ${item.name}`} title="Diskusikan hunian serupa" className="inline-flex size-12 items-center justify-center rounded-full transition-transform duration-200 hover:scale-110 hover:bg-primary/5 active:scale-95 motion-reduce:transition-none motion-reduce:hover:scale-100"><MessageCircle size={23} strokeWidth={1.6} /></a>
              <button type="button" aria-label={`${isSaved ? "Hapus simpanan" : "Simpan"} inspirasi ${item.name}`} aria-pressed={isSaved} onClick={() => setSaved(current => current.includes(item.name) ? current.filter(name => name !== item.name) : [...current, item.name])} className={`-mr-2 ml-auto inline-flex size-12 cursor-pointer items-center justify-center rounded-full transition-[color,background-color,transform] duration-200 hover:bg-primary/5 active:scale-90 motion-reduce:transition-none [&>svg]:transition-transform [&>svg]:duration-300 [&[aria-pressed=true]>svg]:scale-110 motion-reduce:[&>svg]:transition-none ${isSaved ? "text-primary" : "text-foreground"}`}><Bookmark size={23} fill={isSaved ? "currentColor" : "none"} strokeWidth={1.6} /></button>
            </div>
            <blockquote className="text-lg leading-8"><span className="mr-2 font-semibold">{item.name}</span>“{item.quote}”</blockquote>
            <p role="status" className="mt-3 min-h-4 text-[15px] text-muted-foreground">{isSaved ? "Inspirasi disimpan untuk sesi ini." : isLiked ? "Anda menyukai inspirasi ini." : "Contoh ulasan · foto ilustratif"}</p>
          </div>
        </article></div>;
      })}
    </div>
  </section>;
}
