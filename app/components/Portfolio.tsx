"use client";

import { useRef, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import { ArrowUpRight, Search, X } from "lucide-react";
import { waLink } from "../lib/site-config";

const categories = ["Semua karya", "Modern", "Tropis", "Villa", "Interior", "Klasik", "Industrial", "Mediteran", "American"];
const projects = [
  { title: "The Tropical Residence", category: "Tropis", city: "Jakarta", image: "/images/residence.jpg", area: "320", description: "Hunian dengan bukaan lebar yang menghubungkan ruang keluarga, taman, dan kolam. Material alami memberi kehangatan pada komposisi modern yang bersih." },
  { title: "Villa Teras Teduh", category: "Villa", city: "Bali", image: "/images/villa.jpg", area: "280", description: "Konsep villa dengan ruang komunal yang lapang dan nuansa alami. Dirancang sebagai tempat beristirahat yang tetap dekat dengan alam." },
  { title: "Ruang untuk Pulang", category: "Interior", city: "Bandung", image: "/images/interior.jpg", area: "120", description: "Eksplorasi interior dengan warna netral, tekstur kayu, dan pencahayaan lembut. Setiap sudut mengutamakan kenyamanan kegiatan sehari-hari." },
  { title: "Casa Cahaya", category: "Modern", city: "Tangerang", image: "/images/modern.jpg", area: "240", description: "Garis geometris dan permainan bidang menghadirkan hunian modern yang terbuka. Penataan ruang mengutamakan privasi sekaligus koneksi antarruang." },
  { title: "Courtyard House", category: "Tropis", city: "Yogyakarta", image: "/images/villa.jpg", area: "210", description: "Studi rumah dengan ruang terbuka sebagai pusat aktivitas. Taman menjadi penghubung visual untuk menghadirkan suasana teduh dalam keseharian." },
  { title: "The Quiet Living", category: "Interior", city: "Surabaya", image: "/images/interior.jpg", area: "160", description: "Ruang keluarga yang tenang dengan komposisi furnitur sederhana dan material bertekstur. Konsep yang menyeimbangkan estetika dan kebutuhan penghuni." },
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

  return <section id="portofolio" className="portfolio-shell">
    <span className="section-kicker">PILIHAN KARYA</span>
    <div className="portfolio-heading"><h2>Beragam karakter.<br /><span className="text-muted-foreground">Satu perhatian pada detail.</span></h2><p>Temukan inspirasi hunian yang dekat dengan Anda. Jelajahi konsep arsitektur dan interior pilihan kami.</p></div>
    <div className="portfolio-toolbar">
      <div className="category-tabs" role="group" aria-label="Kategori portofolio">{categories.map(item => <button key={item} type="button" aria-pressed={category === item} aria-controls="project-grid" onClick={() => setCategory(item)}>{item}</button>)}</div>
      <label className="flex items-center gap-2 border-b border-border-subtle text-muted-foreground"><Search size={15} aria-hidden="true" /><span className="sr-only">Cari nama proyek atau kota</span><input type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Cari proyek atau kota" className="w-44 bg-transparent py-2 text-xs outline-none" /></label>
    </div>
    <div className="flex flex-wrap justify-between gap-2 text-[10px] text-muted-foreground"><p>Studi konsep · Foto ilustratif, bukan dokumentasi proyek klien.</p><p role="status">{visible.length} konsep ditampilkan</p></div>
    <div id="project-grid" className="project-grid">
      {visible.map(project => <article className="project-card" key={project.title}><button type="button" className="w-full text-left" aria-label={`Lihat detail ${project.title}`} onClick={() => { setSelected(project); dialog.current?.showModal(); }}><div className="project-image"><Image src={project.image} alt={`Inspirasi ${project.category.toLowerCase()} untuk ${project.title}`} fill sizes="(max-width: 600px) 90vw, (max-width: 900px) 45vw, 30vw" className="object-cover" /><span>{project.category.toUpperCase()}</span></div><div className="flex items-center justify-between gap-3"><h3>{project.title}</h3><ArrowUpRight size={18} className="mt-3 text-primary" /></div><div className="project-meta"><span>{project.city.toUpperCase()} · {project.area} M²</span><span>STUDI KONSEP</span></div></button></article>)}
    </div>
    {visible.length === 0 && <div className="py-16 text-center"><p className="text-muted-foreground">Tidak ada konsep yang sesuai dengan pencarian Anda.</p><button type="button" onClick={() => { setQuery(""); setCategory("Semua karya"); }} className="mt-5 text-sm text-primary underline">Tampilkan semua karya</button></div>}
    <dialog ref={dialog} className="project-dialog" aria-labelledby="project-title" onClick={event => { if (event.target === event.currentTarget) dialog.current?.close(); }}>
      {selected && <><div className="relative aspect-video"><Image src={selected.image} alt={`Inspirasi ${selected.title}`} fill sizes="920px" className="object-cover" /><button autoFocus type="button" aria-label="Tutup detail proyek" onClick={() => dialog.current?.close()} className="absolute top-4 right-4 rounded-full bg-background p-3"><X size={20} /></button></div><div className="p-7 sm:p-10"><span className="section-kicker">{selected.category} · {selected.city} · {selected.area} M²</span><h2 id="project-title" className="font-serif text-3xl">{selected.title}</h2><p className="my-5 text-sm leading-7 text-muted-foreground">{selected.description}</p><p className="mb-6 text-xs text-muted-foreground">Studi konsep dengan foto ilustratif. Luas dan lokasi merupakan contoh kebutuhan perancangan.</p><a href={waLink(`Halo Loka Architect, saya tertarik dengan konsep ${selected.title}. Saya ingin berkonsultasi untuk proyek saya.`)} target="_blank" rel="noopener noreferrer" className="studio-button">Diskusikan konsep serupa <ArrowUpRight size={16} /></a></div></>}
    </dialog>
  </section>;
}
