import { ArrowUpRight, Box, CirclePlay, HardHat, House } from "lucide-react";
import { siteConfig, waLink } from "../lib/site-config";

const media = [
  { id: "virtual-reality", title: "Virtual Reality 360°", icon: Box, description: "Eksplorasi ruang dari berbagai sudut untuk memahami skala dan hubungan antarruang sebelum membangun." },
  { id: "video-3d", title: "Video 3D Desain", icon: CirclePlay, description: "Presentasi rancangan eksterior dan interior melalui perjalanan visual yang mudah dipahami." },
  { id: "progres-pembangunan", title: "Video Progres Pembangunan", icon: HardHat, description: "Dokumentasi tahapan pelaksanaan, dari pekerjaan awal hingga penyelesaian detail bangunan." },
  { id: "hasil-konstruksi", title: "Hasil Konstruksi", icon: House, description: "Dokumentasi bangunan yang telah selesai untuk melihat bagaimana rancangan diwujudkan." },
];

export default function StudioOverview() {
  return <>
    <section id="media-hasil" className="bg-background px-[6vw] py-20">
      <div className="mx-auto max-w-6xl"><span className="mb-[18px] block text-[15px] font-semibold tracking-[2.5px] text-primary">3D VR & HASIL</span><h2 data-motion="title" className="font-serif text-3xl sm:text-4xl">Dari visualisasi hingga realisasi.</h2><p className="mt-4 max-w-2xl text-lg leading-8 text-muted-foreground">Kenali pilihan presentasi desain dan dokumentasi proyek. Galeri video, tur 360°, dan hasil konstruksi akan ditampilkan setelah materi proyek tersedia.</p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{media.map(({ id, title, icon: Icon, description }) => <article data-motion="card" id={id} key={id} className="rounded-2xl border border-primary/25 bg-glass-card p-6 shadow-glass backdrop-blur-[28px] backdrop-saturate-[1.8] transition-[transform,background-color] duration-300 hover:-translate-y-1 hover:bg-glass-card-hover motion-reduce:transition-none motion-reduce:hover:translate-y-0"><Icon size={25} className="mb-6 text-primary" aria-hidden="true" /><h3 className="font-serif text-2xl">{title}</h3><p className="my-4 text-lg leading-7 text-muted-foreground">{description}</p><span className="text-base text-muted-foreground">Materi belum tersedia</span><a href={waLink(`Halo Loka Architect, saya ingin informasi mengenai ${title}.`)} target="_blank" rel="noopener noreferrer" className="mt-5 flex items-center gap-2 text-base text-primary">Tanyakan kepada tim <ArrowUpRight size={14} /></a></article>)}</div>
      </div>
    </section>
    <section id="tentang-kami" className="mx-auto grid max-w-6xl gap-8 px-6 py-20 md:grid-cols-2"><div><span className="mb-[18px] block text-[15px] font-semibold tracking-[2.5px] text-primary">TENTANG KAMI</span><h2 data-motion="title" className="font-serif text-3xl sm:text-4xl">Mengenal {siteConfig.name}</h2></div><div data-motion="text"><p className="text-lg leading-8 text-muted-foreground">{siteConfig.description}</p><p className="mt-4 text-lg leading-8 text-muted-foreground">Kami memulai setiap rancangan dengan memahami kebutuhan ruang, karakter penghuni, dan prioritas anggaran. Diskusi menjadi dasar untuk menyelaraskan arah desain dan pelaksanaan.</p><a href="#proses" className="mt-6 inline-flex items-center gap-3 text-lg text-primary">Lihat proses kerja kami <ArrowUpRight size={16} /></a></div></section>
  </>;
}
