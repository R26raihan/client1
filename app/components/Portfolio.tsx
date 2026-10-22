"use client";

import { useRef, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import { ArrowUpRight, Search, X } from "lucide-react";
import { waLink } from "../lib/site-config";
import VirtualTour from "./VirtualTour";

const categories = ["Semua karya", "Modern", "Tropis", "Villa", "Interior", "Klasik", "Industrial", "Mediteran", "American"];
const projects = [
  { title: "The Tropical Residence", category: "Tropis", city: "Jakarta", image: "/images/residence.jpg", area: "320", description: "Hunian dengan bukaan lebar yang menghubungkan ruang keluarga, taman, dan kolam. Material alami memberi kehangatan pada komposisi modern yang bersih." },
  { title: "Villa Teras Teduh", category: "Villa", city: "Bali", image: "/images/villa.jpg", area: "280", description: "Konsep villa dengan ruang komunal yang lapang dan nuansa alami. Dirancang sebagai tempat beristirahat yang tetap dekat dengan alam." },
  { title: "Ruang untuk Pulang", category: "Interior", city: "Bandung", image: "/images/interior.jpg", area: "120", description: "Eksplorasi interior dengan warna netral, tekstur kayu, dan pencahayaan lembut. Setiap sudut mengutamakan kenyamanan kegiatan sehari-hari." },
  { title: "Casa Cahaya", category: "Modern", city: "Tangerang", image: "/images/modern.jpg", area: "240", description: "Garis geometris dan permainan bidang menghadirkan hunian modern yang terbuka. Penataan ruang mengutamakan privasi sekaligus koneksi antarruang." },
  { title: "Courtyard House", category: "Tropis", city: "Yogyakarta", image: "/images/courtyard.jpg", area: "210", description: "Studi rumah dengan ruang terbuka sebagai pusat aktivitas. Taman menjadi penghubung visual untuk menghadirkan suasana teduh dalam keseharian." },
  { title: "The Quiet Living", category: "Interior", city: "Surabaya", image: "/images/living-room.jpg", area: "160", description: "Ruang keluarga yang tenang dengan komposisi furnitur sederhana dan material bertekstur. Konsep yang menyeimbangkan estetika dan kebutuhan penghuni." },
  {"title": "Classic White Residence", "category": "Klasik", "city": "Semarang", "image": "/images/classic.jpg", "area": "360", "description": "Inspirasi hunian klasik dengan komposisi simetris, kolom pada teras, dan warna fasad yang lembut. Detail arsitektur memberi karakter yang bertahan lintas waktu."},
  {"title": "The Urban Loft", "category": "Industrial", "city": "Jakarta", "image": "/images/industrial-loft.jpg", "area": "180", "description": "Eksplorasi ruang loft terbuka dengan struktur yang terekspos dan mezzanine. Perpaduan material menonjolkan karakter industrial yang hangat."},
  {"title": "Loft Kayu & Baja", "category": "Industrial", "city": "Bandung", "image": "/images/industrial-space.jpg", "area": "200", "description": "Konsep interior dengan rangka baja hitam, tekstur kayu, dan jendela tinggi. Ruang komunal mengalir dalam satu area yang lapang."},
  {"title": "Casa Terakota", "category": "Mediteran", "city": "Bali", "image": "/images/mediterranean-house.jpg", "area": "290", "description": "Inspirasi rumah dengan lengkung teras, atap terakota, dan taman hijau. Suasana Mediteran dipadukan dengan kedekatan pada alam tropis."},
  {"title": "Villa Palma", "category": "Mediteran", "city": "Lombok", "image": "/images/mediterranean-villa.jpg", "area": "340", "description": "Warna putih, bukaan melengkung, dan area kolam menjadi pusat inspirasi villa ini. Ruang luar dirancang sebagai perpanjangan kegiatan di dalam rumah."},
  {"title": "American Garden House", "category": "American", "city": "Bogor", "image": "/images/american-house.jpg", "area": "260", "description": "Inspirasi rumah American dengan atap pelana, fasad berlapis, dan halaman depan yang hijau. Komposisi sederhana menghadirkan suasana rumah yang akrab."},
  {"title": "The Welcoming Porch", "category": "American", "city": "Tangerang", "image": "/images/american-porch.jpg", "area": "230", "description": "Teras depan yang teduh, cerobong batu, dan warna netral membentuk karakter hunian American. Ruang transisi memberi tempat untuk menikmati suasana luar."},
];

const roomGallery = [
  { image: "/images/living-room.jpg", label: "Inspirasi ruang keluarga" },
  { image: "/images/interior.jpg", label: "Detail interior & penataan ruang" },
  { image: "/images/industrial-loft.jpg", label: "Inspirasi ruang terbuka" },
  { image: "/images/industrial-space.jpg", label: "Material & pencahayaan ruang" },
];

function subscribeToLocation(callback: () => void) {
  window.addEventListener("popstate", callback);
  return () => window.removeEventListener("popstate", callback);
}

export default function Portfolio() {
  const search = useSyncExternalStore(subscribeToLocation, () => window.location.search, () => "");
  const params = new URLSearchParams(search);
  const [chosenCategory, setCategory] = useState<string | null>(null);
  const [typedQuery, setQuery] = useState<string | null>(null);
  const requestedCategory = params.get("kategori");
  const category = chosenCategory ?? (requestedCategory && categories.includes(requestedCategory) ? requestedCategory : "Semua karya");
  const query = typedQuery ?? params.get("q") ?? "";
  const [selected, setSelected] = useState<(typeof projects)[number] | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const visible = projects.filter(project => (category === "Semua karya" || project.category === category) && `${project.title} ${project.city} ${project.category}`.toLocaleLowerCase("id").includes(query.trim().toLocaleLowerCase("id")));

  return <section id="portofolio" className="w-full py-[90px] max-[600px]:py-[60px]">
    <div className="w-full px-6 sm:px-8 lg:px-10">
      <div className="grid gap-6 lg:grid-cols-2 lg:items-end lg:gap-12">
        <div>
          <span className="mb-5 flex items-center gap-3 text-[15px] font-semibold tracking-[2.5px] text-primary"><span aria-hidden="true" className="h-px w-8 bg-primary/60" />PILIHAN KARYA</span>
          <h2 data-motion="title" className="max-w-[760px] font-serif text-[clamp(34px,3.8vw,64px)] leading-[1.12] font-normal tracking-tight">Beragam karakter.<br /><span className="text-muted-foreground">Satu perhatian pada detail.</span></h2>
        </div>
        <p data-motion="text" className="max-w-[420px] text-lg leading-8 text-muted-foreground lg:justify-self-end lg:pb-1">Temukan inspirasi hunian yang dekat dengan Anda. Jelajahi konsep arsitektur dan interior pilihan kami.</p>
      </div>
      <div className="mt-10 grid min-w-0 gap-5 border-y border-border-subtle py-4 xl:grid-cols-[minmax(0,1fr)_260px] xl:items-center">
        <div className="flex min-w-0 items-center gap-1 overflow-x-auto pb-1 [&>button]:shrink-0 [&>button]:cursor-pointer [&>button]:rounded-full [&>button]:border [&>button]:border-transparent [&>button]:px-4 [&>button]:min-h-12 [&>button]:py-2.5 [&>button]:text-lg [&>button]:font-medium [&>button]:whitespace-nowrap [&>button]:transition-colors [&>button:hover]:border-primary/30 [&>button:hover]:bg-primary/5 [&>button[aria-pressed=true]]:border-primary [&>button[aria-pressed=true]]:bg-primary [&>button[aria-pressed=true]]:text-primary-foreground motion-reduce:[&>button]:transition-none" role="group" aria-label="Kategori portofolio">
          {categories.map(item => <button key={item} type="button" aria-pressed={category === item} aria-controls="project-grid" onClick={() => setCategory(item)}>{item}</button>)}
        </div>
        <label className="flex w-full items-center gap-3 rounded-xl border border-border-subtle bg-surface/50 px-4 text-muted-foreground focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/10 sm:max-w-[360px] xl:max-w-none"><Search size={17} aria-hidden="true" className="shrink-0" /><span className="sr-only">Cari nama proyek atau kota</span><input type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Cari proyek atau kota" className="min-w-0 flex-1 bg-transparent py-3 text-lg text-foreground outline-none placeholder:text-muted-foreground sm:text-base" /></label>
      </div>
      <div className="mt-4 flex flex-wrap items-center justify-between gap-x-6 gap-y-2 text-[15px] leading-relaxed text-muted-foreground sm:text-[15px]"><p>Studi konsep · Foto ilustratif, bukan dokumentasi proyek klien.</p><p role="status" className="shrink-0 font-medium">{visible.length} konsep ditampilkan</p></div>
    </div>
    <div id="project-grid" className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3">
      {visible.map(project => <article data-motion="image" className="group/project relative min-w-0" key={project.title}>
        <button type="button" className="relative block aspect-[4/3] w-full cursor-pointer overflow-hidden bg-surface-muted text-left sm:aspect-[8/5] focus-visible:z-10 focus-visible:-outline-offset-4" aria-label={`Lihat detail ${project.title}`} onClick={() => { setSelected(project); dialog.current?.showModal(); }}>
          <Image src={project.image} alt={`Inspirasi ${project.category.toLowerCase()} untuk ${project.title}`} fill sizes="(max-width: 639px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover/project:scale-[1.035] group-focus-within/project:scale-[1.035] motion-reduce:transition-none" />
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/80 via-black/5 to-transparent" />
          <span className="absolute top-5 left-5 rounded-full border border-white/45 bg-glass-header px-3.5 py-1.5 text-[15px] font-semibold tracking-[1.5px] text-accent-foreground backdrop-blur-[18px] backdrop-saturate-[1.8] sm:top-7 sm:left-8">{project.category.toUpperCase()}</span>
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6 text-white sm:p-8 lg:p-10">
            <div><p className="mb-2 text-[15px] font-medium tracking-[2px] text-white/95 sm:text-base">{project.city.toUpperCase()} · {project.area} M²</p><h3 className="font-serif text-[clamp(24px,2.5vw,42px)] leading-tight font-normal">{project.title}</h3><p className="mt-3 text-[15px] tracking-[2px] text-white/90 sm:text-[15px]">{project.title === projects[0].title ? "STUDI KONSEP · TUR 360°" : "STUDI KONSEP"}</p></div>
            <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-white/45 bg-white/10 backdrop-blur-[18px] backdrop-saturate-[1.8] transition-colors group-hover/project:bg-white/25 motion-reduce:transition-none sm:size-13" aria-hidden="true"><ArrowUpRight size={22} /></span>
          </div>
        </button>
      </article>)}
    </div>
    {visible.length === 0 && <div className="py-16 text-center"><p className="text-muted-foreground">Tidak ada konsep yang sesuai dengan pencarian Anda.</p><button type="button" onClick={() => { setQuery(""); setCategory("Semua karya"); }} className="mt-5 text-lg text-primary underline">Tampilkan semua karya</button></div>}
    <dialog data-motion-panel ref={dialog} onClose={() => setSelected(null)} className="fixed inset-0 m-auto max-h-[90svh] w-[min(920px,92vw)] overflow-y-auto border-0 bg-background p-0 text-foreground backdrop:bg-black/80 backdrop:backdrop-blur-[5px]" aria-labelledby="project-title" onClick={event => { if (event.target === event.currentTarget) dialog.current?.close(); }}>
      {selected && <>
        <div className="sticky top-0 z-20 flex items-center justify-between gap-4 border-b border-border-subtle bg-background/95 px-5 py-3 backdrop-blur-xl">
          <p className="text-lg font-semibold">Detail konsep</p>
          <button autoFocus type="button" aria-label="Tutup detail proyek" onClick={() => dialog.current?.close()} className="inline-flex size-12 items-center justify-center rounded-full border border-border-subtle hover:bg-surface-muted"><X size={22} /></button>
        </div>
        <div className="relative aspect-video"><Image src={selected.image} alt={`Inspirasi ${selected.title}`} fill sizes="(max-width: 1000px) 92vw, 920px" className="object-cover" /></div>
        <div className="space-y-10 p-6 sm:p-10">
          <div>
            <span className="mb-4 block text-base font-semibold tracking-wide text-primary">{selected.category} · {selected.city} · {selected.area} M²</span>
            <h2 id="project-title" className="font-serif text-3xl sm:text-4xl">{selected.title}</h2>
            <p className="mt-5 text-lg leading-8 text-muted-foreground">{selected.description}</p>
          </div>
          {selected.title === projects[0].title && <VirtualTour />}
          <section aria-labelledby="project-video-title">
            <div className="mb-5 flex flex-wrap items-end justify-between gap-3"><h3 id="project-video-title" className="font-serif text-2xl sm:text-3xl">Video inspirasi desain</h3><a href="https://www.youtube.com/watch?v=SHUkhFUK2jI" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center gap-2 text-base font-medium text-primary underline-offset-4 hover:underline">Buka di YouTube <ArrowUpRight size={18} aria-hidden="true" /></a></div>
            <div className="aspect-video overflow-hidden rounded-2xl bg-black">
              <iframe key={selected.title} src="https://www.youtube-nocookie.com/embed/SHUkhFUK2jI?rel=0" title="Video inspirasi visualisasi arsitektur — Lumion 12" className="h-full w-full border-0" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" />
            </div>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">Video referensi visualisasi Lumion, sebagai inspirasi penyajian desain.</p>
          </section>
          <section aria-labelledby="project-rooms-title">
            <h3 id="project-rooms-title" className="font-serif text-2xl sm:text-3xl">Jelajahi suasana ruang</h3>
            <p className="mt-3 text-lg leading-relaxed text-muted-foreground">Pilihan foto inspirasi interior, material, dan pencahayaan.</p>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {roomGallery.map(room => <figure key={room.image} className="group/room overflow-hidden rounded-2xl border border-border-subtle bg-glass-card">
                <div className="relative aspect-[4/3] overflow-hidden"><Image src={room.image} alt={room.label} fill sizes="(max-width: 639px) 85vw, 420px" className="object-cover transition-transform duration-500 group-hover/room:scale-105 motion-reduce:transition-none" /></div>
                <figcaption className="p-4 text-lg font-medium">{room.label}</figcaption>
              </figure>)}
            </div>
          </section>
          <div className="border-t border-border-subtle pt-7">
            <p className="mb-6 text-base leading-relaxed text-muted-foreground">Studi konsep dengan foto ilustratif, bukan dokumentasi satu proyek klien. Luas dan lokasi merupakan contoh kebutuhan perancangan.</p>
            <a href={waLink(`Halo Loka Architect, saya tertarik dengan konsep ${selected.title}. Saya ingin berkonsultasi untuk proyek saya.`)} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-14 items-center justify-center gap-5 rounded-xl bg-primary px-6 py-4 text-lg font-medium text-primary-foreground hover:brightness-90">Diskusikan konsep serupa <ArrowUpRight size={20} /></a>
          </div>
        </div>
      </>}

    </dialog>
  </section>;
}
